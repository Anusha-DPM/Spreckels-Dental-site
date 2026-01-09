# Fix: Firebase Storage Error on Vercel

## Why This Error Happens

The error occurs because:

1. **Vercel is a serverless platform** - It has a read-only filesystem, meaning you **cannot** save files locally
2. **Firebase Storage is required** - On Vercel, Firebase Storage is the **only** way to upload images
3. **Environment variables are missing** - The Firebase configuration variables are not set in your Vercel project

## Quick Fix Steps

### Step 1: Get Your Firebase Config Values

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click **⚙️ Settings** → **Project settings**
4. Scroll to **"Your apps"** section
5. Click on your web app (or create one if needed)
6. You'll see a `firebaseConfig` object - copy these values:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket` ⚠️ **Important:** Copy the exact bucket name
   - `messagingSenderId`
   - `appId`

### Step 2: Add Environment Variables to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these 6 variables (click "Add" for each):

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   NEXT_PUBLIC_FIREBASE_PROJECT_ID
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   NEXT_PUBLIC_FIREBASE_APP_ID
   ```

5. **IMPORTANT:** For each variable:
   - Paste the value from Firebase Console
   - Select **Production**, **Preview**, and **Development** environments
   - Click **Save**

### Step 3: Enable Firebase Storage

1. In Firebase Console, go to **Storage**
2. If you see "Get started", click it
3. Choose **"Start in test mode"** (for development)
4. Select a location (choose closest to your users)
5. Click **"Done"**

### Step 4: Set Storage Rules (Development)

1. In Firebase Console → **Storage** → **Rules** tab
2. Replace the rules with:

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

3. Click **"Publish"**

⚠️ **Note:** These rules allow public access. For production, implement proper authentication.

### Step 5: Redeploy Your Application

**CRITICAL:** Environment variables are only loaded during build/deploy.

1. Go to Vercel → **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete

OR

1. Make a small change (like adding a comment)
2. Commit and push to trigger a new deployment

## Verify It's Working

After redeploying:

1. Visit your Vercel deployment URL
2. Try uploading an image in the blog editor
3. Check the browser console (F12) for any errors
4. If successful, the image should upload to Firebase Storage

## Common Issues

### Issue: "Storage bucket not found"
- **Fix:** Check Firebase Console → Storage for the exact bucket name
- The bucket name might be `project-id.appspot.com` or `project-id.firebasestorage.app`
- Update `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` in Vercel with the exact name
- Redeploy

### Issue: "Permission denied"
- **Fix:** Check Firebase Console → Storage → Rules
- Make sure rules allow read/write (use the rules above for development)
- Click **"Publish"** after updating

### Issue: Variables still not working after redeploy
- **Fix:** 
  - Double-check variable names (must start with `NEXT_PUBLIC_`)
  - Verify all 6 variables are added
  - Make sure they're enabled for the correct environment
  - Check Vercel build logs for errors

## Quick Checklist

- [ ] All 6 Firebase environment variables added to Vercel
- [ ] Variables enabled for Production, Preview, and Development
- [ ] Firebase Storage enabled in Firebase Console
- [ ] Storage rules configured (test mode for development)
- [ ] Application redeployed after adding variables
- [ ] Bucket name matches exactly in Vercel and Firebase Console

## Need More Help?

1. Check Vercel build logs: **Deployments** → Click deployment → **Build Logs**
2. Check browser console: Press F12 → Console tab
3. Visit `/api/firebase-diagnostic` on your Vercel deployment to see configuration status
4. See `VERCEL_FIREBASE_SETUP.md` for detailed instructions
