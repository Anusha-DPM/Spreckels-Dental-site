import React from 'react'
import { Metadata } from 'next'
import { getBlogPostBySlug, getPublishedBlogPosts } from '../../../lib/blogDatabase'
import BlogPostClient from '../../../components/BlogPostClient'
import { BlogPost } from '../../../types/blog'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug) as BlogPost | null

  if (!post) {
    return {
      title: 'Post Not Found | Spreckels Park Dental',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug) as BlogPost | null

  if (!post) {
    // We can't use useRouter here as it's a server component. 
    // For now, we'll just handle it in the client component or show a simple error if needed.
    // However, BlogPostClient expects a post, so we should handle null here.
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Post Not Found</h1>
          <p className="mt-2">The blog post you are looking for does not exist.</p>
        </div>
      </div>
    )
  }

  const allPosts = await getPublishedBlogPosts()
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3)
    .map(p => p as BlogPost)

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />
}
