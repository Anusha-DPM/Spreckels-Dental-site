'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NitrousOxideForChildren() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
                  {/* Hero Section */}
            <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
                                <div className="mb-4">
                      <Link href="/patient-education/pediatric-dentistry" className="text-gray-300 hover:text-white font-semibold">
                        ← Back to Pediatric Dentistry
                      </Link>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white font-heading leading-tight mb-6">
                      Nitrous Oxide for Children
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
                      Learn about nitrous oxide sedation and how it can help make dental procedures more comfortable for children
                    </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                What is Nitrous Oxide?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Nitrous oxide, commonly known as "laughing gas," is a safe and effective sedative used in pediatric dentistry to help children feel more comfortable during dental procedures. It is a colorless, odorless gas that is mixed with oxygen and inhaled through a small mask that fits over the nose.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Nitrous Oxide Works
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                When inhaled, nitrous oxide produces a calming effect that helps reduce anxiety and fear. It also has mild pain-relieving properties and can make the child feel more relaxed and cooperative during dental treatment. The effects are mild and wear off quickly once the gas is stopped.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                When is Nitrous Oxide Used?
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Children who are anxious or fearful about dental procedures</li>
                <li>Children who have difficulty sitting still for treatment</li>
                <li>Children with a strong gag reflex</li>
                <li>Children undergoing longer or more complex procedures</li>
                <li>Children who have had negative dental experiences in the past</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                The Nitrous Oxide Experience
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Before the procedure, the dentist will explain to both the child and parent what will happen. A small mask will be placed over the child's nose, and they will be asked to breathe normally. The child may feel a tingling sensation or lightheadedness, which is normal. Most children describe the feeling as pleasant and relaxing.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Safety of Nitrous Oxide
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Nitrous oxide is one of the safest sedatives used in dentistry. It has been used for over 150 years and has an excellent safety record. The gas is administered in a controlled manner, and the child remains conscious and responsive throughout the procedure. The effects wear off quickly once the gas is stopped.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Preparing Your Child for Nitrous Oxide
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Explain the procedure in simple, positive terms</li>
                <li>Let your child know they will feel relaxed and comfortable</li>
                <li>Avoid eating a heavy meal 2-3 hours before the appointment</li>
                <li>Ensure your child is healthy and not experiencing cold or flu symptoms</li>
                <li>Bring a favorite toy or blanket for comfort</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                After the Procedure
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Once the nitrous oxide is stopped, the child will breathe pure oxygen for a few minutes to clear the gas from their system. The effects wear off quickly, and most children feel normal within minutes. They can usually return to normal activities immediately after the appointment.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of Nitrous Oxide
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Reduces anxiety and fear</li>
                <li>Makes dental procedures more comfortable</li>
                <li>Helps children cooperate during treatment</li>
                <li>Quick onset and recovery</li>
                <li>No needles or injections required</li>
                <li>Can be adjusted during the procedure</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Nitrous Oxide May Not Be Appropriate
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Nitrous oxide may not be suitable for children with certain medical conditions, such as respiratory problems, recent ear infections, or if they are unable to breathe through their nose. Your child's dentist will evaluate their medical history and determine if nitrous oxide is appropriate.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Important Note
                </h4>
                <p className="text-blue-800 font-sans">
                  Always discuss your child's medical history with the dentist before any sedation procedure. The dentist will ensure that nitrous oxide is safe and appropriate for your child's specific situation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/patient-education/pediatric-dentistry/about-pediatric-dentistry">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">About Pediatric Dentistry</h3>
                  <p className="text-gray-600 font-sans">Learn about specialized dental care for children and adolescents.</p>
                </div>
              </Link>
              <Link href="/services/sedation-dentistry">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Sedation Dentistry</h3>
                  <p className="text-gray-600 font-sans">Learn about sedation options for comfortable dental care.</p>
                </div>
              </Link>
              <Link href="/patient-education/pediatric-dentistry/sealants">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Sealants</h3>
                  <p className="text-gray-600 font-sans">Dental sealants as a preventive measure to protect your child's teeth.</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 