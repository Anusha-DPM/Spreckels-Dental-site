'use client'

import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export default function FirebaseTest() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    setStatus('Testing Firebase connection...')
    
    try {
      // Test 1: Check if db is available
      if (!db) {
        setStatus('❌ Firebase db is null - check initialization')
        return
      }
      
      setStatus('✅ Firebase db is available')
      
      // Test 2: Try to add a document
      setStatus('Testing document creation...')
      const testData = {
        title: 'Test Document',
        content: 'This is a test',
        timestamp: new Date().toISOString()
      }
      
      const docRef = await addDoc(collection(db, 'test-collection'), testData)
      setStatus(`✅ Document created successfully! ID: ${docRef.id}`)
      
      // Test 3: Try to read documents
      setStatus('Testing document reading...')
      const querySnapshot = await getDocs(collection(db, 'test-collection'))
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setStatus(`✅ Read ${docs.length} documents successfully`)
      
    } catch (error: any) {
      console.error('Firebase test error:', error)
      setStatus(`❌ Error: ${error?.message || 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Firebase Connection Test
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={testConnection}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Test Firebase Connection'}
          </button>
          
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Status:</h2>
            <p className="text-gray-700 bg-gray-100 p-3 rounded">{status || 'Click test button to start'}</p>
          </div>
          
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Troubleshooting:</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Check if Firestore Database is enabled in Firebase Console</li>
              <li>• Verify Firestore rules allow read/write access</li>
              <li>• Check internet connection and firewall settings</li>
              <li>• Ensure Firebase project is in the correct region</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 