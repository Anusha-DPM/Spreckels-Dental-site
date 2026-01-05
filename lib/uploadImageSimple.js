/**
 * Simple image upload function that uploads to public/uploads folder
 * This doesn't require Firebase Storage
 */

export const uploadImageSimple = async (file, folder = 'blog-images') => {
  console.log('🚀 Starting simple image upload...', {
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type,
    folder: folder
  });

  if (!file) {
    throw new Error('No file provided for upload');
  }

  try {
    // Create FormData for upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    // Upload via API
    const response = await fetch('/api/upload-image-simple', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      let errorData;
      try {
        const responseText = await response.text();
        try {
          errorData = JSON.parse(responseText);
        } catch (e) {
          errorData = { error: responseText || `Upload failed with status ${response.status}` };
        }
      } catch (e) {
        errorData = { error: `Upload failed with status ${response.status}` };
      }

      // Combine error and details for a complete message
      let errorMessage = errorData.error || `Upload failed with status ${response.status}`;
      if (errorData.details && errorData.details !== errorMessage) {
        errorMessage = `${errorMessage}: ${errorData.details}`;
      }
      
      console.error('❌ Upload error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
        fullError: errorData,
        combinedMessage: errorMessage
      });
      
      throw new Error(errorMessage);
    }

    const result = await response.json();

    console.log('✅ File uploaded successfully:', result);

    return {
      url: result.url,
      path: result.path,
      fileName: result.fileName,
      originalSize: file.size
    };

  } catch (error) {
    console.error('❌ Simple upload error:', error);
    
    if (error.message.includes('File too large')) {
      throw new Error('Upload failed: File too large. Maximum size is 5MB.');
    } else if (error.message.includes('Invalid file type')) {
      throw new Error('Upload failed: Invalid file type. Only images are allowed.');
    } else {
      throw new Error(`Upload failed: ${error.message}`);
    }
  }
};

