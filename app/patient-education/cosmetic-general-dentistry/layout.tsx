import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cosmetic Dentistry Education | Spreckels Park Dental',
    description: 'Understand cosmetic and general dentistry procedures including veneers, bonding, and smile care through patient education resources.',
}

export default function CosmeticGeneralDentistryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
