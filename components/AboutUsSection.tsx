export default function AboutUsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          
          {/* Left Column - Image with Overlay Card */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/financial-consulting-feature-1.webp"
                alt="Woman presenting to team in office"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Financial Summary Card */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-[280px] sm:max-w-xs">
                <div className="space-y-3">
                  {/* Current APY */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Current APY</span>
                    <span className="text-gray-900 font-semibold">4.75%</span>
                  </div>
                  
                  {/* Total Interest Earned */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Total Interest Earned</span>
                    <span className="text-gray-900 font-semibold">$132.87</span>
                  </div>
                  
                  {/* Cash Reserve Card */}
                  <div className="bg-gray-50 rounded-lg p-3 mt-4">
                    <div className="text-gray-600 text-sm mb-2">Your Cash Reserve</div>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-center font-semibold">
                      $14,952.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="text-left">
            <div className="space-y-4 sm:space-y-6">
              {/* About Us Label */}
              <div className="text-blue-500 text-sm font-semibold uppercase tracking-wide">
                About Us
              </div>
              
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                Master your financial destiny with us
              </h2>
              
              {/* Horizontal Divider */}
              <div className="border-t border-gray-300 my-6"></div>
              
              {/* Description Paragraph */}
              <p className="text-base sm:text-lg text-[#7685e9] leading-relaxed mb-4 sm:mb-5">
                Sapien nunc augue lacus vel blandit hac aliquam. Metus feugiat id morbi a in commodo. Aliquet consectetur ac risus sed amet dolor elit sem fermentum. Proin.
              </p>
              
              {/* Learn More Button */}
              <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-[#6f82ea] hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 