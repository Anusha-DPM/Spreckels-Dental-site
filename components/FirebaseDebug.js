'use client'

import { useState, useEffect } from 'react'
import { db } from '../lib/firebase'
import { createDocument, getAllDocuments } from '../lib/database'

export default function FirebaseDebug() {
  const [status, setStatus] = useState('')
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(false)

  // Test Firebase connection
  const testConnection = async () => {
    setStatus('Testing Firebase connection...')
    setLoading(true)
    
    try {
      // Check if Firebase is initialized
      if (!db) {
        setStatus('❌ Firebase not initialized - check environment variables')
        return
      }

      setStatus('✅ Firebase initialized successfully')
      
      // Test creating a simple document
      const testData = {
        title: "Test Document - " + new Date().toISOString(),
        content: "This is a test document",
        type: "test",
        created: new Date().toISOString()
      }

      setStatus('Creating test document...')
      const newDoc = await createDocument('test-collection', testData)
      setStatus(`✅ Document created successfully! ID: ${newDoc.id}`)
      
      // Load documents to verify
      await loadDocuments()
      
    } catch (error) {
      console.error('Firebase test error:', error)
      setStatus(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  // Load existing documents
  const loadDocuments = async () => {
    try {
      const allDocs = await getAllDocuments('test-collection')
      setDocuments(allDocs)
      setStatus(`✅ Loaded ${allDocs.length} test documents`)
    } catch (error) {
      console.error('Error loading documents:', error)
      setStatus(`❌ Error loading documents: ${error.message}`)
    }
  }

  useEffect(() => {
    loadDocuments()
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Firebase Debug Tool
        </h1>
        
        <div className="mb-6">
          <button
            onClick={testConnection}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Testing...' : 'Test Firebase Connection'}
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Status</h2>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-sm">{status || 'Ready to test'}</p>
          </div>
        </div>

        {/* Documents List */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">
            Test Documents in Database ({documents.length})
          </h2>
          
          {documents.length === 0 ? (
            <p className="text-gray-500">No test documents found in database.</p>
          ) : (
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold">{doc.title || 'Untitled'}</h3>
                  <p className="text-gray-600 text-sm mt-1">{doc.content || 'No content'}</p>
                  <div className="text-xs text-gray-500 mt-2">
                    <span>ID: {doc.id}</span>
                    {doc.created && (
                      <span className="ml-4">Created: {new Date(doc.created).toLocaleString()}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">What This Tool Does</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Tests Firebase connection and initialization</li>
            <li>• Creates a test document in the database</li>
            <li>• Reads documents from the test-collection</li>
            <li>• Displays connection status and results</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 