import React from 'react'
import { Metadata } from 'next'
import { getPublishedBlogPosts } from '../../lib/blogDatabase'
import BlogListingClient from '../../components/BlogListingClient'
import { BlogPost } from '../../types/blog'

export const metadata: Metadata = {
  title: 'Dental Blog & Oral Health Articles | Spreckels Park Dental',
  description: 'Read the Spreckels Park Dental blog for oral health tips, dental topics, and helpful information for patients and families.',
}

export default async function BlogPage() {
  // Fetch posts on the server
  const posts = await getPublishedBlogPosts() as BlogPost[]

  // Pass to client component for search/filter logic
  return <BlogListingClient initialPosts={posts} />
}
