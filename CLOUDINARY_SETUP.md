# Cloudinary Setup Guide

This project uses **Cloudinary** for blog image storage and **Firebase Firestore** for blog post data storage.

## Architecture Overview

- **Blog Post Data** (title, content, SEO metadata, etc.) → Stored in **Firebase Firestore**
- **Blog Images** → Uploaded to **Cloudinary**, only the secure URLs are stored in Firestore
- **Benefits**: 
  - Cloudinary provides powerful image optimization and transformation
  - Firestore stores structured blog data efficiently
  - Images are served via Cloudinary's CDN for fast loading
  - Automatic image compression and format conversion

## Prerequisites

1. **Cloudinary Account** (Free tier is sufficient to start)
   - Sign up at: https://cloudinary.com/
   
2. **Firebase Account** (for Firestore database)
   - Already configured in this project

## Step 1: Get Cloudinary Credentials

### 1.1 Create a Cloudinary Account

1. Go to https://cloudinary.com/users/register/free
2. Sign up for a free account
3. Verify your email

### 1.2 Get Your Cloud Name

1. Log in to your Cloudinary dashboard: https://cloudinary.com/console
2. You'll see your **Cloud name** on the dashboard
3. Copy this value (example: `dx1a2b3c4`)

### 1.3 Create an Upload Preset

An upload preset defines how images should be processed when uploaded.

1. Go to Settings → Upload → Upload presets
   - Direct link: https://cloudinary.com/console/settings/upload
2. Click **Add upload preset**
3. Configure the preset:
   - **Preset name**: `blog_images_preset` (or any name you prefer)
   - **Signing mode**: Select **Unsigned** (for client-side uploads)
   - **Folder**: `blog-images` (optional, but recommended for organization)
   - **Allowed formats**: jpg, png, gif, webp
   - **Transformation**: (Optional) Add transformations like quality auto, format auto
4. Click **Save**
5. Copy the **Upload preset name**

### 1.4 Get Your API Key (Optional)

The API Key is optional for basic uploads but useful for advanced features:

