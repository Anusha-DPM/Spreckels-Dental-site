'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SleepApneaInChildren() {
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
                      Sleep Apnea in Children
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
                      Understanding sleep apnea in children, its symptoms, and how it can be treated through dental care
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
                What is Sleep Apnea?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Sleep apnea is a sleep disorder characterized by repeated pauses in breathing during sleep. In children, sleep apnea can have significant effects on their health, development, and daily functioning. It's important for parents to recognize the signs and symptoms so that appropriate treatment can be sought.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Types of Sleep Apnea in Children
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li><strong>Obstructive Sleep Apnea (OSA):</strong> The most common type, caused by a blockage in the airway</li>
                <li><strong>Central Sleep Apnea:</strong> Caused by the brain not sending proper signals to control breathing</li>
                <li><strong>Mixed Sleep Apnea:</strong> A combination of both obstructive and central sleep apnea</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Common Causes in Children
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Enlarged tonsils and adenoids</li>
                <li>Obesity or being overweight</li>
                <li>Facial structure abnormalities</li>
                <li>Down syndrome and other genetic conditions</li>
                <li>Neuromuscular disorders</li>
                <li>Allergies and chronic nasal congestion</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Signs and Symptoms
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Children with sleep apnea may exhibit various symptoms, both during sleep and while awake. It's important to note that not all children will show all symptoms, and the severity can vary significantly.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                Sleep-Related Symptoms:
              </h4>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Loud snoring</li>
                <li>Pauses in breathing followed by gasping or choking</li>
                <li>Restless sleep with frequent tossing and turning</li>
                <li>Sleeping in unusual positions (head tilted back, mouth open)</li>
                <li>Bedwetting (especially if it starts after being dry)</li>
                <li>Night sweats</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                Daytime Symptoms:
              </h4>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Excessive daytime sleepiness</li>
                <li>Difficulty concentrating and learning problems</li>
                <li>Behavioral issues and hyperactivity</li>
                <li>Morning headaches</li>
                <li>Mouth breathing</li>
                <li>Poor growth and development</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Impact on Health and Development
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Untreated sleep apnea can have serious consequences for children's health and development. It can affect their growth, cognitive development, behavior, and overall quality of life. Children with untreated sleep apnea may experience learning difficulties, attention problems, and increased risk of cardiovascular issues.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Diagnosis
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                If you suspect your child has sleep apnea, the first step is to consult with your pediatrician. They may refer you to a sleep specialist or an ear, nose, and throat (ENT) doctor. Diagnosis typically involves a sleep study (polysomnography) conducted in a sleep lab or sometimes at home.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Treatment Options
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Treatment for sleep apnea in children depends on the cause and severity of the condition. Several treatment options are available, and often a combination of approaches is most effective.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                Surgical Treatments:
              </h4>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li><strong>Tonsillectomy and Adenoidectomy:</strong> Removal of enlarged tonsils and adenoids</li>
                <li><strong>Uvulopalatopharyngoplasty (UPPP):</strong> Surgery to remove excess tissue from the throat</li>
                <li><strong>Maxillomandibular Advancement:</strong> Surgery to reposition the jaw</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                Non-Surgical Treatments:
              </h4>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li><strong>Continuous Positive Airway Pressure (CPAP):</strong> A machine that delivers air pressure through a mask</li>
                <li><strong>Oral Appliances:</strong> Dental devices that help keep the airway open</li>
                <li><strong>Lifestyle Changes:</strong> Weight management, allergy treatment, and sleep position adjustments</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                The Role of Pediatric Dentistry
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                Pediatric dentists can play an important role in the diagnosis and treatment of sleep apnea in children. They can identify risk factors during routine dental examinations, such as enlarged tonsils, narrow airways, or facial structure issues that may contribute to sleep apnea.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Oral Appliances for Sleep Apnea
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                For some children, oral appliances can be an effective treatment option. These custom-fitted devices are worn during sleep and work by repositioning the jaw to keep the airway open. Pediatric dentists can evaluate whether an oral appliance is appropriate for your child and help with fitting and adjustments.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Prevention and Early Intervention
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2 font-sans">
                <li>Regular dental check-ups to monitor oral health and airway development</li>
                <li>Prompt treatment of allergies and nasal congestion</li>
                <li>Maintaining a healthy weight</li>
                <li>Good sleep hygiene practices</li>
                <li>Early treatment of enlarged tonsils and adenoids when indicated</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2 font-heading">
                  Important Note
                </h4>
                <p className="text-blue-800 font-sans">
                  If you notice signs of sleep apnea in your child, don't delay seeking medical attention. Early diagnosis and treatment can prevent complications and improve your child's quality of life. Work with your healthcare team to develop the most appropriate treatment plan for your child's specific situation.
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
              <Link href="/patient-education/pediatric-dentistry/nitrous-oxide-for-children">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Nitrous Oxide for Children</h3>
                  <p className="text-gray-600 font-sans">Learn about nitrous oxide sedation for children's dental procedures.</p>
                </div>
              </Link>
              <Link href="/services/sedation-dentistry">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">Sedation Dentistry</h3>
                  <p className="text-gray-600 font-sans">Learn about sedation options for comfortable dental care.</p>
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