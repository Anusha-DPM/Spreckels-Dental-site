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

// Firebase Storage utility functions (direct upload to Firebase Storage)
export const uploadImageToFirebase = async (file, folder = 'images') => {
  console.log('🚀 Starting direct Firebase Storage upload...');
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

  // Check if storage is initialized
  if (!storage) {
    console.error('❌ Firebase Storage is not initialized');
    throw new Error('Firebase Storage is not initialized. Please check your Firebase configuration.');
  }

  try {
    // Step 1: Compress image if it's large (optional optimization)
    const processedFile = await compressImage(file);
    
    // Step 2: Generate unique filename with timestamp to avoid conflicts
    const timestamp = Date.now();
    const fileName = `${processedFile.name.replace(/\s+/g, '_')}`;
    const filePath = `${folder}/${timestamp}-${fileName}`;
    
    // Step 3: Create a reference inside the specified folder
    const storageRef = ref(storage, filePath);
    console.log('📤 Uploading to:', filePath);
    
    // Step 4: Upload the file
    console.log('📤 Uploading file to Firebase Storage...');
    await uploadBytes(storageRef, processedFile);
    console.log('✅ File uploaded successfully');
    
    // Step 5: Get the download URL
    console.log('🔗 Getting download URL...');
    const imageUrl = await getDownloadURL(storageRef);
    console.log('✅ Download URL obtained:', imageUrl);
    
    return {
      url: imageUrl,
      path: filePath,
      fileName: fileName,
      originalSize: file.size,
      compressedSize: processedFile.size
    };
    
  } catch (error) {
    console.error('❌ Firebase Storage upload error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    
    // Provide more specific error messages
    if (error.code === 'storage/unauthorized') {
      throw new Error('Upload failed: Permission denied. Please check Firebase Storage security rules.');
    } else if (error.code === 'storage/canceled') {
      throw new Error('Upload failed: Upload was canceled.');
    } else if (error.code === 'storage/unknown') {
      throw new Error('Upload failed: Unknown error occurred. Please check your Firebase Storage configuration.');
    } else if (error.message.includes('Firebase Storage is not initialized')) {
      throw new Error('Upload failed: Firebase Storage is not initialized. Please check your Firebase configuration.');
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