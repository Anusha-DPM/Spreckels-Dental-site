import {
  Layout,
  JoinTeamSection,
  CTASection
} from '../../components'
import OfficeHeroSection from '../../components/OfficeHeroSection'
import OfficeGallerySection from '../../components/OfficeGallerySection'

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