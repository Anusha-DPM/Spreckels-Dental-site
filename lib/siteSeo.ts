export const SITE_URL = 'https://www.centralvalleydentist.com'
export const SITE_LANG = 'en-US'

export function getPageUrl(pathname: string): string {
  const normalizedPath =
    pathname === '/' ? '/' : pathname.replace(/\/+$/, '') || '/'
  return normalizedPath === '/'
    ? `${SITE_URL}/`
    : `${SITE_URL}${normalizedPath}`
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
