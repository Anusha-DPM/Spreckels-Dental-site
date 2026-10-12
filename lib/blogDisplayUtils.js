const BIO_MARKERS = [
  'Dr. Rujul G. Parikh DDS has dedicated over 25 years',
  'Spreckels Park Dental in Manteca',
]

export function isBoilerplateBioText(text) {
  if (!text || typeof text !== 'string') return false
  const normalized = text.replace(/\s+/g, ' ').trim()
  return (
    normalized.includes(BIO_MARKERS[0]) &&
    normalized.includes(BIO_MARKERS[1])
  )
}

export function normalizeBlogAuthor(author) {
  const value = author?.trim()
  if (!value || value === 'Spreckels Park Dental') {
    return 'Admin'
  }
  return value
}

export function getHomepageExcerpt(excerpt, content) {
  if (excerpt?.trim() && !isBoilerplateBioText(excerpt)) {
    return excerpt.trim()
  }

  if (!content) return null

  const plain = content
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (!plain) return null

  const sentences = plain.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean)
  const meaningful = sentences.find(s => !isBoilerplateBioText(s) && s.length > 40)

  if (!meaningful) return null

  return meaningful.length > 160 ? `${meaningful.slice(0, 157)}...` : meaningful
}

export function normalizeBlogPostForDisplay(post) {
  return {
    ...post,
    author: normalizeBlogAuthor(post.author),
    excerpt: getHomepageExcerpt(post.excerpt, post.content) || '',
  }
}
