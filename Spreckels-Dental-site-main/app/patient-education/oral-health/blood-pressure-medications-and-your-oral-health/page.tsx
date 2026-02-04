'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BloodPressureMedicationsAndOralHealthPage() {
  const relatedArticles = [
    {
      title: 'Aging and Oral Health',
      description: 'Understanding how aging affects oral health and what you can do to maintain a healthy smile as you get older.',
      href: '/patient-education/oral-health/aging-and-oral-health'
    },
    {
      title: 'Antibiotic Premedication',
      description: 'Learn about when and why antibiotic premedication is necessary before dental procedures.',
      href: '/patient-education/oral-health/antibiotic-premedication'
    },
    {
      title: 'Bad Breath',
      description: 'Understanding the causes of bad breath and effective strategies for maintaining fresh breath.',
      href: '/patient-education/oral-health/bad-breath'
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
              Blood Pressure Medications and Your Oral Health
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding how blood pressure medications can affect your oral health and what you 
              should know to maintain optimal dental wellness.
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
              The Connection Between Blood Pressure Medications and Oral Health
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Blood pressure medications are among the most commonly prescribed drugs worldwide, 
              and while they are essential for managing cardiovascular health, they can have 
              significant effects on oral health. Understanding these effects and taking appropriate 
              preventive measures can help you maintain both your cardiovascular and oral health.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Common Blood Pressure Medications and Their Oral Effects
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Different classes of blood pressure medications can affect oral health in various ways:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Calcium Channel Blockers
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Medications like amlodipine, nifedipine, and diltiazem can cause gingival hyperplasia 
              (overgrowth of gum tissue). This condition can make gums appear swollen, red, and 
              may cause them to grow over the teeth, making proper oral hygiene difficult.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              ACE Inhibitors
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Drugs like lisinopril, enalapril, and ramipril can cause dry mouth (xerostomia) and 
              may lead to a metallic taste in the mouth. Dry mouth increases the risk of tooth 
              decay and gum disease.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Beta Blockers
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Medications such as metoprolol, atenolol, and propranolol can cause dry mouth and 
              may affect taste perception. They can also cause fatigue, which might impact your 
              ability to maintain proper oral hygiene routines.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Diuretics
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Thiazide diuretics like hydrochlorothiazide and loop diuretics like furosemide can 
              cause dry mouth and may lead to increased thirst. They can also affect calcium 
              metabolism, which is important for dental health.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Angiotensin Receptor Blockers (ARBs)
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Drugs like losartan, valsartan, and candesartan can cause dry mouth and may affect 
              taste. They are generally well-tolerated but can still impact oral health.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Specific Oral Health Issues Related to Blood Pressure Medications
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Gingival Hyperplasia
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              This condition, commonly associated with calcium channel blockers, causes gum tissue 
              to grow excessively. Symptoms include:
            </p>

            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Swollen, red, or tender gums</li>
              <li>Gums that bleed easily</li>
              <li>Gums that grow over teeth</li>
              <li>Difficulty maintaining proper oral hygiene</li>
              <li>Changes in bite or tooth alignment</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Dry Mouth (Xerostomia)
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Many blood pressure medications can reduce saliva production, leading to:
            </p>

            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Increased risk of tooth decay</li>
              <li>Difficulty chewing and swallowing</li>
              <li>Bad breath</li>
              <li>Sore throat or hoarseness</li>
              <li>Problems with dentures or other dental appliances</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Taste Changes
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Some medications can alter taste perception, leading to:
            </p>

            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Metallic taste in the mouth</li>
              <li>Reduced ability to taste certain foods</li>
              <li>Changes in eating habits</li>
              <li>Potential impact on nutrition</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention and Management Strategies
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Enhanced Oral Hygiene
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you're taking blood pressure medications, maintaining excellent oral hygiene is 
              crucial:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Brush More Frequently:</strong> Consider brushing after every meal if 
                you have dry mouth</li>
              <li><strong>Use Fluoride Products:</strong> Choose fluoride toothpaste and consider 
                fluoride rinses</li>
              <li><strong>Floss Daily:</strong> Remove plaque between teeth where brushing can't reach</li>
              <li><strong>Clean Your Tongue:</strong> Use a tongue scraper to remove bacteria</li>
              <li><strong>Consider Electric Toothbrush:</strong> May be more effective for thorough cleaning</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Managing Dry Mouth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you experience dry mouth from your medications:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Stay Hydrated:</strong> Drink water throughout the day</li>
              <li><strong>Use Saliva Substitutes:</strong> Over-the-counter products can help</li>
              <li><strong>Chew Sugar-Free Gum:</strong> Stimulates saliva production</li>
              <li><strong>Avoid Alcohol and Caffeine:</strong> These can worsen dry mouth</li>
              <li><strong>Use a Humidifier:</strong> Especially at night</li>
              <li><strong>Consider Prescription Medications:</strong> Your doctor may prescribe 
                medications to stimulate saliva production</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Managing Gingival Hyperplasia
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you develop gum overgrowth:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Professional Cleaning:</strong> More frequent dental cleanings may be needed</li>
              <li><strong>Gum Surgery:</strong> In severe cases, surgical removal of excess tissue</li>
              <li><strong>Medication Adjustment:</strong> Your doctor may consider alternative medications</li>
              <li><strong>Enhanced Home Care:</strong> Special attention to cleaning around affected areas</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Communication with Healthcare Providers
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Dental Team Communication
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Always inform your dental team about your blood pressure medications:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Provide a complete list of all medications</li>
              <li>Inform them of any changes in your medication regimen</li>
              <li>Report any oral health changes or concerns</li>
              <li>Ask about specific oral care recommendations for your medications</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Medical Team Communication
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Keep your medical team informed about oral health issues:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Report any oral side effects from medications</li>
              <li>Discuss potential medication alternatives if oral side effects are severe</li>
              <li>Coordinate care between your dentist and physician</li>
              <li>Ask about timing of dental procedures in relation to medication doses</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Special Considerations for Dental Procedures
            </h3>

            <h4 className="text+[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Before Dental Procedures
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              When planning dental procedures, consider:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Blood Pressure Monitoring:</strong> Your dentist may check your blood 
                pressure before procedures</li>
              <li><strong>Medication Timing:</strong> Some procedures may need to be scheduled 
                around medication doses</li>
              <li><strong>Anesthesia Considerations:</strong> Local anesthetics may interact with 
                some blood pressure medications</li>
              <li><strong>Bleeding Risk:</strong> Some medications may affect bleeding during 
                procedures</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Post-Procedure Care
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              After dental procedures:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Follow all post-procedure instructions carefully</li>
              <li>Monitor for any unusual bleeding or complications</li>
              <li>Continue taking your blood pressure medications as prescribed</li>
              <li>Contact your dentist if you experience any concerning symptoms</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Lifestyle Modifications
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Dietary Considerations
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Your diet can help support both cardiovascular and oral health:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Low-Sodium Diet:</strong> Helps manage blood pressure</li>
              <li><strong>Calcium-Rich Foods:</strong> Supports dental health</li>
              <li><strong>Vitamin D:</strong> Important for both heart and oral health</li>
              <li><strong>Limit Sugary Foods:</strong> Reduces risk of tooth decay</li>
              <li><strong>Stay Hydrated:</strong> Helps with dry mouth and overall health</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Stress Management
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Stress can affect both blood pressure and oral health:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Practice stress-reduction techniques</li>
              <li>Get adequate sleep</li>
              <li>Exercise regularly (as approved by your doctor)</li>
              <li>Consider relaxation techniques like meditation or yoga</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Monitoring and Follow-up
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Regular Dental Checkups
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you're taking blood pressure medications, you may need more frequent dental visits:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Schedule checkups every 3-4 months instead of every 6 months</li>
              <li>More frequent professional cleanings may be needed</li>
              <li>Regular monitoring for gum disease and other oral health issues</li>
              <li>Early detection and treatment of any problems</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Self-Monitoring
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Be aware of changes in your oral health:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Check your gums regularly for swelling or bleeding</li>
              <li>Monitor for changes in taste or dry mouth</li>
              <li>Watch for any new oral sores or lesions</li>
              <li>Note any changes in tooth sensitivity</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Conclusion
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              While blood pressure medications are essential for your cardiovascular health, they 
              can have significant effects on your oral health. By understanding these effects and 
              taking proactive steps to maintain good oral hygiene, you can minimize the impact on 
              your dental health. Regular communication with both your dental and medical teams is 
              crucial for optimal care. Remember, maintaining good oral health is an important part 
              of your overall health management.
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