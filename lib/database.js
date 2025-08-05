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
  limit 
} from 'firebase/firestore';
import { db } from './firebase';

// Collection names for your dental website
export const COLLECTIONS = {
  APPOINTMENTS: 'appointments',
  PATIENTS: 'patients',
  BLOG_POSTS: 'blog_posts',
  CONTACT_MESSAGES: 'contact_messages',
  TESTIMONIALS: 'testimonials'
};

// Generic CRUD operations
export const createDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error('Error creating document:', error);
    throw error;
  }
};

export const getDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    throw error;
  }
};

export const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    return documents;
  } catch (error) {
    console.error('Error getting documents:', error);
    throw error;
  }
};

export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date()
    });
    return { id: docId, ...data };
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
};

export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};

// Specific functions for your dental website
export const createAppointment = async (appointmentData) => {
  return await createDocument(COLLECTIONS.APPOINTMENTS, {
    ...appointmentData,
    status: 'pending',
    confirmed: false
  });
};

export const getAppointments = async () => {
  return await getAllDocuments(COLLECTIONS.APPOINTMENTS);
};

export const createContactMessage = async (messageData) => {
  return await createDocument(COLLECTIONS.CONTACT_MESSAGES, {
    ...messageData,
    read: false
  });
};

export const getBlogPosts = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS.BLOG_POSTS),
      orderBy('createdAt', 'desc')
    );
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

export const getTestimonials = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS.TESTIMONIALS),
      where('approved', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const testimonials = [];
    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, ...doc.data() });
    });
    return testimonials;
  } catch (error) {
    console.error('Error getting testimonials:', error);
    throw error;
  }
}; 