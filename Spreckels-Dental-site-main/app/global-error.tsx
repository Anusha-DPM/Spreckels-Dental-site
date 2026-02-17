'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong!
            </h1>
            <p className="text-gray-600 mb-4">
              {error.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={reset}
              className="bg-[#441018] text-white px-6 py-3 rounded-lg hover:bg-[#5a1a2a] transition-colors duration-200 font-medium"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

