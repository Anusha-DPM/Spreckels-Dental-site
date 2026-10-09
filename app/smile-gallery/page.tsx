import type { Metadata } from 'next'
import {
  Layout,
  SmileGalleryHero,
  SmileGalleryPageContent
} from '../../components'

export const metadata: Metadata = {
  title: 'Smile Gallery | Spreckels Park Dental Results',
  description: 'View real smile transformations from patients treated at Spreckels Park Dental and see outcomes from various dental care and treatment options.',
}

export default function SmileGalleryPage() {
  return (
    <Layout>
      <SmileGalleryHero />
      <SmileGalleryPageContent />
    </Layout>
  )
}

