'use client'

import React, { useCallback, useRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { TextStyle } from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const TiptapEditorContent: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Start writing your blog post...',
  className = ''
}) => {
  const isInternalUpdate = useRef(false)

  const editor = useEditor({
    immediatelyRender: false, // Fix SSR hydration mismatch
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: true,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: true,
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
          class: 'blog-content-image',
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'left',
      }),
      Underline,
      TextStyle,
      Color,
      FontFamily,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      isInternalUpdate.current = true
      onChange(editor.getHTML())
      // Reset flag after a short delay
      setTimeout(() => {
        isInternalUpdate.current = false
      }, 100)
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[500px] p-4',
        'data-placeholder': placeholder,
      },
    },
  })

  // Update editor content when value prop changes (only if change is external)
  React.useEffect(() => {
    if (editor && !isInternalUpdate.current) {
      const currentContent = editor.getHTML()
      // Only update if the value is different and not from internal update
      if (value !== currentContent) {
        editor.commands.setContent(value, { emitUpdate: false })
      }
    }
  }, [value, editor])

  const setLink = useCallback(() => {
    if (!editor) return

    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    if (url === null) {
      return
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  const addImage = useCallback(async () => {
    if (!editor) return

    // Create file input element
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return

      try {
        // Try to upload via API
        const formData = new FormData()
        formData.append('file', file)
        formData.append('folder', 'blog-images')

        const response = await fetch('/api/upload-image', {
          method: 'POST',
          body: formData
        })

        if (response.ok) {
          const result = await response.json()
          if (result.url) {
            console.log('✅ Image uploaded successfully, inserting into editor:', result.url)
            editor.chain().focus().setImage({ src: result.url }).run()
            // Force update to ensure onChange is called
            setTimeout(() => {
              const html = editor.getHTML()
              console.log('📝 Editor content after image insertion:', html)
              onChange(html)
            }, 100)
            return
          } else {
            console.warn('⚠️ Upload response missing URL:', result)
          }
        } else {
          const errorText = await response.text()
          console.error('❌ Image upload failed:', response.status, errorText)
        }
      } catch (error) {
        console.warn('Image upload failed, using base64:', error)
      }

      // Fallback to base64 if upload fails
      const reader = new FileReader()
      reader.onload = (e) => {
        const base64 = e.target?.result as string
        if (base64) {
          editor.chain().focus().setImage({ src: base64 }).run()
        }
      }
      reader.readAsDataURL(file)
    }

    input.click()
  }, [editor])

  if (!editor) {
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
      {/* Toolbar */}
      <div className="border-b border-gray-200 bg-gray-50 p-2 flex flex-wrap gap-1 rounded-t-lg">
        {/* Text Formatting */}
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBold().run()
          }}
          type="button"
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('bold') ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleItalic().run()
          }}
          type="button"
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('italic') ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleUnderline().run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('underline') ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Underline"
        >
          <u>U</u>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleStrike().run()
          }}
          type="button"
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('strike') ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Strikethrough"
        >
          <s>S</s>
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Headings */}
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('heading', { level: 1 }) ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Heading 1"
        >
          H1
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('heading', { level: 2 }) ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Heading 2"
        >
          H2
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('heading', { level: 3 }) ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Heading 3"
        >
          H3
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Lists */}
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBulletList().run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('bulletList') ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Bullet List"
        >
          •
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleOrderedList().run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('orderedList') ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Numbered List"
        >
          1.
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Alignment */}
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().setTextAlign('left').run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive({ textAlign: 'left' }) ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Align Left"
        >
          ⬅
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().setTextAlign('center').run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive({ textAlign: 'center' }) ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Align Center"
        >
          ↔
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().setTextAlign('right').run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive({ textAlign: 'right' }) ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Align Right"
        >
          ➡
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Links and Images */}
        <button
          onClick={(e) => {
            e.preventDefault()
            setLink()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('link') ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Link"
        >
          🔗
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            addImage()
          }}
          type="button"
          className="px-3 py-1.5 rounded text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-gray-100"
          title="Image"
        >
          🖼️
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Other */}
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBlockquote().run()
          }}
          type="button"
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive('blockquote') ? 'bg-[#441018] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="Quote"
        >
          "
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().setHorizontalRule().run()
          }}
          type="button"
          className="px-3 py-1.5 rounded text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-gray-100"
          title="Horizontal Rule"
        >
          ─
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().undo().run()
          }}
          type="button"
          disabled={!editor.can().chain().focus().undo().run()}
          className="px-3 py-1.5 rounded text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Undo"
        >
          ↶
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().redo().run()
          }}
          type="button"
          disabled={!editor.can().chain().focus().redo().run()}
          className="px-3 py-1.5 rounded text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Redo"
        >
          ↷
        </button>
      </div>

      {/* Editor Content */}
      <div className="border border-gray-200 border-t-0 rounded-b-lg bg-white">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default TiptapEditorContent

