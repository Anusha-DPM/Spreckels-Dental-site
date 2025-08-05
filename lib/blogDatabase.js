import { 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  startAfter,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

// Blog collection name
export const BLOG_COLLECTION = 'blog_posts';

// Blog post structure
export const createBlogPost = async (blogData) => {
  try {
    const blogPost = {
      ...blogData,
      slug: blogData.slug || generateSlug(blogData.title),
      published: blogData.published || false,
      featured: blogData.featured || false,
      views: 0,
      likes: 0,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      publishedAt: blogData.published ? Timestamp.now() : null,
      author: blogData.author || 'Dr. Rujul G. Parikh',
      readTime: blogData.readTime || calculateReadTime(blogData.content),
      excerpt: blogData.excerpt || generateExcerpt(blogData.content),
      tags: blogData.tags || [],
      category: blogData.category || 'General Dentistry'
    };

    const docRef = await addDoc(collection(db, BLOG_COLLECTION), blogPost);
    return { id: docRef.id, ...blogPost };
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

// Get all blog posts with pagination
export const getBlogPosts = async (options = {}) => {
  try {
    const {
      limit: limitCount = 10,
      published = true,
      featured = false,
      category = null,
      tag = null,
      startAfterDoc = null
    } = options;

    let q = collection(db, BLOG_COLLECTION);

    // Build query based on options
    const constraints = [];

    if (published !== null) {
      constraints.push(where('published', '==', published));
    }

    if (featured) {
      constraints.push(where('featured', '==', true));
    }

    if (category) {
      constraints.push(where('category', '==', category));
    }

    if (tag) {
      constraints.push(where('tags', 'array-contains', tag));
    }

    // Always order by published date (newest first)
    constraints.push(orderBy('publishedAt', 'desc'));

    if (startAfterDoc) {
      constraints.push(startAfter(startAfterDoc));
    }

    constraints.push(limit(limitCount));

    q = query(q, ...constraints);
    const querySnapshot = await getDocs(q);
    
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ 
        id: doc.id, 
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
        publishedAt: doc.data().publishedAt?.toDate()
      });
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
    const docRef = doc(db, BLOG_COLLECTION, postId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      return { 
        id: docSnap.id, 
        ...data,
        createdAt: data.createdAt?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
        publishedAt: data.publishedAt?.toDate()
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting blog post:', error);
    throw error;
  }
};

// Get blog post by slug
export const getBlogPostBySlug = async (slug) => {
  try {
    const q = query(
      collection(db, BLOG_COLLECTION),
      where('slug', '==', slug),
      where('published', '==', true),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      return { 
        id: doc.id, 
        ...data,
        createdAt: data.createdAt?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
        publishedAt: data.publishedAt?.toDate()
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting blog post by slug:', error);
    throw error;
  }
};

// Update blog post
export const updateBlogPost = async (postId, updateData) => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    const update = {
      ...updateData,
      updatedAt: Timestamp.now()
    };

    // If publishing for the first time, set publishedAt
    if (updateData.published && !updateData.publishedAt) {
      update.publishedAt = Timestamp.now();
    }

    await updateDoc(docRef, update);
    return { id: postId, ...update };
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

// Delete blog post
export const deleteBlogPost = async (postId) => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

// Increment view count
export const incrementBlogViews = async (postId) => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const currentViews = docSnap.data().views || 0;
      await updateDoc(docRef, {
        views: currentViews + 1
      });
    }
  } catch (error) {
    console.error('Error incrementing blog views:', error);
    // Don't throw error for view counting
  }
};

// Get blog categories
export const getBlogCategories = async () => {
  try {
    const q = query(
      collection(db, BLOG_COLLECTION),
      where('published', '==', true)
    );
    const querySnapshot = await getDocs(q);
    
    const categories = new Set();
    querySnapshot.forEach((doc) => {
      const category = doc.data().category;
      if (category) {
        categories.add(category);
      }
    });
    
    return Array.from(categories);
  } catch (error) {
    console.error('Error getting blog categories:', error);
    throw error;
  }
};

// Get blog tags
export const getBlogTags = async () => {
  try {
    const q = query(
      collection(db, BLOG_COLLECTION),
      where('published', '==', true)
    );
    const querySnapshot = await getDocs(q);
    
    const tags = new Set();
    querySnapshot.forEach((doc) => {
      const postTags = doc.data().tags || [];
      postTags.forEach(tag => tags.add(tag));
    });
    
    return Array.from(tags);
  } catch (error) {
    console.error('Error getting blog tags:', error);
    throw error;
  }
};

// Search blog posts
export const searchBlogPosts = async (searchTerm) => {
  try {
    // Note: Firestore doesn't support full-text search natively
    // This is a simple implementation - for production, consider using Algolia or similar
    const q = query(
      collection(db, BLOG_COLLECTION),
      where('published', '==', true),
      orderBy('publishedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const posts = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const searchableText = `${data.title} ${data.content} ${data.excerpt} ${data.tags?.join(' ')}`.toLowerCase();
      
      if (searchableText.includes(searchTerm.toLowerCase())) {
        posts.push({ 
          id: doc.id, 
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate(),
          publishedAt: data.publishedAt?.toDate()
        });
      }
    });
    
    return posts;
  } catch (error) {
    console.error('Error searching blog posts:', error);
    throw error;
  }
};

// Helper functions
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const generateExcerpt = (content, maxLength = 150) => {
  const plainText = content.replace(/<[^>]*>/g, '');
  if (plainText.length <= maxLength) {
    return plainText;
  }
  return plainText.substring(0, maxLength).trim() + '...';
}; 