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

// Blog post interface
export interface BlogPost {
  id?: string
  title: string
  content: string
  excerpt?: string
  coverImage?: string
  imageUrl?: string
  tags: string[]
  categories: string[]
  metaTitle: string
  metaDescription: string
  slug: string
  published: boolean
  publishDate: string
  createdAt: string
  updatedAt: string
  author?: string
}

// Generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Create a new blog post
export const createBlogPost = async (postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
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
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(
      collection(db, 'blog-posts'),
      orderBy('publishDate', 'desc')
    )
    const querySnapshot = await getDocs(q)
    
    const posts: BlogPost[] = []
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data()
      } as BlogPost)
    })
    
    console.log('✅ Retrieved blog posts:', posts.length)
    return posts
  } catch (error) {
    console.error('❌ Error getting blog posts:', error)
    throw error
  }
}

// Get published blog posts only
export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(
      collection(db, 'blog-posts'),
      where('published', '==', true),
      orderBy('publishDate', 'desc')
    )
    const querySnapshot = await getDocs(q)
    
    const posts: BlogPost[] = []
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data()
      } as BlogPost)
    })
    
    console.log('✅ Retrieved published blog posts:', posts.length)
    return posts
  } catch (error) {
    console.error('❌ Error getting published blog posts:', error)
    throw error
  }
}

// Get a single blog post by ID
export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const docRef = doc(db, 'blog-posts', id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      const post = {
        id: docSnap.id,
        ...docSnap.data()
      } as BlogPost
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
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
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
      } as BlogPost
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
export const updateBlogPost = async (id: string, postData: Partial<BlogPost>): Promise<void> => {
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
export const deleteBlogPost = async (id: string): Promise<void> => {
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
export const getLatestBlogPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  try {
    const q = query(
      collection(db, 'blog-posts'),
      where('published', '==', true),
      orderBy('publishDate', 'desc')
    )
    const querySnapshot = await getDocs(q)
    
    const posts: BlogPost[] = []
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data()
      } as BlogPost)
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
