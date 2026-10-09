// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
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
    maxSizeMB: 0.8, // Reduced for faster compression
    maxWidthOrHeight: 1600, // Reduced for faster compression
    useWebWorker: true,
    fileType: file.type,
    quality: 0.75, // Slightly lower for faster compression
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

/**
 * Upload image to Firebase Storage with progress callback
 * @param {File} file - The image file to upload
 * @param {string} folder - The folder path in Storage (default: 'images')
 * @param {((progress: number) => void) | null} onProgress - Optional progress callback function
 * @returns {Promise<string>} The download URL of the uploaded image
 */
export const uploadImageToFirebase = async (file, folder = 'images', onProgress = null) => {
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
    console.error('💡 Possible causes:');
    console.error('   1. Firebase Storage is not enabled in Firebase Console');
    console.error('   2. Project is not on Blaze plan (required for Storage)');
    console.error('   3. Storage bucket name is incorrect in .env.local');
    console.error('   4. Environment variables not loaded (restart server)');
    throw new Error('Firebase Storage is not initialized. Please check your Firebase configuration and ensure all environment variables are set in .env.local. Also verify that Storage is enabled in Firebase Console and your project is on Blaze plan.');
  }

  try {
    // Step 1: Compress image if it's large (skip for small files) - optimized for speed
    console.log('🗜️ Checking if compression is needed...');
    const compressionStart = Date.now();
    const processedFile = await compressImage(file);
    const compressionTime = Date.now() - compressionStart;
    console.log(`✅ Image processing completed in ${compressionTime}ms`);
    
    if (onProgress) {
      onProgress(10); // Compression complete
    }
    
    // Step 2: Create storage reference
    const timestamp = Date.now();
    const fileName = `${folder}/${timestamp}-${processedFile.name}`;
    const storageRef = ref(storage, fileName);
    
    console.log('📤 Uploading to Firebase Storage:', fileName);
    console.log('📊 File size to upload:', (processedFile.size / 1024).toFixed(2) + ' KB');
    
    // Step 3: Upload file with progress tracking (use resumable upload for better progress)
    const uploadStart = Date.now();
    console.log('⏱️ Starting upload at:', new Date().toISOString());
    
    // Use resumable upload for progress tracking if callback provided, otherwise use regular upload
    let uploadResult;
    if (onProgress) {
      // Use resumable upload for progress tracking
      const uploadTask = uploadBytesResumable(storageRef, processedFile);
      
      // Track upload progress
      await new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            const uploadProgress = 10 + (progress * 0.8); // 10% for compression, 80% for upload
            console.log(`📊 Upload progress: ${progress.toFixed(1)}%`);
            if (onProgress) {
              onProgress(Math.min(uploadProgress, 90));
            }
          },
          (error) => {
            console.error('❌ Upload error:', error);
            reject(error);
          },
          () => {
            resolve(uploadTask.snapshot);
          }
        );
      });
      
      uploadResult = uploadTask.snapshot;
    } else {
      // Use regular upload for faster uploads without progress
      uploadResult = await uploadBytes(storageRef, processedFile);
    }
    
    const uploadTime = Date.now() - uploadStart;
    console.log(`✅ File uploaded successfully in ${uploadTime}ms`);
    
    if (onProgress) {
      onProgress(90); // Upload complete, getting URL
    }
    
    // Step 4: Get download URL
    const urlStart = Date.now();
    console.log('🔗 Getting download URL...');
    const downloadURL = await getDownloadURL(uploadResult.ref);
    const urlTime = Date.now() - urlStart;
    console.log(`✅ Download URL obtained in ${urlTime}ms`);
    
    if (onProgress) {
      onProgress(100); // Complete
    }
    
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
