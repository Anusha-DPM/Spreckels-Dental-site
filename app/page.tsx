import type { Metadata } from 'next'
import {
  Layout,
<<<<<<< HEAD
  HomeHeroSlider,
=======
>>>>>>> 19cf1e76f11eaaf1b1db514ab7f77e209a0e6899
  HeroSection,
  TrustedBySection,
  HomeSectionsSlider,
  DentalBenefitsSection,
  InfoStatsSection,
  AboutUsSection,
  TestimonialSection,
  TrunkOrTreatSection,
  ServicesSection,
  SmileGallerySection,
  OfficeGalleryHomeSection,
  MissionSection,
  FeaturedVideoTestimonialSection,
  LatestBlogPosts,
  CTASection
} from '../components'
import { getLanguageAlternates } from '../lib/siteSeo'
import { K01_GEO_TERMS, K01_PRIMARY_TERM, K01_TITLE_TAG } from '../lib/seoKeywordMap'

export const metadata: Metadata = {
  title: K01_TITLE_TAG,
  description:
    'Looking for a Manteca dentist? Spreckels Park Dental is a trusted dentist in Manteca, CA. Our dentists in Manteca, CA provide general, cosmetic, and implant dentistry for local families.',
  keywords: [...K01_GEO_TERMS, K01_PRIMARY_TERM],
  alternates: getLanguageAlternates('/'),
}

export default function Home() {
  return (
    <Layout>
<<<<<<< HEAD
      <HomeHeroSlider />
=======
      <HeroSection />
>>>>>>> 19cf1e76f11eaaf1b1db514ab7f77e209a0e6899
      <HomeSectionsSlider/>
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