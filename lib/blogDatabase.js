import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, increment } from 'firebase/firestore'
import { db } from './firebase'

// Collection name for blog posts
const COLLECTION_NAME = 'blog-posts'

// Helper function to check if Firebase is available
const isFirebaseAvailable = () => {
  return db && typeof window !== 'undefined'
}

// Helper function to compress data for localStorage
const compressData = (data) => {
  try {
    const jsonString = JSON.stringify(data)
    // Keep image URLs but compress other large data
    const compressed = data.map(post => ({
      ...post,
      // Keep the actual image URLs, don't replace with 'compressed'
      coverImage: post.coverImage || '',
      imageUrl: post.imageUrl || ''
    }))
    return JSON.stringify(compressed)
  } catch (error) {
    console.warn('Compression failed, using original data:', error)
    return JSON.stringify(data)
  }
}

// Helper function to save to localStorage with quota management
const saveToLocalStorage = (posts) => {
  if (typeof window !== 'undefined') {
    try {
      // Clear old data first
      localStorage.removeItem('blogPosts')
      
      // Try to save compressed data
      const compressedData = compressData(posts)
      localStorage.setItem('blogPosts', compressedData)
      console.log('✅ Data saved to localStorage (compressed)')
    } catch (error) {
      console.warn('localStorage save failed, clearing old data and retrying:', error)
      try {
        // Clear all blog-related data
        Object.keys(localStorage).forEach(key => {
          if (key.includes('blog') || key.includes('post')) {
            localStorage.removeItem(key)
          }
        })
        
        // Try saving minimal data
        const minimalPosts = posts.slice(0, 10).map(post => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          published: post.published,
          createdAt: post.createdAt,
          author: post.author,
          category: post.category
        }))
        localStorage.setItem('blogPosts', JSON.stringify(minimalPosts))
        console.log('✅ Minimal data saved to localStorage')
      } catch (retryError) {
        console.error('localStorage completely failed:', retryError)
      }
    }
  }
}

// Helper function to load from localStorage
const loadFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('blogPosts')
      return saved ? JSON.parse(saved) : []
    } catch (error) {
      console.warn('localStorage load failed:', error)
      return []
    }
  }
  return []
}

// Create a new blog post
export const createBlogPost = async (blogData) => {
  try {
    console.log('🚀 Creating blog post with data:', blogData)
    console.log('📊 Firebase available:', isFirebaseAvailable())
    console.log('🔥 Database instance:', !!db)
    
    // Create post data with timestamps
    const postData = {
      ...blogData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0
    }
    
    console.log('📝 Final post data to save:', postData)
    
    // Try Firebase first
    let firebaseId = null
    try {
      if (isFirebaseAvailable()) {
        console.log('🔥 Attempting to save to Firebase...')
        console.log('📁 Collection name:', COLLECTION_NAME)
        
        const docRef = await addDoc(collection(db, COLLECTION_NAME), postData)
        firebaseId = docRef.id
        console.log('✅ Successfully saved to Firebase with ID:', firebaseId)
        console.log('🔗 Firebase document path:', docRef.path)
      } else {
        console.warn('❌ Firebase not available - checking why...')
        console.log('Database instance:', db)
        console.log('Window available:', typeof window !== 'undefined')
      }
    } catch (firebaseError) {
      console.error('❌ Firebase save failed:', firebaseError)
      console.error('Error details:', {
        code: firebaseError.code,
        message: firebaseError.message,
        stack: firebaseError.stack
      })
    }
    
    // Generate local ID if Firebase failed
    const finalId = firebaseId || Date.now().toString()
    const finalPost = { id: finalId, ...postData }
    
    // Always save to localStorage for immediate access
    try {
      const existingPosts = loadFromLocalStorage()
      existingPosts.unshift(finalPost)
      saveToLocalStorage(existingPosts)
      console.log('✅ Also saved to localStorage')
    } catch (localStorageError) {
      console.warn('localStorage save failed:', localStorageError.message)
    }
    
    return finalPost
  } catch (error) {
    console.error('Error creating blog post:', error)
    throw error
  }
}

