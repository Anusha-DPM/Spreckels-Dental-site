import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dental Emergency Care Education | Spreckels Park Dental',
    description: 'Learn how to respond to dental emergencies including tooth pain, injuries, and urgent oral care situations through patient education.',
}

export default function EmergencyCareLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
