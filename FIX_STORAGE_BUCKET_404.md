# Quick Fix: Firebase Storage Bucket Not Found (404 Error)

## The Problem
You're seeing: **"Firebase Storage bucket not found"**

This means Firebase can't find your storage bucket. This usually happens when:
1. The bucket name in `.env.local` is incorrect
2. Firebase Storage is not enabled in your Firebase project
3. The bucket doesn't exist

## Quick Fix Steps

### Step 1: Find Your Correct Storage Bucket Name

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click **Storage** in the left sidebar
4. Look at the top of the page - you'll see the bucket name
   - It should look like: `your-project-id.appspot.com`
   - Example: `sprekels-dental.appspot.com`

### Step 2: Enable Storage (if needed)

If you see "Get started" button:
1. Click **"Get started"**
2. Choose **"Start in test mode"** (for development)
3. Select a location (choose closest to you)
4. Click **"Done"**

### Step 3: Update Your .env.local File

Open your `.env.local` file and update this line:

```env
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=sprekels-dental.firebasestorage.app
```

**Use the EXACT bucket name from Firebase Console.**

**Important:**
- ✅ Correct formats: 
  - `project-id.appspot.com` (older format)
  - `project-id.firebasestorage.app` (newer format)
- ❌ Wrong: `gs://project-id.appspot.com` (no gs:// prefix)
- ❌ Wrong: `project-id` (missing domain suffix)
- ✅ Your bucket: `sprekels-dental.firebasestorage.app`

### Step 4: Check Your Current Configuration

Visit this URL in your browser to see your current Firebase configuration:
```
http://localhost:3000/api/firebase-diagnostic
```

This will show you:
- Which environment variables are set
- What your current storage bucket value is
- Whether Firebase initialized successfully

### Step 5: Restart Your Server

**CRITICAL:** After updating `.env.local`, you MUST restart your server:

1. Stop the server: Press `Ctrl+C` in your terminal
2. Start it again: Run `npm run dev`
3. Wait for "Ready on http://localhost:3000"
4. Try uploading an image again

### Step 6: Verify Storage Rules

1. In Firebase Console, go to **Storage** → **Rules**
2. For development, use these rules:
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

## Example .env.local

Here's what your `.env.local` should look like:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=sprekels-dental.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

## Still Having Issues?

1. **Check the diagnostic endpoint:** Visit `/api/firebase-diagnostic` to see detailed status
2. **Check server logs:** Look at your terminal for detailed error messages
3. **Verify in Firebase Console:** Make sure Storage is enabled and the bucket exists
4. **Double-check the bucket name:** It must match exactly what's shown in Firebase Console

## Common Mistakes

1. ❌ Forgetting to restart the server after updating `.env.local`
2. ❌ Including `gs://` prefix in the bucket name
3. ❌ Missing domain suffix (`.appspot.com` or `.firebasestorage.app`)
4. ❌ Using wrong project ID
5. ❌ Storage not enabled in Firebase Console
6. ❌ Not using the exact bucket name from Firebase Console (case-sensitive)

