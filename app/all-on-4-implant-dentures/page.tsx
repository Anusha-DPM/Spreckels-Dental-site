import type { Metadata } from 'next'
import {
  Layout,
  SimpleAllOn4Hero,
  SimpleAllOn4Content,
  SimpleAllOn4FAQ,
  SimpleAllOn4CTA
} from '../../components'

export const metadata: Metadata = {
  title: 'All-on-4 Implant Dentures | Spreckels Park Dental',
  description: 'Learn how All-on-4 implant dentures help replace missing teeth using a stable, full-arch solution designed for comfort and daily function.',
}

export default function AllOn4ImplantDentures() {
  return (
    <Layout>
      <SimpleAllOn4Hero />
      <SimpleAllOn4Content />
      <SimpleAllOn4FAQ />
      <SimpleAllOn4CTA />
    </Layout>
  )
} 