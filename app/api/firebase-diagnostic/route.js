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
  const diagnostic = {
    timestamp: new Date().toISOString(),
    environment: {
      nodeEnv: process.env.NODE_ENV,
      hasEnvFile: true // Assuming .env.local exists if we're here
    },
    envVars: {
      apiKey: {
        exists: !!firebaseConfig.apiKey,
        length: firebaseConfig.apiKey?.length || 0,
        preview: firebaseConfig.apiKey ? `${firebaseConfig.apiKey.substring(0, 10)}...` : 'missing'
      },
      authDomain: {
        exists: !!firebaseConfig.authDomain,
        value: firebaseConfig.authDomain || 'missing'
      },
      projectId: {
        exists: !!firebaseConfig.projectId,
        value: firebaseConfig.projectId || 'missing'
      },
      storageBucket: {
        exists: !!firebaseConfig.storageBucket,
        value: firebaseConfig.storageBucket || 'missing'
      },
      messagingSenderId: {
        exists: !!firebaseConfig.messagingSenderId,
        value: firebaseConfig.messagingSenderId || 'missing'
      },
      appId: {
        exists: !!firebaseConfig.appId,
        preview: firebaseConfig.appId ? `${firebaseConfig.appId.substring(0, 15)}...` : 'missing'
      }
    },
    validation: {
      allPresent: Object.values(firebaseConfig).every(val => !!val),
      missing: Object.entries(firebaseConfig)
        .filter(([key, value]) => !value)
        .map(([key]) => key)
    },
    firebase: {
      initialized: false,
      error: null,
      storageInitialized: false
    }
  }

  // Try to initialize Firebase
  try {
    let app
    if (!getApps().length) {
      app = initializeApp(firebaseConfig)
      diagnostic.firebase.initialized = true
      diagnostic.firebase.message = 'Firebase app initialized successfully'
    } else {
      app = getApps()[0]
      diagnostic.firebase.initialized = true
      diagnostic.firebase.message = 'Firebase app already initialized'
    }

    // Try to initialize Storage
    try {
      const storage = getStorage(app)
      diagnostic.firebase.storageInitialized = true
      diagnostic.firebase.storageMessage = 'Firebase Storage initialized successfully'
    } catch (storageError) {
      diagnostic.firebase.storageError = storageError.message
      diagnostic.firebase.storageCode = storageError.code
    }
  } catch (error) {
    diagnostic.firebase.error = error.message
    diagnostic.firebase.code = error.code
    diagnostic.firebase.stack = error.stack
  }

  return NextResponse.json(diagnostic, {
    status: diagnostic.validation.allPresent && diagnostic.firebase.initialized ? 200 : 500
  })
}

