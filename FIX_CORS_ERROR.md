# Fix CORS Error with Firebase Storage

## 🔴 Problem
You're seeing this error:
```
Access to XMLHttpRequest at 'https://firebasestorage.googleapis.com...' 
from origin 'http://localhost:3000' has been blocked by CORS policy: 
Response to preflight request doesn't pass access control check: 
It does not have HTTP ok status.
```

## Why This Happens
This CORS error usually means:
1. **Firebase Storage is not enabled** in your project
2. **Storage bucket doesn't exist** or isn't initialized
3. **Project is not on Blaze plan** (required for Storage)
4. **Storage rules are blocking access**

## ✅ Solution Steps

### Step 1: Verify Blaze Plan (Required for Storage)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **spreckels-park**
3. Click **⚙️ Settings** → **Usage and billing**
4. Check your plan:
   - **Spark (Free)** = Storage NOT available ❌
   - **Blaze (Pay-as-you-go)** = Storage available ✅

**If you're on Spark plan:**
- Click **Upgrade project** → Select **Blaze plan**
- Add payment method (required, but free tier covers most use)
- Wait 5-10 minutes for activation

### Step 2: Enable Firebase Storage

1. In Firebase Console, click **Storage** in left sidebar
2. If you see **"Get started"** button:
   - Click it
   - Choose **"Start in test mode"**
   - Select a location (e.g., `us-central1`)
   - Click **Done**
3. Wait for Storage to initialize (may take a few minutes)

### Step 3: Update Storage Rules

1. In Firebase Console → **Storage** → **Rules** tab
2. Replace all rules with:

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

3. Click **Publish** (top right)
4. Wait for "Rules published successfully" message

### Step 4: Verify Storage Bucket

1. Go to Firebase Console → **Project Settings** (gear icon)
2. Scroll to **"Your apps"** section
3. Check that **Storage bucket** matches:
   - `spreckels-park.firebasestorage.app`
   - Or `spreckels-park.appspot.com`

4. If it's different, update your `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=spreckels-park.firebasestorage.app
   ```

### Step 5: Restart Development Server

1. Stop your server (Ctrl+C)
2. Restart: `npm run dev`
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try uploading an image again

## 🔍 Verify Storage Is Working

### Test 1: Check Storage in Console
1. Go to Firebase Console → **Storage** → **Files** tab
2. You should see the Storage interface (not "Get started")
3. If you see "Get started", Storage is not enabled

### Test 2: Manual Upload Test
1. In Firebase Console → **Storage** → **Files**
2. Click **"Upload file"**
3. Try uploading a small image
4. If this works, Storage is enabled ✅
5. If this fails, Storage is not enabled ❌

### Test 3: Check Browser Console
1. Open Developer Tools (F12) → **Console** tab
2. Look for: `✅ Firebase Storage initialized successfully`
3. If you see: `❌ Firebase Storage NOT initialized` → Storage is not configured

## 🚨 Common Issues

### Issue 1: "Get started" Button Still Shows
**Fix:** Storage is not enabled. Follow Step 2 above.

### Issue 2: "Upgrade project" Message
**Fix:** Project is on Spark plan. Upgrade to Blaze (Step 1).

### Issue 3: Rules Published But Still Getting CORS Error
**Fix:**
1. Wait 2-3 minutes for rules to propagate
2. Clear browser cache
3. Restart dev server
4. Try again

### Issue 4: Storage Bucket Mismatch
**Fix:**
1. Check Firebase Console → Project Settings → Storage bucket name
2. Update `.env.local` with correct bucket name
3. Restart dev server

## 📝 Quick Checklist

- [ ] Project is on **Blaze plan** (not Spark)
- [ ] **Storage is enabled** (not showing "Get started")
- [ ] **Storage rules** are published (allow read/write)
- [ ] **Storage bucket** matches `.env.local`
- [ ] **Dev server restarted** after changes
- [ ] **Browser cache cleared**

## 🔄 Alternative: Use Image URLs (Temporary Workaround)

If Storage still doesn't work, you can use image URLs instead:

1. In admin panel, use **"Or Enter Image URL"** field
2. Paste image URLs from:
   - Unsplash: https://unsplash.com
   - Pexels: https://pexels.com
   - Or any publicly accessible image URL

This works without Firebase Storage.

## 🆘 Still Not Working?

If you've completed all steps and still get CORS errors:

1. **Check Firebase Console → Storage → Files**
   - Can you see the Storage interface?
   - Can you manually upload a file?

2. **Check Browser Console**
   - What exact error message do you see?
   - Is it still CORS or a different error?

3. **Verify Environment Variables**
   - Open `.env.local`
   - Verify all `NEXT_PUBLIC_FIREBASE_*` variables are set
   - Restart dev server after changes

4. **Check Network Tab**
   - Open Developer Tools → **Network** tab
   - Try uploading an image
   - Look for failed requests to `firebasestorage.googleapis.com`
   - Check the status code (401, 403, 500, etc.)

## 💡 Why CORS Errors Happen

CORS errors occur when:
- The browser blocks requests to Firebase Storage
- This usually means Storage is not properly enabled or configured
- Firebase SDK should handle CORS automatically, but if Storage isn't enabled, it fails

The fix is to ensure Storage is fully enabled and configured in Firebase Console.
