import { cache } from 'react'
import { getBlogPostBySlug } from './blogDatabase'

export const getCachedBlogPostBySlug = cache(async (slug) => {
  return getBlogPostBySlug(slug)
})
