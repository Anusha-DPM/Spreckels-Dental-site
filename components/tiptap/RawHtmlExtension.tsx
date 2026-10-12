'use client'

import { Node, mergeAttributes } from '@tiptap/core'
import {
  NodeViewWrapper,
  ReactNodeViewRenderer,
  type ReactNodeViewProps,
} from '@tiptap/react'
import React, { useState } from 'react'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    rawHtml: {
      insertRawHtml: (content: string) => ReturnType
    }
  }
}

function RawHtmlNodeView({
  node,
  updateAttributes,
  deleteNode,
  selected,
}: ReactNodeViewProps) {
  const [editing, setEditing] = useState(false)
  const content = String(node.attrs.content ?? '')
  const [draft, setDraft] = useState(content)

  const preview = content.trim()
  const previewLines = preview.split('\n').slice(0, 6).join('\n')

  return (
    <NodeViewWrapper
      className={`blog-raw-html-node my-3 rounded-lg border ${
        selected ? 'border-[#441018] ring-2 ring-[#441018]/20' : 'border-gray-300'
      } bg-slate-50`}
      data-drag-handle
    >
      <div className="flex items-center justify-between gap-2 border-b border-gray-200 px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
          Custom Code
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded bg-white px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => {
              setDraft(String(node.attrs.content ?? ''))
              setEditing(true)
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="rounded bg-white px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-50"
            onClick={deleteNode}
          >
            Remove
          </button>
        </div>
      </div>

      {editing ? (
        <div className="space-y-2 p-3">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={10}
            className="w-full rounded border border-gray-300 bg-white p-2 font-mono text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#441018]"
            placeholder="Paste HTML, CSS, JavaScript, JSON, or JSON-LD…"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="rounded bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded bg-[#441018] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#5a1a22]"
              onClick={() => {
                updateAttributes({ content: draft })
                setEditing(false)
              }}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <pre className="max-h-40 overflow-auto p-3 font-mono text-xs text-gray-700 whitespace-pre-wrap break-words">
          {previewLines || '(empty code block)'}
          {preview.split('\n').length > 6 ? '\n…' : ''}
        </pre>
      )}
    </NodeViewWrapper>
  )
}

export const RawHtml = Node.create({
  name: 'rawHtml',
  group: 'block',
  atom: true,
  draggable: true,
  selectable: true,

  addAttributes() {
    return {
      content: {
        default: '',
        parseHTML: (element) => {
          const encoded = element.getAttribute('data-content')
          if (encoded) {
            try {
              return decodeURIComponent(encoded)
            } catch {
              return encoded
            }
          }
          return ''
        },
        renderHTML: (attributes) => {
          if (!attributes.content) return {}
          return {
            'data-content': encodeURIComponent(attributes.content),
          }
        },
      },
    }
  },

  parseHTML() {
    return [{ tag: 'div[data-blog-raw-html]' }]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-blog-raw-html': 'true',
        class: 'blog-raw-html',
      }),
    ]
  },

  addCommands() {
    return {
      insertRawHtml:
        (content: string) =>
        ({ commands }) =>
          commands.insertContent({
            type: this.name,
            attrs: { content },
          }),
    }
  },

  addNodeView() {
    return ReactNodeViewRenderer(RawHtmlNodeView)
  },
})

export default RawHtml
