import React from 'react'
import { Metadata } from 'next'
import { getPublishedBlogPosts } from '../../lib/blogDatabase'
import BlogListingClient from '../../components/BlogListingClient'
import { BlogPost } from '../../types/blog'

export const metadata: Metadata = {
  title: 'Blog | Spreckels Park Dental',
  description: 'Stay informed about dental health, latest treatments, and tips for maintaining your beautiful smile with our dental blog.',
}

export default async function BlogPage() {
  // Fetch posts on the server
  const posts = await getPublishedBlogPosts() as BlogPost[]

  // Pass to client component for search/filter logic
  return <BlogListingClient initialPosts={posts} />
}
