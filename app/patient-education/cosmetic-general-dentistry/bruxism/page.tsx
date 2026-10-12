'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Bruxism() {
  const relatedArticles = [
    {
      title: 'Common Dental Procedures',
      href: '/patient-education/cosmetic-general-dentistry/common-dental-procedures',
      description: 'Learn about the most common dental procedures and what to expect during your treatment.'
    },
    {
      title: 'Crowns',
      href: '/patient-education/cosmetic-general-dentistry/crowns',
      description: 'Dental crowns are tooth-shaped caps that are placed over teeth to restore their shape, size, strength, and appearance.'
    },
    {
      title: 'Fillings',
      href: '/patient-education/cosmetic-general-dentistry/fillings',
      description: 'Dental fillings are used to repair teeth that have been damaged by decay or trauma.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[140px] pb-12 sm:pb-16 lg:pb-20" style={{ backgroundColor: '#441018' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-[27px] sm:text-4xl lg:text-6xl font-normal text-white font-heading leading-tight mb-4 sm:mb-6">
              Bruxism
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Bruxism is the medical term for grinding, gnashing or clenching your teeth, often during sleep. Learn about the causes, symptoms, and treatment options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-[27px] sm:text-3xl font-semibold text-gray-900 mb-6 font-heading">What is Bruxism?</h2>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Bruxism is the medical term for grinding, gnashing or clenching your teeth. It can occur during the day (awake bruxism) or at night (sleep bruxism). Many people are unaware they have this condition, especially if it occurs during sleep.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Types of Bruxism</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              There are two main types of bruxism:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2"><strong>Awake bruxism:</strong> Occurs during the day, often unconsciously while concentrating or during stressful situations</li>
              <li className="mb-2"><strong>Sleep bruxism:</strong> Occurs during sleep, often associated with sleep disorders and may be related to arousals during sleep</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Causes of Bruxism</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              The exact cause of bruxism is not always clear, but several factors may contribute:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Stress and anxiety</li>
              <li className="mb-2">Sleep disorders such as sleep apnea</li>
              <li className="mb-2">Side effects of certain medications</li>
              <li className="mb-2">Alcohol, caffeine, or recreational drug use</li>
              <li className="mb-2">Misaligned teeth or jaw</li>
              <li className="mb-2">Family history of bruxism</li>
              <li className="mb-2">Certain medical conditions like Parkinson's disease</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Symptoms of Bruxism</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Common signs and symptoms of bruxism include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Teeth grinding or clenching, which may be loud enough to wake your sleep partner</li>
              <li className="mb-2">Teeth that are flattened, fractured, chipped, or loose</li>
              <li className="mb-2">Worn tooth enamel, exposing deeper layers of your tooth</li>
              <li className="mb-2">Increased tooth pain or sensitivity</li>
              <li className="mb-2">Tired or tight jaw muscles, or a locked jaw that won't open or close completely</li>
              <li className="mb-2">Jaw, neck, or face pain or soreness</li>
              <li className="mb-2">Pain that feels like an earache, though it's actually not a problem with your ear</li>
              <li className="mb-2">Dull headache starting in the temples</li>
              <li className="mb-2">Damage from chewing on the inside of your cheek</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Complications of Bruxism</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              If left untreated, bruxism can lead to several complications:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Damage to your teeth, restorations, crowns, or jaw</li>
              <li className="mb-2">Tension-type headaches</li>
              <li className="mb-2">Severe facial or jaw pain</li>
              <li className="mb-2">Disorders that occur in the temporomandibular joints (TMJs), located just in front of your ears</li>
              <li className="mb-2">Sleep disruption for you and your bed partner</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Treatment Options</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              Treatment for bruxism depends on the cause and severity. Options include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2"><strong>Mouthguards and splints:</strong> Custom-fitted dental appliances that protect teeth from grinding</li>
              <li className="mb-2"><strong>Dental correction:</strong> In severe cases, reshaping the chewing surfaces of your teeth or using crowns</li>
              <li className="mb-2"><strong>Stress management:</strong> Learning relaxation techniques, meditation, or counseling</li>
              <li className="mb-2"><strong>Behavior therapy:</strong> Learning to rest your tongue, teeth, and lips properly</li>
              <li className="mb-2"><strong>Biofeedback:</strong> Using electronic instruments to measure muscle activity and teach you to control muscle activity</li>
              <li className="mb-2"><strong>Medication:</strong> In some cases, muscle relaxants or Botox injections may be recommended</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">Prevention Tips</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              While you can't always prevent bruxism, these steps may help:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Reduce stress and anxiety through relaxation techniques</li>
              <li className="mb-2">Avoid alcohol and caffeine, especially in the evening</li>
              <li className="mb-2">Practice good sleep hygiene</li>
              <li className="mb-2">Schedule regular dental checkups</li>
              <li className="mb-2">Talk to your sleep partner about any grinding sounds</li>
              <li className="mb-2">Consider a mouthguard if you grind your teeth at night</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">When to See a Dentist</h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6 font-sans">
              You should see your dentist if you have any of the following symptoms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[16px] text-gray-700 font-sans">
              <li className="mb-2">Teeth that are worn, damaged, or sensitive</li>
              <li className="mb-2">Jaw, face, or ear pain</li>
              <li className="mb-2">Someone tells you that you make grinding sounds while sleeping</li>
              <li className="mb-2">Limited mouth opening</li>
              <li className="mb-2">Headaches that start in your temples</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[27px] sm:text-3xl font-semibold text-gray-900 mb-8 text-center font-heading">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={article.href}>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-300 h-full">
                      <div className="p-6">
                        <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
                          {article.title}
                        </h3>
                        <p className="text-[16px] text-gray-600 leading-relaxed font-sans mb-4">
                          {article.description}
                        </p>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                          Read More
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 