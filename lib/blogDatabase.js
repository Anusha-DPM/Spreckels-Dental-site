import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, serverTimestamp, increment } from 'firebase/firestore'
import { db } from './firebase'

// Collection name for blog posts
const COLLECTION_NAME = 'blog-posts'

// Helper function to check if Firebase is available
const isFirebaseAvailable = () => {
  return db && typeof window !== 'undefined' && navigator.onLine
}

// Helper function to check Firebase connectivity
const checkFirebaseConnectivity = async () => {
  try {
    if (!isFirebaseAvailable()) {
      console.warn('Firebase not available - db or window not available')
      return false
    }
    
    console.log('Checking Firebase connectivity...')
    
    // Try a simple read operation to test connectivity
    const testQuery = query(collection(db, 'blog-posts'), limit(1))
    await getDocs(testQuery)
    
    console.log('✅ Firebase connectivity check passed')
    return true
  } catch (error) {
    console.warn('Firebase connectivity check failed:', error.message)
    return false
  }
}

// Helper function to save to localStorage as fallback
const saveToLocalStorage = (posts) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('blogPosts', JSON.stringify(posts))
  }
}

// Helper function to load from localStorage as fallback
const loadFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('blogPosts')
    return saved ? JSON.parse(saved) : []
  }
  return []
}

// Create a new blog post
export const createBlogPost = async (blogData) => {
  try {
    console.log('createBlogPost called with:', blogData)
    
    // Always save to localStorage first for immediate availability
    const newPost = {
      id: Date.now().toString(),
      ...blogData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0
    }
    
    const existingPosts = loadFromLocalStorage()
    existingPosts.unshift(newPost)
    saveToLocalStorage(existingPosts)
    
    console.log('✅ Blog post saved to localStorage immediately:', newPost.id)
    
    // Then try Firebase
    try {
      // Check Firebase connectivity first
      const isConnected = await checkFirebaseConnectivity()
      
      if (!isConnected) {
        console.warn('Firebase not connected, using localStorage only')
        return newPost
      }

      const postData = {
        ...blogData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        views: 0
      }

      console.log('Attempting to save to Firebase with data:', postData)

      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Firebase timeout')), 15000)
      )
      
      const docRef = await Promise.race([
        addDoc(collection(db, COLLECTION_NAME), postData),
        timeoutPromise
      ])
      
      // Update localStorage with Firebase ID
      const updatedPost = { ...newPost, id: docRef.id }
      const updatedPosts = loadFromLocalStorage()
      const index = updatedPosts.findIndex(p => p.id === newPost.id)
      if (index !== -1) {
        updatedPosts[index] = updatedPost
        saveToLocalStorage(updatedPosts)
      }
      
      console.log('✅ Blog post also saved to Firebase successfully:', docRef.id)
      return updatedPost
    } catch (firebaseError) {
      console.warn('Firebase save failed, but post is available in localStorage:', firebaseError.message)
      return newPost
    }
  } catch (error) {
    console.error('Error creating blog post:', error)
    throw error
  }
}

// Get blog posts with optional filters
export const getBlogPosts = async (options = {}) => {
  try {
    // Check Firebase connectivity first
    const isConnected = await checkFirebaseConnectivity()
    
    if (!isConnected) {
      console.warn('Firebase not connected, using localStorage only')
      throw new Error('Firebase not connected')
    }

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
    
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Firebase timeout')), 15000)
    )
    
    const querySnapshot = await Promise.race([
      getDocs(q),
      timeoutPromise
    ])
    
    const posts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    // Update localStorage with Firebase data
    const existingPosts = loadFromLocalStorage()
    const updatedPosts = posts.map(post => {
      const existing = existingPosts.find(p => p.id === post.id)
      return existing ? { ...existing, ...post } : post
    })
    saveToLocalStorage(updatedPosts)
    
    return posts
  } catch (error) {
    
    // Fallback to localStorage
    const posts = loadFromLocalStorage()
    
    // Apply filters to localStorage data
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
      const dateA = new Date(a.createdAt || a.createdAt?.toDate?.() || 0)
      const dateB = new Date(b.createdAt || b.createdAt?.toDate?.() || 0)
      return dateB - dateA
    })
    
    if (options.limit) {
      filteredPosts = filteredPosts.slice(0, options.limit)
    }
    
    return filteredPosts
  }
}

