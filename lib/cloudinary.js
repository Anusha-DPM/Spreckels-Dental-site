/**
 * Cloudinary Image Upload Utility
 *
 * Uploads via the server API route to avoid CSP/CORS issues and keep API secrets server-side.
 */

import imageCompression from 'browser-image-compression'

const compressImage = async (file) => {
  if (file.type === 'image/svg+xml' || file.size < 1024 * 1024) {
    return file
  }

  try {
    return await imageCompression(file, {
      maxSizeMB: 0.8,
      maxWidthOrHeight: 1600,
      useWebWorker: true,
      fileType: file.type,
      quality: 0.75,
      alwaysKeepResolution: false,
    })
  } catch {
    return file
  }
}

const uploadViaApi = (file, folder, onProgress) =>
  new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('folder', folder)

    const xhr = new XMLHttpRequest()

    if (onProgress) {
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100
          onProgress(10 + progress * 0.9)
        }
      })
    }

    xhr.addEventListener('load', () => {
      let data
      try {
        data = JSON.parse(xhr.responseText)
      } catch {
        reject(new Error('Failed to parse upload response'))
        return
      }

      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(data)
        return
      }

      reject(new Error(data?.error || `Upload failed with status ${xhr.status}`))
    })

    xhr.addEventListener('error', () => {
      reject(new Error('Network error during upload'))
    })

    xhr.addEventListener('abort', () => {
      reject(new Error('Upload was aborted'))
    })

    xhr.open('POST', '/api/upload-image')
    xhr.send(formData)
  })

export const validateCloudinaryConfig = () => true

/**
 * @param {File} file
 * @param {string} [folder]
 * @param {((progress: number) => void) | null | undefined} [onProgress]
 */
export const uploadImageToCloudinary = async (file, folder = 'blog-images', onProgress = null) => {
  if (!file) {
    throw new Error('No file provided for upload')
  }

  if (onProgress) {
    onProgress(5)
  }

  const processedFile = await compressImage(file)

  if (onProgress) {
    onProgress(10)
  }

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(
          'Upload timeout: The upload took too long. Please try again with a smaller image.'
        )
      )
    }, 90000)
  })

  const response = await Promise.race([
    uploadViaApi(processedFile, folder, onProgress),
    timeoutPromise,
  ])

  if (!response?.url) {
    throw new Error('No secure URL returned from upload')
  }

  if (onProgress) {
    onProgress(100)
  }

  return {
    url: response.url,
    publicId: response.publicId,
    width: response.width,
    height: response.height,
    format: response.format,
    resourceType: response.resourceType,
  }
}

export const deleteImageFromCloudinary = async (publicId) => {
  console.warn('Image deletion requested for:', publicId)
  return {
    success: false,
    message:
      'Image deletion requires server-side implementation. Please delete manually from Cloudinary dashboard.',
  }
}

export const getCloudinaryStatus = () => ({
  configured: true,
  mode: 'server-api',
})
