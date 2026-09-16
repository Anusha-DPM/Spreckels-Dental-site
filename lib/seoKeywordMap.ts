import { getPageUrl } from './siteSeo'

/**
 * K-01 local geo cluster (homepage-only).
 * All six near-duplicate dentist + Manteca terms resolve to the homepage.
 * Do not create or retarget other URLs for these queries.
 *
 * Anchor spec for Content:
 * - Lead title + H1 with "Manteca Dentist"
 * - Naturally include singular/plural + city/state variants in on-page copy
 * - Success: homepage top 10 for "manteca dentist" plus at least two sibling variants
 */
export const K01_CLUSTER_ID = 'K-01'

export const K01_HOMEPAGE_PATH = '/'

export const K01_HOMEPAGE_URL = getPageUrl(K01_HOMEPAGE_PATH)

export const K01_PRIMARY_TERM = 'manteca dentist'

export const K01_TITLE_TAG =
  'Manteca Dentist | Dentists in Manteca, CA | Spreckels Park Dental'

export const K01_H1 =
  'Manteca Dentist — Trusted General, Cosmetic & Implant Dentistry in Manteca, CA'

export const K01_GEO_TERMS = [
  'manteca dentist',
  'dentist in manteca',
  'manteca ca dentists',
  'dentist manteca ca',
  'dentist in manteca ca',
  'dentists in manteca ca',
] as const

export type K01GeoTerm = (typeof K01_GEO_TERMS)[number]

export const K01_KEYWORD_MAP: Record<K01GeoTerm, typeof K01_HOMEPAGE_PATH> = {
  'manteca dentist': K01_HOMEPAGE_PATH,
  'dentist in manteca': K01_HOMEPAGE_PATH,
  'manteca ca dentists': K01_HOMEPAGE_PATH,
  'dentist manteca ca': K01_HOMEPAGE_PATH,
  'dentist in manteca ca': K01_HOMEPAGE_PATH,
  'dentists in manteca ca': K01_HOMEPAGE_PATH,
}

export function getK01TargetUrl(_term?: string) {
  return K01_HOMEPAGE_URL
}
