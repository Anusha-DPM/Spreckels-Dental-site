// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
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
    console.warn('⚠️ Firebase configuration missing fields:', missingFields);
    console.warn('💡 Make sure your .env.local file has all NEXT_PUBLIC_FIREBASE_* variables');
    return false;
  }
  return true;
};

// Initialize Firebase
let app;
try {
  const isValid = validateFirebaseConfig();
  if (isValid) {
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
      console.log('✅ Firebase initialized successfully');
    } else {
      app = getApp();
      console.log('✅ Using existing Firebase app');
    }
  } else {
    app = null;
    console.warn('⚠️ Firebase not initialized - missing configuration');
  }
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  app = null;
}

// Initialize Firebase services
export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;
export const storage = app ? getStorage(app) : null;

// Log storage initialization status
if (typeof window !== 'undefined') {
  if (storage) {
    console.log('✅ Firebase Storage initialized successfully');
    console.log('📦 Storage bucket:', firebaseConfig.storageBucket);
  } else {
    console.error('❌ Firebase Storage NOT initialized');
    console.error('💡 Check your .env.local file has NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET');
    console.error('💡 Current storageBucket config:', firebaseConfig.storageBucket);
  }
}

// Compress image before upload
const compressImage = async (file) => {
  console.log('🗜️ Compressing image...');
  console.log('📊 Original file size:', file.size, 'bytes');
  console.log('📁 File type:', file.type);
  
  // Don't compress SVG files
  if (file.type === 'image/svg+xml') {
    console.log('🔄 SVG file detected - skipping compression');
    return file;
  }
  
  // Don't compress if file is already small (less than 1MB) - faster uploads
  if (file.size < 1024 * 1024) {
    console.log('🔄 File is already small - skipping compression');
    return file;
  }
  
  const options = {
    maxSizeMB: 1.0, // Increased from 0.5MB to 1MB for better quality
    maxWidthOrHeight: 1920, // Increased for better quality
    useWebWorker: true,
    fileType: file.type,
    quality: 0.8, // Slightly higher quality
    alwaysKeepResolution: false // Allow resizing for faster compression
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

// Upload image to Firebase Storage
export const uploadImageToFirebase = async (file, folder = 'images') => {
  const startTime = Date.now();
  console.log('🚀 Starting image upload to Firebase Storage...');
  console.log('📁 File details:', {
    name: file.name,
    size: file.size,
    type: file.type,
    folder: folder,
    sizeKB: (file.size / 1024).toFixed(2) + ' KB'
  });

  if (!file) {
    console.error('❌ No file provided');
    throw new Error('No file provided for upload');
  }

  // Check if storage is initialized
  if (!storage) {
    console.error('❌ Firebase Storage not initialized');
    console.error('💡 Checking Firebase configuration...');
    console.error('💡 Storage bucket:', firebaseConfig.storageBucket);
    console.error('💡 Project ID:', firebaseConfig.projectId);
    throw new Error('Firebase Storage is not initialized. Please check your Firebase configuration and ensure all environment variables are set in .env.local');
  }

  try {
    // Step 1: Compress image if it's large (skip for small files)
    console.log('🗜️ Checking if compression is needed...');
    const compressionStart = Date.now();
    const processedFile = await compressImage(file);
    const compressionTime = Date.now() - compressionStart;
    console.log(`✅ Image processing completed in ${compressionTime}ms`);
    
    // Step 2: Create storage reference
    const timestamp = Date.now();
    const fileName = `${folder}/${timestamp}-${processedFile.name}`;
    const storageRef = ref(storage, fileName);
    
    console.log('📤 Uploading to Firebase Storage:', fileName);
    console.log('📊 File size to upload:', (processedFile.size / 1024).toFixed(2) + ' KB');
    
    // Step 3: Upload file with timeout handling
    const uploadStart = Date.now();
    console.log('⏱️ Starting upload at:', new Date().toISOString());
    
    const uploadResult = await uploadBytes(storageRef, processedFile);
    const uploadTime = Date.now() - uploadStart;
    console.log(`✅ File uploaded successfully in ${uploadTime}ms`);
    
    // Step 4: Get download URL
    const urlStart = Date.now();
    console.log('🔗 Getting download URL...');
    const downloadURL = await getDownloadURL(uploadResult.ref);
    const urlTime = Date.now() - urlStart;
    console.log(`✅ Download URL obtained in ${urlTime}ms`);
    
    const totalTime = Date.now() - startTime;
    console.log(`✅ Total upload time: ${totalTime}ms (${(totalTime / 1000).toFixed(2)}s)`);
    console.log('✅ Upload URL:', downloadURL.substring(0, 100) + '...');
    
    return downloadURL;
  } catch (error) {
    const totalTime = Date.now() - startTime;
    console.error('❌ Error uploading image to Firebase:', error);
    console.error('❌ Error details:', {
      message: error?.message,
      code: error?.code,
      name: error?.name,
      stack: error?.stack?.substring(0, 200)
    });
    console.error(`❌ Upload failed after ${totalTime}ms`);
    
    // Provide more helpful error messages
    if (error?.code === 'storage/unauthorized') {
      throw new Error('Firebase Storage: Unauthorized. Please check your Storage security rules allow uploads.');
    } else if (error?.code === 'storage/canceled') {
      throw new Error('Upload was canceled. Please try again.');
    } else if (error?.code === 'storage/unknown') {
      throw new Error('Unknown Firebase Storage error. Please check your Firebase configuration and Storage rules.');
    } else if (error?.message?.includes('network') || error?.message?.includes('fetch')) {
      throw new Error('Network error during upload. Please check your internet connection and try again.');
    }
    
    throw error;
  }
};

// Delete image from Firebase Storage
export const deleteImageFromFirebase = async (imagePath) => {
  if (!storage) {
    throw new Error('Firebase Storage is not initialized');
  }

  try {
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);
    console.log('✅ Image deleted from Firebase Storage:', imagePath);
  } catch (error) {
    console.error('Error deleting image from Firebase:', error);
    throw error;
  }
};
