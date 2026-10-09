export const SITE_URL = 'https://www.centralvalleydentist.com'
export const SITE_HOST = 'www.centralvalleydentist.com'
export const SITE_LANG = 'en-US'

/**
 * Site-wide canonical rule:
 * - Always https + www
 * - Homepage keeps a trailing slash
 * - Every other path has no trailing slash
 */
export function getPageUrl(pathname: string): string {
  const rawPath = pathname.startsWith('http')
    ? safeUrlPathname(pathname)
    : pathname

  const withLeadingSlash = rawPath.startsWith('/') ? rawPath : `/${rawPath}`
  const normalizedPath =
    withLeadingSlash === '/' ? '/' : withLeadingSlash.replace(/\/+$/, '') || '/'

  return normalizedPath === '/'
    ? `${SITE_URL}/`
    : `${SITE_URL}${normalizedPath}`
}

function safeUrlPathname(value: string) {
  try {
    return new URL(value).pathname || '/'
  } catch {
    return '/'
  }
}

export function isSiteHost(hostname: string) {
  return hostname.replace(/^www\./, '') === 'centralvalleydentist.com'
}

export function getLanguageAlternates(pathname: string) {
  const url = getPageUrl(pathname)
  return {
    canonical: url,
    languages: {
      [SITE_LANG]: url,
      en: url,
      'x-default': url,
    },
  }
}

export function getRelativeLanguageAlternates(canonical?: string) {
  return {
    ...(canonical ? { canonical } : {}),
    languages: {
      [SITE_LANG]: './',
      en: './',
      'x-default': './',
    },
  }
}
