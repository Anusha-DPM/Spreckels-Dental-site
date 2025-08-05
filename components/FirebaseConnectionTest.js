'use client'

import { useState, useEffect } from 'react'

export default function FirebaseConnectionTest() {
  const [testResult, setTestResult] = useState('Testing...')
  const [config, setConfig] = useState({})

  useEffect(() => {
    // Check environment variables
    const envConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    }
    
    setConfig(envConfig)
    
    // Check if any values are missing or are placeholders
    const missingValues = []
    const placeholderValues = []
    
    Object.entries(envConfig).forEach(([key, value]) => {
      if (!value) {
        missingValues.push(key)
      } else if (value === '123456789' || value === '1:123456789:web:abcdef') {
        placeholderValues.push(key)
      }
    })
    
    if (missingValues.length > 0) {
      setTestResult(`❌ Missing values: ${missingValues.join(', ')}`)
    } else if (placeholderValues.length > 0) {
      setTestResult(`⚠️ Placeholder values detected: ${placeholderValues.join(', ')}. Please update with real Firebase values.`)
    } else {
      setTestResult('✅ All environment variables look correct!')
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Firebase Connection Test
        </h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Status:</h2>
          <div className={`p-4 rounded-lg ${
            testResult.includes('✅') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : testResult.includes('⚠️')
              ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {testResult}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Current Configuration:</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="space-y-2 text-sm">
              <div>API Key: <span className="font-mono text-xs">{config.apiKey || 'Missing'}</span></div>
              <div>Auth Domain: <span className="font-mono text-xs">{config.authDomain || 'Missing'}</span></div>
              <div>Project ID: <span className="font-mono text-xs">{config.projectId || 'Missing'}</span></div>
              <div>Storage Bucket: <span className="font-mono text-xs">{config.storageBucket || 'Missing'}</span></div>
              <div>Messaging Sender ID: <span className="font-mono text-xs">{config.messagingSenderId || 'Missing'}</span></div>
              <div>App ID: <span className="font-mono text-xs">{config.appId || 'Missing'}</span></div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">To Fix This:</h3>
          <ol className="text-sm text-gray-700 space-y-1">
            <li>1. Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Firebase Console</a></li>
            <li>2. Select your project: <strong>sprekelspark-dental</strong></li>
            <li>3. Click the gear icon (Project Settings)</li>
            <li>4. Scroll down to "Your apps"</li>
            <li>5. Click on your web app</li>
            <li>6. Copy the real values for <strong>messagingSenderId</strong> and <strong>appId</strong></li>
            <li>7. Update your .env.local file with the real values</li>
            <li>8. Restart your development server</li>
          </ol>
        </div>
      </div>
    </div>
  )
} 