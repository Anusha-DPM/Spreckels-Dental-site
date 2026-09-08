import { BlogPost } from '../types/blog'
import {
  BLOG_SITE_URL,
  extractBlogSlugFromUrl,
  getBlogCanonicalUrl,
  getBlogSitemapUrl,
} from './sanitizeBlogHtml'
import {
  collectBlogSchemas,
  parseJsonLdSchemaList,
  schemaHasType,
} from './parseJsonLdSchema'

type JsonLdObject = Record<string, unknown>

const PERSON_NAME = 'Dr. Rujul G. Parikh DDS'
const PERSON_URL = `${BLOG_SITE_URL}/dental-staff`

function stripHtml(value: string): string {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

function rewriteBlogSchemaUrls(value: unknown, liveUrl: string): unknown {
  if (typeof value === 'string') {
    const slug = extractBlogSlugFromUrl(value)
    const liveSlug = extractBlogSlugFromUrl(liveUrl)
    if (slug && liveSlug && slug !== liveSlug) {
      return liveUrl
    }
    return value
  }

  if (Array.isArray(value)) {
    return value.map((item) => rewriteBlogSchemaUrls(item, liveUrl))
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, rewriteBlogSchemaUrls(child, liveUrl)])
    )
  }

  return value
}

function ensureType(schema: JsonLdObject, extraType: string) {
  const rawType = schema['@type']
  const types = Array.isArray(rawType)
    ? rawType.filter((item): item is string => typeof item === 'string')
    : typeof rawType === 'string'
      ? [rawType]
      : []

  if (!types.includes(extraType)) {
    schema['@type'] = [...types, extraType]
  }
}

function isPersonType(value: unknown): boolean {
  if (value === 'Person') return true
  return Array.isArray(value) && value.includes('Person')
}

function addCredentialToPeople(value: unknown) {
  if (Array.isArray(value)) {
    value.forEach(addCredentialToPeople)
    return
  }

  if (!value || typeof value !== 'object') return

  const node = value as JsonLdObject
  if (isPersonType(node['@type']) && !node.hasCredential) {
    const name = typeof node.name === 'string' ? node.name : ''
    if (/parikh|dds/i.test(name)) {
      node.hasCredential = {
        '@type': 'EducationalOccupationalCredential',
        name: 'Doctor of Dental Surgery',
        credentialCategory: 'DDS',
      }
    }
  }

  Object.values(node).forEach(addCredentialToPeople)
}

export function buildPersonSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON_NAME,
    jobTitle: 'Dentist',
    url: PERSON_URL,
    worksFor: {
      '@type': 'Dentist',
      name: 'Spreckels Park Dental',
      url: `${BLOG_SITE_URL}/`,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Doctor of Dental Surgery',
      credentialCategory: 'DDS',
    },
  }
}

