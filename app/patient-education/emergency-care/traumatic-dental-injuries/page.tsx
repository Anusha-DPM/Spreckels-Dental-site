'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TraumaticDentalInjuriesPage() {
  const relatedArticles = [
    {
      title: 'Gum Emergencies',
      description: 'Learn about gum emergencies, their causes, symptoms, and immediate treatment options.',
      href: '/patient-education/emergency-care/gum-emergencies'
    },
    {
      title: 'Orthodontic Emergencies',
      description: 'Common orthodontic emergencies and how to handle them before seeing your orthodontist.',
      href: '/patient-education/emergency-care/orthodontic-emergencies'
    },
    {
      title: 'Tooth Pain',
      description: 'Understanding tooth pain, its causes, and when to seek immediate dental care.',
      href: '/patient-education/emergency-care/tooth-pain'
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
              Traumatic Dental Injuries
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Traumatic dental injuries can occur from accidents, falls, or sports injuries. 
              Knowing how to handle these emergencies can save your teeth and prevent further damage.
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
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-6">
              Understanding Traumatic Dental Injuries
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Traumatic dental injuries are injuries to the teeth, gums, or surrounding oral tissues 
              caused by external force. These injuries can range from minor chips to complete tooth 
              avulsion (knocked-out tooth) and require immediate attention to preserve oral health 
              and function.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Types of Traumatic Dental Injuries
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Traumatic dental injuries can be classified into several categories:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Tooth Fractures
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Cracks or breaks in the tooth structure. These can range from minor enamel chips to 
              severe fractures that expose the pulp (nerve) of the tooth.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Tooth Displacement
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Teeth that have been moved from their normal position due to trauma. This includes 
              teeth that are pushed inward, outward, or sideways.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Tooth Avulsion
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Complete displacement of a tooth from its socket. This is a true dental emergency 
              that requires immediate attention.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Soft Tissue Injuries
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Injuries to the gums, lips, tongue, or cheeks that may accompany dental trauma.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Immediate Steps for Different Injuries
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The appropriate response depends on the type of injury:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              For Knocked-Out Teeth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Handle the tooth by the crown (top part), not the root. Rinse gently with water if 
              dirty, but don't scrub. Try to reinsert it into the socket if possible. If not, 
              place it in milk, saliva, or a tooth preservation solution. Seek immediate dental care.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              For Broken or Chipped Teeth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Rinse your mouth with warm water and apply a cold compress to reduce swelling. 
              Save any broken pieces and bring them to your dentist. Cover sharp edges with dental 
              wax if available.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              For Displaced Teeth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Don't try to reposition the tooth yourself. Apply a cold compress and seek immediate 
              dental care. The dentist will need to reposition and stabilize the tooth.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              For Soft Tissue Injuries
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Clean the area gently with warm water and apply pressure with a clean cloth to stop 
              bleeding. Use a cold compress to reduce swelling. Seek medical attention for deep cuts.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Seek Emergency Care
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Seek immediate dental care for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Knocked-out teeth (within 30 minutes for best chance of saving the tooth)</li>
              <li>Severe bleeding that doesn't stop</li>
              <li>Severe pain or swelling</li>
              <li>Teeth that are loose or displaced</li>
              <li>Fractures that expose the tooth nerve</li>
              <li>Injuries to the face or jaw</li>
              <li>Difficulty breathing or swallowing</li>
              <li>Signs of infection (fever, pus, bad taste)</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention of Traumatic Dental Injuries
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              While not all accidents can be prevented, you can reduce your risk:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Wear a mouthguard during sports activities</li>
              <li>Use seat belts and car seats properly</li>
              <li>Childproof your home to prevent falls</li>
              <li>Avoid using your teeth as tools</li>
              <li>Wear appropriate protective gear for activities</li>
              <li>Maintain good lighting in your home</li>
              <li>Use non-slip mats in bathrooms</li>
              <li>Supervise children during play activities</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Treatment Options
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Treatment depends on the type and severity of the injury:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              For Knocked-Out Teeth
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              The dentist may attempt to reimplant the tooth and stabilize it with a splint. 
              Root canal treatment may be needed later.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              For Broken Teeth
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Treatment may include bonding, veneers, crowns, or root canal therapy depending 
              on the extent of damage.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              For Displaced Teeth
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              The dentist will reposition the tooth and stabilize it with a splint for several weeks.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              For Soft Tissue Injuries
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              May require cleaning, sutures, or antibiotics depending on the severity.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Recovery and Follow-up
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              After treatment for traumatic dental injuries:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Follow your dentist's post-treatment instructions carefully</li>
              <li>Take prescribed medications as directed</li>
              <li>Maintain gentle oral hygiene practices</li>
              <li>Avoid hard or sticky foods as recommended</li>
              <li>Attend all follow-up appointments</li>
              <li>Report any new symptoms or complications</li>
              <li>Consider wearing a mouthguard for future protection</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Long-term Considerations
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Traumatic dental injuries may have long-term effects:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Nerve Damage
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Injured teeth may develop sensitivity or require root canal treatment due to nerve damage.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Discoloration
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Traumatized teeth may darken over time due to internal bleeding or nerve death.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Root Resorption
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              The body may begin to break down the tooth root, requiring monitoring and possible treatment.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Emergency Dental Kit
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Consider keeping an emergency dental kit on hand:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Dental wax for covering sharp edges</li>
              <li>Sterile gauze for bleeding control</li>
              <li>Small container for knocked-out teeth</li>
              <li>Saline solution or milk for tooth preservation</li>
              <li>Over-the-counter pain relievers</li>
              <li>Your dentist's emergency contact information</li>
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
            <h2 className="text-[27px] sm:text-3xl font-normal text-gray-900 font-heading mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={article.href}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full">
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed font-sans">
                        {article.description}
                      </p>
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