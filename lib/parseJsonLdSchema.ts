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

export function parseJsonLdSchema(
  input: string | undefined | null
): JsonLdObject | null {
  if (!input?.trim()) return null

  let jsonStr = decodeHtmlEntities(extractJsonFromScriptTag(input.trim()))

  try {
    const parsed = JSON.parse(jsonStr)
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as JsonLdObject
    }
  } catch {
    return null
  }

  return null
}

export function collectBlogSchemas(post: {
  jsonLdSchema?: string
  breadcrumbActive?: string
  faqSchema?: string
  medicalConditionSchema?: string
}): JsonLdObject[] {
  return [
    post.jsonLdSchema,
    post.breadcrumbActive,
    post.faqSchema,
    post.medicalConditionSchema,
  ]
    .map(parseJsonLdSchema)
    .filter((schema): schema is JsonLdObject => schema !== null)
}
