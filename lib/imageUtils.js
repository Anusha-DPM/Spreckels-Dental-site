// Image utilities using Firebase Storage
import { uploadImageToFirebase } from './firebase';

// Legacy function name for compatibility - redirects to Firebase
export const uploadImageToBase64 = async (file, folder = 'images') => {
  // Use Firebase Storage instead of base64
  return uploadImageToFirebase(file, folder);
};

// Main export - uses Firebase Storage
export { uploadImageToFirebase } from './firebase';
