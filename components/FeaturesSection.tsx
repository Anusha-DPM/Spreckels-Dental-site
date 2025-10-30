export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#441018]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Accessibility",
      description: "We ensure easy access to dental care with flexible scheduling and a welcoming environment for all patients."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#441018]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Patient-Centered",
      description: "Your comfort and needs come first — we tailor every dental treatment to fit your unique smile and preferences."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#441018]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Integrity",
      description: "We provide honest diagnoses, transparent pricing, and trustworthy care in every step of your dental journey."
    }
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center sm:text-left">
              {/* Icon */}
              <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-[22px] sm:text-xl font-normal text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#656565] leading-relaxed text-[16px] sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 