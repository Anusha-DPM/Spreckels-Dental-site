'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RootCanalRetreatmentPage() {
  const relatedArticles = [
    {
      title: 'Root Canal Treatment',
      description: 'Comprehensive guide to root canal treatment, including the procedure, benefits, and what to expect during recovery.',
      href: '/patient-education/endodontics/root-canal-treatment'
    },
    {
      title: 'Apicoectomy',
      description: 'A surgical procedure to treat persistent root canal infections when conventional root canal treatment is not sufficient.',
      href: '/patient-education/endodontics/apicoectomy'
    },
    {
      title: 'Combined Root and Gum Problems',
      description: 'When endodontic and periodontal problems occur together, requiring comprehensive treatment approaches.',
      href: '/patient-education/endodontics/combined-root-and-gum-problems'
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
              Root Canal Retreatment
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              When a previously treated root canal needs additional treatment due to persistent 
              infection or new problems, retreatment can save your tooth and restore your oral health.
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
              Understanding Root Canal Retreatment
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Root canal retreatment is a procedure performed when a previously treated root 
              canal has failed or developed new problems. While root canal treatment has a 
              high success rate, some cases may require additional treatment to achieve 
              complete healing and preserve the tooth.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Why Root Canal Retreatment May Be Needed
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Several factors can contribute to the need for root canal retreatment:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Incomplete Initial Treatment
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The original root canal treatment may not have completely cleaned and sealed 
              all the canals, leaving some areas untreated and allowing bacteria to persist.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              New Decay or Damage
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              New cavities, fractures, or trauma can compromise the seal of the root canal 
              and allow bacteria to re-enter the tooth.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Complex Root Canal Anatomy
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Some teeth have unusual or complex root canal systems that may not have been 
              fully treated during the initial procedure.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Crown or Filling Failure
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If the restoration (crown or filling) fails, bacteria can re-enter the root 
              canal system and cause reinfection.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Delayed Crown Placement
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If a crown is not placed promptly after root canal treatment, the temporary 
              filling may leak and allow contamination.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Signs That Retreatment May Be Necessary
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Watch for these symptoms that may indicate the need for retreatment:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Persistent pain or discomfort in the treated tooth</li>
              <li>Recurring sensitivity to hot or cold temperatures</li>
              <li>Swelling or tenderness in the gums around the tooth</li>
              <li>Pus drainage or a pimple on the gums</li>
              <li>Tooth mobility or looseness</li>
              <li>Darkening of the treated tooth</li>
              <li>Pain when biting or chewing</li>
              <li>Bad taste or odor in the mouth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Diagnostic Process
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Before recommending retreatment, your dentist will conduct a thorough evaluation:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Clinical Examination
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The dentist will examine the tooth for signs of infection, test for sensitivity, 
              and check the condition of any existing restorations.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Radiographic Evaluation
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              X-rays and sometimes 3D imaging (CBCT) are used to assess the current state 
              of the root canal filling and identify any areas of infection or bone loss.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Assessment of Restorations
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The dentist will evaluate the condition of any crowns, fillings, or other 
              restorations to determine if they need to be replaced.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              The Retreatment Procedure
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Root canal retreatment is more complex than the initial treatment and involves 
              several steps:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 1: Access and Removal
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The existing crown or filling is removed, and the old root canal filling 
              material is carefully removed to access the root canal system.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 2: Cleaning and Disinfection
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The root canals are thoroughly cleaned, shaped, and disinfected to remove 
              any remaining bacteria and infected tissue.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 3: Medication
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Antibacterial medication may be placed in the canals between visits to help 
              eliminate infection.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 4: Refilling and Sealing
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Once the canals are clean and infection-free, they are refilled with new 
              gutta-percha and sealed to prevent reinfection.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 5: Restoration
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A new crown or filling is placed to restore the tooth's function and appearance.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Challenges of Retreatment
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Retreatment can be more challenging than initial root canal treatment:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Removing old filling materials can be difficult</li>
              <li>Previous restorations may limit access to the canals</li>
              <li>Root canal anatomy may have changed since the original treatment</li>
              <li>There may be more extensive infection or damage</li>
              <li>The procedure typically takes longer than initial treatment</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Success Rates and Prognosis
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The success rate of root canal retreatment is generally good, ranging from 
              70% to 90% depending on various factors:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>The reason for the initial failure</li>
              <li>The extent of the current infection</li>
              <li>The tooth's location and anatomy</li>
              <li>The quality of the retreatment</li>
              <li>Patient's overall health and compliance</li>
              <li>Proper restoration after retreatment</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Alternatives to Retreatment
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If retreatment is not feasible or successful, other options may be considered:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Apicoectomy
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A surgical procedure that removes the tip of the root and any infected tissue, 
              then seals the root end.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Tooth Extraction
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If the tooth cannot be saved, extraction followed by replacement with an 
              implant, bridge, or denture may be necessary.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Monitoring
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              In some cases, if symptoms are mild, the dentist may recommend monitoring 
              the situation with regular checkups.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Recovery and Aftercare
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Post-retreatment care is crucial for success:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Immediate Post-Treatment Care
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Follow your dentist's instructions for pain management and oral hygiene. 
              Avoid chewing on the treated tooth until it's fully restored.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Follow-up Appointments
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Attend all scheduled follow-up visits to monitor healing and ensure the 
              retreatment is successful.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Long-term Maintenance
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Maintain excellent oral hygiene and regular dental visits to prevent future 
              problems and ensure the tooth remains healthy.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention of Future Problems
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              To avoid the need for retreatment:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Have crowns placed promptly after root canal treatment</li>
              <li>Maintain excellent oral hygiene</li>
              <li>Attend regular dental checkups</li>
              <li>Address any new cavities or damage promptly</li>
              <li>Avoid using your teeth as tools</li>
              <li>Wear protective gear during sports activities</li>
              <li>Follow your dentist's recommendations for care</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Seek Immediate Care
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Contact your dentist immediately if you experience:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe pain that doesn't respond to medication</li>
              <li>Signs of infection (fever, swelling, pus)</li>
              <li>Difficulty breathing or swallowing</li>
              <li>Your temporary filling or crown falls out</li>
              <li>Numbness that persists beyond the expected time</li>
              <li>Any allergic reactions to medications</li>
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