// Simple Firebase connection test script
// Run this with: node check-firebase.js

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, getDocs } = require('firebase/firestore');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiFKu8E-PrnbO7gahgkDfwE1Fr0Bm8mhA",
  authDomain: "sprekels-dental.firebaseapp.com",
  projectId: "sprekels-dental",
  storageBucket: "sprekels-dental.firebasestorage.app",
  messagingSenderId: "173155929949",
  appId: "1:173155929949:web:359c3b007042384111e2b4"
};

async function testFirebase() {
  try {
    console.log('🔧 Testing Firebase connection...');
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase initialized successfully');
    
    // Test reading from Firestore
    console.log('📖 Testing read operation...');
    const querySnapshot = await getDocs(collection(db, 'blog-posts'));
    console.log(`✅ Read successful - found ${querySnapshot.docs.length} posts`);
    
    // Test writing to Firestore
    console.log('✍️ Testing write operation...');
    const testPost = {
      title: 'Test Post - ' + new Date().toLocaleString(),
      content: 'This is a test post to check Firebase connection',
      author: 'Test Script',
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const docRef = await addDoc(collection(db, 'blog-posts'), testPost);
    console.log(`✅ Write successful - created post with ID: ${docRef.id}`);
    
    console.log('\n🎉 Firebase connection test PASSED!');
    console.log('Your Firebase setup is working correctly.');
    
  } catch (error) {
    console.error('\n❌ Firebase connection test FAILED!');
    console.error('Error:', error.message);
    
    if (error.message.includes('permission')) {
      console.log('\n🔧 SOLUTION: You need to fix Firebase rules.');
      console.log('1. Go to Firebase Console');
      console.log('2. Navigate to Firestore Database → Rules');
      console.log('3. Enable "Test mode" or update rules to allow all access');
    }
    
    if (error.message.includes('project')) {
      console.log('\n🔧 SOLUTION: Check your Firebase project configuration.');
      console.log('1. Verify project ID: sprekels-dental');
      console.log('2. Check if Firestore Database is enabled');
    }
  }
}

// Run the test
testFirebase(); 