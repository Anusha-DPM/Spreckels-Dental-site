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
  keyword?: string
  canonicalUrl?: string
  jsonLdSchema?: string
  breadcrumbActive?: string
  faqSchema?: string
  medicalConditionSchema?: string
}
import { processContentImages } from '../../../lib/processContentImages'
import { uploadImageToCloudinary } from '../../../lib/cloudinary'

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
    keyword: '',
    canonicalUrl: '',
    jsonLdSchema: '',
    breadcrumbActive: '',
    faqSchema: '',
    medicalConditionSchema: '',
    published: false,
    publishDate: new Date().toISOString().split('T')[0]
  })
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [useSimpleEditor, setUseSimpleEditor] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
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
          setError('Firebase is not initialized. Please check your Firebase configuration.')
        } else {
          console.log('✅ Firebase connection verified')
        }
      } catch (err: any) {
        console.error('Firebase connection check failed:', err)
        setError(`Firebase connection check failed: ${err?.message || 'Unknown error'}`)
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
    try {
      const file = e.target.files?.[0]
      if (!file) {
        return
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file')
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size must be less than 5MB')
        return
      }

      setImageFile(file)
      const previewUrl = URL.createObjectURL(file)
      setImagePreview(previewUrl)
      setError('')
    } catch (error) {
      console.error('❌ Error handling image upload:', error)
      setError('Failed to process image. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      let coverImageUrl = formData.imageUrl || formData.coverImage || '';

      // Upload image if file is selected (using Cloudinary)
      if (imageFile) {
        try {
          setUploading(true)
          setError('') // Clear any previous errors
          console.log('📤 Uploading image to Cloudinary...', {
            fileName: imageFile.name,
            fileSize: imageFile.size,
            fileType: imageFile.type
          });
          
          // Upload with progress tracking
          setUploadProgress(0);
          const uploadResult = await uploadImageToCloudinary(imageFile, 'blog-images', (progress) => {
            setUploadProgress(progress);
            console.log(`📊 Upload progress: ${progress.toFixed(1)}%`);
          });
          
          if (!uploadResult || !uploadResult.url) {
            console.error('❌ Upload result is invalid:', uploadResult);
            throw new Error('Upload succeeded but no URL returned. Please try uploading again.');
          }
          
          coverImageUrl = uploadResult.url;
          console.log('✅ Image uploaded successfully to Cloudinary:', coverImageUrl);
          console.log('🔍 Upload result:', uploadResult);
          
          // Validate the URL format
          if (!coverImageUrl || typeof coverImageUrl !== 'string' || coverImageUrl.trim() === '') {
            console.error('❌ Invalid URL format - empty or not a string:', coverImageUrl);
            throw new Error(`Invalid URL returned from upload: ${coverImageUrl}. Please try uploading again.`);
          }
          
          if (!coverImageUrl.startsWith('http://') && !coverImageUrl.startsWith('https://')) {
            console.error('❌ Invalid URL format - does not start with http:', coverImageUrl);
            throw new Error(`Invalid URL format returned: ${coverImageUrl}. Expected URL starting with http:// or https://.`);
          }
          
          // Update formData with the uploaded URL
          setFormData(prev => ({ ...prev, imageUrl: coverImageUrl, coverImage: coverImageUrl }));
          console.log('✅ FormData updated with image URL:', coverImageUrl);
          console.log('✅ Upload completed successfully - URL is valid and ready to save');
        } catch (uploadError: any) {
          console.error('❌ Image upload failed:', uploadError);
          console.error('❌ Upload error details:', {
            message: uploadError?.message,
            name: uploadError?.name
          });
          
          // Provide more helpful error messages
          let errorMessage = uploadError?.message || 'Unknown error';
          let errorDetails = '';
          
          if (errorMessage.includes('Cloudinary is not configured')) {
            errorDetails = '\n\nPlease check your .env.local file and ensure:\n1. NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set\n2. NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET is set\n3. Restart your server after updating .env.local';
          } else if (errorMessage.includes('timeout')) {
            errorDetails = '\n\nTry uploading a smaller image or check your internet connection.';
          } else if (errorMessage.includes('network')) {
            errorDetails = '\n\nPlease check your internet connection and try again.';
          }
          
          setError(`Image upload failed: ${errorMessage}${errorDetails}\n\nYou can still use an image URL instead by pasting a URL in the "Image URL" field.`);
          setUploading(false);
          setLoading(false);
          return;
        } finally {
          setUploading(false)
          setUploadProgress(0)
        }
      }

      // Validate required fields
      if (!formData.title.trim()) {
        throw new Error('Post title is required');
      }
      
      if (!formData.content.trim()) {
        throw new Error('Post content is required');
      }

      // Process content to upload any base64 images to Firebase
      let processedContent = formData.content;
      try {
        processedContent = await processContentImages(formData.content);
      } catch (contentError) {
        console.warn('Content image processing failed, using original content:', contentError);
        // Continue with original content if processing fails
      }

      // Use cover image URL - this is the main image for blog main and detail pages
      // PRIORITY: 1. Uploaded file URL, 2. formData.imageUrl, 3. Extract from content
      let finalCoverImage = '';
      
      // CRITICAL: If an image file was uploaded, coverImageUrl MUST be set and valid
      // This is the highest priority - uploaded files take precedence
      if (imageFile) {
        if (coverImageUrl && coverImageUrl.trim() !== '' && (coverImageUrl.startsWith('http') || coverImageUrl.startsWith('https'))) {
          finalCoverImage = coverImageUrl.trim();
          console.log('✅ Using uploaded cover image URL (from file upload):', finalCoverImage);
        } else {
          // This should not happen if upload succeeded, but log it for debugging
          console.error('⚠️ CRITICAL: Image file was uploaded but coverImageUrl is invalid:', coverImageUrl);
          console.error('⚠️ Upload may have failed silently. coverImageUrl value:', coverImageUrl);
          throw new Error('Image upload failed: The uploaded image did not return a valid URL. Please check your Firebase Storage configuration and try again.');
        }
      }
      // Priority 2: Use imageUrl from form if no file was uploaded
      else if (formData.imageUrl && formData.imageUrl.trim() !== '' && (formData.imageUrl.startsWith('http') || formData.imageUrl.startsWith('https'))) {
        finalCoverImage = formData.imageUrl.trim();
        console.log('✅ Using form imageUrl as cover image:', finalCoverImage);
      }
      // Priority 3: Try to extract from content if no URL provided
      else if (processedContent) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(processedContent, 'text/html');
        const images = doc.querySelectorAll('img');
        console.log(`📸 Found ${images.length} image(s) in content`);
        
        // Find first valid image URL
        for (let i = 0; i < images.length; i++) {
          const img = images[i];
          const imageSrc = img.getAttribute('src');
          console.log(`🔍 Checking image ${i + 1}:`, imageSrc?.substring(0, 100));
          
          if (imageSrc && (imageSrc.startsWith('http') || imageSrc.startsWith('https'))) {
            finalCoverImage = imageSrc;
            console.log('✅ Extracted cover image from content:', finalCoverImage);
            break;
          }
        }
      }
      
      // Ensure we use the uploaded URL if it exists (this is the source of truth for uploaded images)
      // Use coverImageUrl if it was set from upload, otherwise fall back to formData or extracted image
      const finalImageUrl = (imageFile && coverImageUrl) ? coverImageUrl.trim() : (formData.imageUrl?.trim() || finalCoverImage || '');
      
      console.log('🎯 Final cover image for blog main and detail pages:', finalCoverImage);
      console.log('📊 Image source priority check:', {
        imageFileSelected: !!imageFile,
        hasUploadedImage: !!(coverImageUrl && coverImageUrl.trim() !== ''),
        uploadedImageUrl: coverImageUrl,
        hasFormImageUrl: !!(formData.imageUrl && formData.imageUrl.trim() !== ''),
        formImageUrl: formData.imageUrl,
        finalCoverImage: finalCoverImage,
        finalImageUrl: finalImageUrl,
        coverImageLength: finalCoverImage?.length || 0,
        imageUrlLength: finalImageUrl?.length || 0
      });
      console.log('📋 Post data being saved:', {
        title: formData.title.trim(),
        coverImage: finalCoverImage,
        imageUrl: finalImageUrl,
        hasContent: !!processedContent,
        contentLength: processedContent?.length || 0,
      });
      
      // Final validation: if imageFile was selected, we MUST have a valid coverImage URL
      if (imageFile && (!finalCoverImage || !finalCoverImage.startsWith('http'))) {
        console.error('⚠️ CRITICAL ERROR: Image file was selected but no valid cover image URL was obtained!');
        console.error('⚠️ coverImageUrl value:', coverImageUrl);
        console.error('⚠️ finalCoverImage value:', finalCoverImage);
        console.error('⚠️ This means the upload failed or returned an invalid URL.');
        throw new Error('Image upload failed: No valid image URL was obtained from the upload. Please check your Firebase Storage configuration, check the browser console for errors, and try uploading again.');
      }

      // IMPORTANT: coverImage will be displayed on:
      // 1. Blog main page (/blog) - as thumbnail
      // 2. Blog detail page (/blog/[slug]) - as featured image
      
      // Build post data object
      const postData: any = {
        title: formData.title?.trim() || '',
        content: processedContent || '',
        excerpt: formData.excerpt?.trim() || '',
        coverImage: finalCoverImage || '',
        imageUrl: finalImageUrl || '',
        tags: (formData.tags || '').split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag),
        categories: (formData.categories || '').split(',').map((cat: string) => cat.trim()).filter((cat: string) => cat),
        metaTitle: (formData.metaTitle?.trim() || formData.title?.trim() || ''),
        metaDescription: (formData.metaDescription?.trim() || formData.excerpt?.trim() || ''),
        slug: generateSlug(formData.title || ''),
        published: formData.published || false,
        publishDate: formData.published ? formData.publishDate : new Date().toISOString(),
        author: 'Admin'
      };

      // Only include optional SEO fields if they have values
      const keyword = formData.keyword?.trim();
      if (keyword) {
        postData.keyword = keyword;
      }
      
      const canonicalUrl = formData.canonicalUrl?.trim();
      if (canonicalUrl) {
        postData.canonicalUrl = canonicalUrl;
      }
      
      const jsonLdSchema = formData.jsonLdSchema?.trim();
      if (jsonLdSchema) {
        postData.jsonLdSchema = jsonLdSchema;
      }
      
      const breadcrumbActive = formData.breadcrumbActive?.trim();
      if (breadcrumbActive) {
        postData.breadcrumbActive = breadcrumbActive;
      }
      
      const faqSchema = formData.faqSchema?.trim();
      if (faqSchema) {
        postData.faqSchema = faqSchema;
      }
      
      const medicalConditionSchema = formData.medicalConditionSchema?.trim();
      if (medicalConditionSchema) {
        postData.medicalConditionSchema = medicalConditionSchema;
      }
      
      console.log('💾 Final post data with image URLs:', {
        coverImage: postData.coverImage,
        imageUrl: postData.imageUrl,
        hasCoverImage: !!postData.coverImage,
        hasImageUrl: !!postData.imageUrl
      });

      // Try to create blog post
      try {
        console.log('💾 Saving blog post to database...');
        console.log('💾 Post data:', {
          title: postData.title,
          coverImage: postData.coverImage,
          imageUrl: postData.imageUrl,
          slug: postData.slug,
          hasCoverImage: !!postData.coverImage,
          coverImageLength: postData.coverImage?.length || 0
        });
        const postId = await createBlogPost(postData);
        console.log('✅ Blog post saved with ID:', postId);
        console.log('📸 Cover image in saved post:', postData.coverImage);
        console.log('📸 Image URL in saved post:', postData.imageUrl);
        
        if (imageFile && !postData.coverImage) {
          console.warn('⚠️ WARNING: Image was uploaded but coverImage is empty in saved post!');
          setSuccess('Blog post created successfully, but image may not have been saved. Please check the post and re-upload the image if needed.');
        } else {
          setSuccess('Blog post created successfully!');
        }
        
        // Redirect to dashboard after a short delay
        setTimeout(() => {
          router.push('/admin/dashboard');
        }, 2000);
      } catch (dbError: any) {
        console.error('Database error:', dbError);
        
        // If Firebase is not configured, show a temporary success message
        if (dbError.message?.includes('Firebase') || dbError.message?.includes('not initialized')) {
          // Save to localStorage as a temporary fallback for testing
          try {
            const existingPosts = JSON.parse(localStorage.getItem('tempBlogPosts') || '[]');
            const newPost = {
              ...postData,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            };
            existingPosts.unshift(newPost);
            localStorage.setItem('tempBlogPosts', JSON.stringify(existingPosts));
            
            setSuccess('Blog post saved locally! (Firebase not configured - using temporary storage)');
            console.log('Blog post saved to localStorage:', newPost);
          } catch (localError) {
            setSuccess('Blog post prepared successfully! (Firebase not configured - post not saved)');
            console.log('Blog post data that would be saved:', postData);
          }
          
          setTimeout(() => {
            router.push('/admin/dashboard');
          }, 3000);
        } else {
          throw dbError; // Re-throw other database errors
        }
      }
    } catch (err: any) {
      console.error('Blog post creation error:', err);
      
      // Provide more specific error messages
      if (err.message?.includes('Firebase') || err.message?.includes('Firebase Storage is not configured')) {
        if (err.message?.includes('Missing environment variables')) {
          setError(err.message);
        } else {
          setError('Firebase connection error. Please check your Firebase configuration in .env.local file. Ensure all NEXT_PUBLIC_FIREBASE_* environment variables are set.');
        }
      } else if (err.message?.includes('permission')) {
        setError('Permission denied. Please check your Firebase security rules.');
      } else if (err.message?.includes('network')) {
        setError('Network error. Please check your internet connection.');
      } else {
        setError(`Failed to create blog post: ${err.message || 'Unknown error'}`);
      }
    } finally {
      setLoading(false);
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
              suppressHydrationWarning
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
              <ErrorBoundary
                fallback={
                  <div className="p-4 text-center border border-gray-300 rounded-lg">
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
                      console.log('📝 Editor content changed, length:', value.length);
                      // Check if content contains images
                      const parser = new DOMParser();
                      const doc = parser.parseFromString(value, 'text/html');
                      const images = doc.querySelectorAll('img');
                      if (images.length > 0) {
                        console.log(`🖼️ Content contains ${images.length} image(s)`);
                        images.forEach((img, idx) => {
                          const src = img.getAttribute('src');
                          console.log(`  Image ${idx + 1}:`, src?.substring(0, 100));
                        });
                      }
                      setFormData(prev => ({ ...prev, content: value }));
                    } catch (err) {
                      console.error('Error updating content:', err);
                      setError('Error updating content. Please try again.');
                      setUseSimpleEditor(true);
                    }
                  }}
                  placeholder="Start writing your blog post..."
                />
              </ErrorBoundary>
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

          {/* Cover Image - Upload or URL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upload Option */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Cover Image
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Upload an image file (max 5MB). This image will display on the blog main page and detail page.
              </p>
              <div className="space-y-2">
                <input
                  type="file"
                  id="coverImage"
                  name="coverImage"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={uploading}
                />
                <button
                  type="button"
                  onClick={() => {
                    const fileInput = document.getElementById('coverImage') as HTMLInputElement;
                    if (fileInput) {
                      fileInput.click();
                    }
                  }}
                  disabled={uploading}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#441018] text-white text-sm font-semibold rounded-lg hover:bg-[#5a1a2a] cursor-pointer transition-colors duration-200 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? (
                    <div className="w-full">
                      <div className="flex items-center justify-center mb-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-sm">Uploading... {uploadProgress > 0 ? `${Math.round(uploadProgress)}%` : ''}</span>
                      </div>
                      {uploadProgress > 0 && (
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-white h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Choose Image File
                    </>
                  )}
                </button>
                {imagePreview && (
                  <div className="mt-2">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="h-32 w-auto rounded-lg border border-gray-200" 
                      onError={(e) => {
                        console.error('❌ Preview image failed to load');
                        setImagePreview('');
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview('');
                        const fileInput = document.getElementById('coverImage') as HTMLInputElement;
                        if (fileInput) {
                          fileInput.value = '';
                        }
                      }}
                      className="mt-2 text-sm text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {imageFile && (
                  <p className="mt-2 text-xs text-gray-600">
                    Selected: {imageFile.name} ({(imageFile.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                )}
              </div>
            </div>

            {/* URL Option */}
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Or Enter Image URL
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Paste an image URL instead of uploading
              </p>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                suppressHydrationWarning
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
              {formData.imageUrl && !imageFile && (
                <div className="mt-3">
                  <p className="text-xs text-gray-600 mb-2">Preview:</p>
                  <img 
                    src={formData.imageUrl} 
                    alt="Cover preview" 
                    className="h-32 w-auto rounded-lg border border-gray-200 object-cover" 
                    onError={(e) => {
                      console.error('❌ Preview image failed to load');
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <p className="text-xs text-gray-500 mt-2">
                💡 Tip: You can also add images using the image button in the editor above
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
                suppressHydrationWarning
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
                suppressHydrationWarning
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
                  suppressHydrationWarning
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

              <div>
                <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2">
                  Keyword
                </label>
                <input
                  type="text"
                  id="keyword"
                  name="keyword"
                  value={formData.keyword}
                  onChange={handleInputChange}
                  suppressHydrationWarning
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                  placeholder="Primary keyword for SEO"
                />
              </div>

              <div>
                <label htmlFor="canonicalUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Canonical URL
                </label>
                <input
                  type="url"
                  id="canonicalUrl"
                  name="canonicalUrl"
                  value={formData.canonicalUrl}
                  onChange={handleInputChange}
                  suppressHydrationWarning
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent"
                  placeholder="https://example.com/canonical-url"
                />
              </div>
            </div>
          </div>

          {/* Schema Markup */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Schema Markup (Script Fields)</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="jsonLdSchema" className="block text-sm font-medium text-gray-700 mb-2">
                  JSON-LD Schema
                </label>
                <textarea
                  id="jsonLdSchema"
                  name="jsonLdSchema"
                  value={formData.jsonLdSchema}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent font-mono text-sm"
                  placeholder="Paste your JSON-LD schema script code here..."
                />
                <p className="text-xs text-gray-500 mt-1">Paste your JSON-LD schema script code</p>
              </div>

              <div>
                <label htmlFor="breadcrumbActive" className="block text-sm font-medium text-gray-700 mb-2">
                  Breadcrumb Active Schema
                </label>
                <textarea
                  id="breadcrumbActive"
                  name="breadcrumbActive"
                  value={formData.breadcrumbActive}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent font-mono text-sm"
                  placeholder="Paste your breadcrumb schema script code here..."
                />
                <p className="text-xs text-gray-500 mt-1">Paste your breadcrumb schema script code</p>
              </div>

              <div>
                <label htmlFor="faqSchema" className="block text-sm font-medium text-gray-700 mb-2">
                  FAQ Schema
                </label>
                <textarea
                  id="faqSchema"
                  name="faqSchema"
                  value={formData.faqSchema}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent font-mono text-sm"
                  placeholder="Paste your FAQ schema script code here..."
                />
                <p className="text-xs text-gray-500 mt-1">Paste your FAQ schema script code</p>
              </div>

              <div>
                <label htmlFor="medicalConditionSchema" className="block text-sm font-medium text-gray-700 mb-2">
                  Medical Condition Schema
                </label>
                <textarea
                  id="medicalConditionSchema"
                  name="medicalConditionSchema"
                  value={formData.medicalConditionSchema}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent font-mono text-sm"
                  placeholder="Paste your medical condition schema script code here..."
                />
                <p className="text-xs text-gray-500 mt-1">Paste your medical condition schema script code</p>
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
                    suppressHydrationWarning
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
