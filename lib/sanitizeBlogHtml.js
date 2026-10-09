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
  sanitized = sanitized.replace(
    /<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
    ''
  )

  // HTML-encoded variants sometimes pasted from CMS exports
  sanitized = sanitized.replace(/&lt;title[\s\S]*?&lt;\/title&gt;/gi, '')
  sanitized = sanitized.replace(/&lt;meta\b[\s\S]*?&gt;/gi, '')
  sanitized = sanitized.replace(/&lt;head[\s\S]*?&lt;\/head&gt;/gi, '')
  sanitized = sanitized.replace(/&lt;link\b[\s\S]*?&gt;/gi, '')
  sanitized = sanitized.replace(
    /&lt;script\b[\s\S]*?type\s*=\s*["']?application\/ld\+json["']?[\s\S]*?&lt;\/script&gt;/gi,
    ''
  )

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

/** ASCII slug used for live blog routes and sitemap entries. */
export function getBlogUrlSlug(slug) {
  if (!slug || typeof slug !== 'string') return ''
  return toAsciiSlug(slug) || slug.trim()
}

/** Site-relative blog path that matches the live sitemap, e.g. /blog/my-post. */
export function getBlogPath(slug) {
  const safeSlug = getBlogUrlSlug(slug)
  return safeSlug ? `/blog/${safeSlug}` : '/blog'
}

/** Absolute blog URL written to /sitemap.xml. Always www, no trailing slash. */
export function getBlogSitemapUrl(slug) {
  const safeSlug = getBlogUrlSlug(slug)
  if (!safeSlug) return ''
  return normalizeAsciiUrl(`${BLOG_SITE_URL}/blog/${safeSlug}`).replace(/\/+$/, '')
}

/** Pull the /blog/{slug} segment from a full or relative URL. */
export function extractBlogSlugFromUrl(url) {
  if (!url || typeof url !== 'string') return ''

  try {
    const parsed = new URL(url.trim(), BLOG_SITE_URL)
    const parts = parsed.pathname.split('/').filter(Boolean)
    if (parts[0] !== 'blog' || !parts[1]) return ''
    return getBlogUrlSlug(decodeURIComponent(parts[1]))
  } catch {
    return ''
  }
}

export function getBlogCanonicalUrl(slug, canonicalUrl) {
  const sitemapUrl = getBlogSitemapUrl(slug)
  if (sitemapUrl) return sitemapUrl

  const recoveredSlug = extractBlogSlugFromUrl(canonicalUrl)
  if (recoveredSlug) {
    return getBlogSitemapUrl(recoveredSlug) || `${BLOG_SITE_URL}/blog/${recoveredSlug}`
  }

  return `${BLOG_SITE_URL}/blog`
}
