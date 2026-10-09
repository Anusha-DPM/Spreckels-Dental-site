import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Endodontic Education | Spreckels Park Dental Care',
    description: 'Explore endodontic topics including root canal treatment, tooth pain causes, and dental pulp care through patient education resources.',
}

export default function EndodonticsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
