import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Patient Education Resources | Spreckels Park Dental',
    description: 'Access patient education articles covering oral health, dental procedures, hygiene tips, and treatment information in one place.',
}

export default function PatientEducationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
