'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import RichTextEditor from '@/components/RichTextEditor'
import { createBlogPost } from '@/lib/blogDatabase'
import { uploadImageToFirebase, testFirebaseStorage } from '@/lib/firebase'

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

export default function NewPost() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [saveStatus, setSaveStatus] = useState('')
  const [uploadedImage, setUploadedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [post, setPost] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    coverImage: '',
    tags: [],
    metaTitle: '',
    metaDescription: '',
    publishDate: new Date().toISOString().split('T')[0],
    status: 'draft'
  })

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuthenticated')
    if (!isAuthenticated) {
      router.push('/admin/login')
    }
  }, [router])

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Store the file for later upload
      setUploadedImage(file)
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
        setPost(prev => ({
          ...prev,
          coverImage: e.target?.result as string
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTagsChange = (tagsString: string) => {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag)
    setPost(prev => ({ ...prev, tags }))
  }

  const handleSave = async () => {
    setIsLoading(true)
    setSaveStatus('Preparing to save...')
    
    try {
      // Validate required fields
      if (!post.title?.trim()) {
        setSaveStatus('❌ Post title is required')
        setIsLoading(false)
        return
      }
      
      if (!post.content?.trim()) {
        setSaveStatus('❌ Post content is required')
        setIsLoading(false)
        return
      }
      
      // Clear localStorage if it's full
      try {
        const testData = 'test'
        localStorage.setItem('test', testData)
        localStorage.removeItem('test')
      } catch (quotaError) {
        console.warn('localStorage quota exceeded, clearing old data')
        // Clear all blog-related data
        Object.keys(localStorage).forEach(key => {
          if (key.includes('blog') || key.includes('post')) {
            localStorage.removeItem(key)
          }
        })
      }
      
             // Upload image to Firebase Storage if provided
       let imageUrl = post.coverImage || ''
       if (uploadedImage) {
         setSaveStatus('Uploading image to Firebase Storage...')
         console.log('📤 Starting image upload for file:', uploadedImage.name)
         
         try {
           // Validate file size (max 5MB)
           if (uploadedImage.size > 5 * 1024 * 1024) {
             throw new Error('Image file size must be less than 5MB')
           }
           
           // Validate file type
           if (!uploadedImage.type.startsWith('image/')) {
             throw new Error('File must be an image')
           }
           
                       console.log('✅ File validation passed, uploading to Firebase...')
            
            // Try to upload to Firebase Storage
            try {
              const uploadResult = await uploadImageToFirebase(uploadedImage, 'blog-images')
              imageUrl = uploadResult.url
              console.log('✅ Image uploaded successfully:', imageUrl)
              setSaveStatus('✅ Image uploaded successfully!')
            } catch (firebaseError: any) {
              console.warn('Firebase Storage upload failed, using base64 fallback:', firebaseError.message)
              // Fallback to base64 if Firebase Storage fails
              imageUrl = imagePreview
              setSaveStatus('⚠️ Using local image storage (Firebase Storage unavailable)')
            }
         } catch (uploadError: any) {
           console.error('❌ Image upload failed:', uploadError)
           console.error('Upload error details:', {
             message: uploadError?.message,
             code: uploadError?.code,
             stack: uploadError?.stack
           })
           setSaveStatus(`❌ Image upload failed: ${uploadError?.message || 'Unknown error'}. Saving post without image...`)
           // Continue without image
         }
       }

      // Prepare data for Firebase
      const blogData = {
        title: post.title.trim(),
        content: post.content.trim(),
        excerpt: post.excerpt?.trim() || '',
        coverImage: imageUrl,
        imageUrl: imageUrl, // Firebase uses imageUrl
        tags: post.tags || [],
        category: 'General Dentistry', // Default category
        author: 'Admin', // Default author
        published: post.status === 'published', // Convert status to boolean
        featured: false,
        slug: post.slug || generateSlug(post.title),
        metaTitle: post.metaTitle?.trim() || post.title.trim(),
        metaDescription: post.metaDescription?.trim() || post.excerpt?.trim() || '',
        publishDate: post.publishDate || new Date().toISOString()
      }

      console.log('Attempting to save blog post:', blogData)
      setSaveStatus('Saving blog post...')
      
      // Create the blog post
      const newPost = await createBlogPost(blogData)
      
      setSaveStatus('✅ Blog post saved successfully!')
      console.log('✅ Blog post created:', newPost)
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 1000)
    } catch (error: any) {
      console.error('Error saving post:', error)
      setSaveStatus(`❌ Error saving post: ${error?.message || 'Please try again.'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePublish = async () => {
    setPost(prev => ({ ...prev, status: 'published' }))
    await handleSave()
  }

  const handleTestFirebase = async () => {
    console.log('🧪 Testing Firebase Storage...')
    setSaveStatus('Testing Firebase Storage...')
    
    try {
      const result = await testFirebaseStorage()
      if (result.success) {
        setSaveStatus('✅ Firebase Storage test successful!')
        console.log('✅ Firebase Storage is working correctly')
      } else {
        setSaveStatus(`❌ Firebase Storage test failed: ${result.error}`)
        console.error('❌ Firebase Storage test failed:', result.error)
      }
    } catch (error: any) {
      setSaveStatus(`❌ Test error: ${error.message}`)
      console.error('❌ Test error:', error)
    }
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
                <h1 className="text-xl font-semibold text-gray-900">New Blog Post</h1>
                <p className="text-sm text-gray-600">Create and publish your content</p>
              </div>
            </div>
            
                         <div className="flex items-center space-x-4">
               {saveStatus && (
                 <div className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-800">
                   {saveStatus}
                 </div>
               )}
               <button
                 onClick={handleTestFirebase}
                 className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-sm"
               >
                 Test Firebase
               </button>
               <button
                 onClick={handleSave}
                 disabled={isLoading}
                 className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium disabled:opacity-50"
               >
                 {isLoading ? 'Saving...' : 'Save Draft'}
               </button>
               <button
                 onClick={handlePublish}
                 disabled={isLoading}
                 className="bg-[#441018] text-white px-4 py-2 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-medium disabled:opacity-50"
               >
                 {isLoading ? 'Publishing...' : 'Publish'}
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
                onChange={(content) => setPost(prev => ({ ...prev, content }))}
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
                onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
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
              {imagePreview ? (
                <div className="mb-4">
                  <Image
                    src={imagePreview}
                    alt="Cover preview"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => {
                      setImagePreview('')
                      setUploadedImage(null)
                      setPost(prev => ({ ...prev, coverImage: '' }))
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
                    onChange={(e) => setPost(prev => ({ ...prev, status: e.target.value as 'draft' | 'published' }))}
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
                    onChange={(e) => setPost(prev => ({ ...prev, publishDate: e.target.value }))}
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
                    onChange={(e) => setPost(prev => ({ ...prev, metaTitle: e.target.value }))}
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
                    onChange={(e) => setPost(prev => ({ ...prev, metaDescription: e.target.value }))}
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
                    onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
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