import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dental Blog & Oral Health Articles | Spreckels Park Dental',
    description: 'Read the Spreckels Park Dental blog for oral health tips, dental topics, and helpful information for patients and families.',
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
