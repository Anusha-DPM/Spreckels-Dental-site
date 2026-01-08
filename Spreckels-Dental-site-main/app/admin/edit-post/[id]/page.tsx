'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import RichTextEditor from '../../../../components/RichTextEditor'
import { getBlogPostById, updateBlogPost, generateSlug } from '../../../../lib/blogDatabase'

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

import { uploadImageToFirebase } from '../../../../lib/firebase'
import { processContentImages } from '../../../../lib/processContentImages'

export default function EditPost() {
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
  
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [originalPost, setOriginalPost] = useState<BlogPost | null>(null)
  const router = useRouter()
  const params = useParams()
  const postId = params.id as string

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuthenticated')
    if (!isAuthenticated) {
      router.push('/admin/login')
      return
    }

    loadPost()
  }, [postId, router])

  const loadPost = async () => {
    try {
      setLoading(true)
      const post = await getBlogPostById(postId)
      
      if (!post) {
        setError('Post not found')
        return
      }

      const blogPost = post as BlogPost
      setOriginalPost(blogPost)
      setFormData({
        title: blogPost.title,
        content: blogPost.content,
        excerpt: blogPost.excerpt || '',
        coverImage: blogPost.coverImage || '',
        imageUrl: blogPost.imageUrl || '',
        tags: blogPost.tags?.join(', ') || '',
        categories: blogPost.categories?.join(', ') || '',
        metaTitle: blogPost.metaTitle || '',
        metaDescription: blogPost.metaDescription || '',
        published: blogPost.published,
        publishDate: blogPost.published ? blogPost.publishDate.split('T')[0] : new Date().toISOString().split('T')[0]
      })
      
      // Set image preview if cover image exists
      if (blogPost.coverImage) {
        setImagePreview(blogPost.coverImage)
      }


    } catch (err) {
      setError('Failed to load post')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

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
      console.log('📸 Cover image file selected:', file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSuccess('')

    try {
      let coverImageUrl = formData.coverImage || formData.imageUrl || ''

      // Upload cover image if file is selected (for blog main page and detail page)
      if (imageFile) {
        try {
          console.log('📤 Uploading cover image file...')
          const uploadResult = await uploadImageToFirebase(imageFile, 'blog-images')
          coverImageUrl = uploadResult.url
          console.log('✅ Cover image uploaded successfully:', coverImageUrl)
        } catch (uploadError) {
          console.warn('❌ Cover image upload failed, continuing without image:', uploadError)
          // Continue without the image upload - use existing coverImage or imageUrl
          coverImageUrl = formData.coverImage || formData.imageUrl || ''
        }
      }

      // Process content to upload any base64 images to Firebase
      let processedContent = formData.content
      try {
        processedContent = await processContentImages(formData.content)
      } catch (contentError) {
        console.warn('Content image processing failed, using original content:', contentError)
        // Continue with original content if processing fails
      }

      // Prioritize uploaded cover image - this is the main image for blog main and detail pages
      let finalCoverImage = coverImageUrl
      
      // IMPORTANT: If image was uploaded, use it as cover image (for blog main and detail pages)
      if (imageFile && coverImageUrl) {
        finalCoverImage = coverImageUrl
        console.log('✅ Using uploaded cover image for blog main and detail pages:', finalCoverImage)
      } else {
        // If no cover image was uploaded, try to extract from content
        if (!finalCoverImage && processedContent) {
          const parser = new DOMParser()
          const doc = parser.parseFromString(processedContent, 'text/html')
          const images = doc.querySelectorAll('img')
          console.log(`📸 Found ${images.length} image(s) in content`)
          
          // Find first valid image URL
          for (let i = 0; i < images.length; i++) {
            const img = images[i]
            const imageSrc = img.getAttribute('src')
            console.log(`🔍 Checking image ${i + 1}:`, imageSrc?.substring(0, 100))
            
            if (imageSrc && (imageSrc.startsWith('http') || imageSrc.startsWith('https'))) {
              finalCoverImage = imageSrc
              console.log('✅ Extracted cover image from content:', finalCoverImage)
              break
            }
          }
        }
        
        // Use imageUrl as final fallback
        if (!finalCoverImage && formData.imageUrl) {
          finalCoverImage = formData.imageUrl
          console.log('✅ Using imageUrl as cover image:', finalCoverImage)
        }
      }
      
      console.log('🎯 Final cover image for blog main and detail pages:', finalCoverImage)

      // IMPORTANT: coverImage will be displayed on:
      // 1. Blog main page (/blog) - as thumbnail
      // 2. Blog detail page (/blog/[slug]) - as featured image
      const updateData: Partial<BlogPost> = {
        title: formData.title.trim(),
        content: processedContent,
        excerpt: formData.excerpt.trim(),
        coverImage: finalCoverImage || '', // DISPLAYS ON BLOG MAIN PAGE AND DETAIL PAGE
        imageUrl: formData.imageUrl.trim() || finalCoverImage || '', // Fallback for compatibility
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        categories: formData.categories.split(',').map(cat => cat.trim()).filter(cat => cat),
        metaTitle: formData.metaTitle.trim() || formData.title.trim(),
        metaDescription: formData.metaDescription.trim() || formData.excerpt.trim(),
        slug: generateSlug(formData.title),
        published: formData.published,
        publishDate: formData.published ? formData.publishDate : new Date().toISOString()
      }

      await updateBlogPost(postId, updateData)
      setSuccess('Blog post updated successfully!')
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 2000)

    } catch (err: any) {
      console.error('Blog post update error:', err)
      
      // Provide more specific error messages
      let errorMessage = 'Failed to update blog post. Please try again.'
      
      if (err.message?.includes('Firebase')) {
        errorMessage = 'Firebase connection error. Please check your Firebase configuration.'
      } else if (err.message?.includes('permission')) {
        errorMessage = 'Permission denied. Please check your Firebase security rules.'
      } else if (err.message?.includes('network')) {
        errorMessage = 'Network error. Please check your internet connection.'
      } else if (err.message?.includes('size') || err.message?.includes('too large')) {
        errorMessage = 'Content is too large. Please reduce image sizes or content length.'
      } else if (err.message) {
        errorMessage = `Failed to update blog post: ${err.message}`
      }
      
      setError(errorMessage)
    } finally {
      setSaving(false)
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#441018] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    )
  }

  if (error && !originalPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">❌</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Post Not Found</h3>
          <p className="text-gray-500 mb-4">{error}</p>
          <Link
            href="/admin/dashboard"
            className="bg-[#441018] text-white px-6 py-2 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    )
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
              <h1 className="text-2xl font-bold text-gray-900">Edit Post</h1>
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
            <RichTextEditor
              value={formData.content}
              onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
              placeholder="Start writing your blog post..."
            />
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

          {/* Cover Image Upload - for blog main page and detail page */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image (Upload) *
              </label>
              <p className="text-xs text-gray-500 mb-2">
                This image will display on the blog main page and blog detail page
              </p>
              <input
                type="file"
                id="coverImage"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
              />
              {imagePreview && (
                <div className="mt-2">
                  <img src={imagePreview} alt="Preview" className="h-32 w-auto rounded-lg border border-gray-200" />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Image URL (Alternative)
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Or enter an image URL instead of uploading
              </p>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-xs text-gray-500 mt-1">
                You can also upload images using the image button in the editor above
              </p>
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
              disabled={saving}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Draft'}
            </button>
            <button
              type="button"
              onClick={handlePublish}
              disabled={saving}
              className="px-6 py-2 bg-[#441018] text-white rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 disabled:opacity-50"
            >
              {saving ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}
