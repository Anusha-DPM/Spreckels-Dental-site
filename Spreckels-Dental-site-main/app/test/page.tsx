export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          ✅ Next.js Application is Working!
        </h1>
        <p className="text-gray-600 mb-4">
          If you can see this page, your Next.js application is running correctly.
        </p>
        <div className="space-y-2 text-sm">
          <div>✅ Server: Running on localhost:3000</div>
          <div>✅ Next.js: Working</div>
          <div>✅ Components: Loading</div>
        </div>
        <div className="mt-6">
          <a 
            href="/debug" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Test Firebase Connection
          </a>
        </div>
      </div>
    </div>
  )
} 