'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RootCanalTreatmentPage() {
  const relatedArticles = [
    {
      title: 'Root Canal FAQs',
      description: 'Common questions and answers about root canal treatment, procedure, recovery, and what to expect during your endodontic care journey.',
      href: '/patient-education/endodontics/root-canal-faqs'
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
              Root Canal Treatment
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Comprehensive guide to root canal treatment, including the procedure, benefits, 
              and what to expect during recovery to save your natural tooth and restore oral health.
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
              Understanding Root Canal Treatment
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Root canal treatment is a dental procedure designed to save a tooth that has 
              become infected or severely damaged. Despite its reputation, modern root canal 
              treatment is typically no more uncomfortable than getting a filling, and it's 
              often the best way to preserve your natural tooth and avoid extraction.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              What is a Root Canal?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A root canal is the natural cavity within the center of a tooth that contains 
              the pulp chamber and root canals. The pulp is the soft tissue inside the tooth 
              that contains nerves, blood vessels, and connective tissue. When this pulp 
              becomes infected or damaged, root canal treatment is performed to remove the 
              infected tissue and save the tooth.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When is Root Canal Treatment Needed?
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Root canal treatment may be necessary when:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Deep decay has reached the pulp</li>
              <li>A tooth has been cracked or chipped, exposing the pulp</li>
              <li>Trauma has damaged the pulp</li>
              <li>Repeated dental procedures have compromised the pulp</li>
              <li>There's severe tooth pain, especially when chewing or applying pressure</li>
              <li>Prolonged sensitivity to hot or cold temperatures</li>
              <li>Swelling and tenderness in the gums</li>
              <li>Darkening of the tooth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              The Root Canal Procedure
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Root canal treatment typically involves several steps and may require one or 
              more visits depending on the complexity of the case:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 1: Examination and Diagnosis
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Your dentist will examine the tooth, take X-rays, and perform tests to determine 
              if root canal treatment is necessary. This helps identify the extent of the 
              infection and plan the treatment approach.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 2: Anesthesia
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Local anesthesia is administered to numb the tooth and surrounding area, ensuring 
              you remain comfortable throughout the procedure. You may also be given sedation 
              options if you experience dental anxiety.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 3: Access Opening
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              A small opening is made in the crown of the tooth to access the pulp chamber 
              and root canals. This allows the dentist to reach the infected or damaged pulp.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 4: Cleaning and Shaping
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              The infected or damaged pulp is removed, and the root canals are thoroughly 
              cleaned, shaped, and disinfected using specialized instruments. This step is 
              crucial for eliminating bacteria and preventing reinfection.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 5: Filling and Sealing
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Once the canals are clean and infection-free, they are filled with a 
              biocompatible material called gutta-percha and sealed to prevent bacteria 
              from re-entering the root canal system.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Step 6: Restoration
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              A temporary or permanent filling is placed to restore the tooth's structure. 
              In most cases, a crown is recommended to protect the weakened tooth and restore 
              its full function and appearance.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Benefits of Root Canal Treatment
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Root canal treatment offers numerous advantages:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Preserves your natural tooth</li>
              <li>Eliminates pain and infection</li>
              <li>Maintains normal chewing function</li>
              <li>Preserves your natural smile</li>
              <li>Prevents bone loss that can occur with extraction</li>
              <li>More cost-effective than tooth replacement options</li>
              <li>Prevents shifting of surrounding teeth</li>
              <li>Maintains proper jaw alignment</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              What to Expect During Treatment
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Understanding what to expect can help reduce anxiety about the procedure:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Duration
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              A typical root canal procedure takes about 60-90 minutes, though this can vary 
              depending on the complexity of the case. Some teeth may require multiple visits.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Comfort
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Modern techniques and anesthesia ensure that the procedure is typically no more 
              uncomfortable than getting a filling. Most patients report that the pain they 
              felt before the root canal (from the infection) is much worse than any 
              discomfort during treatment.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Technology
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Many dentists use advanced technology such as digital X-rays, 3D imaging, 
              and specialized instruments to ensure precise and effective treatment.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Recovery and Aftercare
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Proper care after root canal treatment is essential for successful healing:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Immediate Post-Treatment Care
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              After the procedure, you may experience some mild discomfort or sensitivity, 
              which can usually be managed with over-the-counter pain relievers. Avoid 
              chewing on the treated tooth until it's fully restored with a permanent crown.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Oral Hygiene
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Continue your normal oral hygiene routine, but be gentle around the treated 
              tooth. Brush and floss regularly to prevent new decay and gum disease.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Follow-up Appointments
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Attend all scheduled follow-up appointments to ensure the treatment is successful 
              and to have the permanent crown placed if recommended.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Success Rate and Longevity
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Root canal treatment has a very high success rate, typically 85-95%. With 
              proper care, a treated tooth can last a lifetime. Success depends on:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>The extent of the original infection</li>
              <li>The quality of the root canal treatment</li>
              <li>Proper restoration with a crown</li>
              <li>Good oral hygiene and regular dental care</li>
              <li>Patient's overall health</li>
              <li>Absence of new trauma or decay</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Contact Your Dentist
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
              <li>Pain that gets worse instead of better</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention of Future Problems
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              To prevent the need for root canal treatment in the future:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Practice good oral hygiene (brush twice daily, floss daily)</li>
              <li>Visit your dentist regularly for checkups and cleanings</li>
              <li>Address cavities promptly before they reach the pulp</li>
              <li>Wear a mouthguard during sports activities</li>
              <li>Avoid chewing on hard objects</li>
              <li>Treat teeth grinding with a night guard if needed</li>
              <li>Maintain a healthy diet low in sugary foods</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Myths and Misconceptions
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              There are many myths about root canal treatment that can cause unnecessary fear:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Myth: Root canals are extremely painful
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Reality: Modern root canal treatment is typically no more painful than getting 
              a filling. Local anesthesia ensures you remain comfortable throughout the procedure.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Myth: Root canals cause illness
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Reality: This myth is based on outdated research. Modern root canal treatment 
              is safe and effective, and there is no scientific evidence linking it to illness.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Myth: Extraction is better than root canal treatment
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Reality: Preserving your natural tooth with root canal treatment is almost 
              always better than extraction. Natural teeth function better and prevent 
              bone loss and shifting of other teeth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 font-heading mb-12 text-center">
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 font-heading">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-sans">
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