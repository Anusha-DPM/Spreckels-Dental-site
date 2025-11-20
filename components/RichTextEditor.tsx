'use client'

import React, { useMemo, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(
  () => import('react-quill'),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-[400px] border border-gray-300 rounded-lg p-4 flex items-center justify-center bg-gray-50">
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

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Start writing your blog post...',
  className = ''
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Define the toolbar with all options
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'align': [] }],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        // Custom image handler
        image: function() {
          const url = prompt('Enter image URL:')
          if (url) {
            const quill = (this as any).quill
            const range = quill.getSelection()
            if (range) {
              quill.insertEmbed(range.index, 'image', url, 'user')
            }
          }
        }
      }
    },
    clipboard: {
      matchVisual: false
    }
  }), [])

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'list', 'bullet', 'indent',
    'direction', 'align',
    'blockquote', 'code-block',
    'link', 'image', 'video',
    'clean'
  ]

  if (!mounted) {
    return (
      <div className="min-h-[400px] border border-gray-300 rounded-lg p-4 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#441018] mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Loading editor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`rich-text-editor-wrapper ${className}`}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  )
}

export default RichTextEditor
