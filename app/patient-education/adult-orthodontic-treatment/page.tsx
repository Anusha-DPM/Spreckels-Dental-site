'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdultOrthodonticTreatment() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4">
              <Link href="/patient-education" className="text-blue-600 hover:text-blue-700 font-semibold">
                ← Back to Patient Education
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 font-heading leading-tight mb-6">
              Adult Orthodontic Treatment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
              Modern orthodontic solutions for adults seeking to improve their smile and oral health
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
                Orthodontic Treatment for Adults
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Orthodontic treatment is not just for teenagers anymore. More and more adults are choosing to straighten their teeth and improve their smiles. Modern orthodontic technology has made treatment more comfortable, less visible, and more convenient than ever before.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Why Adults Choose Orthodontic Treatment
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Improve appearance and boost self-confidence</li>
                <li>Correct bite problems that can cause jaw pain or headaches</li>
                <li>Make teeth easier to clean, reducing risk of decay and gum disease</li>
                <li>Address issues that may have been missed during childhood</li>
                <li>Prepare for other dental procedures like crowns or implants</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Common Orthodontic Issues in Adults
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Adults may experience various orthodontic problems including crowded teeth, gaps between teeth, overbites, underbites, crossbites, and teeth that have shifted over time due to aging, tooth loss, or other factors.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Treatment Options for Adults
              </h3>
              
              <div className="space-y-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Traditional Metal Braces</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    The most effective option for complex cases. Modern metal braces are smaller and more comfortable than ever before.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Ceramic Braces</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Tooth-colored brackets that are less visible than metal braces while providing the same effectiveness.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Clear Aligners</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Removable, nearly invisible aligners that can be taken out for eating and cleaning. Ideal for mild to moderate cases.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Lingual Braces</h4>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    Braces attached to the back of teeth, making them completely invisible from the front.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                What to Expect During Treatment
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Adult orthodontic treatment typically takes 18-24 months, though this varies depending on the complexity of your case. You'll have regular appointments to monitor progress and make adjustments as needed.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Special Considerations for Adults
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Adults may have existing dental work like crowns or bridges that need to be considered</li>
                <li>Gum disease must be treated before orthodontic treatment begins</li>
                <li>Adults may need to wear retainers longer than teenagers</li>
                <li>Treatment may take longer due to denser bone structure</li>
                <li>Adults are more likely to have jaw joint problems that need to be addressed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Maintaining Results
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                After orthodontic treatment, wearing retainers as prescribed is crucial to maintain your new smile. Adults typically need to wear retainers longer than teenagers to prevent teeth from shifting back.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Consultation
                </h4>
                <p className="text-blue-800 font-sans">
                  If you're considering orthodontic treatment as an adult, schedule a consultation with our orthodontist. We'll evaluate your specific needs and recommend the best treatment option for your lifestyle and goals.
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
              <Link href="/patient-education/bite-problems">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Bite Problems</h3>
                  <p className="text-gray-600 font-sans">Understanding malocclusion and its impact on oral health.</p>
                </div>
              </Link>
              <Link href="/patient-education/pediatric-dentistry">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">About Pediatric Dentistry</h3>
                  <p className="text-gray-600 font-sans">Specialized dental care designed specifically for children and adolescents.</p>
                </div>
              </Link>
              <Link href="/patient-education/aging-and-oral-health">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Aging and Oral Health</h3>
                  <p className="text-gray-600 font-sans">Understanding how aging affects oral health and what you can do about it.</p>
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