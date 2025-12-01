// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import imageCompression from 'browser-image-compression';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Validate Firebase configuration
const validateFirebaseConfig = () => {
  const requiredFields = [
    'apiKey',
    'authDomain', 
    'projectId',
    'storageBucket',
    'messagingSenderId',
    'appId'
  ];

  const missingFields = requiredFields.filter(field => !firebaseConfig[field]);
  
  if (missingFields.length > 0) {
    console.warn('Firebase configuration not found. Running without Firebase.');
    return false;
  }
  return true;
};

// Initialize Firebase
let app;
try {
  const isValid = validateFirebaseConfig();
  if (isValid) {
    app = initializeApp(firebaseConfig);
    console.log('✅ Firebase initialized successfully');
  } else {
    app = null;
    console.warn('Running without Firebase. Blog features will be disabled.');
  }
} catch (error) {
  console.error('Firebase initialization failed:', error);
  app = null;
}

// Log Firebase configuration for debugging
if (typeof window !== 'undefined') {
  const configStatus = {
    apiKey: !!firebaseConfig.apiKey,
    authDomain: !!firebaseConfig.authDomain,
    projectId: !!firebaseConfig.projectId,
    storageBucket: !!firebaseConfig.storageBucket,
    messagingSenderId: !!firebaseConfig.messagingSenderId,
    appId: !!firebaseConfig.appId
  };
  
  console.log('🔍 Firebase Config Check (Client-side):', configStatus);
  
  // Check if any required config is missing
  const missingConfig = Object.entries(configStatus)
    .filter(([key, value]) => !value)
    .map(([key]) => key);
  
  if (missingConfig.length > 0) {
    console.error('❌ Missing Firebase configuration:', missingConfig);
    console.error('💡 Make sure your .env.local file has all NEXT_PUBLIC_FIREBASE_* variables');
  } else {
    console.log('✅ All Firebase environment variables are present');
  }
  
  // Log initialization status
  if (app) {
    console.log('✅ Firebase app initialized successfully');
  } else {
    console.warn('⚠️ Firebase app is not initialized');
  }
}

// Initialize Firebase services
export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;
export const storage = app ? getStorage(app) : null;

// Compress image before upload
const compressImage = async (file) => {
  console.log('🗜️ Compressing image...');
  console.log('📊 Original file size:', file.size, 'bytes');
  console.log('📁 File type:', file.type);
  
  // Don't compress SVG files (they're already vector-based and usually small)
  if (file.type === 'image/svg+xml') {
    console.log('🔄 SVG file detected - skipping compression');
    return file;
  }
  
  // Don't compress if file is already small (less than 500KB)
  if (file.size < 500 * 1024) {
    console.log('🔄 File is already small - skipping compression');
    return file;
  }
  
  const options = {
    maxSizeMB: 0.5, // Reduced to 500KB for faster uploads
    maxWidthOrHeight: 1200, // Reduced for faster processing
    useWebWorker: true,
    fileType: file.type,
    // Slightly lower quality for faster uploads
    quality: 0.7,
    // Maintain aspect ratio
    alwaysKeepResolution: true
  };
  
  try {
    const compressedFile = await imageCompression(file, options);
    console.log('✅ Image compressed successfully');
    console.log('📊 Compressed file size:', compressedFile.size, 'bytes');
    console.log('📈 Compression ratio:', ((file.size - compressedFile.size) / file.size * 100).toFixed(1) + '%');
    
    return compressedFile;
  } catch (error) {
    console.warn('⚠️ Image compression failed, using original file:', error);
    return file;
  }
};

// Firebase Storage utility functions (upload first, then save URL to Firestore)
export const uploadImageToFirebase = async (file, folder = 'images', retryCount = 0) => {
  const maxRetries = 2;
  
  console.log(`🚀 Starting server-side image upload process... (attempt ${retryCount + 1}/${maxRetries + 1})`);
  console.log('📁 File details:', {
    name: file.name,
    size: file.size,
    type: file.type
  });

  if (!file) {
    console.error('❌ No file provided');
    throw new Error('No file provided for upload');
  }

  try {
    // Step 1: Compress image if it's large
    const processedFile = await compressImage(file);
    
    console.log('📤 Uploading via server-side API...');
    
    // Step 2: Create FormData for server-side upload
    const formData = new FormData();
    formData.append('file', processedFile);
    formData.append('folder', folder);
    
    // Step 3: Upload via server-side API (bypasses CORS)
    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { error: `Upload failed with status ${response.status}` };
      }
      
      const errorMessage = errorData.error || errorData.details || `Upload failed with status ${response.status}`;
      console.error('❌ Upload API error response:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      
      // Create error with additional details
      const error = new Error(errorMessage);
      error.errorData = errorData; // Attach error data for better error handling
      throw error;
    }
    
    const result = await response.json();
    
    console.log('✅ File uploaded successfully via server-side API:', result);
    
    return {
      url: result.url,
      path: result.path,
      fileName: result.fileName,
      originalSize: file.size,
      compressedSize: processedFile.size
    };
    
  } catch (error) {
    console.error('❌ Server-side upload error:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      errorData: error.errorData
    });
    
    // Retry logic for timeout and network errors
    if (retryCount < maxRetries && (
      error.message.includes('timeout') || 
      error.message.includes('network') ||
      error.message.includes('fetch')
    )) {
      console.log(`🔄 Retrying server-side upload... (${retryCount + 1}/${maxRetries})`);
      // Wait 2 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 2000));
      return uploadImageToFirebase(file, folder, retryCount + 1);
    }
    
    // Provide more specific error messages
    if (error.message.includes('Firebase Storage is not configured') || error.message.includes('Firebase Storage is not initialized')) {
      // Try to extract missing environment variables from error details
      const errorData = error.errorData || {};
      let errorMsg = 'Upload failed: Firebase Storage is not configured.';
      if (errorData?.missingEnvVars && errorData.missingEnvVars.length > 0) {
        errorMsg += ` Missing environment variables: ${errorData.missingEnvVars.join(', ')}.`;
        errorMsg += ' Please create a .env.local file with these variables.';
      } else {
        errorMsg += ' Please check your environment variables (NEXT_PUBLIC_FIREBASE_*).';
      }
      throw new Error(errorMsg);
    } else if (error.message.includes('Invalid file type')) {
      throw new Error('Upload failed: Invalid file type. Only images are allowed.');
    } else if (error.message.includes('File too large')) {
      throw new Error('Upload failed: File too large. Maximum size is 10MB.');
    } else if (error.message.includes('timeout')) {
      throw new Error('Upload failed: Request timed out. Please try with a smaller image or check your internet connection.');
    } else if (error.message.includes('network') || error.message.includes('fetch')) {
      throw new Error('Upload failed: Network error. Please check your internet connection and try again.');
    } else if (error.message.includes('permission') || error.message.includes('unauthorized') || error.message.includes('Permission denied')) {
      throw new Error('Upload failed: Permission denied. Please check Firebase Storage security rules.');
    } else if (error.message.includes('storage/')) {
      throw new Error(`Upload failed: Firebase Storage error - ${error.message}`);
    } else {
      throw new Error(`Upload failed: ${error.message}`);
    }
  }
};

export const deleteImageFromFirebase = async (imagePath) => {
  if (!storage || !imagePath) {
    console.warn('Firebase Storage not available or no image path provided');
    return;
  }

  try {
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);
    console.log('✅ Image deleted from Firebase Storage:', imagePath);
  } catch (error) {
    console.error('Error deleting image from Firebase:', error);
    // Don't throw error for deletion failures
  }
};

export default app; 