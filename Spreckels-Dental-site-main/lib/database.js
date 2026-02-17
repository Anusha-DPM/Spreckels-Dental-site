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
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

// Generic document creation
export const createDocument = async (collectionName, data) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error('Error creating document:', error);
    throw error;
  }
};

// Get a single document by ID
export const getDocument = async (collectionName, docId) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
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

// Get all documents from a collection
export const getAllDocuments = async (collectionName, options = {}) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    let q = collection(db, collectionName);
    
    // Apply filters
    if (options.filters) {
      options.filters.forEach(filter => {
        q = query(q, where(filter.field, filter.operator, filter.value));
      });
    }
    
    // Apply ordering
    if (options.orderBy) {
      q = query(q, orderBy(options.orderBy.field, options.orderBy.direction || 'desc'));
    }
    
    // Apply limit
    if (options.limit) {
      q = query(q, limit(options.limit));
    }
    
    const querySnapshot = await getDocs(q);
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

// Update a document
export const updateDocument = async (collectionName, docId, data) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
    
    return { id: docId, ...data };
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
};

// Delete a document
export const deleteDocument = async (collectionName, docId) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    
    return { id: docId, deleted: true };
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};

// Search documents
export const searchDocuments = async (collectionName, searchField, searchValue) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const q = query(
      collection(db, collectionName),
      where(searchField, '>=', searchValue),
      where(searchField, '<=', searchValue + '\uf8ff')
    );
    
    const querySnapshot = await getDocs(q);
    const documents = [];
    
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    
    return documents;
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
}; 