import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp,
  increment 
} from 'firebase/firestore';
import { db } from './firebase';

// Create a new blog post
export const createBlogPost = async (blogData) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const blogPost = {
      ...blogData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      views: 0,
      published: blogData.published || false,
      featured: blogData.featured || false,
      slug: blogData.slug || blogData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    };
    
    const docRef = await addDoc(collection(db, 'blog-posts'), blogPost);
    return { id: docRef.id, ...blogPost };
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

// Get all blog posts with optional filters
export const getBlogPosts = async (options = {}) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    let q = collection(db, 'blog-posts');
    
    // Apply filters
    if (options.published !== null && options.published !== undefined) {
      q = query(q, where('published', '==', options.published));
    }
    
    if (options.featured !== null && options.featured !== undefined) {
      q = query(q, where('featured', '==', options.featured));
    }
    
    if (options.category) {
      q = query(q, where('category', '==', options.category));
    }
    
    if (options.author) {
      q = query(q, where('author', '==', options.author));
    }
    
    // Apply ordering
    const orderByField = options.orderBy || 'createdAt';
    const orderDirection = options.direction || 'desc';
    q = query(q, orderBy(orderByField, orderDirection));
    
    // Apply limit
    if (options.limit) {
      q = query(q, limit(options.limit));
    }
    
    const querySnapshot = await getDocs(q);
    const posts = [];
    
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    
    return posts;
  } catch (error) {
    console.error('Error getting blog posts:', error);
    throw error;
  }
};

// Get a single blog post by ID
export const getBlogPostById = async (postId) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = doc(db, 'blog-posts', postId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting blog post:', error);
    throw error;
  }
};

// Get a blog post by slug
export const getBlogPostBySlug = async (slug) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const q = query(
      collection(db, 'blog-posts'),
      where('slug', '==', slug),
      where('published', '==', true)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting blog post by slug:', error);
    throw error;
  }
};

// Update a blog post
export const updateBlogPost = async (postId, updateData) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = doc(db, 'blog-posts', postId);
    await updateDoc(docRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });
    
    return { id: postId, ...updateData };
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlogPost = async (postId) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = doc(db, 'blog-posts', postId);
    await deleteDoc(docRef);
    
    return { id: postId, deleted: true };
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

// Search blog posts
export const searchBlogPosts = async (searchTerm, options = {}) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    // For Firestore, we need to use a different approach for text search
    // This is a simple implementation - for production, consider using Algolia or similar
    const allPosts = await getBlogPosts({ published: true, limit: 100 });
    
    const searchResults = allPosts.filter(post => 
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    return searchResults;
  } catch (error) {
    console.error('Error searching blog posts:', error);
    throw error;
  }
};

// Get blog categories
export const getBlogCategories = async () => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const posts = await getBlogPosts({ published: true });
    const categories = [...new Set(posts.map(post => post.category).filter(Boolean))];
    
    return categories;
  } catch (error) {
    console.error('Error getting blog categories:', error);
    throw error;
  }
};

// Get blog tags
export const getBlogTags = async () => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const posts = await getBlogPosts({ published: true });
    const allTags = posts.flatMap(post => post.tags || []).filter(Boolean);
    const uniqueTags = [...new Set(allTags)];
    
    return uniqueTags;
  } catch (error) {
    console.error('Error getting blog tags:', error);
    throw error;
  }
};

// Increment blog post views
export const incrementBlogViews = async (postId) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = doc(db, 'blog-posts', postId);
    await updateDoc(docRef, {
      views: increment(1)
    });
    
    return { id: postId, viewsIncremented: true };
  } catch (error) {
    console.error('Error incrementing blog views:', error);
    throw error;
  }
};

// Get featured blog posts
export const getFeaturedBlogPosts = async (limit = 3) => {
  try {
    return await getBlogPosts({ 
      published: true, 
      featured: true, 
      limit 
    });
  } catch (error) {
    console.error('Error getting featured blog posts:', error);
    throw error;
  }
};

// Get recent blog posts
export const getRecentBlogPosts = async (limit = 5) => {
  try {
    return await getBlogPosts({ 
      published: true, 
      limit 
    });
  } catch (error) {
    console.error('Error getting recent blog posts:', error);
    throw error;
  }
}; 