// Get blog posts with optional filters
export const getBlogPosts = async (options = {}) => {
  try {
    // Try Firebase first
    if (isFirebaseAvailable()) {
      console.log('Fetching from Firebase...')
      let q = collection(db, COLLECTION_NAME)
      
      // Apply filters
      if (options.published !== null && options.published !== undefined) {
        q = query(q, where('published', '==', options.published))
      }
      
      if (options.featured) {
        q = query(q, where('featured', '==', true))
      }
      
      if (options.category) {
        q = query(q, where('category', '==', options.category))
      }
      
      // Apply ordering
      q = query(q, orderBy('createdAt', 'desc'))
      
      if (options.limit) {
        q = query(q, limit(options.limit))
      }
      
      const querySnapshot = await getDocs(q)
      const posts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      
      // Update localStorage with Firebase data
      try {
        saveToLocalStorage(posts)
      } catch (localStorageError) {
        console.warn('Could not update localStorage:', localStorageError.message)
      }
      
      console.log('✅ Loaded', posts.length, 'posts from Firebase')
      return posts
    }
  } catch (error) {
    console.warn('Firebase fetch failed, using localStorage:', error.message)
  }
  
  // Fallback to localStorage
  const posts = loadFromLocalStorage()
  let filteredPosts = posts
  
  if (options.published !== null && options.published !== undefined) {
    filteredPosts = posts.filter(post => post.published === options.published)
  }
  
  if (options.featured) {
    filteredPosts = filteredPosts.filter(post => post.featured === true)
  }
  
  if (options.category) {
    filteredPosts = filteredPosts.filter(post => post.category === options.category)
  }
  
  // Sort by createdAt
  filteredPosts.sort((a, b) => {
    const dateA = new Date(a.createdAt || 0)
    const dateB = new Date(b.createdAt || 0)
    return dateB - dateA
  })
  
  if (options.limit) {
    filteredPosts = filteredPosts.slice(0, options.limit)
  }
  
  console.log('✅ Loaded', filteredPosts.length, 'posts from localStorage')
  return filteredPosts
}

// Get a single blog post by ID
export const getBlogPostById = async (id) => {
  try {
    if (isFirebaseAvailable()) {
      const docRef = doc(db, COLLECTION_NAME, id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      }
    }
  } catch (error) {
    console.warn('Firebase fetch failed, trying localStorage:', error.message)
  }
  
  // Fallback to localStorage
  const posts = loadFromLocalStorage()
  return posts.find(post => post.id === id) || null
}

// Get a blog post by slug
export const getBlogPostBySlug = async (slug) => {
  try {
    if (isFirebaseAvailable()) {
      const q = query(collection(db, COLLECTION_NAME), where('slug', '==', slug))
      const querySnapshot = await getDocs(q)
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0]
        return { id: doc.id, ...doc.data() }
      }
    }
  } catch (error) {
    console.warn('Firebase fetch failed, trying localStorage:', error.message)
  }
  
  // Fallback to localStorage
  const posts = loadFromLocalStorage()
  return posts.find(post => post.slug === slug) || null
}

// Update a blog post
export const updateBlogPost = async (id, updates) => {
  try {
    if (isFirebaseAvailable()) {
      const docRef = doc(db, COLLECTION_NAME, id)
      await updateDoc(docRef, {
        ...updates,
        updatedAt: new Date().toISOString()
      })
    }
    
    // Also update localStorage
    try {
      const posts = loadFromLocalStorage()
      const index = posts.findIndex(post => post.id === id)
      if (index !== -1) {
        posts[index] = { ...posts[index], ...updates, updatedAt: new Date().toISOString() }
        saveToLocalStorage(posts)
      }
    } catch (localStorageError) {
      console.warn('localStorage update failed:', localStorageError.message)
    }
    
    return { id, ...updates }
  } catch (error) {
    console.error('Error updating blog post:', error)
    throw error
  }
}

// Delete a blog post
export const deleteBlogPost = async (id) => {
  try {
    if (isFirebaseAvailable()) {
      await deleteDoc(doc(db, COLLECTION_NAME, id))
    }
    
    // Also remove from localStorage
    try {
      const posts = loadFromLocalStorage()
      const filteredPosts = posts.filter(post => post.id !== id)
      saveToLocalStorage(filteredPosts)
    } catch (localStorageError) {
      console.warn('localStorage delete failed:', localStorageError.message)
    }
    
    return true
  } catch (error) {
    console.error('Error deleting blog post:', error)
    throw error
  }
}

