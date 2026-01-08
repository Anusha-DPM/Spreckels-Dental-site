# Quick Fix: Firebase Setup on Vercel

## The Problem
You're seeing this error on Vercel:
```
Image upload failed: Upload failed: Firebase Storage is not available, and local storage also failed.
```

This happens because **Firebase environment variables are not configured in Vercel**.

## The Solution (5 Minutes)

### Step 1: Get Your Firebase Configuration Values

You already have these in your `.env.local` file. Copy these values:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCiFKu8E-PrnbO7gahgkDfwE1Fr0Bm8mhA
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=sprekels-dental.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=sprekels-dental
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=sprekels-dental.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=173155929949
NEXT_PUBLIC_FIREBASE_APP_ID=1:173155929949:web:359c3b007042384111e2b4
```

### Step 2: Add Environment Variables to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **Spreckels-Dental-site** (or your project name)
3. Click **Settings** → **Environment Variables**
4. Click **Add New** and add each variable one by one:

   **Variable 1:**
   - Key: `NEXT_PUBLIC_FIREBASE_API_KEY`
   - Value: `AIzaSyCiFKu8E-PrnbO7gahgkDfwE1Fr0Bm8mhA`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

   **Variable 2:**
   - Key: `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - Value: `sprekels-dental.firebaseapp.com`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

   **Variable 3:**
   - Key: `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - Value: `sprekels-dental`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

   **Variable 4:**
   - Key: `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - Value: `sprekels-dental.firebasestorage.app`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

   **Variable 5:**
   - Key: `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - Value: `173155929949`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

   **Variable 6:**
   - Key: `NEXT_PUBLIC_FIREBASE_APP_ID`
   - Value: `1:173155929949:web:359c3b007042384111e2b4`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

5. Click **Save** after each variable

### Step 3: Redeploy Your Application

**IMPORTANT:** Environment variables are only loaded when the app is built. You **must** redeploy:

**Option A: Redeploy from Vercel Dashboard**
1. Go to **Deployments** tab
2. Click the **"..."** menu (three dots) on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete

**Option B: Push a New Commit**
1. Make a small change (like adding a comment)
2. Commit and push to trigger a new deployment

### Step 4: Verify It Works

1. After redeployment completes, visit your Vercel URL
2. Go to `/admin/new-post`
3. Try uploading an image
4. It should work! ✅

## Verify Configuration

After redeploying, you can check if Firebase is configured correctly:

1. Visit: `https://your-vercel-url.vercel.app/api/firebase-diagnostic`
2. This will show you:
   - Which environment variables are set
   - If Firebase initialized successfully
   - If Storage is working

## Still Not Working?

### Check Firebase Storage Rules

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **sprekels-dental**
3. Go to **Storage** → **Rules**
4. Make sure rules allow writes (for development):
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write: if true;
       }
     }
   }
   ```
5. Click **"Publish"**

### Check Vercel Build Logs

1. Go to Vercel → **Deployments**
2. Click on the latest deployment
3. Check **Build Logs** for any errors
4. Look for Firebase-related errors

### Common Issues

**Issue:** "Environment variables not found"
- **Fix:** Make sure you added variables for **all environments** (Production, Preview, Development)
- **Fix:** Make sure variable names are **exact** (case-sensitive)

**Issue:** "Firebase Storage bucket not found"
- **Fix:** Verify `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` matches exactly what's in Firebase Console
- **Fix:** Bucket name should be: `sprekels-dental.firebasestorage.app` (no `gs://` prefix)

**Issue:** "Permission denied"
- **Fix:** Check Firebase Storage Rules (see above)
- **Fix:** Make sure Storage is enabled in Firebase Console

## Need More Help?

See the detailed guide: `VERCEL_FIREBASE_SETUP.md`
