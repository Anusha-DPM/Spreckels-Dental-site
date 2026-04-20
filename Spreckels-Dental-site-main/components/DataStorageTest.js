'use client'

import { useState } from 'react'
import { db } from '../lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export default function DataStorageTest() {
  const [testData, setTestData] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [storedData, setStoredData] = useState([])

  const testStorage = async () => {
    if (!db) {
      setResult('❌ Firebase not initialized. Check your environment variables.')
      return
    }

    setLoading(true)
    setResult('Testing...')

    try {
      // Test writing data
      const testDoc = {
        message: testData || 'Test message from Spreckels Dental',
        timestamp: new Date().toISOString(),
        test: true
      }

      const docRef = await addDoc(collection(db, 'test_collection'), testDoc)
      setResult(`✅ Data stored successfully! Document ID: ${docRef.id}`)

      // Test reading data
      const querySnapshot = await getDocs(collection(db, 'test_collection'))
      const data = []
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      })
      setStoredData(data)

    } catch (error) {
      console.error('Storage test error:', error)
      setResult(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const clearResults = () => {
    setResult('')
    setStoredData([])
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Firebase Data Storage Test
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Test Message:
          </label>
          <input
            type="text"
            value={testData}
            onChange={(e) => setTestData(e.target.value)}
            placeholder="Enter a test message (optional)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-6 space-x-4">
          <button
            onClick={testStorage}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Testing...' : 'Test Data Storage'}
          </button>
          <button
            onClick={clearResults}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Clear Results
          </button>
        </div>

        {result && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Result:</h2>
            <div className={`p-4 rounded-lg ${
              result.includes('✅') 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {result}
            </div>
          </div>
        )}

        {storedData.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Stored Data:</h2>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="space-y-2">
                {storedData.map((item, index) => (
                  <div key={item.id} className="p-3 bg-white rounded border">
                    <div className="text-sm text-gray-600">ID: {item.id}</div>
                    <div className="font-medium">{item.message}</div>
                    <div className="text-xs text-gray-500">{item.timestamp}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Troubleshooting:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Make sure your Firebase project has Firestore Database enabled</li>
            <li>• Check that your Firestore rules allow read/write access</li>
            <li>• Verify all environment variables are correct</li>
            <li>• Check browser console (F12) for detailed error messages</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 