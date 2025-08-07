// Script to fix current blog posts and ensure they work with all operations
// Run this in the browser console on the admin dashboard page

async function fixBlogPosts() {
  try {
    console.log('🔧 Fixing blog posts...')
    
    // Get posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts')
    if (!savedPosts) {
      console.log('❌ No posts found in localStorage')
      return
    }
    
    const posts = JSON.parse(savedPosts)
    console.log(`📊 Found ${posts.length} posts in localStorage`)
    
    // Fix each post to ensure proper structure
    const fixedPosts = posts.map(post => {
      const fixedPost = {
        id: post.id || Date.now().toString(),
        title: post.title || 'Untitled Post',
        slug: post.slug || (post.title || 'untitled').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        content: post.content || '',
        excerpt: post.excerpt || '',
        coverImage: post.coverImage || post.imageUrl || '',
        tags: post.tags || [],
        metaTitle: post.metaTitle || post.title || '',
        metaDescription: post.metaDescription || '',
        publishDate: post.publishDate || post.createdAt || new Date().toISOString(),
        status: post.status || (post.published ? 'published' : 'draft'),
        published: post.published || false,
        createdAt: post.createdAt || new Date().toISOString(),
        updatedAt: post.updatedAt || new Date().toISOString(),
        views: post.views || 0
      }
      
      console.log(`✅ Fixed post: "${fixedPost.title}" (ID: ${fixedPost.id})`)
      return fixedPost
    })
    
    // Save fixed posts back to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(fixedPosts))
    console.log('✅ All posts fixed and saved to localStorage')
    
    // Try to save to Firebase if available
    try {
      console.log('🔥 Attempting to save fixed posts to Firebase...')
      
      // Import Firebase functions
      const { createBlogPost, updateBlogPost } = await import('./lib/blogDatabase.js')
      
      for (const post of fixedPosts) {
        try {
          // Try to update existing post first
          await updateBlogPost(post.id, post)
          console.log(`✅ Updated post "${post.title}" in Firebase`)
        } catch (updateError) {
          // If update fails, try to create new post
          try {
            await createBlogPost(post)
            console.log(`✅ Created post "${post.title}" in Firebase`)
          } catch (createError) {
            console.log(`⚠️ Could not save post "${post.title}" to Firebase:`, createError.message)
          }
        }
      }
    } catch (firebaseError) {
      console.log('⚠️ Firebase operations failed, but posts are saved in localStorage:', firebaseError.message)
    }
    
    console.log('🔄 Refreshing page to show fixed posts...')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
    
  } catch (error) {
    console.error('❌ Error fixing posts:', error)
  }
}

// Function to delete a specific post
async function deletePost(postTitle) {
  try {
    console.log(`🗑️ Attempting to delete post: "${postTitle}"`)
    
    const savedPosts = localStorage.getItem('blogPosts')
    if (!savedPosts) {
      console.log('❌ No posts found')
      return
    }
    
    const posts = JSON.parse(savedPosts)
    const targetPost = posts.find(post => post.title === postTitle)
    
    if (!targetPost) {
      console.log(`❌ Post "${postTitle}" not found`)
      return
    }
    
    console.log(`✅ Found post to delete: "${targetPost.title}" (ID: ${targetPost.id})`)
    
    // Remove from localStorage
    const updatedPosts = posts.filter(post => post.id !== targetPost.id)
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
    console.log('✅ Post removed from localStorage')
    
    // Try to delete from Firebase
    try {
      const { deleteBlogPost } = await import('./lib/blogDatabase.js')
      await deleteBlogPost(targetPost.id)
      console.log('✅ Post deleted from Firebase')
    } catch (firebaseError) {
      console.log('⚠️ Firebase delete failed, but post removed from localStorage:', firebaseError.message)
    }
    
    console.log('🔄 Refreshing page...')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
    
  } catch (error) {
    console.error('❌ Error deleting post:', error)
  }
}

// Function to publish a specific post
async function publishPost(postTitle) {
  try {
    console.log(`📝 Attempting to publish post: "${postTitle}"`)
    
    const savedPosts = localStorage.getItem('blogPosts')
    if (!savedPosts) {
      console.log('❌ No posts found')
      return
    }
    
    const posts = JSON.parse(savedPosts)
    const targetPost = posts.find(post => post.title === postTitle)
    
    if (!targetPost) {
      console.log(`❌ Post "${postTitle}" not found`)
      return
    }
    
    console.log(`✅ Found post to publish: "${targetPost.title}" (ID: ${targetPost.id})`)
    
    // Update post status
    targetPost.status = 'published'
    targetPost.published = true
    targetPost.publishDate = new Date().toISOString()
    targetPost.updatedAt = new Date().toISOString()
    
    // Save to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(posts))
    console.log('✅ Post published in localStorage')
    
    // Try to update in Firebase
    try {
      const { updateBlogPost } = await import('./lib/blogDatabase.js')
      await updateBlogPost(targetPost.id, {
        status: 'published',
        published: true,
        publishDate: targetPost.publishDate,
        updatedAt: targetPost.updatedAt
      })
      console.log('✅ Post published in Firebase')
    } catch (firebaseError) {
      console.log('⚠️ Firebase update failed, but post published in localStorage:', firebaseError.message)
    }
    
    console.log('🔄 Refreshing page...')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
    
  } catch (error) {
    console.error('❌ Error publishing post:', error)
  }
}

// Instructions for use:
console.log('🔧 Available functions:')
console.log('- fixBlogPosts() - Fix all posts structure')
console.log('- deletePost("post title") - Delete specific post')
console.log('- publishPost("post title") - Publish specific post')
console.log('')
console.log('📝 Example usage:')
console.log('- fixBlogPosts()')
console.log('- deletePost("asdadadad")')
console.log('- publishPost("sdfsfdsf")')
