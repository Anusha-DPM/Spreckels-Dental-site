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
  FAQSection,
  NewOutgridAppSection,
  CTASection,
  LatestBlogPosts
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
      <FAQSection />
      <LatestBlogPosts />
      <NewOutgridAppSection />
      <CTASection />
    </Layout>
  )
} 