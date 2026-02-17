import type { Metadata } from 'next'
import { Layout } from '@/components'
import PatientEducationCategoryClient from '@/components/PatientEducationCategoryClient'

export const metadata: Metadata = {
  title: 'Emergency Dental Care | Patient Education',
  description: 'Learn how to handle dental emergencies, including gum emergencies, orthodontic issues, tooth pain, and traumatic injuries at Spreckels Park Dental.',
}

export default function EmergencyCare() {
  const articles = [
    {
      id: 'gum-emergencies',
      title: 'Gum Emergencies',
      description: 'Learn about gum emergencies, their causes, symptoms, and immediate treatment options.',
      category: 'Periodontal Emergencies',
      href: '/patient-education/emergency-care/gum-emergencies'
    },
    {
      id: 'orthodontic-emergencies',
      title: 'Orthodontic Emergencies',
      description: 'Common orthodontic emergencies and how to handle them before seeing your orthodontist.',
      category: 'Orthodontic Care',
      href: '/patient-education/emergency-care/orthodontic-emergencies'
    },
    {
      id: 'tooth-pain',
      title: 'Tooth Pain',
      description: 'Understanding tooth pain, its causes, and when to seek immediate dental care.',
      category: 'Pain Management',
      href: '/patient-education/emergency-care/tooth-pain'
    },
    {
      id: 'traumatic-dental-injuries',
      title: 'Traumatic Dental Injuries',
      description: 'How to handle traumatic dental injuries and when to seek emergency dental care.',
      category: 'Dental Trauma',
      href: '/patient-education/emergency-care/traumatic-dental-injuries'
    }
  ]

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

  return (
    <Layout>
      <PatientEducationCategoryClient
        title="Emergency Care"
        description="Dental emergencies can happen at any time. Learn about common dental emergencies, how to handle them, and when to seek immediate professional care."
        ctaTitle="Don't Wait for Dental Emergencies"
        ctaDescription="Our experienced dental team is here to provide immediate care when you need it most."
        articles={articles}
        categories={categories}
      />
    </Layout>
  )
}
