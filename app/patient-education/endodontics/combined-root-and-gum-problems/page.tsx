'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CombinedRootAndGumProblemsPage() {
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
      title: 'Root Canal Retreatment',
      description: 'When a previously treated root canal needs additional treatment due to persistent infection or new problems.',
      href: '/patient-education/endodontics/root-canal-retreatment'
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
              Combined Root and Gum Problems
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              When endodontic and periodontal problems occur together, requiring comprehensive 
              treatment approaches to address both root canal and gum disease issues simultaneously.
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
              Understanding Combined Root and Gum Problems
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Combined root and gum problems represent a complex dental condition where both 
              endodontic (root canal) and periodontal (gum) issues coexist. This situation 
              requires a comprehensive treatment approach that addresses both problems 
              simultaneously to achieve optimal outcomes and preserve the affected tooth.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              The Relationship Between Root and Gum Problems
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The connection between root canal and gum problems is complex and bidirectional:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Endodontic-Periodontal Lesions
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              These are conditions where both the pulp (nerve) and the supporting structures 
              around the tooth are affected. The infection can spread from the root canal to 
              the surrounding bone and gum tissue, or vice versa.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Communication Pathways
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Bacteria and infection can travel between the root canal system and the 
              periodontal tissues through various pathways, including accessory canals, 
              root fractures, and exposed root surfaces.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Types of Combined Lesions
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Combined root and gum problems can be classified into several categories:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Primary Endodontic Lesion with Secondary Periodontal Involvement
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The problem originates in the root canal system and spreads to the periodontal 
              tissues. This is the most common type and often responds well to root canal 
              treatment alone.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Primary Periodontal Lesion with Secondary Endodontic Involvement
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Periodontal disease progresses to involve the root canal system. This type 
              requires periodontal treatment first, followed by endodontic treatment if needed.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              True Combined Lesion
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Both endodontic and periodontal problems develop independently and then 
              communicate with each other. This is the most challenging to treat and 
              requires comprehensive therapy.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Iatrogenic Lesion
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Problems caused by dental treatment, such as perforations during root canal 
              treatment or over-instrumentation that damages the periodontal ligament.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Symptoms and Signs
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Patients with combined root and gum problems may experience:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Persistent tooth pain or sensitivity</li>
              <li>Swelling and tenderness in the gums</li>
              <li>Pus drainage from the gum area</li>
              <li>Loose or mobile teeth</li>
              <li>Deep gum pockets around the affected tooth</li>
              <li>Bone loss visible on X-rays</li>
              <li>Bad taste or odor in the mouth</li>
              <li>Difficulty chewing or biting</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Diagnostic Process
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Accurate diagnosis is crucial for determining the appropriate treatment approach:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Clinical Examination
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The dentist will examine the tooth for signs of decay, fractures, or previous 
              treatments. Gum health is assessed through probing depths and mobility testing.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Vitality Testing
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Tests are performed to determine if the tooth's nerve is alive or dead, helping 
              to identify the primary source of the problem.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Radiographic Evaluation
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              X-rays and sometimes 3D imaging (CBCT) are used to assess bone loss, root 
              canal anatomy, and the extent of the lesions.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Treatment Approaches
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Treatment for combined lesions requires a coordinated approach:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Phase I: Emergency Treatment
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Address immediate pain and infection through drainage, antibiotics if necessary, 
              and temporary stabilization of the tooth.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Phase II: Root Canal Treatment
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If the pulp is involved, root canal treatment is performed to remove infected 
              tissue and seal the root canal system. This may resolve periodontal symptoms 
              if they were secondary to the endodontic problem.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Phase III: Periodontal Treatment
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Scaling and root planing, gum surgery, or other periodontal procedures are 
              performed to address gum disease and bone loss.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Phase IV: Surgical Intervention
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              In complex cases, surgical procedures such as apicoectomy, guided tissue 
              regeneration, or bone grafting may be necessary.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Phase V: Restoration and Maintenance
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The tooth is restored with appropriate fillings or crowns, and a maintenance 
              program is established to prevent recurrence.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prognosis and Success Rates
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The success of treatment depends on several factors:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Type and extent of the combined lesion</li>
              <li>Timing of treatment intervention</li>
              <li>Patient's overall health and immune status</li>
              <li>Quality of the root canal treatment</li>
              <li>Patient's compliance with maintenance care</li>
              <li>Presence of systemic factors (diabetes, smoking, etc.)</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When Extraction May Be Necessary
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Despite best efforts, some teeth with combined lesions may not be salvageable:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe bone loss that compromises tooth stability</li>
              <li>Vertical root fractures that cannot be repaired</li>
              <li>Persistent infection despite treatment</li>
              <li>Poor prognosis due to anatomical factors</li>
              <li>Patient's inability to maintain the tooth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention Strategies
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Preventing combined lesions involves addressing both endodontic and periodontal health:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Regular dental checkups and cleanings</li>
              <li>Prompt treatment of cavities and gum disease</li>
              <li>Good oral hygiene practices</li>
              <li>Avoiding habits that can damage teeth</li>
              <li>Managing systemic conditions that affect oral health</li>
              <li>Seeking treatment for dental trauma promptly</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Long-term Maintenance
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              After successful treatment, ongoing care is essential:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Regular Monitoring
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Frequent follow-up visits to monitor healing and detect any recurrence early. 
              X-rays may be taken periodically to assess bone healing.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Professional Maintenance
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Regular professional cleanings and periodontal maintenance to prevent gum 
              disease recurrence and maintain optimal oral health.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Home Care
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Diligent home care including proper brushing, flossing, and use of 
              antimicrobial rinses as recommended by your dental team.
            </p>
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