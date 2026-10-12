/**
 * Normalize admin "Custom Code" input so bare JSON, CSS, or JS
 * still injects correctly on the blog detail page.
 */
export function normalizeCustomCode(code: string): string {
  const trimmed = code.trim()
  if (!trimmed) return ''

  // Already markup (tags, comments, doctype, etc.)
  if (/<[a-z!/?]/i.test(trimmed)) {
    return trimmed
  }

  // Bare JSON / JSON-LD
  if (
    (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
    (trimmed.startsWith('[') && trimmed.endsWith(']'))
  ) {
    try {
      JSON.parse(trimmed)
      return `<script type="application/ld+json">${trimmed}</script>`
    } catch {
      // Not valid JSON — fall through
    }
  }

  // Bare CSS (property blocks without JS-like keywords)
  const looksLikeCss =
    /[{;]\s*[a-z-]+\s*:/i.test(trimmed) &&
    !/\b(function|const|let|var|=>|return)\b/.test(trimmed)
  if (looksLikeCss) {
    return `<style>${trimmed}</style>`
  }

  // Bare JavaScript
  return `<script>${trimmed}</script>`
}
