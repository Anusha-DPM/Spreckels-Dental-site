import type { Metadata } from 'next'
import {
  Layout,
  VideoTestimonialsHero,
  VideoTestimonialsPageContent
} from '../../components'

export const metadata: Metadata = {
  title: 'Patient Video Testimonials | Spreckels Park Dental',
  description: 'Watch patient video testimonials from Spreckels Park Dental and hear feedback about dental visits, treatments, and overall care.',
}

export default function VideoTestimonialsPage() {
  return (
    <Layout>
      <VideoTestimonialsHero />
      <VideoTestimonialsPageContent />
    </Layout>
  )
}

