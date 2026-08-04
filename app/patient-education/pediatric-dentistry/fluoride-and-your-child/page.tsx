'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FluorideAndYourChild() {
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
                      Fluoride and Your Child
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
                      Understanding the importance of fluoride in preventing tooth decay and maintaining your child's dental health
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
                What is Fluoride?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Fluoride is a naturally occurring mineral that helps prevent tooth decay by making the tooth enamel more resistant to acid attacks from plaque bacteria and sugars in the mouth. It also reverses early decay by remineralizing the tooth surface.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                How Fluoride Works
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                When fluoride is present in the mouth, it becomes incorporated into the developing teeth and makes the enamel stronger. It also helps repair early tooth decay by remineralizing areas that have been damaged by acid. Fluoride works in two ways: systemically (when ingested) and topically (when applied to the teeth).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Sources of Fluoride
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li><strong>Fluoridated water:</strong> Many communities add fluoride to their water supply</li>
                <li><strong>Fluoride toothpaste:</strong> Most toothpastes contain fluoride</li>
                <li><strong>Fluoride mouth rinses:</strong> Available over-the-counter or by prescription</li>
                <li><strong>Professional fluoride treatments:</strong> Applied by dentists during check-ups</li>
                <li><strong>Fluoride supplements:</strong> Prescribed by dentists when needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                When Should Children Start Using Fluoride?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Children should start using fluoride toothpaste as soon as their first tooth appears. For children under 3 years old, use a smear of fluoride toothpaste (about the size of a grain of rice). For children 3-6 years old, use a pea-sized amount. Always supervise young children to ensure they don't swallow the toothpaste.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Professional Fluoride Treatments
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                During regular dental check-ups, your child's dentist may apply a fluoride treatment. This involves applying a concentrated fluoride gel, foam, or varnish to the teeth. These treatments provide a higher concentration of fluoride than toothpaste and can help strengthen the teeth and prevent cavities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Fluoride Supplements
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                In areas where the water supply is not fluoridated, your child's dentist may recommend fluoride supplements. These are available as drops for infants or tablets for older children. The dosage depends on the child's age and the fluoride content of your local water supply.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Safety Considerations
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                While fluoride is safe and effective when used properly, excessive fluoride intake can cause fluorosis, a condition that affects the appearance of the teeth. Fluorosis typically appears as white spots or streaks on the teeth and is usually mild. To prevent fluorosis, ensure your child uses the appropriate amount of fluoride toothpaste and doesn't swallow it.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Benefits of Fluoride for Children
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Prevents tooth decay and cavities</li>
                <li>Strengthens tooth enamel</li>
                <li>Reverses early signs of decay</li>
                <li>Reduces the need for expensive dental treatments</li>
                <li>Helps maintain good oral health throughout life</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Important Note
                </h4>
                <p className="text-blue-800 font-sans">
                  Always consult with your child's dentist about the appropriate use of fluoride for your child's specific needs. The dentist can assess your child's risk for cavities and recommend the most appropriate fluoride regimen.
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
              <Link href="/patient-education/pediatric-dentistry/sealants">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Sealants</h3>
                  <p className="text-gray-600 font-sans">Dental sealants as a preventive measure to protect your child's teeth.</p>
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