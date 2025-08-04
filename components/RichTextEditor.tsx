'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [isToolbarVisible, setIsToolbarVisible] = useState(false)

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    updateContent()
  }

  const updateContent = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
    updateContent()
  }

  const insertLink = () => {
    const url = prompt('Enter URL:')
    if (url) {
      execCommand('createLink', url)
    }
  }

  const insertImage = () => {
    const url = prompt('Enter image URL:')
    if (url) {
      execCommand('insertImage', url)
    }
  }

  const insertTable = () => {
    const rows = prompt('Enter number of rows:', '3')
    const cols = prompt('Enter number of columns:', '3')
    
    if (rows && cols) {
      let tableHTML = '<table border="1" style="border-collapse: collapse; width: 100%; margin: 20px 0;">'
      for (let i = 0; i < parseInt(rows); i++) {
        tableHTML += '<tr>'
        for (let j = 0; j < parseInt(cols); j++) {
          tableHTML += '<td style="padding: 8px; border: 1px solid #ddd;">Cell</td>'
        }
        tableHTML += '</tr>'
      }
      tableHTML += '</table>'
      
      execCommand('insertHTML', tableHTML)
    }
  }

  const insertQuote = () => {
    execCommand('insertHTML', '<blockquote style="border-left: 4px solid #ccc; margin: 20px 0; padding-left: 16px; font-style: italic; background-color: #f9f9f9; padding: 15px;">Quote text here</blockquote>')
  }

  const insertCode = () => {
    execCommand('insertHTML', '<code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 3px; font-family: monospace; border: 1px solid #ddd;">code here</code>')
  }

  const insertCodeBlock = () => {
    execCommand('insertHTML', '<pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; font-family: monospace; border: 1px solid #ddd; overflow-x: auto; margin: 20px 0;"><code>Your code here</code></pre>')
  }

  const insertDivider = () => {
    execCommand('insertHTML', '<hr style="border: none; border-top: 2px solid #ddd; margin: 30px 0;">')
  }

  const insertSubscript = () => {
    execCommand('subscript')
  }

  const insertSuperscript = () => {
    execCommand('superscript')
  }

  const insertStrikethrough = () => {
    execCommand('strikeThrough')
  }

  const insertHorizontalRule = () => {
    execCommand('insertHorizontalRule')
  }

  const clearFormatting = () => {
    execCommand('removeFormat')
  }

  const undo = () => {
    execCommand('undo')
  }

  const redo = () => {
    execCommand('redo')
  }

  const selectAll = () => {
    execCommand('selectAll')
  }

  const copy = () => {
    execCommand('copy')
  }

  const cut = () => {
    execCommand('cut')
  }

  const paste = () => {
    execCommand('paste')
  }

  const insertSpecialCharacter = () => {
    const char = prompt('Enter special character (e.g., ©, ®, ™, €, £, ¥):')
    if (char) {
      execCommand('insertText', char)
    }
  }

  const insertEmoji = () => {
    const emoji = prompt('Enter emoji (e.g., 😊, 👍, ❤️):')
    if (emoji) {
      execCommand('insertText', emoji)
    }
  }

  const insertChecklist = () => {
    execCommand('insertHTML', '<ul style="list-style: none; padding-left: 0;"><li style="margin: 5px 0;"><input type="checkbox" style="margin-right: 8px;">Checklist item</li></ul>')
  }

  const insertDefinitionList = () => {
    execCommand('insertHTML', '<dl style="margin: 20px 0;"><dt style="font-weight: bold; margin-bottom: 5px;">Term</dt><dd style="margin-left: 20px; margin-bottom: 15px;">Definition</dd></dl>')
  }

  const insertAbbreviation = () => {
    const abbr = prompt('Enter abbreviation:')
    const title = prompt('Enter full form:')
    if (abbr && title) {
      execCommand('insertHTML', `<abbr title="${title}">${abbr}</abbr>`)
    }
  }

  const insertHighlight = () => {
    execCommand('insertHTML', '<mark style="background-color: yellow; padding: 2px 4px;">highlighted text</mark>')
  }

  const insertSmallText = () => {
    execCommand('insertHTML', '<small style="font-size: 0.875em;">small text</small>')
  }

  const insertBigText = () => {
    execCommand('insertHTML', '<big style="font-size: 1.2em;">big text</big>')
  }

  const insertTime = () => {
    const time = prompt('Enter time (e.g., 14:30):')
    if (time) {
      execCommand('insertHTML', `<time datetime="${time}">${time}</time>`)
    }
  }

  const insertAddress = () => {
    execCommand('insertHTML', '<address style="font-style: italic; margin: 20px 0;">Your address here</address>')
  }

  const insertCite = () => {
    const cite = prompt('Enter citation:')
    if (cite) {
      execCommand('insertHTML', `<cite style="font-style: italic;">${cite}</cite>`)
    }
  }

  const insertDefinition = () => {
    const term = prompt('Enter term:')
    if (term) {
      execCommand('insertHTML', `<dfn style="font-style: italic; font-weight: bold;">${term}</dfn>`)
    }
  }

  const insertKeyboard = () => {
    const key = prompt('Enter keyboard key:')
    if (key) {
      execCommand('insertHTML', `<kbd style="background-color: #f4f4f4; border: 1px solid #ccc; border-radius: 3px; padding: 2px 4px; font-family: monospace;">${key}</kbd>`)
    }
  }

  const insertSample = () => {
    const sample = prompt('Enter sample text:')
    if (sample) {
      execCommand('insertHTML', `<samp style="font-family: monospace; background-color: #f4f4f4; padding: 2px 4px; border-radius: 3px;">${sample}</samp>`)
    }
  }

  const insertVariable = () => {
    const variable = prompt('Enter variable name:')
    if (variable) {
      execCommand('insertHTML', `<var style="font-style: italic;">${variable}</var>`)
    }
  }

  const insertMeter = () => {
    const value = prompt('Enter value (0-100):')
    const max = prompt('Enter max value (default 100):', '100')
    if (value) {
      execCommand('insertHTML', `<meter value="${value}" max="${max}" style="width: 200px; height: 20px;"></meter>`)
    }
  }

  const insertProgress = () => {
    const value = prompt('Enter progress value (0-100):')
    if (value) {
      execCommand('insertHTML', `<progress value="${value}" max="100" style="width: 200px; height: 20px;"></progress>`)
    }
  }

  const insertDetails = () => {
    const summary = prompt('Enter summary text:')
    const details = prompt('Enter details text:')
    if (summary && details) {
      execCommand('insertHTML', `<details style="margin: 20px 0; padding: 10px; border: 1px solid #ddd; border-radius: 5px;"><summary style="cursor: pointer; font-weight: bold;">${summary}</summary><div style="margin-top: 10px;">${details}</div></details>`)
    }
  }

  return (
    <div className="rich-text-editor">
      {/* Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-gray-300 rounded-t-lg p-2 flex flex-wrap gap-1"
      >
        {/* History */}
        <div className="flex gap-1 mr-2">
          <button
            type="button"
            onClick={undo}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Undo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={redo}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Redo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
            </svg>
          </button>
        </div>

        {/* Text Formatting */}
        <div className="flex gap-1 mr-2">
          <button
            type="button"
            onClick={() => execCommand('bold')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 font-bold"
            title="Bold"
          >
            B
          </button>
          <button
            type="button"
            onClick={() => execCommand('italic')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 italic"
            title="Italic"
          >
            I
          </button>
          <button
            type="button"
            onClick={() => execCommand('underline')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 underline"
            title="Underline"
          >
            U
          </button>
          <button
            type="button"
            onClick={insertStrikethrough}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 line-through"
            title="Strikethrough"
          >
            S
          </button>
          <button
            type="button"
            onClick={insertSubscript}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 text-xs"
            title="Subscript"
          >
            x₂
          </button>
          <button
            type="button"
            onClick={insertSuperscript}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 text-xs"
            title="Superscript"
          >
            x²
          </button>
          <button
            type="button"
            onClick={clearFormatting}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Clear Formatting"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Headings */}
        <div className="flex gap-1 mr-2">
          <button
            type="button"
            onClick={() => execCommand('formatBlock', '<h1>')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 font-bold"
            title="Heading 1"
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => execCommand('formatBlock', '<h2>')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 font-bold"
            title="Heading 2"
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => execCommand('formatBlock', '<h3>')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 font-bold"
            title="Heading 3"
          >
            H3
          </button>
          <button
            type="button"
            onClick={() => execCommand('formatBlock', '<h4>')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 font-bold"
            title="Heading 4"
          >
            H4
          </button>
          <button
            type="button"
            onClick={() => execCommand('formatBlock', '<p>')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Paragraph"
          >
            P
          </button>
        </div>

        {/* Lists */}
        <div className="flex gap-1 mr-2">
          <button
            type="button"
            onClick={() => execCommand('insertUnorderedList')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Bullet List"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => execCommand('insertOrderedList')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Numbered List"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={insertChecklist}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Checklist"
          >
            ☐
          </button>
          <button
            type="button"
            onClick={insertDefinitionList}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Definition List"
          >
            DL
          </button>
        </div>

        {/* Alignment */}
        <div className="flex gap-1 mr-2">
          <button
            type="button"
            onClick={() => execCommand('justifyLeft')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Align Left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => execCommand('justifyCenter')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Align Center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => execCommand('justifyRight')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Align Right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => execCommand('justifyFull')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Justify"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Insert Elements */}
        <div className="flex gap-1 mr-2">
          <button
            type="button"
            onClick={insertLink}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Link"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
          <button
            type="button"
            onClick={insertImage}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={insertTable}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Table"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={insertQuote}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Quote"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={insertCode}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 font-mono"
            title="Insert Code"
          >
            &lt;/&gt;
          </button>
          <button
            type="button"
            onClick={insertCodeBlock}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 font-mono"
            title="Insert Code Block"
          >
            &lt;/&gt;&lt;/&gt;
          </button>
          <button
            type="button"
            onClick={insertDivider}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Divider"
          >
            —
          </button>
          <button
            type="button"
            onClick={insertHorizontalRule}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Horizontal Rule"
          >
            HR
          </button>
        </div>

        {/* Special Elements */}
        <div className="flex gap-1 mr-2">
          <button
            type="button"
            onClick={insertHighlight}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 bg-yellow-200"
            title="Highlight"
          >
            H
          </button>
          <button
            type="button"
            onClick={insertSmallText}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 text-xs"
            title="Small Text"
          >
            Small
          </button>
          <button
            type="button"
            onClick={insertBigText}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 text-lg"
            title="Big Text"
          >
            Big
          </button>
          <button
            type="button"
            onClick={insertSpecialCharacter}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Special Character"
          >
            ©
          </button>
          <button
            type="button"
            onClick={insertEmoji}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Emoji"
          >
            😊
          </button>
          <button
            type="button"
            onClick={insertTime}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Time"
          >
            🕐
          </button>
        </div>

        {/* Semantic Elements */}
        <div className="flex gap-1 mr-2">
          <button
            type="button"
            onClick={insertAddress}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Address"
          >
            📍
          </button>
          <button
            type="button"
            onClick={insertCite}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Citation"
          >
            📚
          </button>
          <button
            type="button"
            onClick={insertDefinition}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Definition"
          >
            📖
          </button>
          <button
            type="button"
            onClick={insertKeyboard}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Keyboard"
          >
            ⌨️
          </button>
          <button
            type="button"
            onClick={insertSample}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Sample"
          >
            💻
          </button>
          <button
            type="button"
            onClick={insertVariable}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Variable"
          >
            x
          </button>
        </div>

        {/* Interactive Elements */}
        <div className="flex gap-1 mr-2">
          <button
            type="button"
            onClick={insertMeter}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Meter"
          >
            📊
          </button>
          <button
            type="button"
            onClick={insertProgress}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Progress"
          >
            ⏳
          </button>
          <button
            type="button"
            onClick={insertDetails}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200"
            title="Insert Details"
          >
            📋
          </button>
        </div>

        {/* Text Color */}
        <div className="flex gap-1">
          <input
            type="color"
            onChange={(e) => execCommand('foreColor', e.target.value)}
            className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
            title="Text Color"
          />
          <input
            type="color"
            onChange={(e) => execCommand('hiliteColor', e.target.value)}
            className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
            title="Background Color"
          />
        </div>
      </motion.div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={updateContent}
        onPaste={handlePaste}
        onFocus={() => setIsToolbarVisible(true)}
        onBlur={() => setIsToolbarVisible(false)}
        className="min-h-[400px] p-4 border border-gray-300 border-t-0 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent transition-all duration-200"
        style={{ 
          fontFamily: 'inherit',
          lineHeight: '1.6'
        }}
        data-placeholder={placeholder}
      />
      
      {/* Character Count */}
      <div className="mt-2 text-sm text-gray-500 text-right">
        {value.replace(/<[^>]*>/g, '').length} characters
      </div>
    </div>
  )
} 