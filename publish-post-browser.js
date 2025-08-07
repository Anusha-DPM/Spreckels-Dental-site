// Browser-compatible script to publish the draft post
// Run this in the browser console on the admin dashboard page

async function publishDraftPost() {
  try {
    console.log('🔍 Searching for draft post with title "asdaddadad"...')
    
    // Get posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts')
    if (!savedPosts) {
      console.log('❌ No posts found in localStorage')
      return
    }
    
    const posts = JSON.parse(savedPosts)
    console.log(`📊 Found ${posts.length} posts in localStorage`)
    
    // Find the post with title "asdaddadad"
    const targetPost = posts.find(post => post.title === 'asdaddadad')
    
    if (targetPost) {
      console.log('✅ Found draft post:', {
        id: targetPost.id,
        title: targetPost.title,
        status: targetPost.status || (targetPost.published ? 'published' : 'draft')
      })
      
      // Update the post to published status
      targetPost.status = 'published'
      targetPost.published = true
      targetPost.publishDate = new Date().toISOString()
      targetPost.updatedAt = new Date().toISOString()
      
      // Save back to localStorage
      localStorage.setItem('blogPosts', JSON.stringify(posts))
      
      console.log('✅ Post published successfully in localStorage!')
      console.log('📅 Publish date:', new Date().toLocaleDateString())
      
      // Try to save to Firebase if available
      try {
        // Import the updateBlogPost function dynamically
        const { updateBlogPost } = await import('./lib/blogDatabase.js')
        await updateBlogPost(targetPost.id, {
          status: 'published',
          published: true,
          publishDate: targetPost.publishDate,
          updatedAt: targetPost.updatedAt
        })
        console.log('✅ Post also saved to Firebase!')
      } catch (firebaseError) {
        console.log('⚠️ Firebase save failed, but post is saved in localStorage:', firebaseError.message)
      }
      
      // Refresh the page to show updated status
      console.log('🔄 Refreshing page to show updated status...')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
      
    } else {
      console.log('❌ Post with title "asdaddadad" not found')
      console.log('📊 Available posts:')
      posts.forEach(post => {
        console.log(`- ${post.title} (ID: ${post.id}, Status: ${post.status || (post.published ? 'published' : 'draft')})`)
      })
    }
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

// Instructions for use:
console.log('📝 To publish the draft post, run: publishDraftPost()')
console.log('🔍 To see all posts, run: JSON.parse(localStorage.getItem("blogPosts"))')
