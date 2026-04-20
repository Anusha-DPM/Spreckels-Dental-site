import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Implant Dentistry Education | Spreckels Park Dental',
    description: 'Learn how dental implants work, treatment steps, and aftercare guidance through detailed implant dentistry education resources.',
}

export default function ImplantDentistryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
