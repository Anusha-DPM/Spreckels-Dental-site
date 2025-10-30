export default function InfoStatsSection() {
  const stats = [
    {
      number: "25+",
      label: "Years of experience"
    },
    {
      number: "10,000+",
      label: "Smiles transformed"
    },
    {
      number: "500+",
      label: "Successful procedures"
    },
    {
      number: "5,000+",
      label: "Happy patients"
    }
  ]

  return (
    <section className="pt-6 sm:pt-8 pb-8 sm:pb-10 lg:pb-12 xl:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Informational Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-[27px] sm:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 font-heading leading-tight">
              Your journey to a perfect smile starts here
            </h2>
            <p className="text-[16px] sm:text-lg text-[#656565] leading-relaxed font-sans">
              Experience exceptional dental care with our expert team. We provide comprehensive dental services to help you achieve a healthy, beautiful smile that lasts a lifetime.
            </p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#f6f4f2] rounded-xl p-6 text-left"
              >
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 font-heading">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 