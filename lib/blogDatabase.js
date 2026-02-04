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
  where
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

    console.log('💾 Saving post to Firestore with data:', {
      title: post.title,
      coverImage: post.coverImage,
      imageUrl: post.imageUrl,
      slug: post.slug,
      hasCoverImage: !!post.coverImage,
      coverImageLength: post.coverImage?.length || 0,
      coverImageType: typeof post.coverImage
    })
    
    const docRef = await addDoc(collection(db, 'blog-posts'), post)
    console.log('✅ Blog post created successfully with ID:', docRef.id)
    console.log('📸 Cover image saved:', post.coverImage)
    console.log('📸 Image URL saved:', post.imageUrl)
    
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
    if (!db) {
      throw new Error('Firebase Firestore not initialized. Please check your Firebase configuration.')
    }
    
    // First get all posts, then filter and sort in memory to avoid composite index requirement
    const q = query(
      collection(db, 'blog-posts')
    )
    const querySnapshot = await getDocs(q)
    
    const posts = []
    querySnapshot.forEach((doc) => {
      const postData = doc.data()
      if (postData.published === true) {
        const post = {
          id: doc.id,
          ...postData
        }
        console.log(`📄 Retrieved post "${post.title}":`, {
          id: post.id,
          coverImage: post.coverImage,
          imageUrl: post.imageUrl,
          hasContent: !!post.content
        })
        posts.push(post)
      }
    })
    
    // Sort by publishDate in descending order
    posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    
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
    if (!db) {
      throw new Error('Firebase Firestore not initialized. Please check your Firebase configuration.')
    }
    
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
    if (!db) {
      throw new Error('Firebase Firestore not initialized. Please check your Firebase configuration.')
    }
    
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
    if (!db) {
      throw new Error('Firebase Firestore not initialized. Please check your Firebase configuration.')
    }
    
    const docRef = doc(db, 'blog-posts', id)
    const updateData = {
      ...postData,
      updatedAt: new Date().toISOString()
    }
    
    console.log('💾 Updating post in Firestore with data:', {
      id: id,
      coverImage: updateData.coverImage,
      imageUrl: updateData.imageUrl,
      hasCoverImage: !!updateData.coverImage,
      coverImageLength: updateData.coverImage?.length || 0,
      coverImageType: typeof updateData.coverImage
    })
    
    await updateDoc(docRef, updateData)
    console.log('✅ Blog post updated successfully:', id)
    console.log('📸 Cover image in update:', updateData.coverImage)
    console.log('📸 Image URL in update:', updateData.imageUrl)
  } catch (error) {
    console.error('❌ Error updating blog post:', error)
    throw error
  }
}

// Delete a blog post
export const deleteBlogPost = async (id) => {
  try {
    if (!db) {
      throw new Error('Firebase Firestore not initialized. Please check your Firebase configuration.')
    }
    
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
    if (!db) {
      throw new Error('Firebase Firestore not initialized. Please check your Firebase configuration.')
    }
    
    // First get all posts, then filter and sort in memory to avoid composite index requirement
    const q = query(
      collection(db, 'blog-posts')
    )
    const querySnapshot = await getDocs(q)
    
    const posts = []
    querySnapshot.forEach((doc) => {
      const postData = doc.data()
      if (postData.published === true) {
        posts.push({
          id: doc.id,
          ...postData
        })
      }
    })
    
    // Sort by publishDate in descending order and limit results
    posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    const limitedPosts = posts.slice(0, limit)
    
    console.log('✅ Retrieved latest blog posts:', limitedPosts.length)
    return limitedPosts
  } catch (error) {
    console.error('❌ Error getting latest blog posts:', error)
    throw error
  }
}
