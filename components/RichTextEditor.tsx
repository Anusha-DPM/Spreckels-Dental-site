'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

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
  const editorRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    handleInput()
  }

  const insertHTML = (html: string) => {
    document.execCommand('insertHTML', false, html)
    editorRef.current?.focus()
    handleInput()
  }

  const formatBlock = (tag: string) => {
    execCommand('formatBlock', `<${tag}>`)
  }

  const createLink = () => {
    const url = prompt('Enter URL:')
    if (url) {
        execCommand('createLink', url)
    }
  }

  const insertImage = () => {
    const url = prompt('Enter image URL:')
    if (url) {
      insertHTML(`<img src="${url}" alt="" style="max-width: 100%; height: auto; margin: 1rem 0;" />`)
    }
  }

  const toolbarButtons = [
    { label: 'Bold', icon: 'B', command: 'bold' },
    { label: 'Italic', icon: 'I', command: 'italic' },
    { label: 'Underline', icon: 'U', command: 'underline' },
    { label: 'Strike', icon: 'S', command: 'strikeThrough' },
    { type: 'separator' },
    { label: 'H1', icon: 'H1', command: 'formatBlock', value: 'h1' },
    { label: 'H2', icon: 'H2', command: 'formatBlock', value: 'h2' },
    { label: 'H3', icon: 'H3', command: 'formatBlock', value: 'h3' },
    { label: 'H4', icon: 'H4', command: 'formatBlock', value: 'h4' },
    { label: 'H5', icon: 'H5', command: 'formatBlock', value: 'h5' },
    { label: 'H6', icon: 'H6', command: 'formatBlock', value: 'h6' },
    { type: 'separator' },
    { label: 'Bullet List', icon: '•', command: 'insertUnorderedList' },
    { label: 'Numbered List', icon: '1.', command: 'insertOrderedList' },
    { type: 'separator' },
    { label: 'Link', icon: '🔗', command: 'createLink', custom: true },
    { label: 'Image', icon: '🖼️', command: 'insertImage', custom: true },
    { type: 'separator' },
    { label: 'Left Align', icon: '⬅️', command: 'justifyLeft' },
    { label: 'Center Align', icon: '↔️', command: 'justifyCenter' },
    { label: 'Right Align', icon: '➡️', command: 'justifyRight' },
    { type: 'separator' },
    { label: 'Quote', icon: '💬', command: 'formatBlock', value: 'blockquote' },
    { label: 'Code', icon: '💻', command: 'formatBlock', value: 'pre' },
  ]

  return (
    <div className={`rich-text-editor ${className}`}>
      {/* Toolbar */}
      <motion.div
        className="bg-gray-50 border border-gray-200 rounded-t-lg p-2 flex flex-wrap gap-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {toolbarButtons.map((button, index) => {
          if (button.type === 'separator') {
            return (
              <div key={index} className="w-px h-6 bg-gray-300 mx-1" />
            )
          }

          return (
            <motion.button
              key={index}
            type="button"
              onClick={() => {
                if (button.custom) {
                  if (button.command === 'createLink') {
                    createLink()
                  } else if (button.command === 'insertImage') {
                    insertImage()
                  }
                } else if (button.command === 'formatBlock') {
                  formatBlock(button.value!)
                } else {
                  execCommand(button.command)
                }
              }}
              className="p-2 rounded hover:bg-gray-200 transition-colors duration-200 text-sm font-medium text-gray-700 hover:text-gray-900"
              title={button.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {button.icon}
            </motion.button>
          )
        })}
      </motion.div>

      {/* Editor */}
      <motion.div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          min-h-[400px] p-4 border border-gray-200 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent
          ${isFocused ? 'bg-white' : 'bg-gray-50'}
          prose prose-sm max-w-none
        `}
        style={{ 
          fontFamily: 'inherit',
          lineHeight: '1.6'
        }}
        suppressContentEditableWarning
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {!value && (
          <div className="text-gray-400 italic">
            {placeholder}
          </div>
        )}
      </motion.div>

      {/* Character count */}
      <div className="mt-2 text-xs text-gray-500 text-right">
        {value.replace(/<[^>]*>/g, '').length} characters
      </div>
    </div>
  )
} 

export default RichTextEditor 