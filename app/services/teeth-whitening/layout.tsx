import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Teeth Whitening Services | Spreckels Park Dental',
    description: 'Explore teeth whitening services at Spreckels Park Dental to help brighten smiles using professional dental treatments.',
}

export default function TeethWhiteningLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
