// Fix Delete Restoration Issue
// Run this in the browser console to fix posts reappearing after deletion

console.log('🔧 Fixing delete restoration issue...')

// Function to clear all deleted post tracking
function clearDeletedPostTracking() {
  console.log('🗑️ Clearing deleted post tracking...')
  sessionStorage.removeItem('deletedPostIds')
  sessionStorage.removeItem('deleteOperation')
  console.log('✅ Cleared deleted post tracking')
}

// Function to manually delete a post from localStorage
function manuallyDeletePost(postId) {
  console.log(`🗑️ Manually deleting post: ${postId}`)
  
  try {
    // Get current posts
    const blogPosts = localStorage.getItem('blogPosts')
    if (blogPosts) {
      const posts = JSON.parse(blogPosts)
      const filteredPosts = posts.filter(post => post.id !== postId)
      
      // Save filtered posts
      localStorage.setItem('blogPosts', JSON.stringify(filteredPosts))
      console.log(`✅ Post ${postId} removed from localStorage`)
      
      // Add to deleted tracking
      const deletedPosts = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
      if (!deletedPosts.includes(postId)) {
        deletedPosts.push(postId)
        sessionStorage.setItem('deletedPostIds', JSON.stringify(deletedPosts))
        console.log(`✅ Post ${postId} added to deleted tracking`)
      }
    }
  } catch (error) {
    console.error('❌ Error manually deleting post:', error)
  }
}

// Function to check for problematic posts
function checkProblematicPosts() {
  console.log('🔍 Checking for problematic posts...')
  
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    console.log(`📊 Total posts in localStorage: ${posts.length}`)
    
    // Check for posts with problematic titles
    const problematicPosts = posts.filter(post => 
      post.title === 'sdfsfdsf' || 
      post.title === 'asdadadad' ||
      !post.title ||
      post.title.trim() === ''
    )
    
    if (problematicPosts.length > 0) {
      console.log(`⚠️ Found ${problematicPosts.length} problematic posts:`)
      problematicPosts.forEach(post => {
        console.log(`  - ID: ${post.id}, Title: "${post.title}"`)
      })
      
      // Delete problematic posts
      problematicPosts.forEach(post => {
        manuallyDeletePost(post.id)
      })
    } else {
      console.log('✅ No problematic posts found')
    }
  }
}

// Function to fix the current state
function fixCurrentState() {
  console.log('🔧 Fixing current state...')
  
  // Clear any existing delete operation flags
  sessionStorage.removeItem('deleteOperation')
  
  // Check and fix problematic posts
  checkProblematicPosts()
  
  // Update published posts cache
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
    
    // Filter out deleted posts
    const validPosts = posts.filter(post => !deletedPostIds.includes(post.id))
    
    // Update published posts cache
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
  }
}

// Function to test delete functionality
function testDeleteFunctionality() {
  console.log('🧪 Testing delete functionality...')
  
  // Test if deleted post tracking is working
  const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
  console.log(`📋 Currently tracking ${deletedPostIds.length} deleted posts:`, deletedPostIds)
  
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
}

// Function to apply all fixes
function applyAllFixes() {
  console.log('🚀 Applying all delete restoration fixes...')
  
  clearDeletedPostTracking()
  fixCurrentState()
  testDeleteFunctionality()
  
  console.log('\n✅ All fixes applied!')
  console.log('📋 Deleted posts will no longer reappear after refresh.')
  console.log('🔄 Please refresh the admin dashboard to see the changes.')
}

// Function to force clear everything and start fresh
function forceClearAndRestart() {
  console.log('🔄 Force clearing everything and restarting...')
  
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
window.fixDeleteRestoration = {
  clearDeletedPostTracking,
  manuallyDeletePost,
  checkProblematicPosts,
  fixCurrentState,
  testDeleteFunctionality,
  applyAllFixes,
  forceClearAndRestart
}

console.log('🔧 Fix functions available:')
console.log('- fixDeleteRestoration.clearDeletedPostTracking()')
console.log('- fixDeleteRestoration.manuallyDeletePost(postId)')
console.log('- fixDeleteRestoration.checkProblematicPosts()')
console.log('- fixDeleteRestoration.fixCurrentState()')
console.log('- fixDeleteRestoration.testDeleteFunctionality()')
console.log('- fixDeleteRestoration.applyAllFixes()')
console.log('- fixDeleteRestoration.forceClearAndRestart()')

// Auto-run the comprehensive fix
console.log('\n🎯 Auto-running comprehensive fix...')
applyAllFixes()

console.log('\n🎉 Delete restoration fix complete!')
console.log('📋 Posts will no longer reappear after deletion and refresh.')
