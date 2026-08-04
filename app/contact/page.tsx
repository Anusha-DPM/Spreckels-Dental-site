import type { Metadata } from 'next'
import {
  Layout,
  ContactHeroSection,
  ContactFormSection,
} from '../../components'

export const metadata: Metadata = {
  title: 'Contact Spreckels Park Dental | Appointments & Location',
  description: 'Contact Spreckels Park Dental to schedule an appointment, ask questions, or get directions to our dental office location.',
}

export default function Contact() {
  return (
    <Layout>
      <ContactHeroSection />
      <ContactFormSection />
    </Layout>
  )
}
