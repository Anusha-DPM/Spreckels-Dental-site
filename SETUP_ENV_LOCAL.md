# Quick Setup: Create .env.local File

## ⚠️ IMPORTANT: You need to create the `.env.local` file manually

The `.env.local` file is not tracked by git (for security), so you need to create it yourself.

## Step-by-Step Instructions

### Step 1: Create the File

1. In your project root directory (`Spreckels-Dental-site-main`), create a new file named `.env.local`
   - **Important**: The filename must be exactly `.env.local` (starts with a dot, no extension)
   - If you're using VS Code: Right-click in the file explorer → New File → Type `.env.local`

### Step 2: Get Your Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. **Select your project** (or create a new one if you don't have one)
3. Click the **gear icon (⚙️)** next to "Project Overview" → Select **"Project settings"**
4. Scroll down to the **"Your apps"** section
5. **If you don't have a web app:**
   - Click **"Add app"** button
   - Select the **web icon (</>)** 
   - Register your app (you can skip the hosting setup for now)
6. **You'll see a `firebaseConfig` object** that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

### Step 3: Copy Values to .env.local

Copy the following template into your `.env.local` file and replace the placeholder values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abc123def456
```

**Example** (replace with YOUR actual values):
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC1234567890abcdefghijklmnop
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=sprekels-dental.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=sprekels-dental
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=sprekels-dental.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abc123def456
```

### Step 4: Important Notes

1. **No spaces** around the `=` sign
2. **No quotes** around the values (unless the value itself contains spaces, which is rare)
3. **Storage Bucket**: The format can be either:
   - `your-project-id.appspot.com` (older format)
   - `your-project-id.firebasestorage.app` (newer format)
   - Check Firebase Console → Storage to see the exact bucket name

### Step 5: Enable Firebase Services

#### Enable Firestore Database:
1. In Firebase Console, go to **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
4. Select a location close to you
5. Click **"Enable"**

#### Enable Storage:
1. In Firebase Console, go to **"Storage"** in the left sidebar
2. Click **"Get started"**
3. Choose **"Start in test mode"** (for development)
4. Select the same location as Firestore
5. Click **"Done"**

### Step 6: Set Up Security Rules (For Development)

#### Firestore Rules:
1. Go to **Firestore Database** → **Rules** tab
2. Replace with:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
3. Click **"Publish"**

#### Storage Rules:
1. Go to **Storage** → **Rules** tab
2. Replace with:
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

⚠️ **Warning**: These rules allow public read/write access. Only use for development!

### Step 7: Restart Your Server

**CRITICAL**: After creating/updating `.env.local`, you MUST restart your server:

1. Stop the server: Press `Ctrl+C` in your terminal
2. Start it again: Run `npm run dev`
3. Wait for "Ready on http://localhost:3000"

### Step 8: Verify Configuration

1. Visit: `http://localhost:3000/api/firebase-diagnostic`
2. You should see:
   - All environment variables present
   - `firebase.initialized: true`
   - `firebase.storageInitialized: true`

## Troubleshooting

### "File not found" or "Can't create .env.local"
- Make sure you're in the project root directory
- The filename must start with a dot: `.env.local` (not `env.local`)
- On Windows, you might need to create it as `env.local` first, then rename it to `.env.local`

### "Environment variables still missing after restart"
- Make sure the file is named exactly `.env.local` (not `.env.local.txt`)
- Check for typos in variable names (they must match exactly)
- Make sure there are no spaces around the `=` sign
- Verify the file is in the project root (same folder as `package.json`)

### "Firebase Storage bucket not found"
- Check Firebase Console → Storage to see the exact bucket name
- The bucket name might be `project-id.firebasestorage.app` instead of `project-id.appspot.com`
- Update `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` with the exact name from Firebase Console

### Still having issues?
1. Check browser console (F12) for error messages
2. Check server terminal for error messages
3. Visit `/api/firebase-diagnostic` to see what's configured
4. Verify all values in Firebase Console match your `.env.local` file

## File Location

Your `.env.local` file should be in:
```
Spreckels-Dental-site-main/
  ├── .env.local          ← Create this file here
  ├── package.json
  ├── next.config.js
  └── ...
```

## Security Note

⚠️ **Never commit `.env.local` to git!** It contains sensitive credentials. It should already be in `.gitignore`, but double-check to make sure.
