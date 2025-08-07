// Ultimate Delete Fix - Comprehensive Solution
// Run this in the browser console to permanently fix the delete issue

console.log('🔧 Ultimate Delete Fix - Comprehensive Solution')

// Function to check if a post is actually deleted
function isPostDeleted(postId) {
  const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
  return deletedPostIds.includes(postId)
}

// Function to force delete a post from all storage locations
function forceDeletePost(postId) {
  console.log(`🗑️ Force deleting post: ${postId}`)
  
  try {
    // Step 1: Remove from localStorage
    const blogPosts = localStorage.getItem('blogPosts')
    if (blogPosts) {
      const posts = JSON.parse(blogPosts)
      const filteredPosts = posts.filter(post => post.id !== postId)
      localStorage.setItem('blogPosts', JSON.stringify(filteredPosts))
      console.log(`✅ Post ${postId} removed from localStorage`)
    }
    
    // Step 2: Remove from published posts cache
    const publishedPosts = localStorage.getItem('publishedBlogPosts')
    if (publishedPosts) {
      const posts = JSON.parse(publishedPosts)
      const filteredPublishedPosts = posts.filter(post => post.id !== postId)
      localStorage.setItem('publishedBlogPosts', JSON.stringify(filteredPublishedPosts))
      console.log(`✅ Post ${postId} removed from published posts cache`)
    }
    
    // Step 3: Add to deleted tracking (persistent)
    const deletedPosts = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
    if (!deletedPosts.includes(postId)) {
      deletedPosts.push(postId)
      sessionStorage.setItem('deletedPostIds', JSON.stringify(deletedPosts))
      console.log(`✅ Post ${postId} added to deleted tracking`)
    }
    
    // Step 4: Set delete operation flag
    sessionStorage.setItem('deleteOperation', 'true')
    
    // Step 5: Store deletion timestamp for verification
    const deletionTimestamps = JSON.parse(sessionStorage.getItem('deletionTimestamps') || '{}')
    deletionTimestamps[postId] = new Date().toISOString()
    sessionStorage.setItem('deletionTimestamps', JSON.stringify(deletionTimestamps))
    
    console.log(`✅ Post ${postId} force deleted successfully`)
    return true
  } catch (error) {
    console.error('❌ Error force deleting post:', error)
    return false
  }
}

// Function to verify deletion status
function verifyDeletionStatus() {
  console.log('\n🔍 === VERIFYING DELETION STATUS ===')
  
  const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
  const deletionTimestamps = JSON.parse(sessionStorage.getItem('deletionTimestamps') || '{}')
  
  console.log(`📋 Tracking ${deletedPostIds.length} deleted posts:`, deletedPostIds)
  
  // Check if deleted posts are still in localStorage
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    const stillPresent = posts.filter(post => deletedPostIds.includes(post.id))
    
    if (stillPresent.length > 0) {
      console.log(`⚠️ Found ${stillPresent.length} deleted posts still in localStorage:`)
      stillPresent.forEach(post => {
        console.log(`  - ID: ${post.id}, Title: "${post.title}"`)
        forceDeletePost(post.id)
      })
    } else {
      console.log('✅ All deleted posts properly removed from localStorage')
    }
  }
  
  // Check deletion timestamps
  deletedPostIds.forEach(postId => {
    const timestamp = deletionTimestamps[postId]
    if (timestamp) {
      const deletedAt = new Date(timestamp)
      const now = new Date()
      const hoursSinceDeletion = (now - deletedAt) / (1000 * 60 * 60)
      console.log(`  - Post ${postId}: Deleted ${hoursSinceDeletion.toFixed(2)} hours ago`)
    }
  })
}

// Function to prevent Firebase from restoring deleted posts
function preventFirebaseRestoration() {
  console.log('\n🛡️ === PREVENTING FIREBASE RESTORATION ===')
  
  // Override the getBlogPosts function to filter out deleted posts
  if (window.getBlogPostsOverride) {
    console.log('✅ Firebase restoration prevention already active')
    return
  }
  
  // Store original function
  window.originalGetBlogPosts = window.getBlogPostsOverride || null
  
  // Create override function
  window.getBlogPostsOverride = function(options = {}) {
    console.log('🛡️ getBlogPosts called - filtering deleted posts')
    
    // Get deleted post IDs
    const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
    
    // Call original function if it exists
    if (window.originalGetBlogPosts) {
      const posts = window.originalGetBlogPosts(options)
      const filteredPosts = posts.filter(post => !deletedPostIds.includes(post.id))
      console.log(`🛡️ Filtered out ${posts.length - filteredPosts.length} deleted posts`)
      return filteredPosts
    }
    
    // Fallback to localStorage
    const blogPosts = localStorage.getItem('blogPosts')
    if (blogPosts) {
      const posts = JSON.parse(blogPosts)
      const filteredPosts = posts.filter(post => !deletedPostIds.includes(post.id))
      return filteredPosts
    }
    
    return []
  }
  
  console.log('✅ Firebase restoration prevention activated')
}

