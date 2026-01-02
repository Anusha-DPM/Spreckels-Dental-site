# Firebase Connection Troubleshooting Guide

## Common Issues and Solutions

### Issue: "Firebase connection error" even after setting environment variables

#### Solution 1: Restart Next.js Development Server
**This is the most common issue!** Next.js only loads environment variables when the server starts.

1. Stop your development server (press `Ctrl+C` in the terminal)
2. Start it again with `npm run dev` or `yarn dev`
3. Try uploading an image again

#### Solution 2: Verify Environment Variables Format
Make sure your `.env.local` file has the correct format:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

**Important:**
- No spaces around the `=` sign
- No quotes around values (unless the value itself contains spaces)
- Each variable on a new line
- No trailing spaces

#### Solution 3: Check Firebase Console Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings (gear icon)
4. Scroll to "Your apps" section
5. Click on your web app
6. Verify the config values match what's in your `.env.local` file

#### Solution 4: Verify File Location
Make sure `.env.local` is in the **root directory** of your project (same level as `package.json`), not in a subdirectory.

#### Solution 5: Check for Syntax Errors
- No comments on the same line as variables
- No special characters that need escaping
- File encoding should be UTF-8

#### Solution 6: Test Firebase Connection
Visit `/api/test-firebase` in your browser or use:
```bash
curl http://localhost:3000/api/test-firebase
```

This will show you if Firebase is initializing correctly on the server side.

### Debugging Steps

1. **Check server logs** - Look at your terminal where Next.js is running for error messages
2. **Check browser console** - Open DevTools (F12) and check the Console tab
3. **Verify environment variables are loaded**:
   - Add a test API route to log environment variables (be careful not to expose sensitive data)
   - Or check the server logs when the API route initializes

### Still Having Issues?

If you've tried all the above:
1. Double-check all Firebase config values are correct
2. Ensure Firebase Storage is enabled in your Firebase project
3. Check Firebase Storage security rules allow uploads
4. Verify your Firebase project is active and not suspended

