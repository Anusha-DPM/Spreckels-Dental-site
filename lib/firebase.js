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

// Firebase Storage utility functions (server-side to avoid CORS)
export const uploadImageToFirebase = async (file, folder = 'blog-images') => {
  console.log('🚀 Starting server-side image upload process...');
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
    console.log('📤 Uploading file via server-side API...');
    
    // Create FormData for server upload
    const formData = new FormData();
    formData.append('image', file);
    
    // Upload via server-side API
    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Server upload failed:', errorData);
      throw new Error(errorData.error || `Upload failed with status ${response.status}`);
    }
    
    const result = await response.json();
    console.log('✅ File uploaded successfully via server');
    console.log('🔗 Download URL:', result.url);
    
    return {
      url: result.url,
      path: result.path,
      fileName: result.fileName
    };
  } catch (error) {
    console.error('❌ Server-side upload failed:', error);
    throw new Error(`Upload failed: ${error.message}`);
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

// Test Firebase Storage connection
export const testFirebaseStorage = async () => {
  console.log('🧪 Testing Firebase Storage connection...');
  
  if (!storage) {
    console.error('❌ Firebase Storage not initialized');
    return { success: false, error: 'Firebase Storage not initialized' };
  }

  try {
    // Test creating a reference
    const testRef = ref(storage, 'test-connection.txt');
    console.log('✅ Storage reference created successfully');
    
    // Test uploading a small text file
    const testContent = 'Firebase Storage test - ' + new Date().toISOString();
    const testBlob = new Blob([testContent], { type: 'text/plain' });
    
    console.log('⬆️ Testing upload...');
    const snapshot = await uploadBytes(testRef, testBlob);
    console.log('✅ Test upload successful');
    
    // Test getting download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('✅ Test download URL obtained');
    
    // Clean up test file
    await deleteObject(testRef);
    console.log('✅ Test file cleaned up');
    
    return { success: true, message: 'Firebase Storage is working correctly' };
  } catch (error) {
    console.error('❌ Firebase Storage test failed:', error);
    return { success: false, error: error.message };
  }
};

export default app; 