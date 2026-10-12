import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Spreckels Park Dental Website',
    description: 'Review the privacy policy of Spreckels Park Dental to understand how patient information is collected, used, and protected online.',
}

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
