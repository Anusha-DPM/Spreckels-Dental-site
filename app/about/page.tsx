import type { Metadata } from 'next'
import {
  Layout,
  AboutHeroSection,
  JourneySection,
  TestimonialSection,
  ValuesSection,
  CTASection
} from '../../components'

export const metadata: Metadata = {
  title: 'About Spreckels Park Dental | Our Practice & Care Approach',
  description: 'Discover Spreckels Park Dental, our background, values, and approach to providing comfortable dental care for individuals and families.',
}

export default function AboutUs() {
  return (
    <Layout>
      <AboutHeroSection />
      <JourneySection />
      <TestimonialSection />
      <ValuesSection />
      <CTASection />
    </Layout>
  )
} 