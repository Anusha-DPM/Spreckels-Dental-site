import type { Metadata } from 'next'
import { Layout } from '@/components'
import PatientEducationPeriodontalClient from '@/components/PatientEducationPeriodontalClient'

export const metadata: Metadata = {
  title: 'Periodontal Therapy | Gum Disease Treatment',
  description: 'Understand periodontal therapy and how it can help treat gum disease and restore your oral health with procedures like scaling and root planing at Spreckels Park Dental.',
}

export default function PeriodontalTherapyPage() {
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
      title: 'Oral Health',
      description: 'Essential information about maintaining optimal oral health.',
      href: '/patient-education/oral-health'
    },
    {
      title: 'Oral Hygiene',
      description: 'Essential information about maintaining proper oral hygiene.',
      href: '/patient-education/oral-hygiene'
    },
    {
      title: 'Endodontics',
      description: 'Understanding root canal treatments and other endodontic procedures.',
      href: '/patient-education/endodontics'
    }
  ]

  return (
    <Layout>
      <PatientEducationPeriodontalClient
        categories={categories}
        relatedArticles={relatedArticles}
      />
    </Layout>
  )
}
