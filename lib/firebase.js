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

// Firebase Storage utility functions (direct client-side upload with fallback)
export const uploadImageToFirebase = async (file, folder = 'blog-images') => {
  console.log('🚀 Starting image upload process...');
  console.log('📁 File details:', {
    name: file.name,
    size: file.size,
    type: file.type
  });
  console.log('🔥 Firebase Storage available:', !!storage);
  console.log('📦 Firebase Config check:', {
    apiKey: !!firebaseConfig.apiKey,
    authDomain: !!firebaseConfig.authDomain,
    projectId: !!firebaseConfig.projectId,
    storageBucket: !!firebaseConfig.storageBucket,
    messagingSenderId: !!firebaseConfig.messagingSenderId,
    appId: !!firebaseConfig.appId
  });

  if (!file) {
    console.error('❌ No file provided');
    throw new Error('No file provided for upload');
  }

  if (!storage) {
    console.error('❌ Firebase Storage not initialized');
    throw new Error('Firebase Storage not available. Please check your Firebase configuration.');
  }

  try {
    // Generate unique filename
    const timestamp = Date.now();
    const fileName = `${folder}/${timestamp}-${file.name}`;
    
    console.log('📤 Uploading to Firebase Storage:', fileName);
    
    // Create storage reference
    const storageRef = ref(storage, fileName);
    
    // Upload file with timeout
    const uploadPromise = uploadBytes(storageRef, file, {
      contentType: file.type
    });
    
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Upload timeout after 30 seconds')), 30000);
    });
    
    const snapshot = await Promise.race([uploadPromise, timeoutPromise]);
    
    console.log('✅ File uploaded successfully:', fileName);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log('🔗 Download URL generated:', downloadURL);
    
    return {
      url: downloadURL,
      path: fileName,
      fileName: file.name
    };
    
  } catch (error) {
    console.error('❌ Firebase Storage upload error:', error);
    console.error('Error details:', {
      code: error.code,
      message: error.message,
      stack: error.stack
    });
    
    // Provide more specific error messages
    if (error.code === 'storage/unauthorized') {
      throw new Error('Upload failed: Unauthorized. Please check Firebase Storage rules.');
    } else if (error.code === 'storage/quota-exceeded') {
      throw new Error('Upload failed: Storage quota exceeded.');
    } else if (error.code === 'storage/unauthenticated') {
      throw new Error('Upload failed: User not authenticated.');
    } else if (error.message.includes('timeout')) {
      throw new Error('Upload failed: Request timed out. Please try again.');
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