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