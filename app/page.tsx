import {
  Layout,
  HeroSection,
  TrustedBySection,
  InfoStatsSection,
  AboutUsSection,
  TestimonialSection,
  ServicesSection,
  MissionSection,
  FeaturesSection,
  NewOutgridAppSection,
  LatestBlogPosts,
  CTASection
} from '../components'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <AboutUsSection />
      <MissionSection />
      <FeaturesSection />
      <TestimonialSection />
      <ServicesSection />
      <InfoStatsSection />
      <NewOutgridAppSection />
      <LatestBlogPosts />
      <CTASection />
    </Layout>
  )
} 