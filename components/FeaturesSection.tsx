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
      description: "Easy access ensures seamless engagement, fostering convenience and user-friendly interactions for everyone involved."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#441018]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Client-centered",
      description: "Prioritizing clients, our approach revolves around personalized solutions and tailored experiences, meeting individual needs."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#441018]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Integrity",
      description: "Upholding honesty and transparency, our commitment to integrity ensures trust and reliability in every interaction."
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              {/* Icon */}
              <div className="mb-4 sm:mb-6">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-normal text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#656565] leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 