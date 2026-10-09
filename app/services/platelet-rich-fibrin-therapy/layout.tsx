import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Platelet Rich Fibrin Therapy | Spreckels Park Dental',
    description: 'Learn about platelet rich fibrin therapy at Spreckels Park Dental and how this approach supports healing and recovery during dental procedures.',
}

export default function PlateletRichFibrinTherapyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
