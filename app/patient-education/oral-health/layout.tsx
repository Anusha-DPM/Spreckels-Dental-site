import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Oral Health Education | Spreckels Park Dental Care',
    description: 'Find oral health education covering gum care, dental conditions, preventive habits, and overall mouth health information.',
}

export default function OralHealthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
