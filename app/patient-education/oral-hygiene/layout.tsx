import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Oral Hygiene Education | Spreckels Park Dental',
    description: 'Learn about daily oral hygiene habits, brushing methods, flossing tips, and preventive care guidance to help maintain healthy teeth and gums.',
}

export default function OralHygieneLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
