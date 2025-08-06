// Utility function to publish blog posts from admin dashboard
export const publishBlogPost = async (postData) => {
  try {
    const response = await fetch('/api/blog/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to publish blog post')
    }

    return result
  } catch (error) {
    console.error('Error publishing blog post:', error)
    throw error
  }
}

// Function to handle the "Publish" button click
export const handlePublishClick = async (formData, setLoading, setStatus) => {
  try {
    setLoading(true)
    setStatus('Publishing blog post...')

    const result = await publishBlogPost(formData)
    
    setStatus(`✅ ${result.message}`)
    
    // Optional: Redirect or refresh the page
    setTimeout(() => {
      window.location.reload()
    }, 2000)

  } catch (error) {
    setStatus(`❌ Error: ${error.message}`)
  } finally {
    setLoading(false)
  }
}

// Function to handle form submission with publish
export const handleFormSubmitWithPublish = async (e, formData, setLoading, setStatus) => {
  e.preventDefault()
  
  try {
    setLoading(true)
    setStatus('Creating and publishing blog post...')

    const result = await publishBlogPost({
      ...formData,
      published: true // Automatically publish when using this function
    })
    
    setStatus(`✅ ${result.message}`)
    
    // Reset form or redirect
    setTimeout(() => {
      window.location.reload()
    }, 2000)

  } catch (error) {
    setStatus(`❌ Error: ${error.message}`)
  } finally {
    setLoading(false)
  }
} 