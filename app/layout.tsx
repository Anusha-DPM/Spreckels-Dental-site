import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SprekelSpark Dental - Professional Dental Services',
  description: 'Professional dental services and consultations. Experience exceptional dental care with our expert team.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
} 