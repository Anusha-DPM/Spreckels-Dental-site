import type { Metadata } from 'next'
import Link from 'next/link'
import NotFoundRedirect from '../components/NotFoundRedirect'

export const metadata: Metadata = {
  title: 'Page Not Found | Spreckels Park Dental',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <NotFoundRedirect />
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-6">
          Redirecting to home page...
        </p>
        <Link
          href="/"
          className="bg-[#441018] text-white px-6 py-3 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-medium"
        >
          Go to Homepage now
        </Link>
      </div>
    </div>
  )
}
