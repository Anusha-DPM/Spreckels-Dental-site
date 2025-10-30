import {
  Layout,
  HeroSection,
  TrustedBySection,
  InfoStatsSection,
  AboutUsSection,
  TestimonialSection,
  ServicesSection,
  SmileGallerySection,
  MissionSection,
  FeaturesSection,
  NewOutgridAppSection,
  VideoTestimonialsSection,
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
      <SmileGallerySection />
      <InfoStatsSection />
      <NewOutgridAppSection />
      <VideoTestimonialsSection />
      <LatestBlogPosts />
      <CTASection />
    </Layout>
  )
} 