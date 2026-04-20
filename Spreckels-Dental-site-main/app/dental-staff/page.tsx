import {
  Layout,
  JoinTeamSection,
  CTASection
} from '../../components'
import DentalStaffHeroSection from '../../components/DentalStaffHeroSection'
import DentalStaffJourneySection from '../../components/DentalStaffJourneySection'
import DentalStaffTeamSection from '../../components/DentalStaffTeamSection'

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