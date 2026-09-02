'use client'

import { useEffect, useRef } from 'react'
import { normalizeCustomCode } from '../lib/normalizeCustomCode'

type BlogCustomCodeProps = {
  code?: string
}

/**
 * Injects per-post custom HTML/CSS/JS/JSON-LD on the blog detail page only.
 * Scripts are re-created so they execute (innerHTML alone does not run them).
 */
export default function BlogCustomCode({ code }: BlogCustomCodeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const normalized = normalizeCustomCode(code || '')
    if (!normalized) {
      container.innerHTML = ''
      return
    }

    container.innerHTML = normalized

    const scripts = Array.from(container.querySelectorAll('script'))
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

    return () => {
      container.innerHTML = ''
    }
  }, [code])

  if (!code?.trim()) return null

  return (
    <div
      ref={containerRef}
      className="blog-custom-code"
      data-blog-custom-code="true"
      suppressHydrationWarning
    />
  )
}
