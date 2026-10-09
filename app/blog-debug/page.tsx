'use client'

import React, { useState, useEffect } from 'react'
import { getPublishedBlogPosts } from '../../lib/blogDatabase'

interface BlogPost {
  id?: string
  title: string
  coverImage?: string
  imageUrl?: string
  [key: string]: any
}

export default function BlogDebugPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const fetchedPosts = await getPublishedBlogPosts()
      setPosts(fetchedPosts as BlogPost[])
    } catch (error) {
      console.error('Error loading posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const testImageUrl = (url: string) => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve({ success: true, width: img.width, height: img.height })
      img.onerror = () => resolve({ success: false, error: 'Failed to load' })
      img.src = url
      setTimeout(() => resolve({ success: false, error: 'Timeout' }), 5000)
    })
  }

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Blog Images Debug</h1>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">coverImage:</h3>
                <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto">
                  {post.coverImage || '(empty)'}
                </pre>
                {post.coverImage && (
                  <div className="mt-2">
                    <img 
                      src={post.coverImage} 
                      alt="coverImage"
                      className="max-w-full h-32 object-cover border"
                      onError={(e) => {
                        e.currentTarget.style.border = '2px solid red'
                        e.currentTarget.alt = 'FAILED TO LOAD'
                      }}
                    />
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="font-medium mb-2">imageUrl:</h3>
                <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto">
                  {post.imageUrl || '(empty)'}
                </pre>
                {post.imageUrl && (
                  <div className="mt-2">
                    <img 
                      src={post.imageUrl} 
                      alt="imageUrl"
                      className="max-w-full h-32 object-cover border"
                      onError={(e) => {
                        e.currentTarget.style.border = '2px solid red'
                        e.currentTarget.alt = 'FAILED TO LOAD'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-medium mb-2">Image Analysis:</h4>
              <ul className="text-sm space-y-1">
                <li>Has coverImage: {post.coverImage ? '✅ Yes' : '❌ No'}</li>
                <li>Has imageUrl: {post.imageUrl ? '✅ Yes' : '❌ No'}</li>
                <li>coverImage type: {typeof post.coverImage}</li>
                <li>imageUrl type: {typeof post.imageUrl}</li>
                <li>coverImage length: {post.coverImage?.length || 0}</li>
                <li>imageUrl length: {post.imageUrl?.length || 0}</li>
                {post.coverImage && (
                  <li>coverImage starts with http: {post.coverImage.startsWith('http') ? '✅' : '❌'}</li>
                )}
                {post.imageUrl && (
                  <li>imageUrl starts with http: {post.imageUrl.startsWith('http') ? '✅' : '❌'}</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
