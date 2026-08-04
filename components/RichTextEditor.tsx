'use client'

import React, { forwardRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import type { RichTextEditorHandle } from './TiptapEditorContent'

const TiptapEditorContent = dynamic(
  () => import('./TiptapEditorContent'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[500px] border border-gray-300 rounded-lg p-4 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#441018] mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Loading editor...</p>
        </div>
      </div>
    )
  }
)

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(function RichTextEditor({
  value,
  onChange,
  placeholder = 'Start writing your blog post...',
  className = ''
}, ref) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-[500px] border border-gray-300 rounded-lg p-4 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#441018] mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Loading editor...</p>
        </div>
      </div>
    )
  }

  return (
    <TiptapEditorContent
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  )
})

export default RichTextEditor
export type { RichTextEditorHandle }
