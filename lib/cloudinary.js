/**
 * Cloudinary Image Upload Utility
 * 
 * This module handles image uploads to Cloudinary for blog posts.
 * Images are uploaded to Cloudinary and only the secure URLs are stored in Firebase Firestore.
 */

import imageCompression from 'browser-image-compression';

// Cloudinary configuration from environment variables
const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;

/**
 * Validate Cloudinary configuration
 * @returns {boolean} True if configuration is valid
 */
export const validateCloudinaryConfig = () => {
  const requiredFields = {
    cloudName: CLOUDINARY_CLOUD_NAME,
    uploadPreset: CLOUDINARY_UPLOAD_PRESET,
  };

  const missingFields = Object.entries(requiredFields)
    .filter(([_, value]) => !value)
    .map(([key]) => key);
  
  if (missingFields.length > 0) {
    console.warn('⚠️ Cloudinary configuration missing fields:', missingFields);
    console.warn('💡 Make sure your .env.local file has:');
    console.warn('   - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME');
    console.warn('   - NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET');
    return false;
  }
  
  return true;
};

/**
 * Compress image before upload
 * @param {File} file - The image file to compress
 * @returns {Promise<File>} The compressed image file
 */
const compressImage = async (file) => {
  console.log('🗜️ Compressing image...');
  console.log('📊 Original file size:', file.size, 'bytes');
  console.log('📁 File type:', file.type);
  
  // Don't compress SVG files
  if (file.type === 'image/svg+xml') {
    console.log('🔄 SVG file detected - skipping compression');
    return file;
  }
  
  // Don't compress if file is already small (less than 1MB)
  if (file.size < 1024 * 1024) {
    console.log('🔄 File is already small - skipping compression');
    return file;
  }
  
  const options = {
    maxSizeMB: 0.8,
    maxWidthOrHeight: 1600,
    useWebWorker: true,
    fileType: file.type,
    quality: 0.75,
    alwaysKeepResolution: false
  };
  
  try {
    const compressedFile = await imageCompression(file, options);
    console.log('✅ Image compressed successfully');
    console.log('📊 Compressed file size:', compressedFile.size, 'bytes');
    console.log('📈 Compression ratio:', ((file.size - compressedFile.size) / file.size * 100).toFixed(1) + '%');
    return compressedFile;
  } catch (error) {
    console.warn('⚠️ Image compression failed, using original file:', error);
    return file;
  }
};

/**
 * Upload image to Cloudinary
 * @param {File} file - The image file to upload
 * @param {string} folder - The folder path in Cloudinary (default: 'blog-images')
 * @param {((progress: number) => void) | null} onProgress - Optional progress callback function
 * @returns {Promise<{url: string, publicId: string}>} The upload result with secure URL and public ID
 */
