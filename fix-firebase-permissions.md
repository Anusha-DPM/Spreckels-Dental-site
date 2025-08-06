# 🔧 Fix Firebase Permissions - Blog Post Not Saving

## 🚨 **Current Issue:**
Blog posts are not saving to Firebase due to "Missing or insufficient permissions" error.

## ✅ **Solution Steps:**

### **Step 1: Fix Firebase Rules (Choose ONE method)**

#### **Method A: Firebase Console (Easiest)**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **sprekels-dental**
3. Click **Firestore Database** in the left sidebar
4. Click **Rules** tab
5. Replace the current rules with:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Allow all read/write access for now to fix the 400 error
       // TODO: Add proper authentication later
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
6. Click **Publish**

#### **Method B: Enable Test Mode (Quick Fix)**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **sprekels-dental**
3. Click **Firestore Database** → **Rules**
4. Click **"Start in test mode"**
5. This allows all access for 30 days

### **Step 2: Test the Fix**
1. Visit `/test-firebase` in your browser
2. Click **"Run Test"** button
3. Should show **"✅ Write successful"**

### **Step 3: Create Blog Post**
1. Go to `/admin/new-post`
2. Enter title and content
3. Click **"Publish"**
4. Should save to Firebase successfully

## 🔍 **If Still Not Working:**

### **Check Environment Variables:**
Make sure your `.env.local` file has the correct Firebase config:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCiFKu8E-PrnbO7gahgkDfwE1Fr0Bm8mhA
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=sprekels-dental.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=sprekels-dental
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=sprekels-dental.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=173155929949
NEXT_PUBLIC_FIREBASE_APP_ID=1:173155929949:web:359c3b007042384111e2b4
```

### **Check Firebase Project:**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Verify project **sprekels-dental** exists
3. Check that **Firestore Database** is enabled
4. Verify the collection **blog-posts** exists (or will be created automatically)

## 🎯 **Expected Results:**
- ✅ No more permission errors
- ✅ Blog posts save to Firebase
- ✅ Posts appear in admin dashboard
- ✅ Posts appear on public blog page
- ✅ Works without login

## 📞 **Need Help?**
If the issue persists after following these steps, please:
1. Check the browser console for specific error messages
2. Verify Firebase project settings
3. Try the test page at `/test-firebase` 