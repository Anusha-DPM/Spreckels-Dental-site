import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dental Educational Videos | Spreckels Park Dental',
    description: 'Access dental educational videos from Spreckels Park Dental covering procedures, oral care basics, and patient information.',
}

export default function EducationalVideosLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
