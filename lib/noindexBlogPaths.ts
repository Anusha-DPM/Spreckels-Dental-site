import paths from './noindexBlogPaths.json'

/**
 * Removed blog URLs reported in Google Search Console.
 * They have no published post and must stay out of the index.
 */
const NOINDEX_BLOG_PATHS = new Set(
  (paths as string[]).map((path) => path.toLowerCase())
)

export function isNoindexBlogPath(value: string) {
  if (!value) return false

  let path = value.trim()
  if (path.startsWith('http://') || path.startsWith('https://')) {
    try {
      path = new URL(path).pathname
    } catch {
      return false
    }
  }

  path = path.split('?')[0].split('#')[0]
  try {
    path = decodeURIComponent(path)
  } catch {
    // Keep the raw path when the encoding is invalid.
  }

  if (!path.startsWith('/')) path = `/${path}`
  path = path.replace(/\/+$/, '').toLowerCase()
  return NOINDEX_BLOG_PATHS.has(path || '/')
}

export function isNoindexBlogSlug(slug: string) {
  const safeSlug = typeof slug === 'string' ? slug.trim().replace(/^\/+|\/+$/g, '') : ''
  if (!safeSlug) return false
  return isNoindexBlogPath(`/blog/${safeSlug}`)
}
