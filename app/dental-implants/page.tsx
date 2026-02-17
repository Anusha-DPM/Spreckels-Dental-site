import type { Metadata } from 'next'
import {
  Layout,
  SimpleDentalImplantsHero,
  SimpleDentalImplantsContent,
  SimpleDentalImplantsFAQ,
  SimpleDentalImplantsCTA
} from '../../components'

export const metadata: Metadata = {
  title: 'Dental Implants | Spreckels Park Dental',
  description: 'Dental implants at Spreckels Park Dental offer a long-term approach to replacing missing teeth while supporting function and appearance.',
}

export default function DentalImplants() {
  return (
    <Layout>
      <SimpleDentalImplantsHero />
      <SimpleDentalImplantsContent />
      <SimpleDentalImplantsFAQ />
      <SimpleDentalImplantsCTA />
    </Layout>
  )
} 