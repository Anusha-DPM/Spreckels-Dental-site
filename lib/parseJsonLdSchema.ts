type JsonLdObject = Record<string, unknown>

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function extractJsonFromScriptTag(value: string): string {
  const scriptMatch = value.match(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i
  )
  return scriptMatch ? scriptMatch[1].trim() : value
}

function isJsonLdObject(value: unknown): value is JsonLdObject {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

export function parseJsonLdSchemaList(
  input: string | undefined | null
): JsonLdObject[] {
  if (!input?.trim()) return []

  const jsonStr = decodeHtmlEntities(extractJsonFromScriptTag(input.trim()))

  try {
    const parsed = JSON.parse(jsonStr)
    if (Array.isArray(parsed)) {
      return parsed.filter(isJsonLdObject)
    }
    if (isJsonLdObject(parsed)) {
      return [parsed]
    }
  } catch {
    return []
  }

  return []
}

export function parseJsonLdSchema(
  input: string | undefined | null
): JsonLdObject | null {
  return parseJsonLdSchemaList(input)[0] ?? null
}

export type BlogSchemaFields = {
  jsonLdSchema?: string
  blogPostingSchema?: string
  personSchema?: string
  dentistSchema?: string
  breadcrumbActive?: string
  faqSchema?: string
  medicalConditionSchema?: string
  howToSchema?: string
}

export function collectBlogSchemas(post: BlogSchemaFields): JsonLdObject[] {
  return [
    post.jsonLdSchema,
    post.blogPostingSchema,
    post.personSchema,
    post.dentistSchema,
    post.breadcrumbActive,
    post.faqSchema,
    post.medicalConditionSchema,
    post.howToSchema,
  ].flatMap(parseJsonLdSchemaList)
}
