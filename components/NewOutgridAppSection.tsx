export default function NewOutgridAppSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16">
          
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            {/* Small Heading */}
            <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: 'rgb(37 99 235)' }}>
            We Offer Free Consultations!
            </div>
            
            {/* Large Heading */}
            <h2 className="text-[27px] sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-4 sm:mb-6">
            Dental Implants at Spreckels Park Dental
        
            </h2>
            
            {/* Horizontal Divider */}
            <div className="border-t border-gray-300 my-4 sm:my-6"></div>
            
            {/* Supporting Paragraph */}
            <p className="text-[16px] sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#656565' }}>
              Achieving quality dental care shouldn't be difficult, so at Spreckels Park Dental we make it simple to achieve your healthiest, most beautiful smile. Whether you are looking for information on Dental Implants, Dentures, Root Canals, or Preventive Care, you can learn more about all of your options on our Services Page. 
              
            </p>
            
            {/* Download App Button */}
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://spreckels-dental-site.vercel.app/appointment-request"
                className="bg-gray-100 text-black px-6 py-3 rounded-md font-medium hover:bg-[#441018] hover:text-white transition-colors duration-200 cursor-pointer inline-block text-[15px] sm:text-base"
              >
             Book Appointment
              </a>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/AdobeStock_1423904609.jpeg"
                alt="Dental Implants at Spreckels Park Dental"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 