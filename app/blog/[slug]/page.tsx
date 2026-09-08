import React, { cache } from 'react'
import { Metadata } from 'next'
import { getPublishedBlogPosts } from '../../../lib/blogDatabase'
import { getCachedBlogPostBySlug } from '../../../lib/blogPostCache'
import { sanitizeBlogHtml, getBlogCanonicalUrl, getBlogUrlSlug, extractBlogSlugFromUrl } from '../../../lib/sanitizeBlogHtml'
import { normalizeBlogTableHtml } from '../../../lib/normalizeBlogTableHtml'
import BlogPostClient from '../../../components/BlogPostClient'
import BlogCustomCode from '../../../components/BlogCustomCode'
import JsonLd from '../../../components/JsonLd'
import { buildLiveBlogSchemas } from '../../../lib/buildBlogSchemas'
import { getRelativeLanguageAlternates } from '../../../lib/siteSeo'
import { BlogPost } from '../../../types/blog'

interface Props {
  params: Promise<{ slug: string }>
}

const getCachedPublishedBlogPosts = cache(async () => getPublishedBlogPosts())

export const revalidate = 3600

export async function generateStaticParams() {
  try {
    const posts = await getPublishedBlogPosts()
    const slugs = new Set<string>()
    posts.forEach((post: { slug?: string; canonicalUrl?: string; sitemapEntry?: string }) => {
      const primary = getBlogUrlSlug(post.slug || '')
      if (primary) slugs.add(primary)
      const aliases = [extractBlogSlugFromUrl(post.canonicalUrl), extractBlogSlugFromUrl(post.sitemapEntry)]
      aliases.forEach((alias) => {
        if (alias) slugs.add(alias)
      })
    })
    return Array.from(slugs).map((slug) => ({ slug }))
  } catch {
    return []
  }
}

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
  const ogTitle = post.ogTitle?.trim() || title
  const ogDescription = post.ogDescription?.trim() || description
  const ogUrl = post.ogUrl?.trim() || canonical
  const twitterTitle = post.twitterTitle?.trim() || title
  const twitterDescription = post.twitterDescription?.trim() || description
  const twitterCard =
    post.twitterCard?.trim() === 'summary' ? 'summary' : 'summary_large_image'

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
    alternates: getRelativeLanguageAlternates(canonical),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      type: 'article',
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
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

  const prepareBlogContent = (html: string) =>
    normalizeBlogTableHtml(sanitizeBlogHtml(html))

  const sanitizedPost: BlogPost = {
    ...post,
    content: prepareBlogContent(post.content),
  }

  const allPosts = await getCachedPublishedBlogPosts()
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3)
    .map(p => ({
      ...(p as BlogPost),
      content: prepareBlogContent((p as BlogPost).content),
    }))

  const blogSchemas = buildLiveBlogSchemas(post)

  return (
    <>
      {blogSchemas.length > 0 ? (
        <head>
          <JsonLd data={blogSchemas} />
        </head>
      ) : null}
      {post.customCode?.trim() ? <BlogCustomCode code={post.customCode} /> : null}
      <BlogPostClient post={sanitizedPost} relatedPosts={relatedPosts} />
    </>
  )
}
