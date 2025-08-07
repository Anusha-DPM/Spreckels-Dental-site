// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

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
    console.error('Missing Firebase configuration fields:', missingFields);
    throw new Error(`Firebase configuration incomplete. Missing: ${missingFields.join(', ')}`);
  }
};

// Initialize Firebase
let app;
try {
  validateFirebaseConfig();
  app = initializeApp(firebaseConfig);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization failed:', error);
  // In production, you might want to handle this differently
  if (typeof window !== 'undefined') {
    console.warn('Firebase not initialized. Some features may not work.');
  }
  // Don't throw the error, just log it
  app = null;
}

// Log Firebase configuration for debugging
if (typeof window !== 'undefined') {
  console.log('Firebase Config Check:', {
    apiKey: !!firebaseConfig.apiKey,
    authDomain: !!firebaseConfig.authDomain,
    projectId: !!firebaseConfig.projectId,
    storageBucket: !!firebaseConfig.storageBucket,
    messagingSenderId: !!firebaseConfig.messagingSenderId,
    appId: !!firebaseConfig.appId
  });
}

// Initialize Firebase services
export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;
export const storage = app ? getStorage(app) : null;

// Firebase Storage utility functions
export const uploadImageToFirebase = async (file, folder = 'blog-images') => {
  if (!storage || !file) {
    throw new Error('Firebase Storage not available or no file provided');
  }

  try {
    // Create a unique filename
    const timestamp = Date.now();
    const fileName = `${folder}/${timestamp}-${file.name}`;
    const storageRef = ref(storage, fileName);

    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);
    console.log('✅ Image uploaded to Firebase Storage:', fileName);

    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('✅ Image download URL:', downloadURL);

    return {
      url: downloadURL,
      path: fileName,
      fileName: file.name
    };
  } catch (error) {
    console.error('Error uploading image to Firebase:', error);
    throw new Error(`Failed to upload image: ${error.message}`);
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