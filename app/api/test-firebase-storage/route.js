import { NextRequest, NextResponse } from 'next/server'
import { initializeApp, getApps } from 'firebase/app'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

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
  const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV
  const testResults = {
    timestamp: new Date().toISOString(),
    environment: {
      isVercel: isVercel,
      vercelEnv: process.env.VERCEL_ENV || null,
      nodeEnv: process.env.NODE_ENV
    },
    config: {
      hasApiKey: !!firebaseConfig.apiKey,
      hasAuthDomain: !!firebaseConfig.authDomain,
      hasProjectId: !!firebaseConfig.projectId,
      hasStorageBucket: !!firebaseConfig.storageBucket,
      hasMessagingSenderId: !!firebaseConfig.messagingSenderId,
      hasAppId: !!firebaseConfig.appId,
      storageBucket: firebaseConfig.storageBucket || 'not set'
    },
    tests: {
      initialization: { passed: false, error: null },
      storageInit: { passed: false, error: null },
      uploadTest: { passed: false, error: null, url: null }
    }
  }

  // Test 1: Initialize Firebase
  try {
    let app
    if (!getApps().length) {
      app = initializeApp(firebaseConfig)
    } else {
      app = getApps()[0]
    }
    testResults.tests.initialization.passed = true
    testResults.tests.initialization.message = 'Firebase app initialized successfully'
  } catch (error) {
    testResults.tests.initialization.error = error.message
    testResults.tests.initialization.code = error.code
    return NextResponse.json(testResults, { status: 500 })
  }

  // Test 2: Initialize Storage
  let storage
  try {
    const app = getApps()[0]
    storage = getStorage(app)
    testResults.tests.storageInit.passed = true
    testResults.tests.storageInit.message = 'Firebase Storage initialized successfully'
  } catch (error) {
    testResults.tests.storageInit.error = error.message
    testResults.tests.storageInit.code = error.code
    return NextResponse.json(testResults, { status: 500 })
  }

  // Test 3: Try uploading a small test file
  try {
    const testFileName = `test-uploads/test-${Date.now()}.txt`
    const testContent = `Test upload from ${isVercel ? 'Vercel' : 'localhost'} at ${new Date().toISOString()}`
    const testBuffer = Buffer.from(testContent, 'utf-8')
    
    const storageRef = ref(storage, testFileName)
    
    // Upload with timeout
    const uploadPromise = uploadBytes(storageRef, testBuffer, {
      contentType: 'text/plain'
    })
    
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Upload timeout after 10 seconds'))
      }, 10000)
    })
    
    const snapshot = await Promise.race([uploadPromise, timeoutPromise])
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref)
    
    testResults.tests.uploadTest.passed = true
    testResults.tests.uploadTest.message = 'Test file uploaded successfully'
    testResults.tests.uploadTest.url = downloadURL
    testResults.tests.uploadTest.path = testFileName
    
    return NextResponse.json(testResults, { status: 200 })
  } catch (error) {
    testResults.tests.uploadTest.error = error.message
    testResults.tests.uploadTest.code = error.code
    testResults.tests.uploadTest.status = error.customData?.status || error.status
    testResults.tests.uploadTest.customData = error.customData || null
    
    return NextResponse.json(testResults, { status: 500 })
  }
}
