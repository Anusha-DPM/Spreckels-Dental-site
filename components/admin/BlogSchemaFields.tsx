'use client'

import React from 'react'

export type BlogSchemaFormValues = {
  jsonLdSchema: string
  blogPostingSchema: string
  personSchema: string
  dentistSchema: string
  breadcrumbActive: string
  faqSchema: string
  medicalConditionSchema: string
  howToSchema: string
}

type SchemaField = {
  id: keyof BlogSchemaFormValues
  label: string
  help: string
  placeholder: string
}

const SCHEMA_FIELDS: SchemaField[] = [
  {
    id: 'jsonLdSchema',
    label: 'JSON-LD Schema',
    help: 'Existing general JSON-LD field. Paste any schema.org script or JSON.',
    placeholder: 'Paste your JSON-LD schema script code here...',
  },
  {
    id: 'blogPostingSchema',
    label: 'BlogPosting Schema',
    help: 'schema.org/BlogPosting for this article (headline, author, datePublished, mainEntityOfPage).',
    placeholder:
      '{\n  "@context": "https://schema.org",\n  "@type": "BlogPosting",\n  "headline": "",\n  "author": { "@type": "Person", "name": "" }\n}',
  },
  {
    id: 'personSchema',
    label: 'Person Schema',
    help: 'schema.org/Person for the author or dentist featured in this post.',
    placeholder:
      '{\n  "@context": "https://schema.org",\n  "@type": "Person",\n  "name": "Dr. Rujul G. Parikh DDS",\n  "jobTitle": "Dentist"\n}',
  },
  {
    id: 'dentistSchema',
    label: 'Dentist Schema',
    help: 'schema.org/Dentist for the practice mentioned on this post.',
    placeholder:
      '{\n  "@context": "https://schema.org",\n  "@type": "Dentist",\n  "name": "Spreckels Park Dental",\n  "url": "https://www.centralvalleydentist.com/"\n}',
  },
  {
    id: 'faqSchema',
    label: 'FAQ Schema',
    help: 'Existing FAQ field. Use schema.org/FAQPage with Question / acceptedAnswer items.',
    placeholder: 'Paste your FAQ schema script code here...',
  },
  {
    id: 'breadcrumbActive',
    label: 'Breadcrumb Schema',
    help: 'Existing breadcrumb field. Use schema.org/BreadcrumbList with the live blog URL.',
    placeholder: 'Paste your breadcrumb schema script code here...',
  },
  {
    id: 'medicalConditionSchema',
    label: 'Medical Condition Schema',
    help: 'Existing field. Use schema.org/MedicalCondition or MedicalWebPage.',
    placeholder: 'Paste your medical condition schema script code here...',
  },
  {
    id: 'howToSchema',
    label: 'HowTo / HowToStep Schema',
    help: 'schema.org/HowTo with nested HowToStep items for step-by-step posts.',
    placeholder:
      '{\n  "@context": "https://schema.org",\n  "@type": "HowTo",\n  "name": "",\n  "step": [\n    { "@type": "HowToStep", "name": "", "text": "" }\n  ]\n}',
  },
]

type BlogSchemaFieldsProps = {
  values: BlogSchemaFormValues
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function BlogSchemaFields({ values, onChange }: BlogSchemaFieldsProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900 mb-1">Schema Markup (Script Fields)</h3>
      <p className="text-xs text-gray-500 mb-4">
        Existing JSON-LD, FAQ, Breadcrumb, and Medical Condition fields are unchanged. Added BlogPosting, Person, Dentist, and HowTo / HowToStep.
      </p>
      <div className="space-y-4">
        {SCHEMA_FIELDS.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
              {field.label}
            </label>
            <textarea
              id={field.id}
              name={field.id}
              value={values[field.id]}
              onChange={onChange}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#441018] focus:border-transparent font-mono text-sm"
              placeholder={field.placeholder}
            />
            <p className="text-xs text-gray-500 mt-1">{field.help}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
