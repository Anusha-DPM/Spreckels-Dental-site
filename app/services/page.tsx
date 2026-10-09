import type { Metadata } from 'next'
import {
  Layout,
  ServicesHeroSection,
  DetailedServicesSection,
  CTASection
} from '../../components'

export const metadata: Metadata = {
  title: 'Dental Services at Spreckels Park Dental | Manteca ,CA',
  description: 'Explore dental services at Spreckels Park Dental including preventive, restorative, cosmetic, and general care designed to support long-term oral health.',
}

export default function Services() {
  return (
    <Layout>
      <ServicesHeroSection />
      <DetailedServicesSection />
      <CTASection />
    </Layout>
  )
} 