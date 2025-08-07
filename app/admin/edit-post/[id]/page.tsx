'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import RichTextEditor from '@/components/RichTextEditor'
import { getBlogPostById, updateBlogPost } from '@/lib/blogDatabase'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage: string
  tags: string[]
  metaTitle: string
  metaDescription: string
  publishDate: string
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}

export default function EditPost() {
  const router = useRouter()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [imageLoading, setImageLoading] = useState<boolean>(false)

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuthenticated')
    if (!isAuthenticated) {
      router.push('/admin/login')
      return
    }

    // Load post data
    loadPost()
  }, [router, params.id])

  const loadPost = async () => {
    try {
      setIsLoading(true)
      
      // Try to get post from Firebase first
      try {
        const firebasePost = await getBlogPostById(params.id as string)
        if (firebasePost) {
          setPost(firebasePost)
          // Set image URL if post has a cover image
          if (firebasePost.coverImage && firebasePost.coverImage.startsWith('http')) {
            setImageUrl(firebasePost.coverImage)
          }
          setIsLoading(false)
          return
        }
      } catch (firebaseError) {
        console.log('Firebase post not found, trying localStorage...')
      }

      // Fallback to localStorage
      const savedPosts = localStorage.getItem('blogPosts')
      if (savedPosts) {
        const posts = JSON.parse(savedPosts)
        const foundPost = posts.find((p: BlogPost) => p.id === params.id)
        if (foundPost) {
          setPost(foundPost)
          // Set image URL if post has a cover image
          if (foundPost.coverImage && foundPost.coverImage.startsWith('http')) {
            setImageUrl(foundPost.coverImage)
          }
        } else {
          router.push('/admin/dashboard')
        }
      } else {
        router.push('/admin/dashboard')
      }
    } catch (error) {
      console.error('Error loading post:', error)
      router.push('/admin/dashboard')
    } finally {
      setIsLoading(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleTitleChange = (title: string) => {
    if (post) {
      setPost({
        ...post,
        title,
        slug: generateSlug(title)
      })
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && post) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file (JPG, PNG, SVG, WebP, etc.)')
        return
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('Image file is too large. Please select an image smaller than 10MB.')
        return
      }
      
      // Clear URL field when uploading a file
      setImageUrl('')
      
      const reader = new FileReader()
      reader.onload = (e) => {
        setPost({
          ...post,
          coverImage: e.target?.result as string
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageUrlChange = (url: string) => {
    setImageUrl(url)
    // If user enters a URL, update the post cover image
    if (url.trim() && post) {
      setImageLoading(true)
      setPost({ ...post, coverImage: url.trim() })
      setImageLoading(false)
    }
  }

  const validateImageUrl = (url: string) => {
    if (!url.trim()) return true
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const testImageUrl = async (url: string) => {
    try {
      const response = await fetch(url, { method: 'HEAD' })
      return response.ok
    } catch (error) {
      console.error('Error testing image URL:', error)
      return false
    }
  }

  const handleTagsChange = (tagsString: string) => {
    if (post) {
      const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag)
      setPost({ ...post, tags })
    }
  }

  const handleSave = async () => {
    if (!post) return
    
    setIsSaving(true)
    
    try {
      // Validate required fields
      if (!post.title?.trim()) {
        alert('Post title is required')
        setIsSaving(false)
        return
      }
      
      if (!post.content?.trim()) {
        alert('Post content is required')
        setIsSaving(false)
        return
      }

      // Validate image URL if provided
      if (imageUrl.trim() && !validateImageUrl(imageUrl)) {
        alert('Invalid image URL format')
        setIsSaving(false)
        return
      }
      
      // Prepare update data
      const updateData = {
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        coverImage: post.coverImage,
        tags: post.tags,
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
        publishDate: post.publishDate,
        status: post.status,
        slug: post.slug,
        updatedAt: new Date().toISOString()
      }
      
      // Save to Firebase and localStorage
      await updateBlogPost(post.id, updateData)
      
      alert('Post saved successfully!')
      router.push('/admin/dashboard')
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Error saving post. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const handlePublish = async () => {
    if (post) {
      setPost({ ...post, status: 'published' })
      await handleSave()
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#441018] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link
            href="/admin/dashboard"
            className="bg-[#441018] text-white px-6 py-3 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-medium"
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
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard" className="flex items-center">
                <Image
                  src="/logo.webp"
                  alt="SprekelSpark Dental Logo"
                  width={120}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <div className="border-l border-gray-300 pl-4">
                <h1 className="text-xl font-semibold text-gray-900">Edit Blog Post</h1>
                <p className="text-sm text-gray-600">Update your content</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={handlePublish}
                disabled={isSaving}
                className="bg-[#441018] text-white px-4 py-2 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-medium disabled:opacity-50"
              >
                {isSaving ? 'Publishing...' : 'Update & Publish'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Post Title *
              </label>
              <input
                type="text"
                value={post.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200 text-lg"
                placeholder="Enter your post title..."
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <RichTextEditor
                value={post.content || ''}
                onChange={(content) => setPost({ ...post, content })}
                placeholder="Write your blog post content here..."
              />
            </div>

            {/* Excerpt */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Brief summary of your post (optional)"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cover Image */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image
              </label>
              
              {/* Image URL Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Image URL
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => handleImageUrlChange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200"
                  placeholder="https://example.com/image.jpg"
                />
                <div className="text-xs text-gray-400 mt-1">
                  Examples: Unsplash, Pexels, your website, or any direct image URL
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-gray-500">
                    Enter a direct URL to an image (e.g., from Unsplash, your website, etc.)
                  </p>
                  {imageUrl.trim() && (
                    <button
                      type="button"
                      onClick={async () => {
                        const isValid = await testImageUrl(imageUrl)
                        if (isValid) {
                          alert('✅ Image URL is accessible')
                        } else {
                          alert('❌ Image URL is not accessible')
                        }
                      }}
                      className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      Test URL
                    </button>
                  )}
                </div>
              </div>

              {/* Image Preview */}
              {post.coverImage ? (
                <div className="mb-4">
                  <Image
                    src={post.coverImage}
                    alt="Cover preview"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => {
                      setPost({ ...post, coverImage: '' })
                      setImageUrl('')
                    }}
                    className="mt-2 text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove Image
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="cover-image"
                  />
                  <label htmlFor="cover-image" className="cursor-pointer">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">Click to upload cover image</p>
                    <p className="text-xs text-gray-500 mt-1">Supports: JPG, PNG, SVG, WebP, GIF, etc.</p>
                    <p className="text-xs text-gray-500">Max size: 10MB</p>
                  </label>
                </div>
              )}
            </div>

            {/* Publish Settings */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Publish Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={post.status}
                    onChange={(e) => setPost({ ...post, status: e.target.value as 'draft' | 'published' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    value={post.publishDate}
                    onChange={(e) => setPost({ ...post, publishDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    value={post.tags?.join(', ') || ''}
                    onChange={(e) => handleTagsChange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200"
                    placeholder="Enter tags separated by commas"
                  />
                </div>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={post.metaTitle}
                    onChange={(e) => setPost({ ...post, metaTitle: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200"
                    placeholder="SEO title for search engines"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                  </label>
                  <textarea
                    value={post.metaDescription}
                    onChange={(e) => setPost({ ...post, metaDescription: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Brief description for search engines"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={post.slug}
                    onChange={(e) => setPost({ ...post, slug: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200"
                    placeholder="URL-friendly version of title"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 