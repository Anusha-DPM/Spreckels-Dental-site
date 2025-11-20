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
    toolbarAdaptive: false,
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
      '|',
      'source'
    ],
    controls: {
      fontsize: {
        list: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72']
      },
      paragraph: {
        list: {
          p: 'Paragraph',
          h1: 'Heading 1',
          h2: 'Heading 2',
          h3: 'Heading 3',
          h4: 'Heading 4',
          h5: 'Heading 5',
          h6: 'Heading 6'
        }
      },
      font: {
        list: {
          'Arial,Helvetica,sans-serif': 'Arial',
          'Georgia,serif': 'Georgia',
          'Impact,Charcoal,sans-serif': 'Impact',
          'Tahoma,Geneva,sans-serif': 'Tahoma',
          'Times New Roman,Times,serif': 'Times New Roman',
          'Verdana,Geneva,sans-serif': 'Verdana'
        }
      }
    },
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
    enablePlugins: ['image', 'link', 'video', 'table', 'list', 'align', 'font', 'color', 'source'],
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
