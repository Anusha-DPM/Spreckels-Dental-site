import type { Metadata } from 'next'
import {
  Layout,
  JoinTeamSection,
  CTASection
} from '../../components'
import OfficeHeroSection from '../../components/OfficeHeroSection'
import OfficeGallerySection from '../../components/OfficeGallerySection'

export const metadata: Metadata = {
  title: 'Spreckels Park Dental Office | Tour Our Practice Space',
  description: 'Explore the Spreckels Park Dental office, see our treatment rooms, technology, and a welcoming environment designed for patient visits today here ok',
}

export default function Office() {
  return (
    <Layout>
      <OfficeHeroSection />
      <OfficeGallerySection />
      <JoinTeamSection />
      <CTASection />
    </Layout>
  )
} 