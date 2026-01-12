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
  
  // Don't compress if file is already small (less than 500KB)
  if (file.size < 500 * 1024) {
    console.log('🔄 File is already small - skipping compression');
    return file;
  }
  
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1200,
    useWebWorker: true,
    fileType: file.type,
    quality: 0.7,
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

// Upload image to Firebase Storage
export const uploadImageToFirebase = async (file, folder = 'images') => {
  console.log('🚀 Starting image upload to Firebase Storage...');
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

  if (!storage) {
    console.error('❌ Firebase Storage not initialized');
    throw new Error('Firebase Storage is not initialized. Please check your Firebase configuration.');
  }

  try {
    // Step 1: Compress image if it's large
    console.log('🗜️ Compressing image...');
    const processedFile = await compressImage(file);
    console.log('✅ Image compression completed');
    
    // Step 2: Create storage reference
    const timestamp = Date.now();
    const fileName = `${folder}/${timestamp}-${processedFile.name}`;
    const storageRef = ref(storage, fileName);
    
    console.log('📤 Uploading to Firebase Storage:', fileName);
    
    // Step 3: Upload file
    const uploadResult = await uploadBytes(storageRef, processedFile);
    console.log('✅ File uploaded successfully');
    
    // Step 4: Get download URL
    const downloadURL = await getDownloadURL(uploadResult.ref);
    console.log('✅ Download URL obtained:', downloadURL);
    
    return downloadURL;
  } catch (error) {
    console.error('❌ Error uploading image to Firebase:', error);
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
