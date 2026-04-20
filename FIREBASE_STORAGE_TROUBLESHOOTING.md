# Firebase Storage Upload Timeout Troubleshooting

## Problem
Image uploads are timing out even for small files (22KB), getting error:
"Upload timeout: The upload took too long. Please try again with a smaller image or check your internet connection."

## Common Causes

### 1. Firebase Storage Not Enabled
**Check:**
- Go to [Firebase Console](https://console.firebase.google.com/)
- Select your project: **spreckels-park**
- Go to **Storage** in the left sidebar
- If you see "Get started" or "Enable Storage", click it and enable Storage

### 2. Firebase Storage Rules Blocking Uploads
**Check and Fix:**
1. Go to Firebase Console → Storage → Rules tab
2. Make sure rules allow uploads:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

3. Click **Publish** to save the rules

### 3. Storage Bucket Not Configured
**Check:**
- Go to Firebase Console → Project Settings → General
- Scroll to "Your apps" section
- Check that `storageBucket` matches: `spreckels-park.firebasestorage.app`

### 4. Environment Variables Not Set
**Check:**
- Open `.env.local` file in your project root
- Verify all these variables are set:
  ```
  NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDbTG_mMxXx4PIjyf7iXjFvIWMy9ZWNIzU
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=spreckels-park.firebaseapp.com
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=spreckels-park
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=spreckels-park.firebasestorage.app
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=300576048365
  NEXT_PUBLIC_FIREBASE_APP_ID=1:300576048365:web:ece4417715d2d11db1f8e4
  ```

### 5. Server Not Restarted
**Fix:**
- After updating `.env.local`, you MUST restart your development server:
  1. Stop the server (Ctrl+C)
  2. Run `npm run dev` again
  3. Wait for "Ready on http://localhost:3000"

### 6. Network/Firewall Issues
**Check:**
- Try uploading from a different network
- Check if your firewall is blocking Firebase Storage
- Try accessing Firebase Storage URL directly in browser

## Debugging Steps

1. **Check Browser Console:**
   - Open Developer Tools (F12)
   - Go to Console tab
   - Look for error messages when uploading
   - Check for messages like:
     - `❌ Firebase Storage not initialized`
     - `❌ Error uploading image to Firebase`
     - `storage/unauthorized`
     - `storage/unknown`

2. **Check Network Tab:**
   - Open Developer Tools → Network tab
   - Try uploading an image
   - Look for failed requests to `firebasestorage.googleapis.com`
   - Check the error status code (401, 403, 500, etc.)

3. **Test Firebase Storage Directly:**
   - Go to Firebase Console → Storage
   - Try uploading a file manually through the console
   - If this works, the issue is with your code configuration
   - If this fails, the issue is with Firebase Storage setup

## Quick Fix Checklist

- [ ] Firebase Storage is enabled in Firebase Console
- [ ] Storage rules allow read/write (see rules above)
- [ ] All environment variables are set in `.env.local`
- [ ] Development server was restarted after updating `.env.local`
- [ ] Storage bucket name matches: `spreckels-park.firebasestorage.app`
- [ ] No firewall blocking Firebase Storage
- [ ] Browser console shows no JavaScript errors

## Still Having Issues?

If uploads still timeout:
1. Check the browser console for specific error messages
2. Check Firebase Console → Storage → Files to see if uploads are actually happening
3. Check Firebase Console → Storage → Rules to ensure rules are published
4. Try uploading a very small image (under 10KB) to test
5. Check your internet connection speed
