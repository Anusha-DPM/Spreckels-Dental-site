import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spreckels Park Dental - Professional Dental Services',
  description: 'Professional dental services and consultations. Experience exceptional dental care with our expert team.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
} 