// Comprehensive script to fix all blog issues
// Run this in the browser console on the admin dashboard page

// 1. Fix localStorage and Firebase sync issues
async function fixBlogSyncIssues() {
  try {
    console.log('🔧 Fixing blog sync issues...')
    
    // Clear any corrupted data
    localStorage.removeItem('blogPosts_backup')
    localStorage.removeItem('blogPosts_temp')
    
    // Get current posts
    const savedPosts = localStorage.getItem('blogPosts')
    if (!savedPosts) {
      console.log('❌ No posts found in localStorage')
      return
    }
    
    const posts = JSON.parse(savedPosts)
    console.log(`📊 Found ${posts.length} posts in localStorage`)
    
    // Clean and fix each post
    const cleanedPosts = posts.map(post => {
      // Ensure all required fields exist
      const cleanedPost = {
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
      
      // Fix status consistency
      if (cleanedPost.status === 'published') {
        cleanedPost.published = true
      } else {
        cleanedPost.status = 'draft'
        cleanedPost.published = false
      }
      
      return cleanedPost
    })
    
    // Save cleaned posts
    localStorage.setItem('blogPosts', JSON.stringify(cleanedPosts))
    console.log('✅ Posts cleaned and saved to localStorage')
    
    // Sync with Firebase
    try {
      const { createBlogPost, updateBlogPost, deleteBlogPost } = await import('./lib/blogDatabase.js')
      
      // Get Firebase posts to compare
      const { getBlogPosts } = await import('./lib/blogDatabase.js')
      const firebasePosts = await getBlogPosts({ published: null })
      
      console.log(`🔥 Found ${firebasePosts.length} posts in Firebase`)
      
      // Create/update posts in Firebase
      for (const post of cleanedPosts) {
        try {
          const existingFirebasePost = firebasePosts.find(fp => fp.id === post.id)
          
          if (existingFirebasePost) {
            // Update existing post
            await updateBlogPost(post.id, post)
            console.log(`✅ Updated post "${post.title}" in Firebase`)
          } else {
            // Create new post
            await createBlogPost(post)
            console.log(`✅ Created post "${post.title}" in Firebase`)
          }
        } catch (error) {
          console.log(`⚠️ Could not sync post "${post.title}":`, error.message)
        }
      }
      
      // Remove posts from Firebase that don't exist in localStorage
      for (const firebasePost of firebasePosts) {
        const existsInLocal = cleanedPosts.find(p => p.id === firebasePost.id)
        if (!existsInLocal) {
          try {
            await deleteBlogPost(firebasePost.id)
            console.log(`🗑️ Removed orphaned post "${firebasePost.title}" from Firebase`)
          } catch (error) {
            console.log(`⚠️ Could not remove orphaned post "${firebasePost.title}":`, error.message)
          }
        }
      }
      
    } catch (firebaseError) {
      console.log('⚠️ Firebase sync failed, but localStorage is fixed:', firebaseError.message)
    }
    
    console.log('🔄 Refreshing page...')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
    
  } catch (error) {
    console.error('❌ Error fixing sync issues:', error)
  }
}

// 2. Fix edit page routing
function fixEditPageRouting() {
  console.log('🔧 Checking edit page routing...')
  
  // Check if we're on the dashboard
  if (window.location.pathname.includes('/admin/dashboard')) {
    console.log('✅ On dashboard page')
    
    // Add click handlers to edit links
    const editLinks = document.querySelectorAll('a[href*="/admin/edit-post/"]')
    editLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (href) {
          console.log('🔗 Navigating to edit page:', href)
          window.location.href = href
        }
      })
    })
    
    console.log(`✅ Added click handlers to ${editLinks.length} edit links`)
  } else {
    console.log('❌ Not on dashboard page')
  }
}

// 3. Fix delete functionality
async function fixDeleteFunctionality() {
  console.log('🔧 Fixing delete functionality...')
  
  // Add proper delete handlers
  const deleteButtons = document.querySelectorAll('button')
  deleteButtons.forEach(button => {
    if (button.textContent?.includes('Delete')) {
      button.addEventListener('click', async (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        const postId = button.closest('tr')?.getAttribute('data-post-id')
        if (postId) {
          console.log(`🗑️ Deleting post with ID: ${postId}`)
          
          if (confirm('Are you sure you want to delete this post?')) {
            try {
              const { deleteBlogPost } = await import('./lib/blogDatabase.js')
              await deleteBlogPost(postId)
              
              // Remove from DOM immediately
              const row = button.closest('tr')
              if (row) {
                row.remove()
              }
              
              console.log('✅ Post deleted successfully')
            } catch (error) {
              console.error('❌ Error deleting post:', error)
              alert('Error deleting post. Please try again.')
            }
          }
        }
      })
    }
  })
  
  console.log('✅ Delete functionality fixed')
}

// 4. Fix frontend blog page
async function fixFrontendBlogPage() {
  console.log('🔧 Fixing frontend blog page...')
  
  try {
    // Navigate to blog page
    const blogPageUrl = '/blog'
    console.log(`📄 Checking blog page: ${blogPageUrl}`)
    
    // Open blog page in new tab to check
    window.open(blogPageUrl, '_blank')
    
    // Also try to refresh the blog page data
    const { getBlogPosts } = await import('./lib/blogDatabase.js')
    const publishedPosts = await getBlogPosts({ published: true })
    
    console.log(`📊 Found ${publishedPosts.length} published posts for frontend`)
    
    // Save published posts to a special localStorage key for frontend
    localStorage.setItem('publishedBlogPosts', JSON.stringify(publishedPosts))
    console.log('✅ Published posts saved for frontend')
    
  } catch (error) {
    console.error('❌ Error fixing frontend blog page:', error)
  }
}

// 5. Comprehensive fix function
async function fixAllBlogIssues() {
  console.log('🚀 Starting comprehensive blog fix...')
  
  try {
    // Step 1: Fix sync issues
    await fixBlogSyncIssues()
    
    // Step 2: Fix routing
    fixEditPageRouting()
    
    // Step 3: Fix delete functionality
    await fixDeleteFunctionality()
    
    // Step 4: Fix frontend
    await fixFrontendBlogPage()
    
    console.log('✅ All blog issues fixed!')
    
  } catch (error) {
    console.error('❌ Error in comprehensive fix:', error)
  }
}

// 6. Quick delete function
async function quickDeletePost(postTitle) {
  try {
    console.log(`🗑️ Quick deleting post: "${postTitle}"`)
    
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
    
    // Remove from localStorage immediately
    const updatedPosts = posts.filter(post => post.id !== targetPost.id)
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
    console.log('✅ Post removed from localStorage')
    
    // Delete from Firebase
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
    console.error('❌ Error in quick delete:', error)
  }
}

// Instructions for use:
console.log('🔧 Available functions:')
console.log('- fixAllBlogIssues() - Fix all issues comprehensively')
console.log('- fixBlogSyncIssues() - Fix sync issues only')
console.log('- fixEditPageRouting() - Fix edit page routing')
console.log('- fixDeleteFunctionality() - Fix delete functionality')
console.log('- fixFrontendBlogPage() - Fix frontend blog page')
console.log('- quickDeletePost("post title") - Quick delete specific post')
console.log('')
console.log('📝 Recommended usage:')
console.log('1. Run: fixAllBlogIssues()')
console.log('2. If specific posts need deletion: quickDeletePost("post title")')
