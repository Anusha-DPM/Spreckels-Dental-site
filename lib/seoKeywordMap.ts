import { getPageUrl } from './siteSeo'

/**
 * K-01 local geo cluster.
 * All six near-duplicate dentist + Manteca terms resolve to the homepage only.
 * Do not create or retarget other URLs for these queries.
 */
export const K01_CLUSTER_ID = 'K-01'

export const K01_HOMEPAGE_PATH = '/'

export const K01_HOMEPAGE_URL = getPageUrl(K01_HOMEPAGE_PATH)

export const K01_PRIMARY_TERM = 'dentist in Manteca'

export const K01_GEO_TERMS = [
  'dentist manteca ca',
  'dentist in manteca',
  'dentist in manteca ca',
  'manteca dentist',
  'manteca ca dentist',
  'dentists in manteca',
] as const

export type K01GeoTerm = (typeof K01_GEO_TERMS)[number]

export const K01_KEYWORD_MAP: Record<K01GeoTerm, typeof K01_HOMEPAGE_PATH> = {
  'dentist manteca ca': K01_HOMEPAGE_PATH,
  'dentist in manteca': K01_HOMEPAGE_PATH,
  'dentist in manteca ca': K01_HOMEPAGE_PATH,
  'manteca dentist': K01_HOMEPAGE_PATH,
  'manteca ca dentist': K01_HOMEPAGE_PATH,
  'dentists in manteca': K01_HOMEPAGE_PATH,
}

export function getK01TargetUrl(_term?: string) {
  return K01_HOMEPAGE_URL
}
