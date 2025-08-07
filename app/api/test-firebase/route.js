import { NextResponse } from 'next/server'
import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

export async function GET() {
  try {
    console.log('🧪 Testing Firebase configuration on server...')
    
    // Log environment variables (without exposing sensitive data)
    console.log('📦 Environment variables check:', {
      apiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: !!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    })
    
    // Test Firebase initialization
    const app = initializeApp(firebaseConfig)
    const storage = getStorage(app)
    
    console.log('✅ Firebase initialized successfully')
    
    // Test creating a reference
    const testRef = ref(storage, 'test-connection.txt')
    console.log('✅ Storage reference created')
    
    // Test uploading a small text file
    const testContent = 'Firebase Storage test - ' + new Date().toISOString()
    const testBlob = new Blob([testContent], { type: 'text/plain' })
    
    console.log('⬆️ Testing upload...')
    const snapshot = await uploadBytes(testRef, testBlob)
    console.log('✅ Test upload successful')
    
    // Test getting download URL
    const downloadURL = await getDownloadURL(snapshot.ref)
    console.log('✅ Test download URL obtained')
    
    // Clean up test file
    await deleteObject(testRef)
    console.log('✅ Test file cleaned up')
    
    return NextResponse.json({
      success: true,
      message: 'Firebase Storage is working correctly on server',
      config: {
        projectId: firebaseConfig.projectId,
        storageBucket: firebaseConfig.storageBucket
      }
    })
    
  } catch (error) {
    console.error('❌ Firebase test failed on server:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
      details: {
        code: error.code,
        stack: error.stack
      }
    }, { status: 500 })
  }
}
