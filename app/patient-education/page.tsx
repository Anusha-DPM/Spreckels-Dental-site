import type { Metadata } from 'next'
import { Layout } from '@/components'
import PatientEducationClient from '@/components/PatientEducationClient'

export const metadata: Metadata = {
  title: 'Patient Education Resources | Spreckels Park Dental',
  description: 'Access patient education articles covering oral health, dental procedures, hygiene tips, and treatment information in one place.',
}

export default function PatientEducation() {
  const articles = [
    {
      id: 'pediatric-dentistry',
      title: 'About Pediatric Dentistry',
      description: 'Learn about specialized dental care for children and adolescents.',
      category: 'Children\'s Dental Care'
    },
    {
      id: 'adult-orthodontic-treatment',
      title: 'Adult Orthodontic Treatment',
      description: 'Discover orthodontic options available for adults seeking to improve their smile.',
      category: 'Orthodontics'
    },
    {
      id: 'aging-and-oral-health',
      title: 'Aging and Oral Health',
      description: 'Understanding how aging affects oral health and what you can do about it.',
      category: 'Senior Dental Care'
    },
    {
      id: 'air-abrasion',
      title: 'Air Abrasion',
      description: 'A modern, minimally invasive alternative to traditional dental drilling.',
      category: 'Modern Dentistry'
    },
    {
      id: 'anesthesia-wand',
      title: 'Anesthesia Wand',
      description: 'Learn about this innovative pain-free injection technology.',
      category: 'Pain Management'
    },
    {
      id: 'antibiotic-premedication',
      title: 'Antibiotic Premedication',
      description: 'Understanding when and why antibiotics are needed before dental procedures.',
      category: 'Dental Procedures',
      href: '/patient-education/oral-health/antibiotic-premedication'
    },
    {
      id: 'apicoectomy',
      title: 'Apicoectomy',
      description: 'A surgical procedure to treat persistent root canal infections.',
      category: 'Endodontics',
      href: '/patient-education/endodontics/apicoectomy'
    },
    {
      id: 'bad-breath',
      title: 'Bad Breath',
      description: 'Causes, prevention, and treatment of halitosis.',
      category: 'Oral Health',
      href: '/patient-education/oral-health/bad-breath'
    },
    {
      id: 'bite-problems',
      title: 'Bite Problems',
      description: 'Understanding malocclusion and its impact on oral health.',
      category: 'Orthodontics',
      href: '/patient-education/orthodontics'
    },
    {
      id: 'blood-pressure-medications',
      title: 'Blood Pressure Medications and Your Oral Health',
      description: 'How blood pressure medications can affect your dental health.',
      category: 'Medication & Health',
      href: '/patient-education/oral-health/blood-pressure-medications-and-your-oral-health'
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
      <PatientEducationClient articles={articles} categories={categories} />
    </Layout>
  )
}
