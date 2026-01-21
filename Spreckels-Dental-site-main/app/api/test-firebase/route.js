import { NextResponse } from 'next/server'
import { initializeApp, getApps } from 'firebase/app'
import { getStorage } from 'firebase/storage'

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
    console.log('Testing Firebase initialization...')
    console.log('Firebase config check:', {
      apiKey: !!firebaseConfig.apiKey,
      authDomain: !!firebaseConfig.authDomain,
      projectId: !!firebaseConfig.projectId,
      storageBucket: !!firebaseConfig.storageBucket,
      messagingSenderId: !!firebaseConfig.messagingSenderId,
      appId: !!firebaseConfig.appId
    })

    // Initialize Firebase
    let app
    if (!getApps().length) {
      app = initializeApp(firebaseConfig)
      console.log('✅ Firebase app initialized')
    } else {
      app = getApps()[0]
      console.log('✅ Firebase app already initialized')
    }

    // Test Storage
    const storage = getStorage(app)
    console.log('✅ Firebase Storage initialized')

    return NextResponse.json({
      success: true,
      message: 'Firebase is working correctly on server side',
      config: {
        projectId: firebaseConfig.projectId,
        storageBucket: firebaseConfig.storageBucket
      }
    })

  } catch (error) {
    console.error('❌ Firebase test failed:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Firebase initialization failed', 
        details: error.message 
      },
      { status: 500 }
    )
  }
}