1. Go to Settings → Account → Security
2. Copy your **API Key** (it's visible on the dashboard)

## Step 2: Configure Environment Variables

### 2.1 Create/Update `.env.local` File

In your project root, create or update the `.env.local` file with the following variables:

```env
# ============================================
# CLOUDINARY CONFIGURATION
# ============================================
# Your Cloudinary cloud name (required)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here

# Your upload preset name (required)
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=blog_images_preset

# Your API key (optional - for advanced features)
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key_here

# ============================================
# FIREBASE CONFIGURATION (Already configured)
# ============================================
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 2.2 Replace Placeholder Values

Replace these placeholder values with your actual Cloudinary credentials:

- `your_cloud_name_here` → Your Cloudinary cloud name (e.g., `dx1a2b3c4`)
- `blog_images_preset` → Your upload preset name (use the one you created)
- `your_api_key_here` → Your Cloudinary API key (optional)

### 2.3 Example `.env.local`

```env
# CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dx1a2b3c4
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=blog_images_preset
NEXT_PUBLIC_CLOUDINARY_API_KEY=123456789012345

# FIREBASE (Already configured)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyABC...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

## Step 3: Restart Your Development Server

After updating `.env.local`, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 4: Test the Integration

### 4.1 Create a New Blog Post

1. Navigate to `/admin/login` and log in
2. Go to `/admin/new-post`
3. Fill in the post details
4. Upload a cover image using the "Choose Image File" button
5. You should see:
   - Upload progress indicator
   - Console logs showing Cloudinary upload process
   - Image preview after successful upload
6. Click "Publish" or "Save Draft"
7. Check your Cloudinary dashboard to verify the image was uploaded

### 4.2 Verify in Cloudinary Dashboard

1. Go to https://cloudinary.com/console/media_library
2. Navigate to the `blog-images` folder
3. You should see your uploaded images
4. Click on an image to see its details and transformations

### 4.3 Verify in Firestore

1. Go to Firebase Console → Firestore Database
2. Find the `blog-posts` collection
3. Open a blog post document
4. Verify that `coverImage` and `imageUrl` fields contain Cloudinary URLs (starting with `https://res.cloudinary.com/`)

## Blog Post Data Schema

Here's the clean blog post schema used in Firestore:

```javascript
{
  // Core Fields
  id: "auto-generated-by-firestore",
  title: "Your Blog Post Title",
  content: "<p>HTML content of the blog post...</p>",
  excerpt: "Brief summary of the post",
  slug: "your-blog-post-title", // Auto-generated from title
  
  // Image Fields (Cloudinary URLs)
  coverImage: "https://res.cloudinary.com/your-cloud/image/upload/v123/blog-images/abc.jpg",
  imageUrl: "https://res.cloudinary.com/your-cloud/image/upload/v123/blog-images/abc.jpg",
  
  // Taxonomy
  tags: ["dental", "health", "care"],
  categories: ["general", "cosmetic"],
  
  // SEO Metadata
  metaTitle: "SEO optimized title",
  metaDescription: "SEO optimized description",
  keyword: "primary keyword",
  canonicalUrl: "https://example.com/blog/post-slug",
  
  // Schema Markup (Optional)
  jsonLdSchema: "<script type='application/ld+json'>{...}</script>",
  breadcrumbActive: "<script type='application/ld+json'>{...}</script>",
  faqSchema: "<script type='application/ld+json'>{...}</script>",
  medicalConditionSchema: "<script type='application/ld+json'>{...}</script>",
  
  // Publishing
  published: true,
  publishDate: "2026-01-21T12:00:00.000Z",
  createdAt: "2026-01-21T12:00:00.000Z",
  updatedAt: "2026-01-21T12:00:00.000Z",
  author: "Admin"
}
```

## Image Upload Flow

1. **User selects image** in New Post or Edit Post page
2. **Image is compressed** (if larger than 1MB) using browser-image-compression
3. **Image is uploaded to Cloudinary** via their REST API
4. **Cloudinary returns secure URL** (e.g., `https://res.cloudinary.com/...`)
5. **URL is saved to Firestore** in the blog post document
6. **When displaying**, images are loaded from Cloudinary's CDN

## Code Examples

### Create a New Blog Post

```javascript
import { createBlogPost } from '../lib/blogDatabase'
import { uploadImageToCloudinary } from '../lib/cloudinary'

// Upload image to Cloudinary
const result = await uploadImageToCloudinary(imageFile, 'blog-images', (progress) => {
  console.log(`Upload progress: ${progress}%`)
})

// Create blog post with Cloudinary URL
const postData = {
  title: 'My Blog Post',
  content: '<p>Content here...</p>',
  excerpt: 'Brief summary',
  coverImage: result.url, // Cloudinary URL
  imageUrl: result.url,   // Cloudinary URL
  tags: ['dental', 'health'],
  categories: ['general'],
  metaTitle: 'SEO Title',
  metaDescription: 'SEO Description',
  published: true,
  publishDate: new Date().toISOString()
}

const postId = await createBlogPost(postData)
console.log('Post created:', postId)
```

### Read Blog Posts

```javascript
import { getBlogPosts, getPublishedBlogPosts, getBlogPostById, getBlogPostBySlug } from '../lib/blogDatabase'

// Get all blog posts (for admin)
const allPosts = await getBlogPosts()

// Get published posts only (for public)
const publishedPosts = await getPublishedBlogPosts()

// Get single post by ID
const post = await getBlogPostById('post-id')

// Get single post by slug
const post = await getBlogPostBySlug('my-blog-post-title')
```

### Update Blog Post

```javascript
import { updateBlogPost } from '../lib/blogDatabase'
import { uploadImageToCloudinary } from '../lib/cloudinary'

// Upload new image (optional)
const result = await uploadImageToCloudinary(newImageFile, 'blog-images')

// Update post
await updateBlogPost('post-id', {
  title: 'Updated Title',
  content: '<p>Updated content...</p>',
  coverImage: result.url, // New Cloudinary URL
  imageUrl: result.url,
  metaTitle: 'Updated SEO Title',
  published: true
})
```

## Troubleshooting

### Issue: "Cloudinary is not configured"

**Solution:**
1. Verify `.env.local` has `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
2. Make sure there are no typos in the environment variable names
3. Restart your development server after updating `.env.local`

### Issue: "Upload failed with status 400"

**Possible causes:**
1. **Invalid upload preset** - Check that your upload preset exists and is set to "Unsigned"
2. **Cloud name incorrect** - Verify your cloud name matches your Cloudinary account
3. **File type not allowed** - Check your upload preset allows the file format

**Solution:**
1. Go to Cloudinary Settings → Upload → Upload presets
2. Verify your preset is set to **Unsigned** signing mode
3. Check **Allowed formats** includes jpg, png, gif, webp
4. Copy the exact preset name to your `.env.local`

### Issue: Images upload but don't display

**Solution:**
1. Check browser console for CORS errors
2. Verify the Cloudinary URL is correct in Firestore
3. Check that the image exists in your Cloudinary media library
4. Ensure your Cloudinary delivery is not restricted

### Issue: Upload is very slow

**Solution:**
1. The image is automatically compressed before upload
2. Check your internet connection
3. Try uploading a smaller image
4. Reduce image quality in the upload preset settings

### Issue: "Upload timeout"

**Solution:**
1. Check your internet connection
2. Try uploading a smaller image
3. Increase the timeout in `lib/cloudinary.js` (default is 90 seconds)

## Advanced Features

### Image Transformations

Cloudinary allows automatic image transformations. You can modify URLs to apply transformations:

```javascript
// Original URL
const originalUrl = "https://res.cloudinary.com/demo/image/upload/v123/blog-images/sample.jpg"

// Apply transformations
const optimizedUrl = "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill,q_auto,f_auto/v123/blog-images/sample.jpg"
```

Common transformations:
- `w_800` - Resize width to 800px
- `h_600` - Resize height to 600px
- `c_fill` - Fill mode (crop to exact dimensions)
- `q_auto` - Automatic quality optimization
- `f_auto` - Automatic format selection (WebP for supported browsers)

### Delete Images

Currently, image deletion requires server-side implementation. You can:

1. Manually delete images from Cloudinary dashboard
2. Implement a server-side API route with Cloudinary SDK using your API Secret

Example server-side deletion (requires API Secret):

```javascript
// pages/api/delete-image.js
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET // Server-side only!
})

