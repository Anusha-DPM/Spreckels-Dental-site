import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sedation Dentistry Services | Spreckels Park Dental',
    description: 'Learn about sedation dentistry options designed to help patients feel relaxed during dental procedures at Spreckels Park Dental.',
}

export default function SedationDentistryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
