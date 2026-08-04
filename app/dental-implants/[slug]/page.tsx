import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Layout } from '@/components'
import DentalImplantCostPageContent from '@/components/DentalImplantCostPageContent'
import {
  dentalImplantCostPages,
  getDentalImplantCostPageConfig,
} from '@/lib/dentalImplantCostPageData'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return dentalImplantCostPages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const config = getDentalImplantCostPageConfig(slug)

  if (!config) {
    return {}
  }

  return {
    title: config.metaTitle,
    description: config.metaDescription,
  }
}

export default async function DentalImplantCostPage({ params }: PageProps) {
  const { slug } = await params
  const config = getDentalImplantCostPageConfig(slug)

  if (!config) {
    notFound()
  }

  return (
    <Layout>
      <DentalImplantCostPageContent config={config} />
    </Layout>
  )
}
