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
    console.error('💡 IMPORTANT: Restart your Next.js server after updating .env.local!');
    console.error('💡 Run: npm run dev (after stopping the current server)');
  } else {
    console.log('✅ All Firebase environment variables are present (client-side)');
  }
  
  // Log initialization status
  if (app) {
    console.log('✅ Firebase app initialized successfully');
  } else {
    console.warn('⚠️ Firebase app is not initialized');
    console.warn('💡 This might mean environment variables are not loaded. Check server logs.');
    console.warn('💡 Visit /api/firebase-diagnostic to see server-side status');
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

// Firebase Storage utility functions (using server-side API route for reliability)
export const uploadImageToFirebase = async (file, folder = 'images') => {
  console.log('🚀 Starting image upload via server-side API...');
  console.log('📁 File details:', {
    name: file.name,
    size: file.size,
    type: file.type,
    folder: folder
  });

  if (!file) {
    console.error('❌ No file provided');
    throw new Error('No file provided for upload');
  }

  try {
    // Step 1: Compress image if it's large (optional optimization)
    console.log('🗜️ Compressing image...');
    const processedFile = await compressImage(file);
    console.log('✅ Image compression completed');
    
    // Step 2: Create FormData for server-side upload
    console.log('📦 Creating FormData...');
    const formData = new FormData();
    formData.append('file', processedFile);
    formData.append('folder', folder);
    console.log('✅ FormData created');
    
    // Step 3: Upload via server-side API (more reliable, avoids CORS issues)
    console.log('📤 Uploading via server-side API route...');
    const uploadStartTime = Date.now();
    
    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData
    });
    
    const uploadDuration = Date.now() - uploadStartTime;
    console.log(`📡 API response received in ${uploadDuration}ms, status: ${response.status}`);
    
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
    
    if (!result.url) {
      throw new Error('Upload succeeded but no URL returned from server');
    }
    
    return {
      url: result.url,
      path: result.path,
      fileName: result.fileName,
      originalSize: file.size,
      compressedSize: processedFile.size
    };
    
  } catch (error) {
    console.error('❌ Firebase Storage upload error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      stack: error.stack,
      errorData: error.errorData
    });
    
    // Check if Firebase Storage is not available (bucket not found, not configured, etc.)
    const isFirebaseStorageError = 
      error.message.includes('Firebase Storage bucket not found') ||
      error.message.includes('Firebase Storage is not configured') ||
      error.message.includes('Firebase Storage is not initialized') ||
      error.message.includes('storage/') ||
      error.message.includes('Permission denied') ||
      error.message.includes('permission') ||
      error.message.includes('unauthorized');
    
    // Fallback to free local file storage if Firebase Storage fails
    if (isFirebaseStorageError) {
      console.log('⚠️ Firebase Storage not available, falling back to free local file storage...');
      try {
        // Import the simple upload function dynamically
        const { uploadImageSimple } = await import('./uploadImageSimple');
        const result = await uploadImageSimple(file, folder);
        console.log('✅ Image uploaded successfully using free local storage:', result);
        return {
          url: result.url,
          path: result.path,
          fileName: result.fileName,
          originalSize: file.size
        };
      } catch (fallbackError) {
        console.error('❌ Fallback upload also failed:', fallbackError);
        throw new Error(`Upload failed: Firebase Storage is not available, and local storage also failed. ${fallbackError.message}`);
      }
    }
    
    // For other errors, provide specific error messages
    if (error.message.includes('Invalid file type')) {
      throw new Error('Upload failed: Invalid file type. Only images are allowed.');
    } else if (error.message.includes('File too large')) {
      throw new Error('Upload failed: File too large. Maximum size is 10MB.');
    } else if (error.message.includes('timeout') || error.message.includes('network') || error.message.includes('fetch')) {
      throw new Error('Upload failed: Network error. Please check your internet connection and try again.');
    } else {
      throw new Error(`Upload failed: ${error.message || 'Unknown error'}`);
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