import React, { cache } from 'react'
import { Metadata } from 'next'
import { getPublishedBlogPosts } from '../../../lib/blogDatabase'
import { getCachedBlogPostBySlug } from '../../../lib/blogPostCache'
import { sanitizeBlogHtml, getBlogCanonicalUrl } from '../../../lib/sanitizeBlogHtml'
import BlogPostClient from '../../../components/BlogPostClient'
import { BlogPost } from '../../../types/blog'

interface Props {
  params: Promise<{ slug: string }>
}

const getCachedPublishedBlogPosts = cache(async () => getPublishedBlogPosts())

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getCachedBlogPostBySlug(slug) as BlogPost | null

  if (!post) {
    return {
      title: 'Post Not Found | Spreckels Park Dental',
      description: 'The requested blog post could not be found.',
      robots: { index: false, follow: false },
    }
  }

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt || ''
  const canonical = getBlogCanonicalUrl(slug, post.canonicalUrl)

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getCachedBlogPostBySlug(slug) as BlogPost | null

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Post Not Found</h1>
          <p className="mt-2">The blog post you are looking for does not exist.</p>
        </div>
      </div>
    )
  }

  const sanitizedPost: BlogPost = {
    ...post,
    content: sanitizeBlogHtml(post.content),
  }

  const allPosts = await getCachedPublishedBlogPosts()
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3)
    .map(p => ({
      ...(p as BlogPost),
      content: sanitizeBlogHtml((p as BlogPost).content),
    }))

  return <BlogPostClient post={sanitizedPost} relatedPosts={relatedPosts} />
}
