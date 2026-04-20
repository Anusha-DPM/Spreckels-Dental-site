export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[#441018] rounded-full animate-spin mx-auto"></div>
          <div className="mt-4">
            <div className="text-gray-600 font-medium animate-pulse">
              Loading...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 