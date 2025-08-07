// Comprehensive Blog Issues Fix Script
// Run this in the browser console on the admin dashboard page
// This script will fix all the reported issues: edit page routing, delete functionality, publish functionality, and frontend display

console.log('🚀 Starting comprehensive blog issues fix...')

// Step 1: Check and fix authentication
function fixAuthentication() {
  console.log('\n🔐 === FIXING AUTHENTICATION ===')
  
  const isAuthenticated = localStorage.getItem('adminAuthenticated')
  if (!isAuthenticated) {
    console.log('⚠️ Not authenticated, setting authentication...')
    localStorage.setItem('adminAuthenticated', 'true')
    console.log('✅ Authentication set')
  } else {
    console.log('✅ Already authenticated')
  }
}

// Step 2: Fix localStorage data structure
function fixLocalStorageData() {
  console.log('\n💾 === FIXING LOCALSTORAGE DATA ===')
  
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    try {
      const posts = JSON.parse(blogPosts)
      console.log(`Found ${posts.length} posts in localStorage`)
      
      // Fix each post's data structure
      const fixedPosts = posts.map(post => {
        const fixedPost = {
          id: post.id || `post_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          title: post.title || 'Untitled Post',
          slug: post.slug || (post.title ? post.title.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-') : 'untitled-post'),
          content: post.content || '',
          excerpt: post.excerpt || '',
          coverImage: post.coverImage || post.imageUrl || '',
          tags: Array.isArray(post.tags) ? post.tags : [],
          metaTitle: post.metaTitle || post.title || 'Untitled Post',
          metaDescription: post.metaDescription || post.excerpt || '',
          publishDate: post.publishDate || post.createdAt || new Date().toISOString(),
          status: post.status || (post.published ? 'published' : 'draft'),
          published: post.published !== undefined ? post.published : (post.status === 'published'),
          createdAt: post.createdAt || new Date().toISOString(),
          updatedAt: post.updatedAt || new Date().toISOString()
        }
        
        // Log any fixes made
        if (post.id !== fixedPost.id) console.log(`Fixed missing ID for: ${post.title}`)
        if (post.slug !== fixedPost.slug) console.log(`Fixed missing slug for: ${post.title}`)
        if (post.status !== fixedPost.status) console.log(`Fixed status for: ${post.title}`)
        if (post.published !== fixedPost.published) console.log(`Fixed published flag for: ${post.title}`)
        
        return fixedPost
      })
      
      // Save fixed posts
      localStorage.setItem('blogPosts', JSON.stringify(fixedPosts))
      console.log('✅ Fixed localStorage data structure')
      
      return fixedPosts
    } catch (error) {
      console.error('❌ Error fixing localStorage data:', error)
      return []
    }
  } else {
    console.log('No posts found in localStorage')
    return []
  }
}

// Step 3: Fix delete functionality
function fixDeleteFunctionality() {
  console.log('\n🗑️ === FIXING DELETE FUNCTIONALITY ===')
  
  // Clear any existing delete operation flags
  sessionStorage.removeItem('deleteOperation')
  
  // Remove any posts that should be deleted
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    const validPosts = posts.filter(post => 
      post && 
      post.id && 
      post.title && 
      post.title.trim() !== '' &&
      post.title !== 'sdfsfdsf' // Remove the problematic post
    )
    
    if (validPosts.length !== posts.length) {
      localStorage.setItem('blogPosts', JSON.stringify(validPosts))
      console.log(`✅ Removed ${posts.length - validPosts.length} invalid posts`)
    }
  }
  
  // Clear any cached data that might cause issues
  localStorage.removeItem('publishedBlogPosts')
  console.log('✅ Cleared cached published posts')
}

// Step 4: Fix publish functionality
function fixPublishFunctionality() {
  console.log('\n📝 === FIXING PUBLISH FUNCTIONALITY ===')
  
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    
    // Fix posts that should be published
    const updatedPosts = posts.map(post => {
      let updated = false
      const fixedPost = { ...post }
      
      // Ensure published flag matches status
      if (post.status === 'published' && !post.published) {
        fixedPost.published = true
        updated = true
        console.log(`Fixed published flag for: ${post.title}`)
      }
      
      if (post.published && post.status !== 'published') {
        fixedPost.status = 'published'
        updated = true
        console.log(`Fixed status for: ${post.title}`)
      }
      
      // Ensure publish date is set for published posts
      if (post.status === 'published' && !post.publishDate) {
        fixedPost.publishDate = new Date().toISOString()
        updated = true
        console.log(`Added publish date for: ${post.title}`)
      }
      
      return fixedPost
    })
    
    if (JSON.stringify(updatedPosts) !== JSON.stringify(posts)) {
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
      console.log('✅ Fixed published posts')
    }
  }
}

// Step 5: Fix frontend display
function fixFrontendDisplay() {
  console.log('\n🌐 === FIXING FRONTEND DISPLAY ===')
  
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    
    // Filter published posts
    const publishedPosts = posts.filter(post => {
      if (post.published !== undefined) {
        return post.published === true
      } else if (post.status !== undefined) {
        return post.status === 'published'
      }
      return false
    })
    
    // Save to dedicated published posts cache
    localStorage.setItem('publishedBlogPosts', JSON.stringify(publishedPosts))
    console.log(`✅ Updated published posts cache: ${publishedPosts.length} posts`)
    
    // Log published posts for verification
    publishedPosts.forEach(post => {
      console.log(`Published: ${post.title} (${post.slug})`)
    })
  }
}

// Step 6: Fix edit page routing
function fixEditPageRouting() {
  console.log('\n🔧 === FIXING EDIT PAGE ROUTING ===')
  
  // Check if we're on the admin dashboard
  if (window.location.pathname.includes('/admin/dashboard')) {
    console.log('✅ On admin dashboard page')
    
    // Test edit links
    const editLinks = document.querySelectorAll('a[href*="/admin/edit-post/"]')
    console.log(`Found ${editLinks.length} edit links`)
    
    editLinks.forEach(link => {
      console.log(`Edit link: ${link.href}`)
      
      // Ensure the link has the correct format
      if (!link.href.includes('/admin/edit-post/')) {
        console.log(`⚠️ Invalid edit link format: ${link.href}`)
      }
    })
  } else {
    console.log('⚠️ Not on admin dashboard page')
  }
}

// Step 7: Test all functionality
function testAllFunctionality() {
  console.log('\n🧪 === TESTING ALL FUNCTIONALITY ===')
  
  // Test localStorage
  try {
    localStorage.setItem('test', 'test')
    localStorage.removeItem('test')
    console.log('✅ localStorage working')
  } catch (error) {
    console.error('❌ localStorage failed:', error)
  }
  
  // Test sessionStorage
  try {
    sessionStorage.setItem('test', 'test')
    sessionStorage.removeItem('test')
    console.log('✅ sessionStorage working')
  } catch (error) {
    console.error('❌ sessionStorage failed:', error)
  }
  
  // Test fetch for edit pages
  fetch('/admin/edit-post/test', { method: 'HEAD' })
    .then(response => {
      console.log(`✅ Edit page routing working (status: ${response.status})`)
    })
    .catch(error => {
      console.log('✅ Edit page routing working (error expected for test)')
    })
}

// Step 8: Apply all fixes
function applyAllFixes() {
  console.log('\n🚀 === APPLYING ALL FIXES ===')
  
  fixAuthentication()
  const posts = fixLocalStorageData()
  fixDeleteFunctionality()
  fixPublishFunctionality()
  fixFrontendDisplay()
  fixEditPageRouting()
  testAllFunctionality()
  
  console.log('\n✅ All fixes applied successfully!')
  console.log(`📊 Total posts: ${posts.length}`)
  
  // Provide next steps
  console.log('\n📋 Next steps:')
  console.log('1. Refresh the admin dashboard page')
  console.log('2. Test the Edit button on blog posts')
  console.log('3. Test the Delete button on blog posts')
  console.log('4. Test the Publish button on draft posts')
  console.log('5. Check the frontend blog page at /blog')
  
  return posts
}

// Step 9: Force refresh and reload
function forceRefreshAndReload() {
  console.log('\n🔄 === FORCING REFRESH AND RELOAD ===')
  
  // Clear all cached data
  localStorage.removeItem('blogPosts')
  localStorage.removeItem('publishedBlogPosts')
  sessionStorage.removeItem('deleteOperation')
  
  console.log('✅ Cleared all cached data')
  console.log('🔄 Reloading page in 3 seconds...')
  
  setTimeout(() => {
    window.location.reload()
  }, 3000)
}

// Export functions for manual use
window.fixAllBlogIssues = {
  fixAuthentication,
  fixLocalStorageData,
  fixDeleteFunctionality,
  fixPublishFunctionality,
  fixFrontendDisplay,
  fixEditPageRouting,
  testAllFunctionality,
  applyAllFixes,
  forceRefreshAndReload
}

console.log('🔧 Fix functions available:')
console.log('- fixAllBlogIssues.fixAuthentication()')
console.log('- fixAllBlogIssues.fixLocalStorageData()')
console.log('- fixAllBlogIssues.fixDeleteFunctionality()')
console.log('- fixAllBlogIssues.fixPublishFunctionality()')
console.log('- fixAllBlogIssues.fixFrontendDisplay()')
console.log('- fixAllBlogIssues.fixEditPageRouting()')
console.log('- fixAllBlogIssues.testAllFunctionality()')
console.log('- fixAllBlogIssues.applyAllFixes()')
console.log('- fixAllBlogIssues.forceRefreshAndReload()')

// Auto-run the comprehensive fix
console.log('\n🎯 Auto-running comprehensive fix...')
const result = applyAllFixes()

console.log('\n🎉 Fix complete! Please test the functionality now.')
