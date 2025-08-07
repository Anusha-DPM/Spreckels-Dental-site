// Image utility functions for blog posts

/**
 * Get the best available image URL from a blog post
 * Priority: coverImage > imageUrl > null
 */
export const getPostImageUrl = (post) => {
  if (!post) return null
  
  // Priority: coverImage > imageUrl > null
  if (post.coverImage && post.coverImage.trim()) {
    return post.coverImage.trim()
  }
  if (post.imageUrl && post.imageUrl.trim()) {
    return post.imageUrl.trim()
  }
  return null
}

/**
 * Validate if a URL is a valid image URL
 */
export const isValidImageUrl = (url) => {
  if (!url || !url.trim()) return false
  
  try {
    const urlObj = new URL(url)
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
  } catch {
    return false
  }
}

/**
 * Get a default placeholder image for posts without images
 */
export const getDefaultImageUrl = (post = null) => {
  // Use a dental-themed placeholder image from Unsplash
  return `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80`
}

/**
 * Get the display image URL for a post with fallback
 */
export const getDisplayImageUrl = (post) => {
  const imageUrl = getPostImageUrl(post)
  const hasValidImage = imageUrl && isValidImageUrl(imageUrl)
  return hasValidImage ? imageUrl : getDefaultImageUrl(post)
}

/**
 * Check if a post has a valid custom image
 */
export const hasValidCustomImage = (post) => {
  const imageUrl = getPostImageUrl(post)
  return imageUrl && isValidImageUrl(imageUrl)
}

/**
 * Create an image error handler that shows a placeholder
 */
export const createImageErrorHandler = (postTitle, attemptedUrl, originalData) => {
  return (e) => {
    console.error('Image failed to load for post:', postTitle)
    console.error('Attempted image URL:', attemptedUrl)
    console.error('Original post image data:', originalData)
    
    // Hide the failed image and show a placeholder
    const target = e.target
    if (target) {
      target.style.display = 'none'
      
      // Create a placeholder div
      const placeholder = document.createElement('div')
      placeholder.className = 'absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center'
      placeholder.innerHTML = `
        <div class="text-center text-gray-500">
          <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-sm font-medium">${postTitle}</p>
          <p class="text-xs text-gray-400">Image not available</p>
        </div>
      `
      target.parentNode?.appendChild(placeholder)
    }
  }
}

/**
 * Create an image load handler for logging
 */
export const createImageLoadHandler = (postTitle, imageUrl, isDefault = false) => {
  return () => {
    console.log('Image loaded successfully for post:', postTitle)
    console.log('Image URL:', imageUrl)
    if (isDefault) {
      console.log('Using default image for post:', postTitle)
    }
  }
}

/**
 * Get image source indicator text
 */
export const getImageSourceIndicator = (post) => {
  if (!hasValidCustomImage(post)) {
    return 'Default'
  }
  return null
}

/**
 * Standardize image data in a blog post
 * This ensures both coverImage and imageUrl fields are properly set
 */
export const standardizePostImageData = (post) => {
  if (!post) return post
  
  const standardized = { ...post }
  
  // If we have a valid image URL, ensure it's in both fields
  const imageUrl = getPostImageUrl(post)
  if (imageUrl && isValidImageUrl(imageUrl)) {
    standardized.coverImage = imageUrl
    standardized.imageUrl = imageUrl
  } else {
    // Clear invalid image URLs
    standardized.coverImage = ''
    standardized.imageUrl = ''
  }
  
  return standardized
}

/**
 * Test if an image URL is accessible
 */
export const testImageUrl = async (url) => {
  if (!isValidImageUrl(url)) return false
  
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch (error) {
    console.error('Error testing image URL:', error)
    return false
  }
}

/**
 * Get a list of reliable placeholder images for different categories
 */
export const getPlaceholderImages = () => {
  return {
    dental: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80',
    health: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format&q=80',
    technology: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&auto=format&q=80',
    general: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80'
  }
}

/**
 * Get a category-specific placeholder image
 */
export const getCategoryPlaceholderImage = (category) => {
  const placeholders = getPlaceholderImages()
  const normalizedCategory = category?.toLowerCase() || 'general'
  
  if (normalizedCategory.includes('dental') || normalizedCategory.includes('health')) {
    return placeholders.dental
  } else if (normalizedCategory.includes('tech') || normalizedCategory.includes('digital')) {
    return placeholders.technology
  } else if (normalizedCategory.includes('health') || normalizedCategory.includes('medical')) {
    return placeholders.health
  }
  
  return placeholders.general
}
