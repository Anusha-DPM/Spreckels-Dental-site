import {
  Layout,
  HeroSection,
  InfoStatsSection,
  AboutUsSection,
  TestimonialSection,
  ServicesSection,
  MissionSection,
  FeaturesSection,
  NewOutgridAppSection,
  CTASection
} from '../components'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutUsSection />
      <MissionSection />
      <FeaturesSection />
      <TestimonialSection />
      <ServicesSection />
      <InfoStatsSection />
      <NewOutgridAppSection />
      <CTASection />
    </Layout>
  )
} 