// Search blog posts
export const searchBlogPosts = async (searchTerm) => {
  const posts = await getBlogPosts()
  return posts.filter(post => 
    post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

// Get blog categories
export const getBlogCategories = async () => {
  const posts = await getBlogPosts()
  const categories = [...new Set(posts.map(post => post.category).filter(Boolean))]
  return categories
}

// Get blog tags
export const getBlogTags = async () => {
  const posts = await getBlogPosts()
  const allTags = posts.flatMap(post => post.tags || [])
  const uniqueTags = [...new Set(allTags)]
  return uniqueTags
}

// Increment blog post views
export const incrementBlogViews = async (id) => {
  try {
    if (isFirebaseAvailable()) {
      const docRef = doc(db, COLLECTION_NAME, id)
      await updateDoc(docRef, {
        views: increment(1)
      })
    }
    
    // Also update localStorage
    try {
      const posts = loadFromLocalStorage()
      const index = posts.findIndex(post => post.id === id)
      if (index !== -1) {
        posts[index].views = (posts[index].views || 0) + 1
        saveToLocalStorage(posts)
      }
    } catch (localStorageError) {
      console.warn('localStorage view increment failed:', localStorageError.message)
    }
  } catch (error) {
    console.error('Error incrementing blog views:', error)
  }
}

// Get featured blog posts
export const getFeaturedBlogPosts = async (limit = 3) => {
  return getBlogPosts({ featured: true, limit })
}

// Get recent blog posts
export const getRecentBlogPosts = async (limit = 5) => {
  return getBlogPosts({ published: true, limit })
}

// Test Firebase database connection
export const testFirebaseDatabase = async () => {
  console.log('🧪 Testing Firebase Database connection...')
  
  if (!isFirebaseAvailable()) {
    console.error('❌ Firebase Database not available')
    return { success: false, error: 'Firebase Database not available' }
  }

  try {
    // Test creating a simple document
    const testData = {
      test: true,
      timestamp: new Date().toISOString(),
      message: 'Firebase Database test'
    }
    
    console.log('📝 Creating test document...')
    const docRef = await addDoc(collection(db, 'test-collection'), testData)
    console.log('✅ Test document created with ID:', docRef.id)
    
    // Test reading the document back
    console.log('📖 Reading test document...')
    const docSnap = await getDoc(doc(db, 'test-collection', docRef.id))
    
    if (docSnap.exists()) {
      console.log('✅ Test document read successfully:', docSnap.data())
      
      // Clean up test document
      await deleteDoc(doc(db, 'test-collection', docRef.id))
      console.log('✅ Test document cleaned up')
      
      return { success: true, message: 'Firebase Database is working correctly' }
    } else {
      throw new Error('Test document not found after creation')
    }
  } catch (error) {
    console.error('❌ Firebase Database test failed:', error)
    return { success: false, error: error.message }
  }
}

// Test function to create a sample post with image
export const createTestPostWithImage = async () => {
  try {
    console.log('🧪 Creating test post with image...')

    const testPostData = {
      title: 'Test Post with Image - Fixed',
      content: 'This is a test post to verify image functionality. The image should display correctly on both the blog page and dashboard.',
      excerpt: 'Test excerpt for image verification with a reliable image URL.',
      coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
      tags: ['test', 'image', 'dental'],
      category: 'Test',
      author: 'Test Admin',
      published: true,
      featured: false,
      slug: 'test-post-with-image-fixed',
      metaTitle: 'Test Post with Image - Fixed',
      metaDescription: 'Test post for image verification with reliable image URL',
      publishDate: new Date().toISOString()
    }

    console.log('📝 Test post data:', testPostData)
    console.log('🖼️ Image URLs:', {
      coverImage: testPostData.coverImage,
      imageUrl: testPostData.imageUrl
    })

    const result = await createBlogPost(testPostData)
    console.log('✅ Test post created:', result)

    return { success: true, postId: result.id, message: 'Test post created successfully' }
  } catch (error) {
    console.error('❌ Test post creation failed:', error)
    return { success: false, error: error.message }
  }
}

// Function to fix existing posts with missing or broken images
export const fixPostsWithMissingImages = async () => {
  try {
    console.log('🔧 Starting to fix posts with missing images...')
    
    // Get all posts
    const allPosts = await getBlogPosts()
    console.log(`📊 Found ${allPosts.length} total posts`)
    
    let fixedCount = 0
    const dentalImageUrl = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80'
    
    for (const post of allPosts) {
      let needsUpdate = false
      const updates = {}
      
      // Check if post has missing or invalid image URLs
      const hasCoverImage = post.coverImage && post.coverImage.trim() && post.coverImage.startsWith('http')
      const hasImageUrl = post.imageUrl && post.imageUrl.trim() && post.imageUrl.startsWith('http')
      
      if (!hasCoverImage && !hasImageUrl) {
        // Post has no valid images, add a default dental image
        updates.coverImage = dentalImageUrl
        updates.imageUrl = dentalImageUrl
        needsUpdate = true
        console.log(`🖼️ Adding default image to post: "${post.title}"`)
      } else if (hasCoverImage && !hasImageUrl) {
        // Post has coverImage but no imageUrl, copy coverImage to imageUrl
        updates.imageUrl = post.coverImage
        needsUpdate = true
        console.log(`🔄 Copying coverImage to imageUrl for post: "${post.title}"`)
      } else if (!hasCoverImage && hasImageUrl) {
        // Post has imageUrl but no coverImage, copy imageUrl to coverImage
        updates.coverImage = post.imageUrl
        needsUpdate = true
        console.log(`🔄 Copying imageUrl to coverImage for post: "${post.title}"`)
      }
      
      if (needsUpdate) {
        try {
          await updateBlogPost(post.id, updates)
          fixedCount++
          console.log(`✅ Fixed post: "${post.title}"`)
        } catch (updateError) {
          console.error(`❌ Failed to update post "${post.title}":`, updateError)
        }
      }
    }
    
    console.log(`🎉 Fixed ${fixedCount} posts with missing images`)
    return { 
      success: true, 
      fixedCount, 
      totalPosts: allPosts.length,
      message: `Fixed ${fixedCount} out of ${allPosts.length} posts with missing images`
    }
  } catch (error) {
    console.error('❌ Error fixing posts with missing images:', error)
    return { success: false, error: error.message }
  }
}

// Function to validate all post images and report issues
export const validateAllPostImages = async () => {
  try {
    console.log('🔍 Validating all post images...')
    
    const allPosts = await getBlogPosts()
    console.log(`📊 Found ${allPosts.length} total posts`)
    
    const results = {
      total: allPosts.length,
      valid: 0,
      invalid: 0,
      missing: 0,
      issues: []
    }
    
    for (const post of allPosts) {
      const hasCoverImage = post.coverImage && post.coverImage.trim() && post.coverImage.startsWith('http')
      const hasImageUrl = post.imageUrl && post.imageUrl.trim() && post.imageUrl.startsWith('http')
      
      if (!hasCoverImage && !hasImageUrl) {
        results.missing++
        results.issues.push({
          postId: post.id,
          title: post.title,
          issue: 'No valid images found',
          coverImage: post.coverImage,
          imageUrl: post.imageUrl
        })
      } else if (hasCoverImage && !hasImageUrl) {
        results.invalid++
        results.issues.push({
          postId: post.id,
          title: post.title,
          issue: 'Missing imageUrl field',
          coverImage: post.coverImage,
          imageUrl: post.imageUrl
        })
      } else if (!hasCoverImage && hasImageUrl) {
        results.invalid++
        results.issues.push({
          postId: post.id,
          title: post.title,
          issue: 'Missing coverImage field',
          coverImage: post.coverImage,
          imageUrl: post.imageUrl
        })
      } else {
        results.valid++
      }
    }
    
    console.log('📋 Image validation results:', results)
    return results
  } catch (error) {
    console.error('❌ Error validating post images:', error)
    return { success: false, error: error.message }
  }
} 