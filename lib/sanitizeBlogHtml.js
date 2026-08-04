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
  sanitized = sanitized.replace(/<meta\b[^>]*>/gi, '')
  sanitized = sanitized.replace(
    /<link\b[^>]*\brel\s*=\s*["']?(?:canonical|alternate|icon|shortcut icon)["']?[^>]*>/gi,
    ''
  )
  sanitized = sanitized.replace(/<base\b[^>]*>/gi, '')

  // HTML-encoded variants sometimes pasted from CMS exports
  sanitized = sanitized.replace(/&lt;title[\s\S]*?&lt;\/title&gt;/gi, '')
  sanitized = sanitized.replace(/&lt;meta\b[\s\S]*?&gt;/gi, '')
  sanitized = sanitized.replace(/&lt;head[\s\S]*?&lt;\/head&gt;/gi, '')
  sanitized = sanitized.replace(/&lt;link\b[\s\S]*?&gt;/gi, '')

  return sanitized.trim()
}

export const BLOG_SITE_URL = 'https://www.centralvalleydentist.com'

/** Normalize URL path segments to ASCII percent-encoding. */
export function normalizeAsciiUrl(url) {
  if (!url || typeof url !== 'string') return url

  try {
    const parsed = new URL(url.trim())
    parsed.pathname = parsed.pathname
      .split('/')
      .map((segment) => {
        if (!segment) return segment
        try {
          const decoded = decodeURIComponent(segment)
          return encodeURIComponent(decoded)
        } catch {
          return encodeURIComponent(segment)
        }
      })
      .join('/')
    return parsed.href
  } catch {
    return url
  }
}

/** Produce an ASCII-only slug safe for URLs. */
export function toAsciiSlug(value) {
  if (!value || typeof value !== 'string') return ''

  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x00-\x7F]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getBlogCanonicalUrl(slug, canonicalUrl) {
  const trimmed = canonicalUrl?.trim()
  if (trimmed) return normalizeAsciiUrl(trimmed)

  const safeSlug = toAsciiSlug(slug) || slug
  return `${BLOG_SITE_URL}/blog/${safeSlug}`
}
