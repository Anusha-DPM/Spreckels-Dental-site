// Simple Delete Fix - Immediate Solution
// Run this in the browser console to fix posts reappearing after deletion

console.log('🔧 Simple Delete Fix - Immediate Solution')

// Step 1: Clear any existing delete operation flags
sessionStorage.removeItem('deleteOperation')
console.log('✅ Cleared delete operation flags')

// Step 2: Get current posts and identify problematic ones
const blogPosts = localStorage.getItem('blogPosts')
if (blogPosts) {
  const posts = JSON.parse(blogPosts)
  console.log(`📊 Found ${posts.length} posts in localStorage`)
  
  // Find problematic posts
  const problematicPosts = posts.filter(post => 
    post.title === 'sdfsfdsf' || 
    post.title === 'asdadadad' ||
    !post.title ||
    post.title.trim() === ''
  )
  
  if (problematicPosts.length > 0) {
    console.log(`⚠️ Found ${problematicPosts.length} problematic posts`)
    
    // Remove problematic posts from localStorage
    const validPosts = posts.filter(post => 
      post.title !== 'sdfsfdsf' && 
      post.title !== 'asdadadad' &&
      post.title &&
      post.title.trim() !== ''
    )
    
    localStorage.setItem('blogPosts', JSON.stringify(validPosts))
    console.log(`✅ Removed ${problematicPosts.length} problematic posts`)
    
    // Add to deleted tracking
    const deletedPostIds = problematicPosts.map(post => post.id)
    sessionStorage.setItem('deletedPostIds', JSON.stringify(deletedPostIds))
    console.log(`✅ Added ${deletedPostIds.length} posts to deleted tracking`)
  } else {
    console.log('✅ No problematic posts found')
  }
}

// Step 3: Update published posts cache
const publishedPosts = localStorage.getItem('publishedBlogPosts')
if (publishedPosts) {
  const posts = JSON.parse(publishedPosts)
  const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
  
  // Remove deleted posts from published cache
  const validPublishedPosts = posts.filter(post => !deletedPostIds.includes(post.id))
  localStorage.setItem('publishedBlogPosts', JSON.stringify(validPublishedPosts))
  console.log(`✅ Updated published posts cache: ${validPublishedPosts.length} posts`)
}

// Step 4: Set up deletion tracking
if (!sessionStorage.getItem('deletedPostIds')) {
  sessionStorage.setItem('deletedPostIds', JSON.stringify([]))
  console.log('✅ Set up deletion tracking')
}

console.log('\n✅ Simple delete fix applied!')
console.log('📋 Posts will now stay deleted after refresh.')
console.log('🔄 Please refresh the admin dashboard to see the changes.')

// Function to manually delete a post
window.manualDelete = function(postId) {
  if (!postId) {
    console.error('❌ No post ID provided')
    return
  }
  
  console.log(`🗑️ Manually deleting post: ${postId}`)
  
  // Remove from localStorage
  const blogPosts = localStorage.getItem('blogPosts')
  if (blogPosts) {
    const posts = JSON.parse(blogPosts)
    const filteredPosts = posts.filter(post => post.id !== postId)
    localStorage.setItem('blogPosts', JSON.stringify(filteredPosts))
  }
  
  // Add to deleted tracking
  const deletedPostIds = JSON.parse(sessionStorage.getItem('deletedPostIds') || '[]')
  if (!deletedPostIds.includes(postId)) {
    deletedPostIds.push(postId)
    sessionStorage.setItem('deletedPostIds', JSON.stringify(deletedPostIds))
  }
  
  // Remove from published posts cache
  const publishedPosts = localStorage.getItem('publishedBlogPosts')
  if (publishedPosts) {
    const posts = JSON.parse(publishedPosts)
    const filteredPublishedPosts = posts.filter(post => post.id !== postId)
    localStorage.setItem('publishedBlogPosts', JSON.stringify(filteredPublishedPosts))
  }
  
  console.log(`✅ Post ${postId} manually deleted`)
  console.log('🔄 Please refresh the page to see the changes')
}

console.log('\n💡 To manually delete a post, use: manualDelete("post-id-here")')
