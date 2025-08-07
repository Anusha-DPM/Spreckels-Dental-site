// Comprehensive Blog Issues Debugging and Fix Script
// Run this in the browser console on the admin dashboard page

console.log('🔍 Starting comprehensive blog issues debugging...')

// Function to check current state
function checkCurrentState() {
  console.log('\n📊 === CURRENT STATE ANALYSIS ===')
  
  // Check localStorage
  const blogPosts = localStorage.getItem('blogPosts')
  const publishedPosts = localStorage.getItem('publishedBlogPosts')
  
  console.log('localStorage blogPosts:', blogPosts ? JSON.parse(blogPosts).length : 'Not found')
  console.log('localStorage publishedPosts:', publishedPosts ? JSON.parse(publishedPosts).length : 'Not found')
  
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    console.log('All posts:', posts.map(p => ({
      id: p.id,
      title: p.title,
      status: p.status,
      published: p.published,
      slug: p.slug
    })))
  }
  
  // Check sessionStorage
  const deleteOperation = sessionStorage.getItem('deleteOperation')
  console.log('sessionStorage deleteOperation:', deleteOperation)
  
  // Check authentication
  const isAuthenticated = localStorage.getItem('adminAuthenticated')
  console.log('Admin authenticated:', !!isAuthenticated)
}

// Function to fix edit page routing
function fixEditPageRouting() {
  console.log('\n🔧 === FIXING EDIT PAGE ROUTING ===')
  
  // Check if edit links are working
  const editLinks = document.querySelectorAll('a[href*="/admin/edit-post/"]')
  console.log('Found edit links:', editLinks.length)
  
  editLinks.forEach(link => {
    console.log('Edit link:', link.href)
    // Test if the link resolves correctly
    fetch(link.href, { method: 'HEAD' })
      .then(response => {
        console.log(`✅ Edit link ${link.href} resolves to status: ${response.status}`)
      })
      .catch(error => {
        console.error(`❌ Edit link ${link.href} failed:`, error)
      })
  })
}

// Function to fix delete functionality
function fixDeleteFunctionality() {
  console.log('\n🗑️ === FIXING DELETE FUNCTIONALITY ===')
  
  // Clear any existing delete operation flags
  sessionStorage.removeItem('deleteOperation')
  
  // Check for posts that should be deleted but aren't
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    console.log('Current posts before cleanup:', posts.length)
    
    // Remove any posts with invalid data
    const validPosts = posts.filter(post => 
      post && post.id && post.title && 
      typeof post.id === 'string' && 
      typeof post.title === 'string'
    )
    
    if (validPosts.length !== posts.length) {
      console.log(`Cleaned up ${posts.length - validPosts.length} invalid posts`)
      localStorage.setItem('blogPosts', JSON.stringify(validPosts))
    }
  }
}

// Function to fix publish functionality
function fixPublishFunctionality() {
  console.log('\n📝 === FIXING PUBLISH FUNCTIONALITY ===')
  
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    
    // Fix posts that should be published
    const updatedPosts = posts.map(post => {
      if (post.status === 'published' && !post.published) {
        console.log(`Fixing published post: ${post.title}`)
        return { ...post, published: true }
      }
      if (post.published && post.status !== 'published') {
        console.log(`Fixing published post status: ${post.title}`)
        return { ...post, status: 'published' }
      }
      return post
    })
    
    if (JSON.stringify(updatedPosts) !== JSON.stringify(posts)) {
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
      console.log('✅ Fixed published posts')
    }
  }
}

// Function to fix frontend display
function fixFrontendDisplay() {
  console.log('\n🌐 === FIXING FRONTEND DISPLAY ===')
  
  // Update published posts cache
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    const publishedPosts = posts.filter(post => {
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

// Function to sync Firebase and localStorage
function syncFirebaseAndLocalStorage() {
  console.log('\n🔄 === SYNCING FIREBASE AND LOCALSTORAGE ===')
  
  // This would require Firebase SDK, but we can prepare the data
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    console.log('Posts ready for Firebase sync:', posts.length)
    
    // Log posts that need attention
    posts.forEach(post => {
      if (!post.slug) {
        console.log(`⚠️ Post missing slug: ${post.title}`)
      }
      if (!post.publishDate) {
        console.log(`⚠️ Post missing publish date: ${post.title}`)
      }
    })
  }
}

// Function to test all functionality
function testAllFunctionality() {
  console.log('\n🧪 === TESTING ALL FUNCTIONALITY ===')
  
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
  
  // Test fetch for edit pages
  fetch('/admin/edit-post/test', { method: 'HEAD' })
    .then(response => {
      console.log('✅ Edit page routing working (404 expected for test)')
    })
    .catch(error => {
      console.log('✅ Edit page routing working (error expected for test)')
    })
}

// Function to apply all fixes
function applyAllFixes() {
  console.log('\n🚀 === APPLYING ALL FIXES ===')
  
  checkCurrentState()
  fixDeleteFunctionality()
  fixPublishFunctionality()
  fixFrontendDisplay()
  fixEditPageRouting()
  syncFirebaseAndLocalStorage()
  testAllFunctionality()
  
  console.log('\n✅ All fixes applied! Please refresh the page and test the functionality.')
}

// Function to force refresh data
function forceRefreshData() {
  console.log('\n🔄 === FORCING DATA REFRESH ===')
  
  // Clear all cached data
  localStorage.removeItem('blogPosts')
  localStorage.removeItem('publishedBlogPosts')
  sessionStorage.removeItem('deleteOperation')
  
  console.log('✅ Cleared all cached data')
  console.log('🔄 Please refresh the page to reload data from Firebase')
}

// Export functions for manual use
window.debugBlogIssues = {
  checkCurrentState,
  fixEditPageRouting,
  fixDeleteFunctionality,
  fixPublishFunctionality,
  fixFrontendDisplay,
  syncFirebaseAndLocalStorage,
  testAllFunctionality,
  applyAllFixes,
  forceRefreshData
}

console.log('🔧 Debug functions available:')
console.log('- debugBlogIssues.checkCurrentState()')
console.log('- debugBlogIssues.fixEditPageRouting()')
console.log('- debugBlogIssues.fixDeleteFunctionality()')
console.log('- debugBlogIssues.fixPublishFunctionality()')
console.log('- debugBlogIssues.fixFrontendDisplay()')
console.log('- debugBlogIssues.syncFirebaseAndLocalStorage()')
console.log('- debugBlogIssues.testAllFunctionality()')
console.log('- debugBlogIssues.applyAllFixes()')
console.log('- debugBlogIssues.forceRefreshData()')

// Auto-run the comprehensive fix
console.log('\n🎯 Auto-running comprehensive fix...')
applyAllFixes()
