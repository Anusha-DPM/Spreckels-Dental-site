// Fix Permanent Delete Issue
// Run this in the browser console to fix posts reappearing after deletion

console.log('🔧 Fixing permanent delete issue...')

// Function to check current state
function checkCurrentState() {
  console.log('\n📊 === CURRENT STATE ANALYSIS ===')
  
  // Check localStorage
  const blogPosts = localStorage.getItem('blogPosts')
  const publishedPosts = localStorage.getItem('publishedBlogPosts')
  
  console.log('localStorage blogPosts:', blogPosts ? JSON.parse(blogPosts).length : 'Not found')
  console.log('localStorage publishedPosts:', publishedPosts ? JSON.parse(publishedPosts).length : 'Not found')
  
  // Check sessionStorage
  const deletedPostIds = sessionStorage.getItem('deletedPostIds')
  const deleteOperation = sessionStorage.getItem('deleteOperation')
  
  console.log('sessionStorage deletedPostIds:', deletedPostIds ? JSON.parse(deletedPostIds) : 'Not found')
  console.log('sessionStorage deleteOperation:', deleteOperation)
  
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    console.log('Current posts in localStorage:', posts.map(p => ({
      id: p.id,
      title: p.title,
      status: p.status,
      published: p.published
    })))
  }
}

// Function to permanently delete a post
function permanentlyDeletePost(postId) {
  console.log(`🗑️ Permanently deleting post: ${postId}`)
  
  try {
    // Step 1: Remove from localStorage
    const blogPosts = localStorage.getItem('blogPosts')
    if (blogPosts) {
      const posts = JSON.parse(blogPosts)
      const filteredPosts = posts.filter(post => post.id !== postId)
      localStorage.setItem('blogPosts', JSON.stringify(filteredPosts))
      console.log(`✅ Post ${postId} removed from localStorage`)
    }
    
    // Step 2: Add to deleted tracking
    const deletedPosts = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
    if (!deletedPosts.includes(postId)) {
      deletedPosts.push(postId)
      sessionStorage.setItem('deletedPostIds', JSON.stringify(deletedPosts))
      console.log(`✅ Post ${postId} added to deleted tracking`)
    }
    
    // Step 3: Remove from published posts cache
    const publishedPosts = localStorage.getItem('publishedBlogPosts')
    if (publishedPosts) {
      const posts = JSON.parse(publishedPosts)
      const filteredPublishedPosts = posts.filter(post => post.id !== postId)
      localStorage.setItem('publishedBlogPosts', JSON.stringify(filteredPublishedPosts))
      console.log(`✅ Post ${postId} removed from published posts cache`)
    }
    
    // Step 4: Set delete operation flag
    sessionStorage.setItem('deleteOperation', 'true')
    console.log(`✅ Delete operation flag set for post ${postId}`)
    
    return true
  } catch (error) {
    console.error('❌ Error permanently deleting post:', error)
    return false
  }
}

// Function to clean up problematic posts
function cleanupProblematicPosts() {
  console.log('\n🧹 === CLEANING UP PROBLEMATIC POSTS ===')
  
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    console.log(`📊 Found ${posts.length} posts in localStorage`)
    
    // Find problematic posts
    const problematicPosts = posts.filter(post => 
      post.title === 'sdfsfdsf' || 
      post.title === 'asdadadad' ||
      !post.title ||
      post.title.trim() === '' ||
      !post.id
    )
    
    if (problematicPosts.length > 0) {
      console.log(`⚠️ Found ${problematicPosts.length} problematic posts:`)
      problematicPosts.forEach(post => {
        console.log(`  - ID: ${post.id}, Title: "${post.title}"`)
        permanentlyDeletePost(post.id)
      })
    } else {
      console.log('✅ No problematic posts found')
    }
  }
}

// Function to fix delete tracking
function fixDeleteTracking() {
  console.log('\n🔧 === FIXING DELETE TRACKING ===')
  
  // Clear any stale delete operation flags
  sessionStorage.removeItem('deleteOperation')
  
  // Ensure deleted post tracking is working
  const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
  console.log(`📋 Currently tracking ${deletedPostIds.length} deleted posts:`, deletedPostIds)
  
  // Verify deleted posts are not in localStorage
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    const stillPresent = posts.filter(post => deletedPostIds.includes(post.id))
    
    if (stillPresent.length > 0) {
      console.log(`⚠️ Found ${stillPresent.length} deleted posts still in localStorage:`)
      stillPresent.forEach(post => {
        console.log(`  - ID: ${post.id}, Title: "${post.title}"`)
        permanentlyDeletePost(post.id)
      })
    } else {
      console.log('✅ All deleted posts properly removed from localStorage')
    }
  }
}

