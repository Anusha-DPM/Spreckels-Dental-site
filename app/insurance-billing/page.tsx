import {
  Layout
} from '../../components'
import InsuranceBillingHeroSection from '../../components/InsuranceBillingHeroSection'
import PaymentFinancingSection from '../../components/PaymentFinancingSection'

export default function InsuranceBilling() {
  return (
    <Layout>
      <InsuranceBillingHeroSection />
      <PaymentFinancingSection />
    </Layout>
  )
} 