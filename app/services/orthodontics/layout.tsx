import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Orthodontics Services | Spreckels Park Dental',
    description: 'Learn about orthodontics services at Spreckels Park Dental, including treatment options designed to support healthy smile alignment.',
}

export default function OrthodonticsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
