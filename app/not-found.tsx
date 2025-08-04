import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full bg-[#441018] text-white px-6 py-3 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-medium"
            >
              Go to Homepage
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full border-2 border-[#441018] text-[#441018] px-6 py-3 rounded-lg hover:bg-[#441018] hover:text-white transition-colors duration-200 font-medium"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 