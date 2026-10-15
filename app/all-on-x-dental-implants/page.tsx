import type { Metadata } from 'next'
import {
  Layout,
  SimpleAllOnxHero,
 AllOnXExperienceSection
} from '../../components'

export const metadata: Metadata = {
  title: 'All-on-X Dental Implants in Manteca, CA | Spreckels Park Dental',
  description: 'Replace a full arch of missing teeth with All-on-X dental implants in Manteca, CA. Meet Dr. Rujul G. Parikh, DDS at Spreckels Park Dental today',
}

export default function AllOnXDentalImplants() {
  return (
    <Layout>
      <SimpleAllOnxHero />
      <AllOnXExperienceSection />
    </Layout>
  )
} 