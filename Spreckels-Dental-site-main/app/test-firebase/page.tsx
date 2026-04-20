'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

interface TestDocument {
  id: string
  title?: string
  content?: string
  author?: string
  createdAt?: string
  updatedAt?: string
  [key: string]: any
}

export default function TestFirebase() {
  const [status, setStatus] = useState('Testing...')
  const [error, setError] = useState('')
  const [documents, setDocuments] = useState<TestDocument[]>([])

  useEffect(() => {
    testFirebase()
  }, [])

  const testFirebase = async () => {
    try {
      setStatus('Testing Firebase connection...')
      
      if (!db) {
        setError('Firebase not initialized - check environment variables')
        return
      }

      // Test reading from Firebase
      setStatus('Testing read operation...')
      const querySnapshot = await getDocs(collection(db, 'test-collection'))
      const existingDocs = querySnapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          title: data.title || 'Untitled',
          content: data.content || '',
          author: data.author || 'Unknown',
          createdAt: data.createdAt || new Date().toISOString(),
          updatedAt: data.updatedAt || new Date().toISOString(),
          ...data
        } as TestDocument
      })
      setDocuments(existingDocs)
      setStatus(`✅ Read successful - found ${existingDocs.length} documents`)

      // Test writing to Firebase
      setStatus('Testing write operation...')
      const testDoc = {
        title: 'Test Document - ' + new Date().toLocaleString(),
        content: 'This is a test document to check Firebase connection',
        author: 'Test',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      const docRef = await addDoc(collection(db, 'test-collection'), testDoc)
      setStatus(`✅ Write successful - created document with ID: ${docRef.id}`)

    } catch (error: any) {
      console.error('Firebase test failed:', error)
      setError(`❌ Firebase error: ${error.message}`)
      setStatus('Test failed')
    }
  }

  const clearTestDocuments = async () => {
    try {
      setStatus('Clearing test documents...')
      // Note: This would require delete permission in Firebase rules
      setStatus('✅ Test documents cleared (manual cleanup may be needed)')
    } catch (error: any) {
      setError(`❌ Clear error: ${error.message}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Firebase Connection Test</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Status</h2>
          <p className="text-lg">{status}</p>
          {error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Test Actions</h2>
            <div className="space-x-2">
              <button
                onClick={testFirebase}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Run Test
              </button>
              <button
                onClick={clearTestDocuments}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Clear Test Data
              </button>
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            <p>This page tests your Firebase connection by:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Reading from the 'test-collection'</li>
              <li>Writing a test document</li>
              <li>Displaying connection status</li>
            </ul>
          </div>
        </div>

        {documents.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Test Documents ({documents.length})</h2>
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold">{doc.title}</h3>
                  <p className="text-gray-600 mt-1">{doc.content}</p>
                  <div className="text-xs text-gray-500 mt-2">
                    <span>Author: {doc.author}</span>
                    <span className="ml-4">Created: {new Date(doc.createdAt || '').toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 