export function buildBlogPostingSchema(post: BlogPost, liveUrl: string): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': ['BlogPosting', 'CreativeWork'],
    headline: post.metaTitle || post.title,
    name: post.title,
    description: post.metaDescription || post.excerpt || '',
    image: post.coverImage || post.imageUrl || undefined,
    datePublished: post.publishDate,
    dateModified: post.updatedAt || post.publishDate,
    author: buildPersonSchema(),
    publisher: {
      '@type': 'Organization',
      name: 'Spreckels Park Dental',
      logo: {
        '@type': 'ImageObject',
        url: `${BLOG_SITE_URL}/logo.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': liveUrl,
    },
    url: liveUrl,
  }
}

export function buildBreadcrumbSchema(post: BlogPost, liveUrl: string): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BLOG_SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${BLOG_SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: liveUrl,
      },
    ],
  }
}

export function buildMedicalWebPageSchema(post: BlogPost, liveUrl: string): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: post.title,
    description: post.metaDescription || post.excerpt || post.title,
    url: liveUrl,
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
    },
    about: {
      '@type': 'MedicalCondition',
      name: post.keyword || 'Dental care',
      description: post.metaDescription || post.excerpt || post.title,
    },
  }
}

function extractFaqsFromContent(content?: string): JsonLdObject | null {
  if (!content) return null

  const pairs: { name: string; text: string }[] = []
  const strongPattern =
    /<(?:p|h2|h3)[^>]*>\s*(?:<[^>]+>)*\s*(?:\d+\.\s*)?([^<]{8,180}\?)\s*(?:<\/[^>]+>)*\s*(?:<br\s*\/?>)?\s*([\s\S]*?)(?=<(?:p|h2|h3)\b|$)/gi

  let match: RegExpExecArray | null
  while ((match = strongPattern.exec(content)) !== null) {
    const name = stripHtml(match[1] || '')
    const text = stripHtml(match[2] || '')
    if (name.includes('?') && text.length > 20) {
      pairs.push({ name, text })
    }
  }

  if (pairs.length < 2) {
    const plain = stripHtml(content)
    const faqBlock = plain.split(/FAQs?/i)[1] || ''
    const numberedPattern = /(\d+\.\s*[^?]+\?)\s*([^?]{20,}?)(?=\d+\.\s*|$)/g
    let numberedMatch: RegExpExecArray | null
    while ((numberedMatch = numberedPattern.exec(faqBlock)) !== null) {
      const name = numberedMatch[1].replace(/^\d+\.\s*/, '').trim()
      const text = numberedMatch[2].trim()
      if (name && text) pairs.push({ name, text })
    }
  }

  if (pairs.length < 2) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.slice(0, 8).map((pair) => ({
      '@type': 'Question',
      name: pair.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: pair.text,
      },
    })),
  }
}

function extractHowToFromContent(post: BlogPost): JsonLdObject | null {
  const content = post.content || ''
  const takeawayMatch = content.match(
    /<(?:h2|h3)[^>]*>[\s\S]*?Key Takeaways[\s\S]*?<\/(?:h2|h3)>([\s\S]*?)(?=<(?:h2|h3)\b|$)/i
  )
  const listItems: string[] = []
  if (takeawayMatch) {
    const listPattern = /<li\b[^>]*>([\s\S]*?)<\/li>/gi
    let listMatch: RegExpExecArray | null
    while ((listMatch = listPattern.exec(takeawayMatch[1])) !== null) {
      listItems.push(stripHtml(listMatch[1]))
    }
  }

  const headingItems: string[] = []
  const headingPattern = /<(?:h2|h3)[^>]*>([\s\S]*?)<\/(?:h2|h3)>/gi
  let headingMatch: RegExpExecArray | null
  while ((headingMatch = headingPattern.exec(content)) !== null) {
    const heading = stripHtml(headingMatch[1])
    if (
      heading &&
      !/^(introduction|faqs?|conclusion|key takeaways|disclaimer)$/i.test(heading)
    ) {
      headingItems.push(heading)
    }
  }

  const steps = (listItems.length >= 2 ? listItems : headingItems).filter(
    (text) => text.length > 8
  )

  if (steps.length < 2) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: post.title,
    description: post.metaDescription || post.excerpt || post.title,
    step: steps.slice(0, 8).map((text, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: text.length > 80 ? `Step ${index + 1}` : text,
      text,
    })),
  }
}

export function buildLiveBlogSchemas(post: BlogPost): JsonLdObject[] {
  const liveUrl = getBlogCanonicalUrl(post.slug, post.canonicalUrl) || getBlogSitemapUrl(post.slug)
  const schemas = collectBlogSchemas(post).map(
    (schema) => rewriteBlogSchemaUrls(schema, liveUrl) as JsonLdObject
  )

  schemas.forEach((schema) => {
    if (schemaHasType(schema, 'BlogPosting')) {
      ensureType(schema, 'CreativeWork')
    }
    addCredentialToPeople(schema)
  })

  if (!schemaHasType(schemas, 'BlogPosting')) {
    schemas.push(buildBlogPostingSchema(post, liveUrl))
  }

  if (!schemaHasType(schemas, 'Person')) {
    schemas.push(buildPersonSchema())
  }

  if (!schemaHasType(schemas, 'BreadcrumbList')) {
    schemas.push(buildBreadcrumbSchema(post, liveUrl))
  }

  if (!schemaHasType(schemas, 'FAQPage')) {
    const faq =
      parseJsonLdSchemaList(post.faqSchema)[0] || extractFaqsFromContent(post.content)
    if (faq) schemas.push(rewriteBlogSchemaUrls(faq, liveUrl) as JsonLdObject)
  }

  if (!schemaHasType(schemas, 'HowTo')) {
    const howTo =
      parseJsonLdSchemaList(post.howToSchema)[0] || extractHowToFromContent(post)
    if (howTo) schemas.push(rewriteBlogSchemaUrls(howTo, liveUrl) as JsonLdObject)
  }

  if (!schemaHasType(schemas, 'MedicalWebPage') && !schemaHasType(schemas, 'MedicalCondition')) {
    schemas.push(buildMedicalWebPageSchema(post, liveUrl))
  }

  return schemas
}
