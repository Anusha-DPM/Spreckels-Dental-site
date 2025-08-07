// Image utility functions for content management

/**
 * Get the best available image URL from a content item
 * Priority: coverImage > imageUrl > null
 */
export const getContentImageUrl = (item) => {
  if (!item) return null
  
  // Priority: coverImage > imageUrl > null
  if (item.coverImage && item.coverImage.trim()) {
    return item.coverImage.trim()
  }
  if (item.imageUrl && item.imageUrl.trim()) {
    return item.imageUrl.trim()
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
 * Get a default placeholder image for content without images
 */
export const getDefaultImageUrl = (item = null) => {
  // Use a dental-themed placeholder image from Unsplash
  return `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80`
}

/**
 * Get the display image URL for content with fallback
 */
export const getDisplayImageUrl = (item) => {
  const imageUrl = getContentImageUrl(item)
  const hasValidImage = imageUrl && isValidImageUrl(imageUrl)
  return hasValidImage ? imageUrl : getDefaultImageUrl(item)
}

/**
 * Check if content has a valid custom image
 */
export const hasValidCustomImage = (item) => {
  const imageUrl = getContentImageUrl(item)
  return imageUrl && isValidImageUrl(imageUrl)
}

/**
 * Create an image error handler that shows a placeholder
 */
export const createImageErrorHandler = (contentTitle, attemptedUrl, originalData) => {
  return (e) => {
    console.error('Image failed to load for content:', contentTitle)
    console.error('Attempted image URL:', attemptedUrl)
    console.error('Original content image data:', originalData)
    
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
          <p class="text-sm font-medium">${contentTitle}</p>
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
export const createImageLoadHandler = (contentTitle, imageUrl, isDefault = false) => {
  return () => {
    console.log('Image loaded successfully for content:', contentTitle)
    console.log('Image URL:', imageUrl)
    if (isDefault) {
      console.log('Using default image for content:', contentTitle)
    }
  }
}

/**
 * Get image source indicator for debugging
 */
export const getImageSourceIndicator = (item) => {
  if (item.coverImage && item.coverImage.trim()) return 'coverImage'
  if (item.imageUrl && item.imageUrl.trim()) return 'imageUrl'
  return 'default'
}

/**
 * Standardize image data in a content item
 */
export const standardizeContentImageData = (item) => {
  if (!item) return item
  
  const standardized = { ...item }
  
  // Ensure we have a consistent image URL
  const imageUrl = getContentImageUrl(item)
  if (imageUrl) {
    standardized.coverImage = imageUrl
    standardized.imageUrl = imageUrl
  }
  
  return standardized
}

/**
 * Test if an image URL is accessible
 */
export const testImageUrl = async (url) => {
  if (!url || !isValidImageUrl(url)) return false
  
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

/**
 * Get placeholder images for different categories
 */
export const getPlaceholderImages = () => {
  return {
    dental: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80',
    medical: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format&q=80',
    general: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80'
  }
}

/**
 * Get category-specific placeholder image
 */
export const getCategoryPlaceholderImage = (category) => {
  const placeholders = getPlaceholderImages()
  return placeholders[category?.toLowerCase()] || placeholders.general
}
