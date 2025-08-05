# 🔥 Firebase Setup Checklist

## ✅ **Step 1: Firebase Project Creation**
- [ ] Go to [Firebase Console](https://console.firebase.google.com/)
- [ ] Click "Create a project"
- [ ] Enter project name: `spreckels-dental-website`
- [ ] Enable Google Analytics (optional)
- [ ] Click "Create project"

## ✅ **Step 2: Add Web App**
- [ ] In Firebase Console, click web icon (</>)
- [ ] Register app: `Spreckels Dental Website`
- [ ] Copy the Firebase config object
- [ ] Note down all the values

## ✅ **Step 3: Enable Firestore Database**
- [ ] Go to "Firestore Database" in Firebase Console
- [ ] Click "Create database"
- [ ] Choose "Start in test mode"
- [ ] Select location (closest to your users)
- [ ] Click "Done"

## ✅ **Step 4: Set Security Rules**
- [ ] Go to "Firestore Database" → "Rules"
- [ ] Replace with test mode rules:

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

- [ ] Click "Publish"

## ✅ **Step 5: Environment Variables**
- [ ] Create `.env.local` file in project root
- [ ] Add all Firebase variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## ✅ **Step 6: Test Connection**
- [ ] Start development server: `npm run dev`
- [ ] Visit: `http://localhost:3001/debug`
- [ ] Click "Test Firebase Connection"
- [ ] Check for success message

## 🚨 **Common Issues**

### **"Firebase not initialized"**
- Check `.env.local` file exists
- Verify all variables are set
- Restart development server

### **"Permission denied"**
- Check Firestore security rules
- Make sure you're in test mode
- Verify project ID is correct

### **"Project not found"**
- Check Firebase project is created
- Verify project ID in environment variables
- Make sure web app is added to project

### **"Network error"**
- Check internet connection
- Try different network
- Check firewall settings

## 📞 **Need Help?**

If you're still having issues:

1. **Share the error message** from the debug tool
2. **Check browser console** (F12) for errors
3. **Verify Firebase project** is set up correctly
4. **Confirm environment variables** are loaded

## 🔗 **Useful Links**

- [Firebase Console](https://console.firebase.google.com/)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables) 