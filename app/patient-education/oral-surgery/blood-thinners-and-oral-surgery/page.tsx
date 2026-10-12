'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BloodThinnersAndOralSurgeryPage() {
  const relatedArticles = [
    {
      title: 'Extractions',
      description: 'Information about tooth extractions, including wisdom teeth removal and other extraction procedures.',
      href: '/patient-education/oral-surgery/extractions'
    },
    {
      title: 'Oral Surgery Procedures',
      description: 'Overview of common oral surgery procedures and what to expect during treatment.',
      href: '/patient-education/oral-surgery/oral-surgery-procedures'
    },
    {
      title: 'Oral Diagnosis and Biopsies',
      description: 'Understanding oral diagnosis procedures and when biopsies are necessary for proper treatment.',
      href: '/patient-education/oral-surgery/oral-diagnosis-and-biopsies'
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
              Blood Thinners and Oral Surgery
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding how blood thinners affect oral surgery and what precautions need to be taken 
              to ensure safe and successful procedures.
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
              What are Blood Thinners?
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Blood thinners, also known as anticoagulants, are medications that help prevent blood clots 
              from forming. They work by interfering with the blood clotting process, which can be 
              beneficial for patients with certain medical conditions such as atrial fibrillation, 
              deep vein thrombosis, or those who have had heart valve replacements.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Common Blood Thinners
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              There are several types of blood thinners commonly prescribed. Warfarin (Coumadin) is a 
              traditional blood thinner that requires regular monitoring. Newer medications include 
              direct oral anticoagulants (DOACs) such as apixaban (Eliquis), rivaroxaban (Xarelto), 
              dabigatran (Pradaxa), and edoxaban (Savaysa). These newer medications often require less 
              monitoring but still affect the blood's ability to clot.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Impact on Oral Surgery
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Blood thinners can significantly impact oral surgery procedures by increasing the risk of 
              bleeding during and after surgery. This is particularly important for procedures that 
              involve cutting into tissue, such as extractions, biopsies, or more complex oral surgery 
              procedures. The increased bleeding risk can affect both the surgical procedure itself and 
              the healing process.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Pre-Surgical Evaluation
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Before any oral surgery procedure, patients taking blood thinners will undergo a thorough 
              evaluation. This typically includes a review of their medical history, current medications, 
              and the specific blood thinner they are taking. Blood tests may be ordered to assess the 
              current level of anticoagulation and determine the best approach for the surgery.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Management Strategies
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              There are several strategies for managing blood thinners during oral surgery. For some 
              patients, the blood thinner may be temporarily discontinued before surgery, while for 
              others, the medication may be continued but with additional precautions. The specific 
              approach depends on the type of blood thinner, the patient's medical condition, and the 
              planned surgical procedure.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Communication with Healthcare Providers
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Open communication between the oral surgeon, the patient's primary care physician, and 
              any specialists involved in the patient's care is essential. This ensures that all 
              healthcare providers are aware of the planned surgery and can coordinate the management 
              of blood thinners appropriately. The patient's cardiologist or other specialists may 
              need to be consulted regarding the timing of medication adjustments.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Post-Surgical Care
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              After oral surgery, patients taking blood thinners may require additional monitoring and 
              care. This can include more frequent follow-up appointments, specific instructions for 
              wound care, and monitoring for signs of excessive bleeding or other complications. The 
              timing of resuming blood thinners after surgery will be determined by the surgical team 
              and the patient's other healthcare providers.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Emergency Situations
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              In emergency oral surgery situations, the management of blood thinners becomes more 
              complex. The surgical team must quickly assess the patient's anticoagulation status and 
              determine the safest approach. This may involve administering reversal agents or other 
              medications to help control bleeding while still protecting the patient from the risks 
              associated with stopping their blood thinner.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Patient Education
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Patients taking blood thinners should be well-informed about their medications and how 
              they may affect oral surgery. This includes understanding the importance of disclosing 
              all medications to their oral surgeon, following pre- and post-surgical instructions 
              carefully, and knowing when to seek medical attention for complications such as excessive 
              bleeding or unusual symptoms.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Alternative Treatment Options
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              In some cases, alternative treatment options may be considered for patients taking blood 
              thinners. This could include less invasive procedures, different timing for surgery, or 
              the use of specific techniques designed to minimize bleeding risk. The decision about 
              which approach to take will be made based on the patient's individual circumstances and 
              the specific oral surgery needed.
            </p>

            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-6 mt-12">
              Conclusion
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While blood thinners can complicate oral surgery, with proper planning and coordination 
              between healthcare providers, safe and successful procedures can be performed. The key 
              is open communication, thorough evaluation, and careful management of the anticoagulation 
              therapy throughout the surgical process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={article.href}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-gray-100">
                      <h3 className="text-[22px] sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#441018] transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed font-sans mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center text-[#441018] font-medium group-hover:translate-x-1 transition-transform duration-200">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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