import type { Metadata } from 'next'
import {
  Layout
} from '../../components'
import GeneralCosmeticHeroSection from '../../components/GeneralCosmeticHeroSection'
import GeneralServicesSection from '../../components/GeneralServicesSection'
import CosmeticServicesSection from '../../components/CosmeticServicesSection'
import GeneralDentistrySection from '../../components/GeneralDentistrySection'
import CosmeticDentistrySection from '../../components/CosmeticDentistrySection'
import MaintainingSmileSection from '../../components/MaintainingSmileSection'
import DentalReferralsSection from '../../components/DentalReferralsSection'
import DentalCareInsuranceSection from '../../components/DentalCareInsuranceSection'

export const metadata: Metadata = {
  title: 'General & Cosmetic Dentistry | Spreckels Park Dental',
  description: 'Discover general and cosmetic dentistry services that support oral health, tooth appearance, and long-term smile maintenance.',
}

export default function GeneralCosmeticDentistry() {
  return (
    <Layout>
      <GeneralCosmeticHeroSection />
      <GeneralServicesSection />
      <CosmeticServicesSection />
      <GeneralDentistrySection />
      <CosmeticDentistrySection />
      <MaintainingSmileSection />
      <DentalReferralsSection />
      <DentalCareInsuranceSection />
    </Layout>
  )
} 