# Vercel Firebase Setup Guide

## Important: Firebase Storage is Required on Vercel

Vercel uses a **read-only filesystem**, which means you **cannot** save files locally on Vercel. Firebase Storage is the **only** option for image uploads on Vercel.

## Setting Up Firebase Environment Variables in Vercel

### Step 1: Get Your Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the gear icon (⚙️) → **Project settings**
4. Scroll to **"Your apps"** section
5. Click on your web app (or create one)
6. Copy the `firebaseConfig` values

### Step 2: Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add the following variables (one by one):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

**Important:**
- Replace the placeholder values with your actual Firebase configuration
- Make sure to add them for **Production**, **Preview**, and **Development** environments
- Use the exact bucket name from Firebase Console (could be `project-id.appspot.com` or `project-id.firebasestorage.app`)

### Step 3: Verify Environment Variables

After adding the variables:

1. Go to **Settings** → **Environment Variables**
2. Verify all 6 variables are listed
3. Make sure they're enabled for the correct environments

### Step 4: Redeploy Your Application

**CRITICAL:** After adding environment variables, you **must** redeploy:

1. Go to **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Or push a new commit to trigger a new deployment

Environment variables are only loaded when the application is built/deployed.

## Verify Firebase Storage is Enabled

1. Go to Firebase Console → **Storage**
2. If you see "Get started", click it to enable Storage
3. Choose **"Start in test mode"** (for development)
4. Select a location
5. Click **"Done"**

## Set Up Storage Rules

1. In Firebase Console → **Storage** → **Rules**
2. For development, use:
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

⚠️ **Warning:** These rules allow public read/write. For production, implement proper authentication.

## Troubleshooting

### Issue: "Firebase Storage is not configured"

**Solution:**
1. Verify all environment variables are set in Vercel
2. Check that variables are enabled for the correct environment (Production/Preview/Development)
3. **Redeploy** your application after adding variables
4. Verify the bucket name matches exactly what's in Firebase Console

### Issue: "Firebase Storage bucket not found"

**Solution:**
1. Check Firebase Console → Storage to see the exact bucket name
2. Update `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` in Vercel with the correct bucket name
3. The bucket name format can be:
   - `project-id.appspot.com` (older format)
   - `project-id.firebasestorage.app` (newer format)
4. **Redeploy** after updating

### Issue: "Permission denied"

**Solution:**
1. Check Firebase Console → Storage → Rules
2. Make sure rules allow read/write access
3. For development, use the rules shown above
4. Click **"Publish"** after updating rules

### Issue: Environment variables not working

**Common causes:**
1. Variables not added for the correct environment (Production/Preview/Development)
2. Application not redeployed after adding variables
3. Typos in variable names (must be exact: `NEXT_PUBLIC_FIREBASE_*`)
4. Missing `NEXT_PUBLIC_` prefix (required for client-side access)

**Solution:**
1. Double-check variable names in Vercel
2. Make sure all variables have `NEXT_PUBLIC_` prefix
3. Redeploy the application
4. Check Vercel build logs for any errors

## Testing

After setup:

1. Visit your Vercel deployment URL
2. Go to `/admin/new-post`
3. Try uploading an image
4. Check browser console (F12) for any errors
5. If it works, the image should be saved to Firebase Storage

## Quick Checklist

- [ ] All 6 Firebase environment variables added to Vercel
- [ ] Variables enabled for Production, Preview, and Development
- [ ] Application redeployed after adding variables
- [ ] Firebase Storage enabled in Firebase Console
- [ ] Storage rules configured and published
- [ ] Bucket name matches exactly in Vercel and Firebase Console

## Need Help?

1. Check Vercel build logs for errors
2. Check browser console for detailed error messages
3. Visit `/api/firebase-diagnostic` on your Vercel deployment to see configuration status
4. Verify all environment variables in Vercel dashboard
