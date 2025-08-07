'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import RichTextEditor from '@/components/RichTextEditor'
import { createBlogPost } from '@/lib/blogDatabase'
import { uploadImageToFirebase, testSmallImageUpload } from '@/lib/firebase'

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
  const [firebaseImageUrl, setFirebaseImageUrl] = useState<string>('')
  const [uploadProgress, setUploadProgress] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [imageLoading, setImageLoading] = useState<boolean>(false)
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
       // Validate file type
       if (!file.type.startsWith('image/')) {
         alert('Please select a valid image file (JPG, PNG, SVG, WebP, etc.)')
         return
       }
       
       // Validate file size (max 10MB before compression)
       if (file.size > 10 * 1024 * 1024) {
         alert('Image file is too large. Please select an image smaller than 10MB.')
         return
       }
       
       console.log('📁 Image selected:', {
         name: file.name,
         type: file.type,
         size: file.size,
         sizeInMB: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
       })
       
       // Clear URL field when uploading a file
       setImageUrl('')
       
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

  const handleImageUrlChange = (url: string) => {
    setImageUrl(url)
    // If user enters a URL, clear the uploaded image
    if (url.trim()) {
      setUploadedImage(null)
      setImagePreview('')
      setFirebaseImageUrl('')
      setImageLoading(true)
      setPost(prev => ({ ...prev, coverImage: url.trim() }))
    } else {
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

  const getImageWithProxy = (url: string) => {
    // For CORS issues, we can use a proxy service
    // This is a simple approach - in production you might want to use your own proxy
    if (url.startsWith('http')) {
      return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`
    }
    return url
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
      
                                          // Step 1: Handle image (either URL or upload)
       let finalImageUrl = post.coverImage || ''
       
       // If user provided an image URL, use it
       if (imageUrl.trim()) {
         if (!validateImageUrl(imageUrl)) {
           setSaveStatus('❌ Invalid image URL format')
           setIsLoading(false)
           return
         }
         finalImageUrl = imageUrl.trim()
         console.log('🔗 Using provided image URL:', finalImageUrl)
       }
       // If user uploaded an image file, upload to Firebase
       else if (uploadedImage) {
          setSaveStatus('Processing image...')
          console.log('📤 Starting image processing for file:', uploadedImage.name)
          
                     // Validate file type
           if (!uploadedImage.type.startsWith('image/')) {
             console.warn('❌ Invalid file type, using base64 fallback')
             finalImageUrl = imagePreview
             setSaveStatus('⚠️ Invalid file type, using local storage')
           }
           else {
                         console.log('✅ File validation passed, uploading to Firebase Storage...')
             setSaveStatus('Uploading image to Firebase Storage...')
             setUploadProgress('Compressing image...')
            
                         try {
               console.log('🔥 Step 1: Uploading image to Firebase Storage...')
               setUploadProgress('Uploading to Firebase Storage...')
               const uploadResult = await uploadImageToFirebase(uploadedImage, 'blog-images')
               finalImageUrl = uploadResult.url
                                              console.log('✅ Step 1 Complete: Image uploaded to Firebase Storage:', finalImageUrl)
                 console.log('📊 Compression stats:', {
                   originalSize: uploadResult.originalSize,
                   compressedSize: uploadResult.compressedSize,
                   savings: ((uploadResult.originalSize - uploadResult.compressedSize) / uploadResult.originalSize * 100).toFixed(1) + '%'
                 })
                 setFirebaseImageUrl(finalImageUrl)
               setUploadProgress('')
               setSaveStatus('✅ Image uploaded to Firebase Storage successfully!')
                         } catch (firebaseError: any) {
               console.error('❌ Firebase Storage upload failed:', firebaseError.message)
               console.error('Firebase error details:', {
                 code: firebaseError.code,
                 message: firebaseError.message,
                 stack: firebaseError.stack
               })
               
               // Check if it's a timeout or network error
               if (firebaseError.message.includes('timeout') || firebaseError.message.includes('network')) {
                 setSaveStatus(`⚠️ Image upload timed out. Would you like to continue without the image or try again?`)
                 
                 // Ask user if they want to continue without image
                 const continueWithoutImage = confirm(
                   'Image upload failed due to timeout. Would you like to save the blog post without the image? You can add it later.'
                 )
                 
                                   if (continueWithoutImage) {
                    console.log('✅ User chose to continue without image')
                    finalImageUrl = '' // No image URL
                    setSaveStatus('Continuing without image...')
                  } else {
                   setSaveStatus('❌ Image upload failed. Please try with a smaller image.')
                   setIsLoading(false)
                   return // Stop here - don't save blog post
                 }
               } else {
                 // For other errors, don't proceed
                 setSaveStatus(`❌ Image upload failed: ${firebaseError.message}`)
                 setIsLoading(false)
                 return // Stop here - don't save blog post if image upload fails
               }
             }
          }
        }

                              // Step 2: Save blog post to Firestore with final image URL
         const blogData = {
           title: post.title.trim(),
           content: post.content.trim(),
           excerpt: post.excerpt?.trim() || '',
           coverImage: finalImageUrl, // This is now the final image URL (Firebase or external)
           imageUrl: finalImageUrl, // Final image URL
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

                 console.log('📝 Step 2: Saving blog post to Firestore with final image URL')
         console.log('🔗 Image URL being saved:', finalImageUrl)
        console.log('📊 Blog data to save:', blogData)
        setSaveStatus('Saving blog post to Firestore...')
        
        try {
          // Create the blog post in Firestore
          const newPost = await createBlogPost(blogData)
          
          setSaveStatus('✅ Blog post saved to Firestore successfully!')
          console.log('✅ Step 2 Complete: Blog post created in Firestore:', newPost)
          console.log('🎉 Process completed: Image uploaded to Firebase Storage + Blog saved to Firestore')
          
          // Redirect to dashboard after a short delay
          setTimeout(() => {
            router.push('/admin/dashboard')
          }, 1000)
        } catch (blogError: any) {
          console.error('❌ Error saving blog post to Firestore:', blogError)
          setSaveStatus(`❌ Error saving blog post: ${blogError?.message || 'Please try again.'}`)
          throw blogError // Re-throw to be caught by outer catch block
        }
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

         // Test function to verify server-side Firebase Storage with compression
    const testFirebaseStorage = async () => {
      console.log('🧪 Testing server-side Firebase Storage with compression...')
      setSaveStatus('Testing server-side Firebase Storage...')
      
      try {
        // Create a larger test image to test compression
        const canvas = document.createElement('canvas')
        canvas.width = 2000
        canvas.height = 1500
        const ctx = canvas.getContext('2d')
        if (ctx) {
          // Create a gradient background
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
          gradient.addColorStop(0, '#ff6b6b')
          gradient.addColorStop(0.5, '#4ecdc4')
          gradient.addColorStop(1, '#45b7d1')
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          
          // Add some text
          ctx.fillStyle = '#fff'
          ctx.font = 'bold 48px Arial'
          ctx.textAlign = 'center'
          ctx.fillText('Test Image', canvas.width / 2, canvas.height / 2)
          ctx.font = '24px Arial'
          ctx.fillText('Testing Server-Side Upload', canvas.width / 2, canvas.height / 2 + 50)
        }
        
        canvas.toBlob(async (blob) => {
          if (blob) {
            const testFile = new File([blob], 'test-image-large.png', { type: 'image/png' })
            console.log('📊 Test file size:', testFile.size, 'bytes')
            
            try {
              const result = await uploadImageToFirebase(testFile, 'test-uploads')
              setSaveStatus('✅ Server-side Firebase Storage test successful!')
              console.log('✅ Server-side Firebase Storage is working:', result)
              console.log('📊 Compression test results:', {
                originalSize: result.originalSize,
                compressedSize: result.compressedSize,
                savings: ((result.originalSize - result.compressedSize) / result.originalSize * 100).toFixed(1) + '%'
              })
            } catch (error: any) {
              setSaveStatus(`❌ Server-side Firebase Storage test failed: ${error.message}`)
              console.error('❌ Server-side Firebase Storage test failed:', error)
            }
          }
        }, 'image/png', 0.9) // High quality to test compression
      } catch (error: any) {
        setSaveStatus(`❌ Test error: ${error.message}`)
        console.error('❌ Test error:', error)
      }
    }

       // Test small image upload
    const testSmallImage = async () => {
      console.log('🧪 Testing small image upload...')
      setSaveStatus('Testing small image upload...')
      
      try {
        const result = await testSmallImageUpload()
        if (result && result.success) {
          setSaveStatus('✅ Small image upload test successful!')
          console.log('✅ Small image upload is working:', result)
        } else {
          setSaveStatus(`❌ Small image upload test failed: ${result?.error || 'Unknown error'}`)
          console.error('❌ Small image upload test failed:', result?.error)
        }
      } catch (error: any) {
        setSaveStatus(`❌ Small image test error: ${error.message}`)
        console.error('❌ Small image test error:', error)
      }
    }

    // Test Firebase server-side initialization
    const testFirebaseServer = async () => {
      console.log('🧪 Testing Firebase server-side initialization...')
      setSaveStatus('Testing Firebase server...')
      
      try {
        const response = await fetch('/api/test-firebase')
        const result = await response.json()
        
        if (result.success) {
          setSaveStatus('✅ Firebase server test successful!')
          console.log('✅ Firebase server is working:', result)
        } else {
          setSaveStatus(`❌ Firebase server test failed: ${result.error}`)
          console.error('❌ Firebase server test failed:', result)
        }
      } catch (error: any) {
        setSaveStatus(`❌ Firebase server test error: ${error.message}`)
        console.error('❌ Firebase server test error:', error)
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
                    onClick={testFirebaseStorage}
                    className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-sm"
                  >
                    Test Server Upload
                  </button>
                                   <button
                    onClick={testFirebaseServer}
                    className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium text-sm"
                  >
                    Test Firebase Server
                  </button>
                  <button
                    onClick={testSmallImage}
                    className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
                  >
                    Test Small Image
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
               
               {/* Image URL Field */}
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
                          setSaveStatus('Testing image URL...')
                          const isValid = await testImageUrl(imageUrl)
                          if (isValid) {
                            setSaveStatus('✅ Image URL is accessible')
                          } else {
                            setSaveStatus('❌ Image URL is not accessible')
                          }
                          setTimeout(() => setSaveStatus(''), 3000)
                        }}
                        className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      >
                        Test URL
                      </button>
                    )}
                  </div>
               </div>
               
               <div className="text-center text-sm text-gray-500 mb-4">- OR -</div>
               {(imagePreview || imageUrl) ? (
                 <div className="mb-4">
                   {imageLoading && imageUrl && (
                     <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                       <div className="text-gray-500 text-sm">Loading image...</div>
                     </div>
                   )}
                   <Image
                     src={imageUrl ? getImageWithProxy(imageUrl) : imagePreview}
                     alt="Cover preview"
                     width={300}
                     height={200}
                     className={`w-full h-48 object-cover rounded-lg ${imageLoading && imageUrl ? 'hidden' : ''}`}
                     onLoad={() => {
                       if (imageUrl) {
                         setImageLoading(false)
                       }
                     }}
                     onError={(e) => {
                       console.error('Image failed to load:', imageUrl || imagePreview)
                       setImageLoading(false)
                       // Fallback to a placeholder or show error
                       const target = e.target as HTMLImageElement
                       target.style.display = 'none'
                       // Show error message
                       const errorDiv = document.createElement('div')
                       errorDiv.className = 'w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm'
                       errorDiv.innerHTML = '❌ Image failed to load<br><span class="text-xs">Check URL or try a different image</span>'
                       target.parentNode?.appendChild(errorDiv)
                     }}
                   />
                   
                                      {/* Image Info */}
                   {uploadedImage && (
                     <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                       <div className="text-xs text-gray-600 space-y-1">
                         <div><strong>File:</strong> {uploadedImage.name}</div>
                         <div><strong>Type:</strong> {uploadedImage.type}</div>
                         <div><strong>Size:</strong> {(uploadedImage.size / (1024 * 1024)).toFixed(2)} MB</div>
                         {firebaseImageUrl ? (
                           <>
                             <div><strong>Status:</strong> <span className="text-green-600">✅ Uploaded to Firebase Storage</span></div>
                             <div><strong>Firebase URL:</strong> <span className="text-blue-600 break-all">{firebaseImageUrl}</span></div>
                           </>
                         ) : uploadProgress ? (
                           <div><strong>Status:</strong> <span className="text-yellow-600">⏳ {uploadProgress}</span></div>
                         ) : (
                           <div><strong>Status:</strong> <span className="text-blue-600">Ready to upload to Firebase Storage</span></div>
                         )}
                       </div>
                     </div>
                   )}
                   
                   {imageUrl && !uploadedImage && (
                     <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                       <div className="text-xs text-gray-600 space-y-1">
                         <div><strong>Source:</strong> <span className="text-green-600">External URL</span></div>
                         <div><strong>URL:</strong> <span className="text-blue-600 break-all">{imageUrl}</span></div>
                       </div>
                     </div>
                   )}
                   
                   <button
                     onClick={() => {
                       setImagePreview('')
                       setUploadedImage(null)
                       setFirebaseImageUrl('')
                       setImageUrl('')
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
                     <p className="text-xs text-gray-500 mt-1">Supports: JPG, PNG, SVG, WebP, GIF, etc.</p>
                     <p className="text-xs text-gray-500">Max size: 10MB (will be compressed to 500KB)</p>
                     <p className="text-xs text-yellow-600 mt-1">💡 Tip: Smaller images upload faster!</p>
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