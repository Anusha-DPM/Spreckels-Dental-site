// Firebase Connection Test Script
// Run this in your browser console to test Firebase connection

console.log('🔍 Starting Firebase Connection Test...');

// Check if Firebase is available
if (typeof window === 'undefined') {
  console.log('❌ This script must run in the browser');
} else {
  // Test Firebase configuration
  console.log('📋 Checking Firebase Configuration...');
  
  const configCheck = {
    apiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: !!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };
  
  console.log('🔧 Environment Variables Status:', configCheck);
  
  const missingVars = Object.entries(configCheck)
    .filter(([key, value]) => !value)
    .map(([key]) => key);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing environment variables:', missingVars);
    console.log('💡 Please create a .env.local file with your Firebase configuration');
  } else {
    console.log('✅ All environment variables are set');
  }
  
  // Test Firebase initialization
  console.log('🚀 Testing Firebase Initialization...');
  
  try {
    // Import Firebase modules
    const { initializeApp } = require('firebase/app');
    const { getFirestore, collection, addDoc, getDocs } = require('firebase/firestore');
    
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    };
    
    console.log('📝 Firebase Config:', {
      projectId: firebaseConfig.projectId,
      authDomain: firebaseConfig.authDomain,
      storageBucket: firebaseConfig.storageBucket
    });
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    console.log('✅ Firebase App initialized successfully');
    
    // Initialize Firestore
    const db = getFirestore(app);
    console.log('✅ Firestore initialized successfully');
    
    // Test database connection
    console.log('🔍 Testing Database Connection...');
    
    // Test read operation
    const testCollection = collection(db, 'test-collection');
    const querySnapshot = await getDocs(testCollection);
    console.log(`✅ Read test successful - found ${querySnapshot.size} documents`);
    
    // Test write operation
    const testDoc = {
      title: 'Connection Test',
      content: 'This is a test document to verify Firebase connection',
      timestamp: new Date().toISOString(),
      test: true
    };
    
    const docRef = await addDoc(testCollection, testDoc);
    console.log(`✅ Write test successful - created document with ID: ${docRef.id}`);
    
    console.log('🎉 Firebase Connection Test PASSED!');
    console.log('📊 Your database is working correctly');
    
  } catch (error) {
    console.error('❌ Firebase Connection Test FAILED:', error);
    console.log('🔧 Common issues and solutions:');
    console.log('1. Check your .env.local file has correct Firebase credentials');
    console.log('2. Verify your Firebase project is active');
    console.log('3. Check Firestore rules allow read/write operations');
    console.log('4. Ensure your Firebase project has Firestore enabled');
  }
}

// Additional diagnostic information
console.log('📊 Browser Information:', {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  cookieEnabled: navigator.cookieEnabled,
  onLine: navigator.onLine
});

console.log('🌐 Network Status:', {
  online: navigator.onLine,
  connection: navigator.connection ? navigator.connection.effectiveType : 'Unknown'
});
