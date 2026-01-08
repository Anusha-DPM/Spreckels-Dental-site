# Vercel Image Upload Debugging Guide

## Quick Diagnostic Steps

### Step 1: Check Environment Variables on Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Verify all these variables are set:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`

4. **IMPORTANT**: Make sure they are enabled for:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. After adding/updating variables, **redeploy** your application

### Step 2: Test Firebase Storage Connectivity

Visit these URLs on your Vercel deployment:

1. **Diagnostic Endpoint**: `https://your-app.vercel.app/api/firebase-diagnostic`
   - This shows if Firebase is initialized correctly
   - Check if all environment variables are present
   - Verify storage is initialized

2. **Storage Test Endpoint**: `https://your-app.vercel.app/api/test-firebase-storage`
   - This attempts a real upload to Firebase Storage
   - Shows detailed error information if upload fails
   - Returns the exact error code and status

### Step 3: Check Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **sprekels-dental**
3. Navigate to **Storage** → **Rules**
4. Verify rules allow writes:
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
5. Click **Publish** if you made changes

### Step 4: Verify Storage Bucket

1. In Firebase Console, go to **Storage**
2. Check the bucket name at the top
3. It should match your environment variable:
   - Should be: `sprekels-dental.firebasestorage.app` OR `sprekels-dental.appspot.com`
   - **NO** `gs://` prefix
   - Must match **EXACTLY**

### Step 5: Check Vercel Function Logs

1. Go to Vercel dashboard → Your project
2. Click on **Deployments**
3. Click on the latest deployment
4. Click **View Function Logs**
5. Look for errors when uploading:
   - Search for "Upload bytes failed"
   - Search for "Firebase Storage"
   - Look for error codes like `storage/unknown`, `403`, `404`, `500`

## Common Error Codes and Fixes

### Error: `storage/unknown` with Status 404
**Problem**: Storage bucket not found
**Fix**:
1. Verify bucket name in Firebase Console
2. Update `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` in Vercel
3. Redeploy

### Error: `storage/unknown` with Status 403
**Problem**: Permission denied
**Fix**:
1. Go to Firebase Console → Storage → Rules
2. Update rules to allow writes (see Step 3 above)
3. Click Publish
4. Try uploading again

### Error: `storage/unknown` with Status 500
**Problem**: Server error
**Fix**:
1. Check Firebase service status
2. Verify bucket exists and is accessible
3. Check Vercel function logs for details
4. Try again after a few minutes

### Error: Upload timeout
**Problem**: Upload taking too long
**Fix**:
1. Try a smaller image file
2. Check network connectivity
3. Verify Firebase Storage is accessible

### Error: "Firebase Storage is not configured"
**Problem**: Environment variables missing
**Fix**:
1. Check Vercel environment variables (Step 1)
2. Ensure all `NEXT_PUBLIC_FIREBASE_*` variables are set
3. Enable for all environments (Production, Preview, Development)
4. Redeploy after adding variables

## Testing Checklist

- [ ] All environment variables set in Vercel
- [ ] Variables enabled for Production, Preview, and Development
- [ ] Application redeployed after setting variables
- [ ] `/api/firebase-diagnostic` shows all variables present
- [ ] `/api/test-firebase-storage` test upload succeeds
- [ ] Firebase Storage rules allow writes
- [ ] Storage bucket name matches exactly
- [ ] No errors in Vercel function logs

## Getting Detailed Error Information

When an upload fails on Vercel:

1. **Check the error message** in the UI - it now shows:
   - Error code (e.g., `storage/unknown`)
   - HTTP status (e.g., `403`, `404`, `500`)
   - Detailed troubleshooting steps

2. **Check Vercel Function Logs**:
   - Go to Vercel dashboard → Deployments
   - Click latest deployment → View Function Logs
   - Look for lines starting with `❌` or `Error`

3. **Use the test endpoint**:
   - Visit `/api/test-firebase-storage` on your Vercel deployment
   - This will show exactly what's failing

## Still Having Issues?

If uploads still fail after following all steps:

1. **Share the error details**:
   - Error code from the UI
   - HTTP status code
   - Response from `/api/test-firebase-storage`
   - Relevant lines from Vercel function logs

2. **Verify Firebase project**:
   - Ensure project is active
   - Check billing status (if applicable)
   - Verify Storage is enabled

3. **Check network/firewall**:
   - Ensure Vercel can reach Firebase Storage
   - Check if any firewall rules are blocking

## Quick Test Commands

After deploying to Vercel, test these endpoints:

```bash
# Test Firebase configuration
curl https://your-app.vercel.app/api/firebase-diagnostic

# Test Firebase Storage upload
curl https://your-app.vercel.app/api/test-firebase-storage
```

Both should return JSON with test results. If they fail, the error details will help identify the issue.
