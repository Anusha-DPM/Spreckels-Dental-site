import type { Metadata } from 'next'
import { Layout } from '@/components'
import PatientEducationCategoryClient from '@/components/PatientEducationCategoryClient'

export const metadata: Metadata = {
  title: 'Oral Health Education | Spreckels Park Dental',
  description: 'Find oral health education covering gum care, dental conditions, preventive habits, and overall mouth health information.',
}

export default function OralHealthPage() {
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

  const articles = [
    {
      id: 'aging-and-oral-health',
      title: 'Aging and Oral Health',
      description: 'Understanding how aging affects oral health and what you can do to maintain a healthy smile as you get older.',
      category: 'Aging',
      href: '/patient-education/oral-health/aging-and-oral-health'
    },
    {
      id: 'antibiotic-premedication',
      title: 'Antibiotic Premedication',
      description: 'Learn about when and why antibiotic premedication is necessary before dental procedures.',
      category: 'Medications',
      href: '/patient-education/oral-health/antibiotic-premedication'
    },
    {
      id: 'bad-breath',
      title: 'Bad Breath',
      description: 'Understanding the causes of bad breath and effective strategies for maintaining fresh breath.',
      category: 'Hygiene',
      href: '/patient-education/oral-health/bad-breath'
    },
    {
      id: 'blood-pressure-medications',
      title: 'Blood Pressure Medications and Your Oral Health',
      description: 'How blood pressure medications can affect your oral health and what you should know.',
      category: 'Medications',
      href: '/patient-education/oral-health/blood-pressure-medications-and-your-oral-health'
    }
  ]

  return (
    <Layout>
      <PatientEducationCategoryClient
        title="Oral Health"
        description="Essential information about maintaining optimal oral health, understanding medications, and preventing common oral health issues."
        articles={articles}
        categories={categories}
      />
    </Layout>
  )
}
