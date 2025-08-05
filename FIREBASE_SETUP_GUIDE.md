# 🔥 Firebase Setup Guide for Spreckels Dental Website

## 📋 Prerequisites
- Firebase account (free)
- Next.js project (already set up)
- Firebase SDK installed (`npm install firebase` ✅)

## 🚀 Step-by-Step Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `spreckels-dental-website`
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Add Web App
1. In Firebase Console, click the web icon (</>)
2. Register app with name: `Spreckels Dental Website`
3. **Copy the Firebase config object** - you'll need this for the next step

### 3. Set Up Environment Variables
1. Create a file named `.env.local` in your project root
2. Copy the content from `firebase-config-template.txt`
3. Replace the placeholder values with your actual Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 4. Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

### 5. Set Up Security Rules
1. In Firebase Console, go to "Firestore Database" > "Rules"
2. Replace the default rules with the content from `firestore-rules.txt`
3. Click "Publish"

### 6. Test the Connection
1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/firebase-test`
3. Click "Create Test Blog Post" to verify the connection
4. You should see a success message and the post appear in the list

## 📁 Files Created/Modified

### New Files:
- `lib/firebase.js` - Firebase initialization
- `lib/blogDatabase.js` - Blog-specific database functions
- `lib/database.js` - Generic database functions
- `components/BlogAdmin.js` - Blog management interface
- `components/FirebaseTest.js` - Connection test component
- `app/firebase-test/page.tsx` - Test page
- `examples/blogUsage.js` - Usage examples

### Template Files:
- `firebase-config-template.txt` - Environment variables template
- `firestore-rules.txt` - Security rules template
- `env.example` - Environment variables example

## 🔧 Available Functions

### Blog Management:
```javascript
import { 
  createBlogPost, 
  getBlogPosts, 
  getBlogPostBySlug,
  updateBlogPost, 
  deleteBlogPost,
  searchBlogPosts,
  getBlogCategories,
  getBlogTags,
  incrementBlogViews
} from '../lib/blogDatabase';
```

### Generic Database:
```javascript
import { 
  createDocument, 
  getDocument, 
  getAllDocuments,
  updateDocument, 
  deleteDocument 
} from '../lib/database';
```

## 🎯 Usage Examples

### Create a Blog Post:
```javascript
const newPost = await createBlogPost({
  title: "Dental Implants Guide",
  content: "<p>Your content here...</p>",
  category: "Dental Implants",
  tags: ["implants", "manteca"],
  published: true
});
```

### Get Published Posts:
```javascript
const posts = await getBlogPosts({ 
  published: true, 
  limit: 10 
});
```

### Get Featured Posts:
```javascript
const featured = await getBlogPosts({ 
  published: true, 
  featured: true 
});
```

## 🔒 Security Rules

The security rules allow:
- **Public read access** to published blog posts
- **Authenticated write access** for blog posts
- **Public create access** for contact messages
- **Authenticated read/write** for appointments and patients

## 🚨 Troubleshooting

### Common Issues:

1. **"Firebase App named '[DEFAULT]' already exists"**
   - This is normal in development with hot reloading
   - The error is handled gracefully

2. **"Permission denied"**
   - Check your Firestore security rules
   - Make sure you're in "test mode" for development

3. **"API key not valid"**
   - Verify your environment variables are correct
   - Restart your development server after changing `.env.local`

4. **"Collection not found"**
   - Collections are created automatically when you add the first document
   - This is normal behavior

## 📊 Next Steps

1. **Test the connection** using the test page
2. **Create your first blog post** using the BlogAdmin component
3. **Integrate blog functionality** into your existing pages
4. **Set up authentication** for admin access
5. **Deploy to production** with proper security rules

## 🔗 Useful Links

- [Firebase Console](https://console.firebase.google.com/)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

## ✅ Checklist

- [ ] Firebase project created
- [ ] Web app registered
- [ ] Environment variables set up
- [ ] Firestore database enabled
- [ ] Security rules configured
- [ ] Connection tested successfully
- [ ] First blog post created
- [ ] Ready for production deployment 