export default async function handler(req, res) {
  const { publicId } = req.body
  
  try {
    const result = await cloudinary.uploader.destroy(publicId)
    res.status(200).json({ success: true, result })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}
```

## Security Notes

1. **Upload Preset**: Always use **Unsigned** presets for client-side uploads
2. **API Secret**: Never expose your API Secret in client-side code
3. **Environment Variables**: The `NEXT_PUBLIC_` prefix makes variables available to the browser - this is safe for Cloud Name, Upload Preset, and API Key, but never for API Secret
4. **Upload Restrictions**: Configure allowed formats and file size limits in your upload preset

## Cost Considerations

### Cloudinary Free Tier

- **25 GB storage**
- **25 GB bandwidth per month**
- **Unlimited transformations**
- Suitable for small to medium blogs

### When to Upgrade

Consider upgrading when:
- Storage exceeds 25 GB
- Monthly bandwidth exceeds 25 GB
- Need advanced features (backup, video support, etc.)

## Resources

- **Cloudinary Documentation**: https://cloudinary.com/documentation
- **Cloudinary Upload API**: https://cloudinary.com/documentation/image_upload_api_reference
- **Firebase Firestore**: https://firebase.google.com/docs/firestore
- **Next.js Environment Variables**: https://nextjs.org/docs/basic-features/environment-variables

## Support

If you encounter any issues:

1. Check the browser console for detailed error messages
2. Review the Cloudinary dashboard for upload status
3. Verify environment variables are set correctly
4. Restart the development server after any configuration changes
5. Check the Network tab in browser DevTools for API responses

## Summary

✅ Blog post data → Firebase Firestore
✅ Blog images → Cloudinary
✅ Only image URLs stored in Firestore
✅ Automatic image compression
✅ Fast CDN delivery
✅ Clean separation of concerns
