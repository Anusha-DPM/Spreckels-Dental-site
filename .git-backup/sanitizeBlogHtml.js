/**
 * Removes document-level SEO tags from blog HTML content so they are not
 * duplicated in the page body (title, meta, link canonical, head, html, body).
 */
export function sanitizeBlogHtml(content) {
  if (!content || typeof content !== 'string') return content || ''

  let sanitized = content

  sanitized = sanitized.replace(/<!DOCTYPE[^>]*>/gi, '')
  sanitized = sanitized.replace(/<\/?html[^>]*>/gi, '')
  sanitized = sanitized.replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
  sanitized = sanitized.replace(/<\/?body[^>]*>/gi, '')
  sanitized = sanitized.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
  sanitized = sanitized.replace(/<meta[^>]*>/gi, '')
  sanitized = sanitized.replace(/<link[^>]*rel=["']canonical["'][^>]*>/gi, '')

  return sanitized.trim()
}

export const BLOG_SITE_URL = 'https://www.centralvalleydentist.com'

export function getBlogCanonicalUrl(slug, canonicalUrl) {
  const trimmed = canonicalUrl?.trim()
  if (trimmed) return trimmed
  return `${BLOG_SITE_URL}/blog/${slug}`
}
