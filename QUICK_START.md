# Quick Start Guide - Spreckels Dental Blog

## ✅ Cloudinary Configuration Complete!

Your Cloudinary credentials have been added to `.env.local`:

- **Cloud Name**: `speckles_dental`
- **Upload Preset**: `speckles_dental`
- **API Key**: `415629176638428`
- **API Secret**: `Kand5h6sPIhUjulLvbTgFqnVnJI` (server-side only)

## 🚀 Server Running

- **Local**: http://localhost:3000
- **Network**: http://192.168.1.4:3000

## 📝 How to Create a Blog Post

### Step 1: Access Admin Panel

1. Open your browser and go to: http://localhost:3000/admin/login
2. Log in with your admin credentials

### Step 2: Create New Post

1. Go to: http://localhost:3000/admin/new-post
2. Fill in the form:
   - **Title**: Your blog post title
   - **Content**: Use the rich text editor
   - **Excerpt**: Brief summary
   - **Cover Image**: Click "Choose Image File" to upload
     - Image will upload to Cloudinary ☁️
     - Only the Cloudinary URL will be saved to Firebase
   - **Tags**: dental, health, care (comma-separated)
   - **Categories**: General, Cosmetic (comma-separated)
   - **SEO Settings**: Meta title, description, keyword, canonical URL
   - **Schema Markup**: JSON-LD, FAQ, Breadcrumb, Medical schemas

3. Click **"Publish"** or **"Save Draft"**

### Step 3: Manage Posts

1. Go to: http://localhost:3000/admin/dashboard
2. View all posts, edit, delete, or publish drafts

## 📦 What Gets Saved Where

### Cloudinary (Images)
- Blog cover images
- All uploaded photos
- Automatic compression and optimization
- Fast CDN delivery

### Firebase Firestore (Data)
- Blog title, content, excerpt
- Tags, categories
- SEO metadata
- **Only Cloudinary image URLs** (not the images themselves)
- Published status, dates

## 🎯 Image Upload Process

1. You select an image file (max 5MB)
2. Image is compressed automatically (if > 1MB)
3. Image uploads to Cloudinary with progress tracking
4. Cloudinary returns secure URL: `https://res.cloudinary.com/speckles_dental/...`
5. Only this URL is saved to Firebase Firestore
6. When visitors view your blog, images load from Cloudinary's fast CDN

## 📊 Blog Post Schema

```javascript
{
  // Core
  title: "Your Blog Title",
  content: "<p>HTML content here...</p>",
  excerpt: "Brief summary",
  slug: "your-blog-title", // auto-generated
  
  // Images (Cloudinary URLs)
  coverImage: "https://res.cloudinary.com/speckles_dental/image/upload/v123/blog-images/abc.jpg",
  imageUrl: "https://res.cloudinary.com/speckles_dental/image/upload/v123/blog-images/abc.jpg",
  
  // Taxonomy
  tags: ["dental", "health"],
  categories: ["General"],
  
  // SEO
  metaTitle: "SEO Title",
  metaDescription: "SEO Description",
  keyword: "primary keyword",
  canonicalUrl: "https://your-site.com/blog/your-blog-title",
  
  // Schema Markup (Optional)
  jsonLdSchema: "<script>...</script>",
  breadcrumbActive: "<script>...</script>",
  faqSchema: "<script>...</script>",
  medicalConditionSchema: "<script>...</script>",
  
  // Publishing
  published: true,
  publishDate: "2026-01-21T12:00:00.000Z",
  createdAt: "2026-01-21T12:00:00.000Z",
  updatedAt: "2026-01-21T12:00:00.000Z",
  author: "Admin"
}
```

## 🔧 If You Need to Update Credentials

Edit `.env.local` in the project root and restart the server:

```bash
npm run dev
```

## 📚 Documentation

- **CLOUDINARY_SETUP.md** - Detailed Cloudinary setup guide
- **BLOG_API_EXAMPLES.md** - Code examples for developers
- **README.md** - Project overview

## ✅ Everything is Ready!

You can now:
1. Create blog posts at `/admin/new-post`
2. Upload images to Cloudinary
3. Manage posts at `/admin/dashboard`
4. View published posts at `/blog`

All images will be stored in Cloudinary and served via their CDN for optimal performance! 🚀
