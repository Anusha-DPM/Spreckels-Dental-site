'use client'

import React, { useState, useRef, useEffect } from 'react'

interface SimpleTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const SimpleTextEditor: React.FC<SimpleTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Start writing your blog post...',
  className = ''
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={`simple-text-editor ${className}`}>
      <textarea
        value={value}
        onChange={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`
          w-full min-h-[400px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent
          ${isFocused ? 'bg-white' : 'bg-gray-50'}
          resize-y
        `}
        style={{ 
          fontFamily: 'inherit',
          lineHeight: '1.6'
        }}
      />
      
      {/* Character count */}
      <div className="mt-2 text-xs text-gray-500 text-right">
        {value.length} characters
      </div>
    </div>
  )
}

export default SimpleTextEditor
