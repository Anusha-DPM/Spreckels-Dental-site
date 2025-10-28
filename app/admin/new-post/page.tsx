'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import RichTextEditor from '../../../components/RichTextEditor'
import SimpleTextEditor from '../../../components/SimpleTextEditor'
import ErrorBoundary from '../../../components/ErrorBoundary'
import { createBlogPost, generateSlug } from '../../../lib/blogDatabase'

// Define BlogPost type locally since it's not exported from the JS file
interface BlogPost {
  id?: string
  title: string
  content: string
  excerpt?: string
  coverImage?: string
  imageUrl?: string
  tags: string[]
  categories: string[]
  metaTitle: string
  metaDescription: string
  slug: string
  published: boolean
  publishDate: string
  createdAt: string
  updatedAt: string
  author?: string
}
import { uploadImageToFirebase } from '../../../lib/firebase'

export default function NewPost() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    coverImage: '',
    imageUrl: '',
    tags: '',
    categories: '',
    metaTitle: '',
    metaDescription: '',
    published: false,
    publishDate: new Date().toISOString().split('T')[0]
  })
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [useSimpleEditor, setUseSimpleEditor] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuthenticated')
    if (!isAuthenticated) {
      router.push('/admin/login')
      return
    }

    // Check Firebase connection
    const checkFirebaseConnection = async () => {
      try {
        const { db } = await import('../../../lib/firebase')
        if (!db) {
          setError('Firebase is not connected. Please check your .env.local configuration.')
        }
      } catch (err) {
        console.error('Firebase connection check failed:', err)
        setError('Firebase connection failed. Please check your configuration.')
      }
    }

    checkFirebaseConnection()
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      let coverImageUrl = formData.coverImage

      // Upload image if file is selected
      if (imageFile) {
        try {
          const uploadResult = await uploadImageToFirebase(imageFile, 'blog-images')
          coverImageUrl = uploadResult.url
        } catch (uploadError) {
          console.warn('Image upload failed, continuing without image:', uploadError)
          // Continue without the image upload - use existing coverImage or imageUrl
          coverImageUrl = formData.coverImage || formData.imageUrl || ''
        }
      }

             // Validate required fields
       if (!formData.title.trim()) {
         throw new Error('Post title is required')
       }
       
       if (!formData.content.trim()) {
         throw new Error('Post content is required')
       }

       const postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'> = {
         title: formData.title.trim(),
         content: formData.content.trim(),
         excerpt: formData.excerpt.trim(),
         coverImage: coverImageUrl,
         imageUrl: formData.imageUrl.trim(),
         tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
         categories: formData.categories.split(',').map(cat => cat.trim()).filter(cat => cat),
         metaTitle: formData.metaTitle.trim() || formData.title.trim(),
         metaDescription: formData.metaDescription.trim() || formData.excerpt.trim(),
         slug: generateSlug(formData.title),
         published: formData.published,
         publishDate: formData.published ? formData.publishDate : new Date().toISOString(),
         author: 'Admin'
       }

             // Try to create blog post
       try {
         await createBlogPost(postData)
         setSuccess('Blog post created successfully!')
         
         // Redirect to dashboard after a short delay
         setTimeout(() => {
           router.push('/admin/dashboard')
         }, 2000)
       } catch (dbError: any) {
         console.error('Database error:', dbError)
         
         // If Firebase is not configured, show a temporary success message
         if (dbError.message?.includes('Firebase') || dbError.message?.includes('not initialized')) {
           // Save to localStorage as a temporary fallback for testing
           try {
             const existingPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]')
             const newPost = {
               ...postData,
               id: Date.now().toString(),
               createdAt: new Date().toISOString(),
               updatedAt: new Date().toISOString()
             }
             existingPosts.unshift(newPost)
             localStorage.setItem('tempBlogPosts', JSON.stringify(existingPosts))
             
             setSuccess('Blog post saved locally! (Firebase not configured - using temporary storage)')
             console.log('Blog post saved to localStorage:', newPost)
           } catch (localError) {
             setSuccess('Blog post prepared successfully! (Firebase not configured - post not saved)')
             console.log('Blog post data that would be saved:', postData)
           }
           
           setTimeout(() => {
             router.push('/admin/dashboard')
           }, 3000)
         } else {
           throw dbError // Re-throw other database errors
         }
       }

    } catch (err: any) {
      console.error('Blog post creation error:', err)
      
      // Provide more specific error messages
      if (err.message?.includes('Firebase')) {
        setError('Firebase connection error. Please check your Firebase configuration in .env.local file.')
      } else if (err.message?.includes('permission')) {
        setError('Permission denied. Please check your Firebase security rules.')
      } else if (err.message?.includes('network')) {
        setError('Network error. Please check your internet connection.')
      } else {
        setError(`Failed to create blog post: ${err.message || 'Unknown error'}`)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSaveDraft = async () => {
    setFormData(prev => ({ ...prev, published: false }))
    await handleSubmit(new Event('submit') as any)
  }

  const handlePublish = async () => {
    setFormData(prev => ({ ...prev, published: true }))
    await handleSubmit(new Event('submit') as any)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard" className="text-gray-600 hover:text-gray-900">
                ← Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Create New Post</h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <motion.div 
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div 
            className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {success}
          </motion.div>
        )}

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Post Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
              placeholder="Enter your post title..."
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            {!useSimpleEditor ? (
              <div className="border border-gray-300 rounded-lg">
                <ErrorBoundary
                  fallback={
                    <div className="p-4 text-center">
                      <p className="text-red-600 mb-2">Rich text editor failed to load</p>
                      <button
                        onClick={() => setUseSimpleEditor(true)}
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Switch to simple editor
                      </button>
                    </div>
                  }
                >
                  <RichTextEditor
                    value={formData.content}
                    onChange={(value) => {
                      try {
                        setFormData(prev => ({ ...prev, content: value }))
                      } catch (err) {
                        console.error('Error updating content:', err)
                        setError('Error updating content. Please try again.')
                        setUseSimpleEditor(true)
                      }
                    }}
                    placeholder="Start writing your blog post..."
                  />
                </ErrorBoundary>
              </div>
            ) : (
              <div>
                <SimpleTextEditor
                  value={formData.content}
                  onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
                  placeholder="Start writing your blog post..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Using simple text editor. You can use HTML tags for formatting.
                </p>
              </div>
            )}
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setUseSimpleEditor(!useSimpleEditor)}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                {useSimpleEditor ? 'Switch to Rich Editor' : 'Switch to Simple Editor'}
              </button>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
              placeholder="Brief summary of your post..."
            />
          </div>

          {/* Image Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image (Upload)
              </label>
              <input
                type="file"
                id="coverImage"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
              />
              {imagePreview && (
                <div className="mt-2">
                  <img src={imagePreview} alt="Preview" className="h-32 w-auto rounded-lg" />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          {/* Tags and Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                placeholder="tag1, tag2, tag3"
              />
              <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
            </div>

            <div>
              <label htmlFor="categories" className="block text-sm font-medium text-gray-700 mb-2">
                Categories
              </label>
              <input
                type="text"
                id="categories"
                name="categories"
                value={formData.categories}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                placeholder="category1, category2"
              />
              <p className="text-xs text-gray-500 mt-1">Separate categories with commas</p>
            </div>
          </div>

          {/* Meta Data */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  id="metaTitle"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                  placeholder="SEO title for search engines"
                />
              </div>

              <div>
                <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  id="metaDescription"
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                  placeholder="Brief description for search engines"
                />
              </div>
            </div>
          </div>

          {/* Publish Settings */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Publish Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="published"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#441018] focus:ring-[#441018] border-gray-300 rounded"
                />
                <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                  Publish immediately
                </label>
              </div>

              {formData.published && (
                <div>
                  <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    id="publishDate"
                    name="publishDate"
                    value={formData.publishDate}
                    onChange={handleInputChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <Link
              href="/admin/dashboard"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </Link>
            <button
              type="button"
              onClick={handleSaveDraft}
              disabled={loading}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Draft'}
            </button>
            <button
              type="button"
              onClick={handlePublish}
              disabled={loading}
              className="px-6 py-2 bg-[#441018] text-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}
