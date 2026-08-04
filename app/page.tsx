import type { Metadata } from 'next'
import {
  Layout,
  HeroSection,
  TrustedBySection,
  InfoStatsSection,
  AboutUsSection,
  TestimonialSection,
  ServicesSection,
  SmileGallerySection,
  OfficeGalleryHomeSection,
  MissionSection,
  FeaturedVideoTestimonialSection,
  LatestBlogPosts,
  CTASection
} from '../components'

export const metadata: Metadata = {
  title: 'Spreckels Park Dental | Comprehensive Dental Care',
  description: 'Spreckels Park Dental provides comprehensive dental care including preventive, restorative, cosmetic, and patient-focused oral health services.',
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <AboutUsSection />
      <MissionSection />
      <TestimonialSection />
      <FeaturedVideoTestimonialSection showViewAllButton />
      <ServicesSection />
      <SmileGallerySection />
      <OfficeGalleryHomeSection />
      <InfoStatsSection />
      <LatestBlogPosts />
      <CTASection />
    </Layout>
  )
} 