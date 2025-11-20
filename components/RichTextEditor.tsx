'use client'

import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

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
  const editorRef = useRef<any>(null)

  const handleEditorChange = (content: string) => {
    onChange(content)
  }

  return (
    <div className={`rich-text-editor-wrapper ${className}`}>
      <Editor
        apiKey="no-api-key" // Using no-api-key for free usage (with TinyMCE cloud warning, but works)
        onInit={(evt, editor) => {
          editorRef.current = editor
        }}
        value={value}
        onEditorChange={handleEditorChange}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | link image | code',
          content_style: 'body { font-family: inherit; font-size: 16px; }',
          placeholder: placeholder,
          branding: false,
          promotion: false,
          resize: true,
          statusbar: true,
          elementpath: true,
          paste_data_images: true,
          images_upload_handler: async (blobInfo) => {
            // Return a placeholder URL - you can implement image upload here
            return 'data:' + blobInfo.blob().type + ';base64,' + blobInfo.base64()
          }
        }}
      />
    </div>
  )
}

export default RichTextEditor
