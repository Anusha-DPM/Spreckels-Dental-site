'use client'

import { useEffect, useRef } from 'react'
import { normalizeCustomCode } from '../lib/normalizeCustomCode'

type BlogBodyContentProps = {
  html: string
  className?: string
}

/**
 * Renders blog body HTML and expands TipTap "Code" blocks
 * (`div[data-blog-raw-html][data-content]`) so HTML/CSS/JS/JSON-LD run on the page.
 */
export default function BlogBodyContent({ html, className = '' }: BlogBodyContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const blocks = Array.from(
      container.querySelectorAll<HTMLElement>('div[data-blog-raw-html][data-content]')
    )

    blocks.forEach((block) => {
      const encoded = block.getAttribute('data-content') || ''
      let decoded = ''
      try {
        decoded = decodeURIComponent(encoded)
      } catch {
        decoded = encoded
      }

      const normalized = normalizeCustomCode(decoded)
      block.innerHTML = normalized
      block.removeAttribute('data-content')

      const scripts = Array.from(block.querySelectorAll('script'))
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script')
        Array.from(oldScript.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value)
        })
        if (oldScript.textContent) {
          newScript.textContent = oldScript.textContent
        }
        oldScript.parentNode?.replaceChild(newScript, oldScript)
      })
    })
  }, [html])

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
