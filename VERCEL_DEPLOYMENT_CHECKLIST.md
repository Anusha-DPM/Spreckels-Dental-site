# Vercel Deployment Checklist

## Before Deploying to Vercel

### ✅ Required: Firebase Environment Variables

**CRITICAL:** Vercel uses a read-only filesystem. You **MUST** configure Firebase Storage for image uploads to work.

1. **Add Environment Variables in Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all 6 Firebase variables:
     - `NEXT_PUBLIC_FIREBASE_API_KEY`
     - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
     - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
     - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
     - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
     - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - Enable for: **Production**, **Preview**, and **Development**

2. **Verify Firebase Storage is Enabled:**
   - Go to Firebase Console → Storage
   - If not enabled, click "Get started" and enable it
   - Set up Storage rules (see VERCEL_FIREBASE_SETUP.md)

3. **Redeploy After Adding Variables:**
   - Environment variables are only loaded during build
   - Go to Deployments → Click "..." → "Redeploy"
   - Or push a new commit

### ✅ Verify Configuration

After deployment, test:
1. Visit your Vercel URL
2. Go to `/api/firebase-diagnostic`
3. Verify all environment variables are present
4. Check that `firebase.initialized: true`
5. Check that `firebase.storageInitialized: true`

### ✅ Test Image Upload

1. Go to `/admin/new-post` on your Vercel deployment
2. Try uploading an image
3. If it fails, check the error message
4. Verify all environment variables are set correctly

## Common Issues

### ❌ "Firebase Storage is not configured"

**Fix:**
- Add all Firebase environment variables in Vercel
- Make sure they're enabled for the correct environment
- Redeploy the application

### ❌ "Firebase Storage bucket not found"

**Fix:**
- Check Firebase Console → Storage for the exact bucket name
- Update `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` in Vercel
- Bucket name format: `project-id.firebasestorage.app` or `project-id.appspot.com`
- Redeploy after updating

### ❌ "Permission denied"

**Fix:**
- Check Firebase Console → Storage → Rules
- Make sure rules allow read/write access
- Click "Publish" after updating rules

## Quick Setup Steps

1. ✅ Get Firebase config from Firebase Console
2. ✅ Add 6 environment variables to Vercel
3. ✅ Enable variables for all environments
4. ✅ Enable Firebase Storage in Firebase Console
5. ✅ Set Storage rules
6. ✅ Redeploy application
7. ✅ Test image upload

## Documentation

- **Detailed Setup:** See `VERCEL_FIREBASE_SETUP.md`
- **Firebase Setup:** See `FIREBASE_SETUP_GUIDE.md`
- **Troubleshooting:** See `FIREBASE_TROUBLESHOOTING.md`
