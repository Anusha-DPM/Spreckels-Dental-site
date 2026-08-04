'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RootCanalFAQSPage() {
  const relatedArticles = [
    {
      title: 'Root Canal Treatment',
      description: 'Comprehensive guide to root canal treatment, including the procedure, benefits, and what to expect during recovery.',
      href: '/patient-education/endodontics/root-canal-treatment'
    },
    {
      title: 'Root Canal Retreatment',
      description: 'When a previously treated root canal needs additional treatment due to persistent infection or new problems.',
      href: '/patient-education/endodontics/root-canal-retreatment'
    },
    {
      title: 'Root Canal Treatment for Children',
      description: 'Specialized endodontic care for children, including baby teeth and young permanent teeth.',
      href: '/patient-education/endodontics/root-canal-treatment-for-children'
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
              Root Canal FAQs
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Common questions and answers about root canal treatment, procedure, recovery, 
              and what to expect during your endodontic care journey.
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
              Frequently Asked Questions About Root Canal Treatment
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Root canal treatment is one of the most common dental procedures, yet it's 
              often misunderstood. Here are answers to the most frequently asked questions 
              to help you understand what to expect.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              What is a Root Canal?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A root canal is a dental procedure that treats infection or damage in the 
              pulp (nerve) of a tooth. The procedure involves removing the infected or 
              damaged pulp, cleaning and disinfecting the root canal system, and then 
              sealing it to prevent further infection.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Why Do I Need a Root Canal?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              You may need a root canal if:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>You have severe tooth pain, especially when chewing or applying pressure</li>
              <li>You experience prolonged sensitivity to hot or cold temperatures</li>
              <li>Your tooth has darkened or discolored</li>
              <li>You have swollen, tender gums near the affected tooth</li>
              <li>You have a persistent pimple on your gums</li>
              <li>Your dentist has detected deep decay or damage to the tooth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Does a Root Canal Hurt?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Modern root canal treatment is typically no more painful than getting a 
              filling. Local anesthesia is used to numb the area, so you shouldn't feel 
              pain during the procedure. Most patients report that the pain they felt 
              before the root canal (from the infection) is much worse than any discomfort 
              during treatment.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              How Long Does a Root Canal Take?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A typical root canal procedure takes about 60-90 minutes, though this can 
              vary depending on the complexity of the case. Some teeth may require multiple 
              visits, especially if there are multiple roots or if the infection is severe.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              What Happens During a Root Canal?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The procedure involves several steps:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 1: Examination and Anesthesia
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Your dentist will examine the tooth and take X-rays, then administer local 
              anesthesia to numb the area completely.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 2: Access Opening
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A small opening is made in the crown of the tooth to access the pulp chamber 
              and root canals.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 3: Cleaning and Shaping
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The infected or damaged pulp is removed, and the root canals are cleaned, 
              shaped, and disinfected using specialized instruments.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 4: Filling and Sealing
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The cleaned canals are filled with a biocompatible material called gutta-percha 
              and sealed to prevent reinfection.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 5: Restoration
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A temporary or permanent filling is placed to restore the tooth's structure. 
              A crown is often recommended to protect the weakened tooth.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Will I Need a Crown After a Root Canal?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              In most cases, yes. A crown is recommended after a root canal because:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>The tooth becomes more brittle and prone to fracture</li>
              <li>A crown provides strength and protection</li>
              <li>It restores the tooth's natural appearance and function</li>
              <li>It helps prevent future damage or infection</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              How Long Does Recovery Take?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Most patients can return to normal activities immediately after a root canal. 
              Some mild discomfort or sensitivity is normal for a few days and can usually 
              be managed with over-the-counter pain relievers. The tooth may feel slightly 
              different for a few weeks as it heals.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              What Should I Do After a Root Canal?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Post-treatment care is important for successful healing:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Avoid chewing on the treated tooth until it's fully restored</li>
              <li>Take any prescribed medications as directed</li>
              <li>Maintain good oral hygiene</li>
              <li>Attend follow-up appointments</li>
              <li>Contact your dentist if you experience severe pain or swelling</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              How Successful Are Root Canals?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Root canal treatment has a very high success rate, typically 85-95%. The 
              treated tooth can last a lifetime with proper care. Success depends on:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>The extent of the original infection</li>
              <li>The quality of the root canal treatment</li>
              <li>Proper restoration with a crown</li>
              <li>Good oral hygiene and regular dental care</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              What Are the Alternatives to a Root Canal?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The main alternative is tooth extraction, but this is generally not recommended 
              because:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>It can lead to bone loss and shifting of other teeth</li>
              <li>Replacement options (implants, bridges) are more expensive</li>
              <li>Nothing functions as well as your natural tooth</li>
              <li>It can affect your chewing ability and appearance</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Can a Root Canal Fail?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While rare, root canals can fail due to:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Incomplete cleaning of the root canal system</li>
              <li>Undetected accessory canals</li>
              <li>New decay or damage to the tooth</li>
              <li>Crown failure or leakage</li>
              <li>Root fracture</li>
            </ul>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If a root canal fails, retreatment or apicoectomy (surgical root canal) may 
              be options to save the tooth.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              How Much Does a Root Canal Cost?
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              The cost varies depending on the tooth location, complexity, and your location. 
              Front teeth typically cost less than back teeth because they have fewer roots. 
              Most dental insurance plans cover a portion of root canal treatment. Your 
              dentist can provide a detailed cost estimate before treatment.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When Should I Contact My Dentist?
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Contact your dentist immediately if you experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe pain that doesn't respond to medication</li>
              <li>Visible swelling inside or outside your mouth</li>
              <li>An allergic reaction to medication</li>
              <li>Your temporary filling falls out</li>
              <li>Symptoms of infection (fever, chills)</li>
              <li>Difficulty breathing or swallowing</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              How Can I Prevent Needing a Root Canal?
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Prevention is always better than treatment:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Practice good oral hygiene (brush twice daily, floss daily)</li>
              <li>Visit your dentist regularly for checkups and cleanings</li>
              <li>Address cavities promptly before they reach the pulp</li>
              <li>Wear a mouthguard during sports activities</li>
              <li>Avoid chewing on hard objects</li>
              <li>Treat teeth grinding with a night guard if needed</li>
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
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
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