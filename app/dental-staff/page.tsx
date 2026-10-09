import type { Metadata } from 'next'
import {
  Layout,
  JoinTeamSection,
  CTASection
} from '../../components'
import DentalStaffHeroSection from '../../components/DentalStaffHeroSection'
import DentalStaffJourneySection from '../../components/DentalStaffJourneySection'
import DentalStaffTeamSection from '../../components/DentalStaffTeamSection'

export const metadata: Metadata = {
  title: 'Spreckels Park Dental Team | Meet Our Dental Staff Team',
  description: 'Meet the dental staff at Spreckels Park Dental and learn about our dentists, hygienists, and team members focused on patient comfort and care today!!!',
}

export default function DentalStaff() {
  return (
    <Layout>
      <DentalStaffHeroSection />
      <DentalStaffJourneySection />
      <DentalStaffTeamSection />
      <JoinTeamSection />
      <CTASection />
    </Layout>
  )
} 