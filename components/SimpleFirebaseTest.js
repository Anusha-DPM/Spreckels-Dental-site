'use client'

import { useState, useEffect } from 'react'

export default function SimpleFirebaseTest() {
  const [status, setStatus] = useState('Loading...')
  const [envVars, setEnvVars] = useState({})

  useEffect(() => {
    // Check environment variables
    const vars = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Set' : 'Missing',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'Set' : 'Missing',
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'Set' : 'Missing',
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? 'Set' : 'Missing',
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? 'Set' : 'Missing',
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'Set' : 'Missing'
    }
    setEnvVars(vars)

    // Try to import Firebase
    try {
      import('../lib/firebase').then(({ db }) => {
        if (db) {
          setStatus('✅ Firebase initialized successfully!')
        } else {
          setStatus('❌ Firebase not initialized')
        }
      }).catch(error => {
        console.error('Firebase import error:', error)
        setStatus(`❌ Firebase import error: ${error.message}`)
      })
    } catch (error) {
      console.error('Firebase test error:', error)
      setStatus(`❌ Error: ${error.message}`)
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Simple Firebase Test
        </h1>

        {/* Status */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Firebase Status:</h2>
          <div className={`p-4 rounded-lg ${
            status.includes('✅') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {status}
          </div>
        </div>

        {/* Environment Variables */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Environment Variables:</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="space-y-2 text-sm">
              <div>API Key: <span className={envVars.apiKey === 'Set' ? 'text-green-600' : 'text-red-600'}>{envVars.apiKey}</span></div>
              <div>Auth Domain: <span className={envVars.authDomain === 'Set' ? 'text-green-600' : 'text-red-600'}>{envVars.authDomain}</span></div>
              <div>Project ID: <span className={envVars.projectId === 'Set' ? 'text-green-600' : 'text-red-600'}>{envVars.projectId}</span></div>
              <div>Storage Bucket: <span className={envVars.storageBucket === 'Set' ? 'text-green-600' : 'text-red-600'}>{envVars.storageBucket}</span></div>
              <div>Messaging Sender ID: <span className={envVars.messagingSenderId === 'Set' ? 'text-green-600' : 'text-red-600'}>{envVars.messagingSenderId}</span></div>
              <div>App ID: <span className={envVars.appId === 'Set' ? 'text-green-600' : 'text-red-600'}>{envVars.appId}</span></div>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">If Firebase is not working:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Check your .env.local file exists and has correct values</li>
            <li>• Restart your development server</li>
            <li>• Verify your Firebase project is created</li>
            <li>• Check browser console (F12) for errors</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 