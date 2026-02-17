# Quick Fix for Image Upload Timeout

## ✅ Your Configuration is Correct!
All environment variables are properly set. The issue is likely with Firebase Storage setup.

## 🔧 Step-by-Step Fix

### Step 1: Enable Firebase Storage
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **spreckels-park**
3. Click **Storage** in the left sidebar
4. If you see a "Get started" button, click it
5. Choose **Start in test mode** (we'll update rules in Step 2)
6. Select a location (choose closest to you, e.g., `us-central1`)
7. Click **Done**

### Step 2: Update Storage Rules
1. In Firebase Console, go to **Storage** → **Rules** tab
2. Replace the rules with this:

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

3. Click **Publish**

### Step 3: Test Upload
1. Open your browser's Developer Tools (F12)
2. Go to **Console** tab
3. Try uploading an image again
4. Look for these messages:
   - ✅ `Firebase Storage initialized successfully`
   - ✅ `Starting image upload to Firebase Storage...`
   - ✅ `File uploaded successfully in Xms`
   - ❌ Any error messages (copy them)

### Step 4: Check Browser Console Errors
If upload still fails, check the Console tab for:
- `storage/unauthorized` - Rules are blocking uploads
- `storage/unknown` - Storage not enabled or network issue
- `storage/quota-exceeded` - Storage quota exceeded
- Any other error codes

## 🚨 Common Issues

### Issue: "storage/unauthorized"
**Fix:** Make sure Storage Rules are published (Step 2)

### Issue: "storage/unknown" or timeout
**Fix:** 
1. Verify Storage is enabled (Step 1)
2. Check your internet connection
3. Try a different browser
4. Clear browser cache

### Issue: Upload hangs forever
**Fix:**
1. Check Firebase Console → Storage → Files
2. See if files are actually uploading (even if slowly)
3. Check your network speed
4. Try uploading a very small image (under 10KB) first

## 📞 Still Not Working?

If uploads still timeout after following these steps:
1. Copy the exact error message from browser console
2. Check Firebase Console → Storage → Files to see if uploads are happening
3. Check Firebase Console → Storage → Rules to verify rules are published
4. Try uploading from a different network/device
