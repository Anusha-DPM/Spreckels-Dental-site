'use client'

import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Jodit to avoid SSR issues
const JoditEditor = dynamic(() => import('jodit-react'), { 
  ssr: false,
  loading: () => (
    <div className="min-h-[500px] border border-gray-300 rounded-lg p-4 flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#441018] mx-auto mb-2"></div>
        <p className="text-gray-600 text-sm">Loading editor...</p>
      </div>
    </div>
  )
})

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
  const editorRef = useRef<any>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const config: any = {
    placeholder: placeholder,
    height: 500,
    readonly: false,
    toolbar: true,
    toolbarButtonSize: 'medium',
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough',
      '|',
      'ul', 'ol',
      '|',
      'outdent', 'indent',
      '|',
      'font', 'fontsize',
      '|',
      'paragraph',
      '|',
      'image', 'link', 'video',
      '|',
      'align',
      '|',
      'undo', 'redo',
      '|',
      'hr',
      'eraser', 'copyformat',
      '|',
      'fullsize',
      'selectall',
      'print',
      '|',
      'source'
    ],
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showSpellcheck: false,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    defaultActionOnPaste: 'insert_as_html',
    removeEmptyBlocks: true,
    useSearch: true,
    spellcheck: false,
    disablePlugins: [],
    uploader: {
      insertImageAsBase64URI: true
    },
    style: {
      background: 'white',
      color: '#374151'
    }
  }

  const handleChange = (newContent: string) => {
    if (newContent !== value) {
      onChange(newContent)
    }
  }

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
    <div className={`rich-text-editor-wrapper ${className}`}>
      <JoditEditor
        ref={editorRef}
        value={value || ''}
        config={config}
        onBlur={handleChange}
        onChange={handleChange}
        tabIndex={1}
      />
    </div>
  )
}

export default RichTextEditor