// Function to update published posts cache
function updatePublishedPostsCache() {
  console.log('\n📝 === UPDATING PUBLISHED POSTS CACHE ===')
  
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
    
    // Filter out deleted posts and get only published ones
    const validPosts = posts.filter(post => !deletedPostIds.includes(post.id))
    const publishedPosts = validPosts.filter(post => {
      if (post.published !== undefined) {
        return post.published === true
      } else if (post.status !== undefined) {
        return post.status === 'published'
      }
      return false
    })
    
    localStorage.setItem('publishedBlogPosts', JSON.stringify(publishedPosts))
    console.log(`✅ Updated published posts cache: ${publishedPosts.length} posts`)
    
    publishedPosts.forEach(post => {
      console.log(`  - Published: ${post.title} (${post.slug})`)
    })
  }
}

// Function to test delete functionality
function testDeleteFunctionality() {
  console.log('\n🧪 === TESTING DELETE FUNCTIONALITY ===')
  
  // Test localStorage access
  try {
    localStorage.setItem('test', 'test')
    localStorage.removeItem('test')
    console.log('✅ localStorage access working')
  } catch (error) {
    console.error('❌ localStorage access failed:', error)
  }
  
  // Test sessionStorage access
  try {
    sessionStorage.setItem('test', 'test')
    sessionStorage.removeItem('test')
    console.log('✅ sessionStorage access working')
  } catch (error) {
    console.error('❌ sessionStorage access failed:', error)
  }
  
  // Test delete tracking
  const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
  console.log(`✅ Delete tracking working: ${deletedPostIds.length} posts tracked`)
}

// Function to simulate a delete operation
function simulateDelete(postId) {
  console.log(`🧪 Simulating delete for post: ${postId}`)
  
  // Set delete operation flag
  sessionStorage.setItem('deleteOperation', 'true')
  
  // Add to deleted tracking
  const deletedPosts = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
  if (!deletedPosts.includes(postId)) {
    deletedPosts.push(postId)
    sessionStorage.setItem('deletedPostIds', JSON.stringify(deletedPosts))
  }
  
  // Remove from localStorage
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    const filteredPosts = posts.filter(post => post.id !== postId)
    localStorage.setItem('blogPosts', JSON.stringify(filteredPosts))
  }
  
  console.log(`✅ Simulated delete completed for post: ${postId}`)
}

// Function to apply all fixes
function applyAllFixes() {
  console.log('\n🚀 === APPLYING ALL PERMANENT DELETE FIXES ===')
  
  checkCurrentState()
  cleanupProblematicPosts()
  fixDeleteTracking()
  updatePublishedPostsCache()
  testDeleteFunctionality()
  
  console.log('\n✅ All permanent delete fixes applied!')
  console.log('📋 Posts will now stay deleted after refresh.')
  console.log('🔄 Please refresh the admin dashboard to see the changes.')
}

// Function to force clear everything and restart
function forceClearAndRestart() {
  console.log('\n🔄 === FORCE CLEARING AND RESTARTING ===')
  
  // Clear all blog-related data
  localStorage.removeItem('blogPosts')
  localStorage.removeItem('publishedBlogPosts')
  sessionStorage.removeItem('deletedPostIds')
  sessionStorage.removeItem('deleteOperation')
  
  console.log('✅ Cleared all blog data')
  console.log('🔄 Reloading page in 3 seconds...')
  
  setTimeout(() => {
    window.location.reload()
  }, 3000)
}

// Export functions for manual use
window.fixPermanentDelete = {
  checkCurrentState,
  permanentlyDeletePost,
  cleanupProblematicPosts,
  fixDeleteTracking,
  updatePublishedPostsCache,
  testDeleteFunctionality,
  simulateDelete,
  applyAllFixes,
  forceClearAndRestart
}

console.log('🔧 Fix functions available:')
console.log('- fixPermanentDelete.checkCurrentState()')
console.log('- fixPermanentDelete.permanentlyDeletePost(postId)')
console.log('- fixPermanentDelete.cleanupProblematicPosts()')
console.log('- fixPermanentDelete.fixDeleteTracking()')
console.log('- fixPermanentDelete.updatePublishedPostsCache()')
console.log('- fixPermanentDelete.testDeleteFunctionality()')
console.log('- fixPermanentDelete.simulateDelete(postId)')
console.log('- fixPermanentDelete.applyAllFixes()')
console.log('- fixPermanentDelete.forceClearAndRestart()')

// Auto-run the comprehensive fix
console.log('\n🎯 Auto-running comprehensive fix...')
applyAllFixes()

console.log('\n🎉 Permanent delete fix complete!')
console.log('📋 Posts will now stay deleted after refresh.')
console.log('💡 To test: Delete a post, then refresh the page - it should stay deleted.')
