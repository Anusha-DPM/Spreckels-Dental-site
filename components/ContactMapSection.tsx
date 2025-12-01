'use client'

import { motion } from 'framer-motion'

export default function ContactMapSection() {
  return (
    <section className="w-full">
      {/* Map Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        {/* Map */}
        <div className="w-full h-96 lg:h-[500px]">
          <iframe
            src="https://maps.google.com/maps?q=626+E+Yosemite+Ave,+Manteca,+CA+95336&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dental Office Location"
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </section>
  )
} 