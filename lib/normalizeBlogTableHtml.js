/**
 * Normalize TipTap table HTML for published blog posts.
 * Removes editor-only width constraints and ensures tables are wrapped for scrolling.
 */
export function normalizeBlogTableHtml(content) {
  if (!content || typeof content !== 'string') return content || ''

  let html = content

  // TipTap colgroup min-widths can collapse columns on the published page
  html = html.replace(/<colgroup>[\s\S]*?<\/colgroup>/gi, '')

  // Narrow min-width inline styles from the resizable table extension
  html = html.replace(
    /(<table\b[^>]*?)\sstyle="[^"]*min-width:\s*\d+px[^"]*"/gi,
    '$1'
  )

  // Wrap bare tables so overflow-x styles apply consistently
  html = html.replace(/(<table\b[\s\S]*?<\/table>)/gi, (tableHtml, _match, offset) => {
    const before = html.slice(Math.max(0, offset - 100), offset)
    if (/class="tableWrapper"[^>]*>\s*$/i.test(before)) {
      return tableHtml
    }
    return `<div class="tableWrapper">${tableHtml}</div>`
  })

  return html
}
