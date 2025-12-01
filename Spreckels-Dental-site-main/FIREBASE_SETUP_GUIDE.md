# Firebase Setup Guide

## Why the Blog Post Creation is Failing

The "Failed to create blog post" error is occurring because Firebase is not properly configured. The blog system requires Firebase Firestore to store blog posts.

## How to Fix This

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or select an existing project
3. Follow the setup wizard

### Step 2: Enable Firestore Database

1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users

### Step 3: Get Your Firebase Configuration

1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click on your web app or create a new one
4. Copy the `firebaseConfig` object

### Step 4: Create .env.local File

Create a file named `.env.local` in your project root with this content:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

Replace the values with your actual Firebase configuration.

### Step 5: Set Up Firestore Security Rules

In Firebase Console, go to Firestore Database > Rules and set:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /blog-posts/{document} {
      allow read, write: if true;  // For development only
    }
  }
}
```

**⚠️ Warning:** This allows public read/write access. For production, implement proper authentication.

### Step 6: Test the Connection

1. Restart your development server: `npm run dev`
2. Go to `/admin/new-post`
3. Try creating a blog post

## Alternative: Use Local Storage (Temporary)

If you want to test the blog system without Firebase, you can modify the code to use localStorage temporarily. However, this is not recommended for production.

## Need Help?

If you're still having issues:

1. Check the browser console for specific error messages
2. Verify your Firebase configuration values
3. Make sure Firestore is enabled in your Firebase project
4. Check that your security rules allow read/write operations

## Production Considerations

For production deployment:

1. Set up proper Firebase security rules
2. Implement user authentication
3. Use environment variables in your hosting platform
4. Enable Firebase App Check for additional security 