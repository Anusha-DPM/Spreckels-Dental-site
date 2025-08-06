'use client'

import { useState } from 'react'
import { createBlogPost, getBlogPosts } from '@/lib/blogDatabase'

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  category?: string
  tags: string[]
  author?: string
  published: boolean
  slug: string
  createdAt?: any
  updatedAt?: any
  imageUrl?: string
  coverImage?: string
  metaTitle?: string
  metaDescription?: string
  featured?: boolean
  views?: number
}

export default function TestFirebaseConnection() {
  const [status, setStatus] = useState('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const testFirebaseConnection = async () => {
    setIsLoading(true)
    setStatus('Testing Firebase connection...')
    
    try {
      // Test creating a blog post
      const testPost = {
        title: 'Test Blog Post - ' + new Date().toLocaleString(),
        content: '<p>This is a test blog post content to verify Firebase connection.</p>',
        excerpt: 'This is a test blog post excerpt.',
        slug: 'test-blog-post-' + Date.now(),
        tags: ['test', 'firebase'],
        category: 'Test',
        author: 'Admin',
        published: true,
        featured: false,
        imageUrl: '',
        metaTitle: 'Test Blog Post',
        metaDescription: 'Test blog post for Firebase connection verification'
      }

      setStatus('Creating test blog post in Firebase...')
      const newPost = await createBlogPost(testPost)
      setStatus(`✅ Test post created successfully! ID: ${newPost.id}`)
      
      // Test loading posts
      setStatus('Loading posts from Firebase...')
      const allPosts = await getBlogPosts({ published: null })
      setPosts(allPosts)
      setStatus(`✅ Loaded ${allPosts.length} posts from Firebase`)
      
    } catch (error: any) {
      console.error('Firebase test error:', error)
      setStatus(`❌ Firebase test failed: ${error?.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const loadPosts = async () => {
    setIsLoading(true)
    setStatus('Loading posts...')
    
    try {
      const allPosts = await getBlogPosts({ published: null })
      setPosts(allPosts)
      setStatus(`✅ Loaded ${allPosts.length} posts from Firebase`)
    } catch (error: any) {
      console.error('Error loading posts:', error)
      setStatus(`❌ Error loading posts: ${error?.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const clearStatus = () => {
    setStatus('')
    setPosts([])
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Firebase Connection Test
        </h1>
        
        <div className="space-y-4 mb-6">
          <button
            onClick={testFirebaseConnection}
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Testing...' : 'Test Firebase Connection'}
          </button>
          
          <button
            onClick={loadPosts}
            disabled={isLoading}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 ml-2"
          >
            Load Posts
          </button>
          
          <button
            onClick={clearStatus}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 ml-2"
          >
            Clear
          </button>
        </div>
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Status:</h2>
          <p className="text-gray-700 bg-gray-100 p-3 rounded">{status || 'Click "Test Firebase Connection" to start'}</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Posts ({posts.length}):</h2>
          {posts.length === 0 ? (
            <p className="text-gray-500">No posts found</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>ID: {post.id}</span>
                    <span className="mx-2">•</span>
                    <span>Published: {post.published ? 'Yes' : 'No'}</span>
                    <span className="mx-2">•</span>
                    <span>Author: {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>Created: {post.createdAt?.toDate?.()?.toLocaleString() || 'Unknown'}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 