'use client'

import { useState, useEffect } from 'react'
import { createBlogPost, updateBlogPost, getBlogPosts, deleteBlogPost } from '../lib/blogDatabase'

export default function BlogAdmin() {
  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'General Dentistry',
    tags: '',
    featured: false,
    published: false,
    imageUrl: ''
  })

  // Load existing posts
  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      setLoading(true)
      const allPosts = await getBlogPosts({ published: null }) // Get all posts (published and draft)
      setPosts(allPosts)
    } catch (error) {
      console.error('Error loading posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const postData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        content: formData.content,
        excerpt: formData.excerpt || formData.content.substring(0, 150) + '...'
      }

      if (currentPost) {
        // Update existing post
        await updateBlogPost(currentPost.id, postData)
        alert('Blog post updated successfully!')
      } else {
        // Create new post
        await createBlogPost(postData)
        alert('Blog post created successfully!')
      }

      // Reset form and reload posts
      setFormData({
        title: '',
        content: '',
        excerpt: '',
        category: 'General Dentistry',
        tags: '',
        featured: false,
        published: false,
        imageUrl: ''
      })
      setCurrentPost(null)
      loadPosts()
    } catch (error) {
      console.error('Error saving blog post:', error)
      alert('Error saving blog post. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (post) => {
    setCurrentPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      category: post.category,
      tags: post.tags?.join(', ') || '',
      featured: post.featured,
      published: post.published,
      imageUrl: post.imageUrl || ''
    })
  }

  const handleDelete = async (postId) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlogPost(postId)
        alert('Blog post deleted successfully!')
        loadPosts()
      } catch (error) {
        console.error('Error deleting blog post:', error)
        alert('Error deleting blog post. Please try again.')
      }
    }
  }

  const handleCancel = () => {
    setCurrentPost(null)
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      category: 'General Dentistry',
      tags: '',
      featured: false,
      published: false,
      imageUrl: ''
    })
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {currentPost ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>
        <p className="text-gray-600">
          Manage your dental blog content and patient education articles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Post Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Post Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter blog post title..."
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="General Dentistry">General Dentistry</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Orthodontics">Orthodontics</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Oral Health">Oral Health</option>
                  <option value="Patient Education">Patient Education</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="dental implants, oral health, manteca..."
                />
              </div>

              {/* Image URL */}
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt (brief summary)
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief summary of the blog post..."
                />
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your blog post content here. You can use HTML tags for formatting..."
                />
              </div>

              {/* Checkboxes */}
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Featured Post</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Published</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? 'Saving...' : (currentPost ? 'Update Post' : 'Create Post')}
                </button>

                {currentPost && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Blog Posts List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Blog Posts</h2>
            
            {loading ? (
              <p className="text-gray-500">Loading posts...</p>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        post.published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                      {post.featured && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {post.excerpt?.substring(0, 100)}...
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                
                {posts.length === 0 && (
                  <p className="text-gray-500 text-center py-8">
                    No blog posts yet. Create your first post!
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 