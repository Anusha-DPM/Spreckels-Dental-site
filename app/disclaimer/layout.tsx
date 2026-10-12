import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Website Disclaimer | Spreckels Park Dental',
    description: 'Review the Spreckels Park Dental website disclaimer for details on content use, limitations, and general informational guidance.',
}

export default function DisclaimerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
