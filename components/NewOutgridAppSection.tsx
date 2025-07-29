export default function NewOutgridAppSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16">
          
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Small Heading */}
            <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-4">
              New Outgrid App
            </div>
            
            {/* Large Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-4 sm:mb-6">
              Financial consulting at your fingertips
            </h2>
            
            {/* Horizontal Divider */}
            <div className="border-t border-gray-300 my-4 sm:my-6"></div>
            
            {/* Supporting Paragraph */}
            <p className="text-indigo-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            {/* Download App Button */}
            <button className="bg-gray-100 text-black px-6 py-3 rounded-md font-medium hover:bg-[#7685e9] hover:text-white transition-colors duration-200">
              Download App
            </button>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/New.webp"
                alt="Outgrid mobile app interface"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 