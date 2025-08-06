'use client'

import { useState } from 'react'

export default function TestLocalStorage() {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('')

  const createTestPost = () => {
    const testPost = {
      id: Date.now().toString(),
      title: 'Test Blog Post - ' + new Date().toLocaleString(),
      content: '<p>This is a test blog post content.</p>',
      excerpt: 'This is a test blog post excerpt.',
      slug: 'test-blog-post-' + Date.now(),
      tags: ['test', 'blog'],
      category: 'Test',
      author: 'Test Author',
      published: true,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const existingPosts = localStorage.getItem('blogPosts')
    const posts = existingPosts ? JSON.parse(existingPosts) : []
    posts.unshift(testPost)
    localStorage.setItem('blogPosts', JSON.stringify(posts))
    
    setStatus('✅ Test post created in localStorage')
    loadPosts()
  }

  const loadPosts = () => {
    const savedPosts = localStorage.getItem('blogPosts')
    if (savedPosts) {
      const posts = JSON.parse(savedPosts)
      setPosts(posts)
      setStatus(`✅ Loaded ${posts.length} posts from localStorage`)
    } else {
      setPosts([])
      setStatus('No posts found in localStorage')
    }
  }

  const clearPosts = () => {
    localStorage.removeItem('blogPosts')
    setPosts([])
    setStatus('✅ Cleared all posts from localStorage')
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          localStorage Test Page
        </h1>
        
        <div className="space-y-4 mb-6">
          <button
            onClick={createTestPost}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Create Test Post
          </button>
          
          <button
            onClick={loadPosts}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 ml-2"
          >
            Load Posts
          </button>
          
          <button
            onClick={clearPosts}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 ml-2"
          >
            Clear All Posts
          </button>
        </div>
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Status:</h2>
          <p className="text-gray-700 bg-gray-100 p-3 rounded">{status || 'Click buttons to test'}</p>
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