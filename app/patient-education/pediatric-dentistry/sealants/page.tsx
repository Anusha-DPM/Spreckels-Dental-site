'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Sealants() {
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
                      Sealants
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
                      Dental sealants as a preventive measure to protect your child's teeth from cavities and decay
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
                What are Dental Sealants?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Dental sealants are thin, protective coatings applied to the chewing surfaces of the back teeth (molars and premolars). They are made of a plastic material that bonds to the tooth and creates a barrier that protects the enamel from plaque and acids that cause cavities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Sealants Work
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                The chewing surfaces of the back teeth have deep grooves and pits that can trap food particles and bacteria. Even with proper brushing and flossing, these areas can be difficult to clean thoroughly. Sealants fill in these grooves and create a smooth, easy-to-clean surface that prevents cavities from forming.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Should Children Get Sealants?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Sealants are most effective when applied soon after the permanent molars erupt. The first permanent molars typically appear around age 6, and the second permanent molars appear around age 12. Applying sealants at these times provides maximum protection during the cavity-prone years.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                The Sealant Application Process
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li><strong>Cleaning:</strong> The tooth is thoroughly cleaned and dried</li>
                <li><strong>Preparation:</strong> An acidic solution is applied to roughen the tooth surface</li>
                <li><strong>Rinsing:</strong> The tooth is rinsed and dried again</li>
                <li><strong>Application:</strong> The sealant material is painted onto the tooth</li>
                <li><strong>Curing:</strong> A special light is used to harden the sealant</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of Dental Sealants
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Prevent cavities in the chewing surfaces of back teeth</li>
                <li>Reduce the need for fillings and other dental treatments</li>
                <li>Save money on dental care in the long run</li>
                <li>Provide protection for several years</li>
                <li>Are painless and non-invasive</li>
                <li>Can be applied quickly during a regular dental visit</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Long Do Sealants Last?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Sealants can last for several years, but they may need to be reapplied over time. During regular dental check-ups, your dentist will examine the sealants and may recommend reapplication if they show signs of wear or damage. With proper care, sealants can provide protection for up to 10 years.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Caring for Sealants
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Sealants require no special care beyond regular oral hygiene practices. Children should continue to brush twice daily with fluoride toothpaste and floss regularly. While sealants protect the chewing surfaces, they don't protect the sides of the teeth, so proper brushing and flossing are still essential.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Are Sealants Safe?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Yes, dental sealants are safe and have been used for decades. The materials used in sealants are biocompatible and have been extensively tested. The American Dental Association and the American Academy of Pediatric Dentistry both recommend sealants as an effective way to prevent cavities in children.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Who Should Get Sealants?
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Children and teenagers with newly erupted permanent molars</li>
                <li>Children at high risk for cavities</li>
                <li>Adults who have deep grooves in their molars</li>
                <li>Anyone who wants to prevent cavities in their back teeth</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Cost and Insurance Coverage
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Sealants are a cost-effective preventive treatment. Many dental insurance plans cover sealants for children, and the cost is typically much lower than treating cavities that could have been prevented. Even without insurance, sealants are an affordable investment in your child's oral health.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Important Note
                </h4>
                <p className="text-blue-800 font-sans">
                  Sealants are most effective when applied to healthy teeth without existing decay. Regular dental check-ups help ensure that sealants are applied at the optimal time and that any existing cavities are treated before sealant application.
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
              <Link href="/patient-education/pediatric-dentistry/fluoride-and-your-child">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Fluoride and Your Child</h3>
                  <p className="text-gray-600 font-sans">Understanding the importance of fluoride in preventing tooth decay.</p>
                </div>
              </Link>
              <Link href="/patient-education/pediatric-dentistry/about-pediatric-dentistry">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">About Pediatric Dentistry</h3>
                  <p className="text-gray-600 font-sans">Learn about specialized dental care for children and adolescents.</p>
                </div>
              </Link>
              <Link href="/patient-education/oral-hygiene/how-to-prevent-cavities">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">How to Prevent Cavities</h3>
                  <p className="text-gray-600 font-sans">Essential tips for preventing cavities in children and adults.</p>
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