import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const config = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    }

    const missing = Object.entries(config)
      .filter(([key, value]) => !value)
      .map(([key]) => key)

    return NextResponse.json({
      status: 'ok',
      config: {
        hasApiKey: !!config.apiKey,
        hasAuthDomain: !!config.authDomain,
        hasProjectId: !!config.projectId,
        hasStorageBucket: !!config.storageBucket,
        hasMessagingSenderId: !!config.messagingSenderId,
        hasAppId: !!config.appId,
        storageBucket: config.storageBucket
      },
      missing,
      allPresent: missing.length === 0
    })
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error.message
    }, { status: 500 })
  }
}
