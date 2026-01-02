# Fixing Firebase Storage 404 Error

## Error: `storage/unknown` with HTTP 404

This error means Firebase Storage cannot find your storage bucket. Here's how to fix it:

### Step 1: Verify Storage Bucket Name

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Storage** in the left sidebar
4. Check the bucket name at the top - it should be something like: `your-project-id.appspot.com`

### Step 2: Check Your .env.local File

Your `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` should match exactly. Common formats:
- `your-project-id.appspot.com` ✅ (correct)
- `gs://your-project-id.appspot.com` ❌ (don't include gs://)
- `your-project-id` ❌ (missing .appspot.com)

### Step 3: Enable Firebase Storage (if not enabled)

1. In Firebase Console, go to **Storage**
2. If you see "Get started", click it
3. Choose "Start in test mode" (for development) or "Start in production mode"
4. Select a location for your storage bucket
5. Click "Done"

### Step 4: Verify Storage Rules

1. In Firebase Console, go to **Storage** → **Rules**
2. For testing, you can use:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```
3. Click "Publish"

### Step 5: Check Storage Bucket Format in .env.local

Make sure your `.env.local` has:
```env
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
```

**Important:** 
- No `gs://` prefix
- Must include `.appspot.com`
- Must match exactly what's shown in Firebase Console

### Step 6: Restart Your Server

After updating `.env.local`, restart your Next.js server:
1. Stop: `Ctrl+C`
2. Start: `npm run dev`

### Common Issues:

1. **Bucket doesn't exist**: Enable Storage in Firebase Console
2. **Wrong bucket name**: Copy exact name from Firebase Console
3. **Storage not enabled**: Go to Storage section and click "Get started"
4. **Wrong format**: Should be `project-id.appspot.com`, not `gs://project-id.appspot.com`

### Test After Fixing:

1. Visit: `http://localhost:3000/api/test-firebase`
2. Try uploading an image in the admin panel
3. Check server logs for detailed error messages

