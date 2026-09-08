type JsonLdObject = Record<string, unknown>

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function extractJsonLdPayloads(value: string): string[] {
  const scripts = [
    ...value.matchAll(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
    ),
  ]

  if (scripts.length > 0) {
    return scripts.map((match) => match[1].trim()).filter(Boolean)
  }

  return [value]
}

function isJsonLdObject(value: unknown): value is JsonLdObject {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function flattenParsedJson(parsed: unknown): JsonLdObject[] {
  if (Array.isArray(parsed)) {
    return parsed.flatMap(flattenParsedJson)
  }

  if (!isJsonLdObject(parsed)) return []

  if (Array.isArray(parsed['@graph'])) {
    const context = parsed['@context']
    return parsed['@graph'].flatMap((node) => {
      const flattened = flattenParsedJson(node)
      return flattened.map((item) =>
        context && !item['@context'] ? { '@context': context, ...item } : item
      )
    })
  }

  return [parsed]
}

export function parseJsonLdSchemaList(
  input: string | undefined | null
): JsonLdObject[] {
  if (!input?.trim()) return []

  return extractJsonLdPayloads(input.trim()).flatMap((payload) => {
    const jsonStr = decodeHtmlEntities(payload)

    try {
      return flattenParsedJson(JSON.parse(jsonStr))
    } catch {
      return []
    }
  })
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

export function collectSchemaTypes(value: unknown, types = new Set<string>()): Set<string> {
  if (Array.isArray(value)) {
    value.forEach((item) => collectSchemaTypes(item, types))
    return types
  }

  if (!isJsonLdObject(value)) return types

  const rawType = value['@type']
  if (typeof rawType === 'string') {
    types.add(rawType)
  } else if (Array.isArray(rawType)) {
    rawType.forEach((item) => {
      if (typeof item === 'string') types.add(item)
    })
  }

  Object.values(value).forEach((child) => collectSchemaTypes(child, types))
  return types
}

export function schemaHasType(schemas: unknown, typeName: string): boolean {
  return collectSchemaTypes(schemas).has(typeName)
}
