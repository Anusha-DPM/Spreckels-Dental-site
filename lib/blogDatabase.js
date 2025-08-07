import { db } from './firebase'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
  serverTimestamp
} from 'firebase/firestore'

// Check if Firebase is initialized
if (!db) {
  console.warn('Firebase Firestore not initialized. Database operations will fail.');
}

// Generate slug from title
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Create a new blog post
export const createBlogPost = async (postData) => {
  try {
    if (!db) {
      throw new Error('Firebase Firestore not initialized. Please check your Firebase configuration.');
    }
    
    const now = new Date().toISOString()
    const post = {
      ...postData,
      createdAt: now,
      updatedAt: now
    }

    const docRef = await addDoc(collection(db, 'blog-posts'), post)
    console.log('✅ Blog post created successfully:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('❌ Error creating blog post:', error)
    throw error
  }
}

// Get all blog posts
export const getBlogPosts = async () => {
  try {
    if (!db) {
      throw new Error('Firebase Firestore not initialized. Please check your Firebase configuration.');
    }
    
    const q = query(
      collection(db, 'blog-posts'),
      orderBy('publishDate', 'desc')
    )
    const querySnapshot = await getDocs(q)

    const posts = []
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data()
      })
    })

    console.log('✅ Retrieved blog posts:', posts.length)
    return posts
  } catch (error) {
    console.error('❌ Error getting blog posts:', error)
    throw error
  }
}

// Get published blog posts only
export const getPublishedBlogPosts = async () => {
  try {
    const q = query(
      collection(db, 'blog-posts'),
      where('published', '==', true),
      orderBy('publishDate', 'desc')
    )
    const querySnapshot = await getDocs(q)
    
    const posts = []
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    console.log('✅ Retrieved published blog posts:', posts.length)
    return posts
  } catch (error) {
    console.error('❌ Error getting published blog posts:', error)
    throw error
  }
}

// Get a single blog post by ID
export const getBlogPostById = async (id) => {
  try {
    const docRef = doc(db, 'blog-posts', id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      const post = {
        id: docSnap.id,
        ...docSnap.data()
      }
      console.log('✅ Retrieved blog post:', post.title)
      return post
    } else {
      console.log('❌ Blog post not found')
      return null
    }
  } catch (error) {
    console.error('❌ Error getting blog post:', error)
    throw error
  }
}

// Get a blog post by slug
export const getBlogPostBySlug = async (slug) => {
  try {
    const q = query(
      collection(db, 'blog-posts'),
      where('slug', '==', slug),
      where('published', '==', true)
    )
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      const post = {
        id: doc.id,
        ...doc.data()
      }
      console.log('✅ Retrieved blog post by slug:', post.title)
      return post
    } else {
      console.log('❌ Blog post not found by slug:', slug)
      return null
    }
  } catch (error) {
    console.error('❌ Error getting blog post by slug:', error)
    throw error
  }
}

// Update a blog post
export const updateBlogPost = async (id, postData) => {
  try {
    const docRef = doc(db, 'blog-posts', id)
    const updateData = {
      ...postData,
      updatedAt: new Date().toISOString()
    }
    
    await updateDoc(docRef, updateData)
    console.log('✅ Blog post updated successfully:', id)
  } catch (error) {
    console.error('❌ Error updating blog post:', error)
    throw error
  }
}

// Delete a blog post
export const deleteBlogPost = async (id) => {
  try {
    const docRef = doc(db, 'blog-posts', id)
    await deleteDoc(docRef)
    console.log('✅ Blog post deleted successfully:', id)
  } catch (error) {
    console.error('❌ Error deleting blog post:', error)
    throw error
  }
}

// Get latest blog posts (for homepage)
export const getLatestBlogPosts = async (limit = 3) => {
  try {
    const q = query(
      collection(db, 'blog-posts'),
      where('published', '==', true),
      orderBy('publishDate', 'desc')
    )
    const querySnapshot = await getDocs(q)
    
    const posts = []
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    // Limit the results
    const limitedPosts = posts.slice(0, limit)
    console.log('✅ Retrieved latest blog posts:', limitedPosts.length)
    return limitedPosts
  } catch (error) {
    console.error('❌ Error getting latest blog posts:', error)
    throw error
  }
}
