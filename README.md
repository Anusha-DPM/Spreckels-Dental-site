# Spreckels Dental Website

A modern dental practice website built with Next.js, TypeScript, Firebase, and Cloudinary.

## Features

- **Blog Management System** with rich text editor
- **Admin Dashboard** for content management
- **Cloudinary Integration** for optimized image storage and delivery
- **Firebase Firestore** for blog post data storage
- **Responsive Design** with Tailwind CSS
- **SEO Optimization** with customizable metadata and schema markup
- **Image optimization and compression** before upload
- **Fast CDN delivery** via Cloudinary

## Technology Stack

- **Frontend**: Next.js 16, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: Firebase Firestore
- **Image Storage**: Cloudinary
- **Rich Text Editor**: TipTap

## Blog Architecture

- **Blog Post Data** (title, content, SEO metadata) → Firebase Firestore
- **Blog Images** → Cloudinary (only URLs stored in Firestore)
- **Benefits**: Optimized image delivery, automatic compression, CDN performance

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Spreckels-Dental-site-main
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# CLOUDINARY (Required for blog image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

# FIREBASE (Required for blog data storage)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**📖 For detailed setup instructions, see [CLOUDINARY_SETUP.md](./CLOUDINARY_SETUP.md)**

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Access Admin Dashboard

1. Navigate to `/admin/login`
2. Create blog posts at `/admin/new-post`
3. Manage posts at `/admin/dashboard`

## Blog Post Schema

Blog posts include:
- **Core Fields**: title, content, excerpt, slug
- **Images**: coverImage, imageUrl (Cloudinary URLs)
- **Taxonomy**: tags, categories
- **SEO**: metaTitle, metaDescription, keyword, canonicalUrl
- **Schema Markup**: JSON-LD, breadcrumbs, FAQ, medical schemas
- **Publishing**: published status, publish date, timestamps

## Deployment

This project is configured for automatic deployment on Vercel.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

**Important**: Add all `NEXT_PUBLIC_*` environment variables in Vercel for production.

## Documentation

- **[CLOUDINARY_SETUP.md](./CLOUDINARY_SETUP.md)** - Complete Cloudinary integration guide
- **Firebase Console** - Manage Firestore database
- **Cloudinary Dashboard** - View and manage uploaded images

<!-- Trigger Vercel deployment - Updated: 2024-12-19 --> 