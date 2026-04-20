import type { Metadata } from 'next'
import { Layout } from '@/components'
import PatientEducationCategoryClient from '@/components/PatientEducationCategoryClient'

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry Education | Spreckels Park Dental',
  description: 'Understand cosmetic and general dentistry procedures including veneers, bonding, and smile care through patient education resources.',
}

export default function CosmeticGeneralDentistry() {
  const articles = [
    {
      id: 'bonding',
      title: 'Bonding',
      description: 'Dental bonding is a cosmetic procedure that uses a tooth-colored composite resin material to enhance your smile.',
      category: 'Cosmetic Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/bonding'
    },
    {
      id: 'bridges',
      title: 'Bridges',
      description: 'Dental bridges are used to replace missing teeth and restore your smile and ability to properly chew and speak.',
      category: 'Restorative Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/bridges'
    },
    {
      id: 'bruxism',
      title: 'Bruxism',
      description: 'Bruxism is the medical term for grinding, gnashing or clenching your teeth, often during sleep.',
      category: 'Oral Health',
      href: '/patient-education/cosmetic-general-dentistry/bruxism'
    },
    {
      id: 'common-dental-procedures',
      title: 'Common Dental Procedures',
      description: 'Learn about the most common dental procedures and what to expect during your treatment.',
      category: 'General Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/common-dental-procedures'
    },
    {
      id: 'crown-lengthening',
      title: 'Crown Lengthening',
      description: 'Crown lengthening is a surgical procedure that reshapes gum tissue and bone to expose more of a tooth.',
      category: 'Periodontal Surgery',
      href: '/patient-education/cosmetic-general-dentistry/crown-lengthening'
    },
    {
      id: 'crowns',
      title: 'Crowns',
      description: 'Dental crowns are tooth-shaped caps that are placed over teeth to restore their shape, size, strength, and appearance.',
      category: 'Restorative Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/crowns'
    },
    {
      id: 'dentures',
      title: 'Dentures',
      description: 'Dentures are removable appliances that can replace missing teeth and help restore your smile.',
      category: 'Prosthodontics',
      href: '/patient-education/cosmetic-general-dentistry/dentures'
    },
    {
      id: 'fillings',
      title: 'Fillings',
      description: 'Dental fillings are used to repair teeth that have been damaged by decay or trauma.',
      category: 'Restorative Dentistry',
      href: '/patient-education/cosmetic-general-dentistry/fillings'
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
        title="Cosmetic & General Dentistry"
        description="Discover comprehensive information about cosmetic and general dental procedures. From routine cleanings to advanced cosmetic treatments, learn about the procedures that can help you achieve a healthy, beautiful smile."
        articles={articles}
        categories={categories}
      />
    </Layout>
  )
}
