# Quick Fix: Firebase Storage 500 Error

## The Problem
You're getting a 500 error when uploading images. This is almost always caused by Firebase Storage security rules blocking the upload.

## The Solution (5 minutes)

### Step 1: Open Firebase Console
1. Go to: https://console.firebase.google.com/
2. Select your project: **sprekels-dental**

### Step 2: Update Storage Rules
1. Click on **Storage** in the left sidebar
2. Click on the **Rules** tab
3. Replace the existing rules with this code:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow read/write access to all files
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

### Step 3: Publish the Rules
1. Click the **Publish** button
2. Wait for confirmation that rules are published

### Step 4: Test Again
1. Go back to your admin panel
2. Try uploading an image again
3. It should work now!

## Why This Happens

Firebase Storage has security rules that control who can read/write files. By default, these rules are restrictive and block uploads. The rules above allow all uploads (for development).

⚠️ **Important**: These rules allow anyone to upload. For production, you should add authentication checks.

## Alternative: Check Current Rules

If you want to see what rules are currently active:
1. Go to Firebase Console → Storage → Rules
2. Check if the rules allow writes
3. If they don't, update them as shown above

## Still Not Working?

If you still get errors after updating rules:
1. Check server logs for detailed error messages
2. Visit `/api/firebase-diagnostic` to verify Firebase configuration
3. Verify Storage is enabled: Firebase Console → Storage (should show files, not "Get started")