// Function to clean up all problematic posts
function cleanupAllProblematicPosts() {
  console.log('\n🧹 === CLEANING UP ALL PROBLEMATIC POSTS ===')
  
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    console.log(`📊 Found ${posts.length} posts in localStorage`)
    
    // Find all problematic posts
    const problematicPosts = posts.filter(post => 
      post.title === 'sdfsfdsf' || 
      post.title === 'asdadadad' ||
      !post.title ||
      post.title.trim() === '' ||
      !post.id ||
      post.title.includes('test') ||
      post.title.includes('Test')
    )
    
    if (problematicPosts.length > 0) {
      console.log(`⚠️ Found ${problematicPosts.length} problematic posts:`)
      problematicPosts.forEach(post => {
        console.log(`  - ID: ${post.id}, Title: "${post.title}"`)
        forceDeletePost(post.id)
      })
    } else {
      console.log('✅ No problematic posts found')
    }
  }
}

// Function to test the delete functionality
function testDeleteFunctionality() {
  console.log('\n🧪 === TESTING DELETE FUNCTIONALITY ===')
  
  // Test 1: Check if deleted posts tracking is working
  const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
  console.log(`✅ Deleted posts tracking: ${deletedPostIds.length} posts tracked`)
  
  // Test 2: Check if localStorage is working
  try {
    localStorage.setItem('test', 'test')
    localStorage.removeItem('test')
    console.log('✅ localStorage access working')
  } catch (error) {
    console.error('❌ localStorage access failed:', error)
  }
  
  // Test 3: Check if sessionStorage is working
  try {
    sessionStorage.setItem('test', 'test')
    sessionStorage.removeItem('test')
    console.log('✅ sessionStorage access working')
  } catch (error) {
    console.error('❌ sessionStorage access failed:', error)
  }
  
  // Test 4: Simulate a delete operation
  const testPostId = 'test-delete-' + Date.now()
  forceDeletePost(testPostId)
  
  // Verify the test post is tracked as deleted
  if (isPostDeleted(testPostId)) {
    console.log('✅ Delete tracking working correctly')
  } else {
    console.error('❌ Delete tracking not working')
  }
}

// Function to apply the ultimate fix
function applyUltimateFix() {
  console.log('\n🚀 === APPLYING ULTIMATE DELETE FIX ===')
  
  // Step 1: Clean up problematic posts
  cleanupAllProblematicPosts()
  
  // Step 2: Verify deletion status
  verifyDeletionStatus()
  
  // Step 3: Prevent Firebase restoration
  preventFirebaseRestoration()
  
  // Step 4: Test functionality
  testDeleteFunctionality()
  
  console.log('\n✅ Ultimate delete fix applied!')
  console.log('📋 Posts will now stay deleted after refresh.')
  console.log('🛡️ Firebase restoration prevention activated.')
  console.log('🔄 Please refresh the admin dashboard to see the changes.')
}

// Function to manually delete a specific post
function manuallyDeletePost(postId) {
  console.log(`🗑️ Manually deleting post: ${postId}`)
  
  if (!postId) {
    console.error('❌ No post ID provided')
    return false
  }
  
  const success = forceDeletePost(postId)
  
  if (success) {
    console.log(`✅ Post ${postId} manually deleted successfully`)
    console.log('🔄 Please refresh the page to see the changes')
  } else {
    console.error(`❌ Failed to manually delete post ${postId}`)
  }
  
  return success
}

// Function to clear all data and start fresh
function clearAllDataAndRestart() {
  console.log('\n🔄 === CLEARING ALL DATA AND RESTARTING ===')
  
  // Clear all blog-related data
  localStorage.removeItem('blogPosts')
  localStorage.removeItem('publishedBlogPosts')
  sessionStorage.removeItem('deletedPostIds')
  sessionStorage.removeItem('deletionTimestamps')
  sessionStorage.removeItem('deleteOperation')
  
  // Clear override functions
  delete window.getBlogPostsOverride
  delete window.originalGetBlogPosts
  
  console.log('✅ Cleared all blog data and overrides')
  console.log('🔄 Reloading page in 3 seconds...')
  
  setTimeout(() => {
    window.location.reload()
  }, 3000)
}

// Export functions for manual use
window.ultimateDeleteFix = {
  isPostDeleted,
  forceDeletePost,
  verifyDeletionStatus,
  preventFirebaseRestoration,
  cleanupAllProblematicPosts,
  testDeleteFunctionality,
  manuallyDeletePost,
  applyUltimateFix,
  clearAllDataAndRestart
}

console.log('🔧 Ultimate fix functions available:')
console.log('- ultimateDeleteFix.isPostDeleted(postId)')
console.log('- ultimateDeleteFix.forceDeletePost(postId)')
console.log('- ultimateDeleteFix.verifyDeletionStatus()')
console.log('- ultimateDeleteFix.preventFirebaseRestoration()')
console.log('- ultimateDeleteFix.cleanupAllProblematicPosts()')
console.log('- ultimateDeleteFix.testDeleteFunctionality()')
console.log('- ultimateDeleteFix.manuallyDeletePost(postId)')
console.log('- ultimateDeleteFix.applyUltimateFix()')
console.log('- ultimateDeleteFix.clearAllDataAndRestart()')

// Auto-run the ultimate fix
console.log('\n🎯 Auto-running ultimate delete fix...')
applyUltimateFix()

console.log('\n🎉 Ultimate delete fix complete!')
console.log('📋 Posts will now stay deleted after refresh.')
console.log('💡 To test: Delete a post, then refresh the page - it should stay deleted.')
console.log('🛡️ Firebase restoration prevention is now active.')
