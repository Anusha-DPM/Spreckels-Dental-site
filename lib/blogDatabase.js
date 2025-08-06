import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, increment } from 'firebase/firestore'
import { db } from './firebase'

// Collection name for blog posts
const COLLECTION_NAME = 'blog-posts'

// Helper function to check if Firebase is available
const isFirebaseAvailable = () => {
  return db && typeof window !== 'undefined' && navigator.onLine
}

// Helper function to compress data for localStorage
const compressData = (data) => {
  try {
    const jsonString = JSON.stringify(data)
    // Remove large image data to save space
    const compressed = data.map(post => ({
      ...post,
      coverImage: post.coverImage ? 'compressed' : '',
      imageUrl: post.imageUrl ? 'compressed' : ''
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
    console.log('Creating blog post with data:', blogData)
    
    // Create post data with timestamps
    const postData = {
      ...blogData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0
    }
    
    // Try Firebase first
    let firebaseId = null
    try {
      if (isFirebaseAvailable()) {
        console.log('Attempting to save to Firebase...')
        const docRef = await addDoc(collection(db, COLLECTION_NAME), postData)
        firebaseId = docRef.id
        console.log('✅ Saved to Firebase with ID:', firebaseId)
      } else {
        console.warn('Firebase not available')
      }
    } catch (firebaseError) {
      console.warn('Firebase save failed:', firebaseError.message)
    }
    
    // Generate local ID if Firebase failed
    const finalId = firebaseId || Date.now().toString()
    const finalPost = { id: finalId, ...postData }
    
    // Try to save to localStorage (but don't fail if it doesn't work)
    try {
      const existingPosts = loadFromLocalStorage()
      existingPosts.unshift(finalPost)
      saveToLocalStorage(existingPosts)
      console.log('✅ Also saved to localStorage')
    } catch (localStorageError) {
      console.warn('localStorage save failed, but Firebase may have worked:', localStorageError.message)
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
      
      // Try to update localStorage with Firebase data
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