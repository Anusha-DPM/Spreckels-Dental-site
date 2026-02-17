import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dental Implants & All-on-4® FAQs | Spreckels Park Dental Manteca, CA',
  description: 'Get answers to common questions about dental implants and All-on-4® implant dentures in Manteca, CA. Learn about costs, candidacy, procedure steps, financing, and insurance at Spreckels Park Dental.',
}

export default function DentalImplantsMantecaCALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
