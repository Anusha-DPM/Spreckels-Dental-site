'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SimpleOrthoContent() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Invisalign Section */}
        <div className="mb-12 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-4 leading-tight">
              Invisalign Treatment Manteca, CA
            </h2>
            <p className="text-[16px] sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ color: '#656565' }}>
              Invisalign offers invisible, removable, and comfortable aligners for beautiful straight teeth, suitable for adults and teenagers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* What is Invisalign */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 h-full flex flex-col justify-center text-center lg:text-left"
            >
              <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                What is Invisalign®?
              </h3>
              <div className="space-y-4 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                <p>
                  Invisalign is an invisible way to straighten your teeth without braces, using clear, removable aligners. It is proven effective in clinical research and in orthodontic practices nationwide.
                </p>
              </div>

              <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                How Does Invisalign® Work?
              </h3>
              <ul className="space-y-3 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  Wear aligners for about 2 weeks, removing them only for eating, drinking, brushing, and flossing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  Teeth gradually move as new aligners are replaced in the series
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  Regular visits about once every 6 weeks for progress checks
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  Total treatment time averages 9-15 months and 18-30 aligners (varies by case)
                </li>
              </ul>

              <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                How Are Aligners Made? You'd Be Amazed....
              </h3>
              <div className="space-y-4 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                <p>
                  Aligners are made using our expertise and 3-D computer imaging technology.
                </p>
                <a href="https://www.invisalign.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Visit the Invisalign® website
                </a>
              </div>
            </motion.div>

            {/* Invisalign Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[384px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/invisalign-2.png"
                alt="Spreckels Park Dental Invisalign Aligners - Clear Orthodontic Treatment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>

                                                                                                                                               {/* Traditional Braces Section */}
            <div className="border-t border-gray-200 pt-8 sm:pt-10 lg:pt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-10 sm:mb-12 lg:mb-16"
              >
                <h2 className="text-[27px] sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                  Life With Braces In Manteca, CA
                </h2>
                <p className="text-[16px] sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ color: '#656565' }}>
                  We offer orthodontic treatment for both aesthetic and long-term health benefits, aiming for a beautiful smile, a stable bite, and the best oral health possible.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
                {/* Eating With Braces */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full text-center">
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#441018' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                      Eating With Braces
                    </h3>
                    <div className="space-y-3 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                      <p>
                        You can eat nearly anything except hard or super sticky items. Avoid corn on the cob, apples, and other hard fruits unless cut into smaller pieces to prevent brackets being broken.
                      </p>
                      <p>
                        Soda or sugary drinks weaken enamel and increase susceptibility to decay, which can delay treatment if fillings are needed.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Braces Discomfort */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full text-center">
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#441018' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                      Braces Discomfort
                    </h3>
                    <div className="space-y-3 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                      <p>
                        Use orthodontic wax for discomfort from wires or brackets. This is a temporary solution that provides relief while your mouth adjusts.
                      </p>
                      <p>
                        Contact Dr. Parikh or Dr. Arora for any persistent issues or concerns about your treatment.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Keeping Your Smile Clean */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full text-center">
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#441018' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                      Keeping Your Smile Clean
                    </h3>
                    <div className="space-y-3 text-[16px] text-gray-600 leading-relaxed" style={{ color: '#656565' }}>
                      <p>
                        Maintain a consistent oral health care regimen, including brushing and flossing twice daily, especially after meals or sugary drinks.
                      </p>
                      <p>
                        A water flosser can also help. Follow doctors' instructions and avoid restricted foods to ensure successful treatment.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
      </div>
    </section>
  )
} 