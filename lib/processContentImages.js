/**
 * Process content HTML to extract base64 images, upload them to Firebase Storage, and replace with URLs
 * This prevents Firestore document size limit issues (1MB max)
 */

/**
 * Convert base64 data URL to File object
 */
function dataURLtoFile(dataurl, filename) {
  try {
    const arr = dataurl.split(',')
    if (arr.length < 2) {
      throw new Error('Invalid data URL format')
    }
    
    const mimeMatch = arr[0].match(/:(.*?);/)
    if (!mimeMatch) {
      throw new Error('Invalid MIME type in data URL')
    }
    
    const mime = mimeMatch[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  } catch (error) {
    console.error('Error converting data URL to File:', error)
    throw error
  }
}

/**
 * Process content HTML and upload base64 images to Firebase Storage
 * @param {string} content - HTML content that may contain base64 images
 * @returns {Promise<string>} - Processed content with base64 images replaced by Firebase Storage URLs
 */
export async function processContentImages(content) {
  if (!content || typeof content !== 'string') {
    return content
  }

  // Create a temporary DOM element to parse HTML
  const parser = new DOMParser()
  const doc = parser.parseFromString(content, 'text/html')
  const images = doc.querySelectorAll('img[src^="data:"]')

  if (images.length === 0) {
    // No base64 images found, return content as-is
    return content
  }

  console.log(`Found ${images.length} base64 image(s) to process`)

  // Import Firebase upload function
  const { uploadImageToFirebase } = await import('./firebase')

  // Process each base64 image
  const imagePromises = Array.from(images).map(async (img, index) => {
    const base64Src = img.getAttribute('src')
    if (!base64Src || !base64Src.startsWith('data:')) {
      return { original: base64Src || '', replacement: base64Src || '' }
    }

    try {
      // Convert base64 to File
      const filename = `editor-image-${Date.now()}-${index}.jpg`
      const file = dataURLtoFile(base64Src, filename)

      // Check file size (don't upload if too large)
      if (file.size > 10 * 1024 * 1024) {
        console.warn(`⚠️ Base64 image ${index + 1} is too large (${(file.size / 1024 / 1024).toFixed(2)}MB), skipping upload`)
        return { original: base64Src, replacement: base64Src }
      }

      // Upload to Firebase Storage
      console.log(`📤 Uploading base64 image ${index + 1}/${images.length} to Firebase Storage...`)
      const firebaseUrl = await uploadImageToFirebase(file, 'blog-images')
      
      console.log(`✅ Uploaded base64 image ${index + 1}/${images.length} to Firebase Storage`)
      return { original: base64Src, replacement: firebaseUrl }
    } catch (error) {
      console.error(`❌ Error processing base64 image ${index + 1}:`, error)
      // Keep original base64 if upload fails
      return { original: base64Src, replacement: base64Src }
    }
  })

  // Wait for all uploads to complete
  const replacements = await Promise.all(imagePromises)

  // Replace base64 images with Firebase Storage URLs
  let processedContent = content
  replacements.forEach(({ original, replacement }) => {
    if (original !== replacement) {
      processedContent = processedContent.replace(original, replacement)
    }
  })

  console.log(`✅ Processed ${images.length} image(s) in content`)
  return processedContent
}