export const uploadImageToCloudinary = async (file, folder = 'blog-images', onProgress = null) => {
  const startTime = Date.now();
  console.log('🚀 Starting image upload to Cloudinary...');
  console.log('📁 File details:', {
    name: file.name,
    size: file.size,
    type: file.type,
    folder: folder,
    sizeKB: (file.size / 1024).toFixed(2) + ' KB'
  });

  if (!file) {
    console.error('❌ No file provided');
    throw new Error('No file provided for upload');
  }

  // Validate Cloudinary configuration
  if (!validateCloudinaryConfig()) {
    const errorMsg = 'Cloudinary is not configured. Please check your .env.local file and ensure NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET are set.';
    console.error('❌', errorMsg);
    throw new Error(errorMsg);
  }

  try {
    // Step 1: Compress image if it's large
    console.log('🗜️ Checking if compression is needed...');
    const compressionStart = Date.now();
    const processedFile = await compressImage(file);
    const compressionTime = Date.now() - compressionStart;
    console.log(`✅ Image processing completed in ${compressionTime}ms`);
    
    if (onProgress) {
      onProgress(10); // Compression complete
    }
    
    // Step 2: Prepare form data for Cloudinary
    const formData = new FormData();
    formData.append('file', processedFile);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', folder);
    
    // Optional: Add tags for better organization
    formData.append('tags', 'blog,dental');
    
    // Step 3: Upload to Cloudinary
    const uploadStart = Date.now();
    console.log('⏱️ Starting upload at:', new Date().toISOString());
    console.log('📤 Uploading to Cloudinary...');
    
    // Create XMLHttpRequest for progress tracking
    const uploadPromise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      // Track upload progress
      if (onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const progress = (e.loaded / e.total) * 100;
            const uploadProgress = 10 + (progress * 0.85); // 10% for compression, 85% for upload
            console.log(`📊 Upload progress: ${progress.toFixed(1)}%`);
            onProgress(Math.min(uploadProgress, 95));
          }
        });
      }
      
      // Handle upload completion
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (parseError) {
            reject(new Error('Failed to parse Cloudinary response'));
          }
        } else {
          reject(new Error(`Upload failed with status ${xhr.status}: ${xhr.responseText}`));
        }
      });
      
      // Handle upload errors
      xhr.addEventListener('error', () => {
        reject(new Error('Network error during upload'));
      });
      
      xhr.addEventListener('abort', () => {
        reject(new Error('Upload was aborted'));
      });
      
      // Send the request
      xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`);
      xhr.send(formData);
    });
    
    // Add timeout (90 seconds)
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => {
        const elapsed = Date.now() - uploadStart;
        console.error(`❌ Upload timeout after ${(elapsed / 1000).toFixed(2)}s`);
        reject(new Error('Upload timeout: The upload took too long. Please try again with a smaller image or check your internet connection.'));
      }, 90000)
    );
    
    const response = await Promise.race([uploadPromise, timeoutPromise]);
    
    const uploadTime = Date.now() - uploadStart;
    console.log(`✅ File uploaded successfully in ${uploadTime}ms`);
    
    if (onProgress) {
      onProgress(95); // Upload complete, processing result
    }
    
    // Step 4: Extract secure URL and public ID from response
    const secureUrl = response.secure_url;
    const publicId = response.public_id;
    
    if (!secureUrl) {
      throw new Error('No secure URL returned from Cloudinary');
    }
    
    console.log('✅ Cloudinary upload successful');
    console.log('🔗 Secure URL:', secureUrl);
    console.log('🆔 Public ID:', publicId);
    
    if (onProgress) {
      onProgress(100); // Complete
    }
    
    const totalTime = Date.now() - startTime;
    console.log(`✅ Total upload time: ${totalTime}ms (${(totalTime / 1000).toFixed(2)}s)`);
    
    return {
      url: secureUrl,
      publicId: publicId,
      width: response.width,
      height: response.height,
      format: response.format,
      resourceType: response.resource_type
    };
  } catch (error) {
    const totalTime = Date.now() - startTime;
    console.error('❌ Error uploading image to Cloudinary:', error);
    console.error('❌ Error details:', {
      message: error?.message,
      name: error?.name,
    });
    console.error(`❌ Upload failed after ${totalTime}ms`);
    
    // Provide more helpful error messages
    if (error?.message?.includes('timeout')) {
      throw new Error('Upload timeout: The upload took too long. Please try again with a smaller image or check your internet connection.');
    } else if (error?.message?.includes('network') || error?.message?.includes('fetch')) {
      throw new Error('Network error during upload. Please check your internet connection and try again.');
    } else if (error?.message?.includes('Cloudinary is not configured')) {
      throw error; // Re-throw configuration errors as-is
    }
    
    throw new Error(`Failed to upload image to Cloudinary: ${error?.message || 'Unknown error'}`);
  }
};

/**
 * Delete image from Cloudinary
 * Note: This requires server-side implementation with your API secret
 * For now, this is a placeholder that logs the action
 * @param {string} publicId - The Cloudinary public ID of the image to delete
 */
export const deleteImageFromCloudinary = async (publicId) => {
  console.log('🗑️ Image deletion requested for:', publicId);
  console.warn('⚠️ Note: Cloudinary image deletion requires server-side API with your API secret.');
  console.warn('💡 You can manually delete images from your Cloudinary dashboard or implement a server-side API endpoint.');
  
  // TODO: Implement server-side deletion via API route
  // This would require calling your own API endpoint that uses the Cloudinary SDK
  // with your API secret to delete the image
  
  return {
    success: false,
    message: 'Image deletion requires server-side implementation. Please delete manually from Cloudinary dashboard or implement an API endpoint.'
  };
};

/**
 * Get Cloudinary configuration status
 * @returns {object} Configuration status
 */
export const getCloudinaryStatus = () => {
  return {
    configured: validateCloudinaryConfig(),
    cloudName: CLOUDINARY_CLOUD_NAME || 'Not configured',
    uploadPreset: CLOUDINARY_UPLOAD_PRESET ? 'Configured' : 'Not configured',
    apiKey: CLOUDINARY_API_KEY ? 'Configured' : 'Not configured (optional)'
  };
};
