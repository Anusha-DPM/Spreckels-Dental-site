import type { Metadata } from 'next'
import { Layout } from '@/components'
import PatientEducationImplantClient from '@/components/PatientEducationImplantClient'

export const metadata: Metadata = {
  title: 'Implant Dentistry Education | Spreckels Park Dental',
  description: 'Learn how dental implants work, treatment steps, and aftercare guidance through detailed implant dentistry education resources.',
}

export default function ImplantDentistryPage() {
  const categories = [
    { name: 'Educational Videos', href: '/patient-education/educational-videos' },
    { name: 'Cosmetic & General Dentistry', href: '/patient-education/cosmetic-general-dentistry' },
    { name: 'Emergency Care', href: '/patient-education/emergency-care' },
    { name: 'Endodontics', href: '/patient-education/endodontics' },
    { name: 'Implant Dentistry', href: '/patient-education/implant-dentistry' },
    { name: 'Oral Health', href: '/patient-education/oral-health' },
    { name: 'Oral Hygiene', href: '/patient-education/oral-hygiene' },
    { name: 'Oral Surgery', href: '/patient-education/oral-surgery' },
    { name: 'Orthodontics', href: '/patient-education/orthodontics' },
    { name: 'Pediatric Dentistry', href: '/patient-education/pediatric-dentistry' },
    { name: 'Periodontal Therapy', href: '/patient-education/periodontal-therapy' },
    { name: 'Technology', href: '/patient-education/technology' }
  ]

  const relatedArticles = [
    {
      title: 'Dental Implants',
      description: 'Learn about the benefits and process of dental implant treatment for replacing missing teeth.',
      href: '/dental-implants'
    },
    {
      title: 'All-on-4® Implant Dentures',
      description: 'Discover how All-on-4® implant dentures can restore your smile with just four implants.',
      href: '/all-on-4-implant-dentures'
    },
    {
      title: 'Emergency Care',
      description: 'Understanding dental emergencies and when to seek immediate care for dental problems.',
      href: '/patient-education/emergency-care'
    }
  ]

  return (
    <Layout>
      <PatientEducationImplantClient
        categories={categories}
        relatedArticles={relatedArticles}
      />
    </Layout>
  )
}