// Get a single blog post by ID
export const getBlogPostById = async (id) => {
  try {
    if (!isFirebaseAvailable()) {
      throw new Error('Firebase not available')
    }

    const docRef = doc(db, COLLECTION_NAME, id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting blog post by ID:', error)
    
    // Fallback to localStorage
    const posts = loadFromLocalStorage()
    return posts.find(post => post.id === id) || null
  }
}

// Get a blog post by slug
export const getBlogPostBySlug = async (slug) => {
  try {
    if (!isFirebaseAvailable()) {
      throw new Error('Firebase not available')
    }

    const q = query(collection(db, COLLECTION_NAME), where('slug', '==', slug))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      return { id: doc.id, ...doc.data() }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting blog post by slug:', error)
    
    // Fallback to localStorage
    const posts = loadFromLocalStorage()
    return posts.find(post => post.slug === slug) || null
  }
}

// Update a blog post
export const updateBlogPost = async (id, updates) => {
  try {
    if (!isFirebaseAvailable()) {
      throw new Error('Firebase not available')
    }

    const docRef = doc(db, COLLECTION_NAME, id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    })
    
    // Also update localStorage
    const posts = loadFromLocalStorage()
    const index = posts.findIndex(post => post.id === id)
    if (index !== -1) {
      posts[index] = { ...posts[index], ...updates, updatedAt: new Date().toISOString() }
      saveToLocalStorage(posts)
    }
    
    return { id, ...updates }
  } catch (error) {
    console.error('Error updating blog post:', error)
    
    // Fallback to localStorage only
    const posts = loadFromLocalStorage()
    const index = posts.findIndex(post => post.id === id)
    if (index !== -1) {
      posts[index] = { ...posts[index], ...updates, updatedAt: new Date().toISOString() }
      saveToLocalStorage(posts)
      return posts[index]
    }
    
    throw error
  }
}

// Delete a blog post
export const deleteBlogPost = async (id) => {
  try {
    if (!isFirebaseAvailable()) {
      throw new Error('Firebase not available')
    }

    await deleteDoc(doc(db, COLLECTION_NAME, id))
    
    // Also remove from localStorage
    const posts = loadFromLocalStorage()
    const filteredPosts = posts.filter(post => post.id !== id)
    saveToLocalStorage(filteredPosts)
    
    return true
  } catch (error) {
    console.error('Error deleting blog post:', error)
    
    // Fallback to localStorage only
    const posts = loadFromLocalStorage()
    const filteredPosts = posts.filter(post => post.id !== id)
    saveToLocalStorage(filteredPosts)
    
    return true
  }
}

// Search blog posts
export const searchBlogPosts = async (searchTerm) => {
  try {
    if (!isFirebaseAvailable()) {
      throw new Error('Firebase not available')
    }

    // Firebase doesn't support full-text search in free tier
    // This is a simple implementation - consider using Algolia for production
    const posts = await getBlogPosts()
    return posts.filter(post => 
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  } catch (error) {
    console.error('Error searching blog posts:', error)
    
    // Fallback to localStorage
    const posts = loadFromLocalStorage()
    return posts.filter(post => 
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
}

// Get blog categories
export const getBlogCategories = async () => {
  try {
    const posts = await getBlogPosts()
    const categories = [...new Set(posts.map(post => post.category).filter(Boolean))]
    return categories
  } catch (error) {
    console.error('Error getting blog categories:', error)
    return []
  }
}

// Get blog tags
export const getBlogTags = async () => {
  try {
    const posts = await getBlogPosts()
    const allTags = posts.flatMap(post => post.tags || [])
    const uniqueTags = [...new Set(allTags)]
    return uniqueTags
  } catch (error) {
    console.error('Error getting blog tags:', error)
    return []
  }
}

// Increment blog post views
export const incrementBlogViews = async (id) => {
  try {
    if (!isFirebaseAvailable()) {
      throw new Error('Firebase not available')
    }

    const docRef = doc(db, COLLECTION_NAME, id)
    await updateDoc(docRef, {
      views: increment(1)
    })
    
    // Also update localStorage
    const posts = loadFromLocalStorage()
    const index = posts.findIndex(post => post.id === id)
    if (index !== -1) {
      posts[index].views = (posts[index].views || 0) + 1
      saveToLocalStorage(posts)
    }
  } catch (error) {
    console.error('Error incrementing blog views:', error)
    
    // Fallback to localStorage only
    const posts = loadFromLocalStorage()
    const index = posts.findIndex(post => post.id === id)
    if (index !== -1) {
      posts[index].views = (posts[index].views || 0) + 1
      saveToLocalStorage(posts)
    }
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