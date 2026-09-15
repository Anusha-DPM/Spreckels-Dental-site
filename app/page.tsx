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
import { getLanguageAlternates } from '../lib/siteSeo'
import { K01_GEO_TERMS, K01_PRIMARY_TERM } from '../lib/seoKeywordMap'

export const metadata: Metadata = {
  title: 'Dentist in Manteca | Spreckels Park Dental',
  description:
    'Looking for a dentist in Manteca? Spreckels Park Dental provides preventive cleanings, dental implants, cosmetic dentistry, and family care for Manteca, CA patients.',
  keywords: [...K01_GEO_TERMS, K01_PRIMARY_TERM],
  alternates: getLanguageAlternates('/'),
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