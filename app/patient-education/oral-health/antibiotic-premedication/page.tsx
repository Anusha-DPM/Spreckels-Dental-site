'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AntibioticPremedicationPage() {
  const relatedArticles = [
    {
      title: 'Aging and Oral Health',
      description: 'Understanding how aging affects oral health and what you can do to maintain a healthy smile as you get older.',
      href: '/patient-education/oral-health/aging-and-oral-health'
    },
    {
      title: 'Bad Breath',
      description: 'Understanding the causes of bad breath and effective strategies for maintaining fresh breath.',
      href: '/patient-education/oral-health/bad-breath'
    },
    {
      title: 'Blood Pressure Medications and Your Oral Health',
      description: 'How blood pressure medications can affect your oral health and what you should know.',
      href: '/patient-education/oral-health/blood-pressure-medications-and-your-oral-health'
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
              Antibiotic Premedication
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Learn about when and why antibiotic premedication is necessary before dental procedures 
              to prevent serious infections.
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
              Understanding Antibiotic Premedication
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Antibiotic premedication, also known as antibiotic prophylaxis, is the practice of 
              taking antibiotics before certain dental procedures to prevent serious infections. 
              This preventive measure is particularly important for patients with certain medical 
              conditions that put them at higher risk for complications.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Why Antibiotic Premedication is Needed
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              During dental procedures, bacteria from the mouth can enter the bloodstream. For most 
              people, this is not a problem as the immune system quickly eliminates these bacteria. 
              However, for patients with certain medical conditions, these bacteria can cause serious 
              infections in other parts of the body, particularly the heart.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Infective Endocarditis Prevention
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The most serious concern is infective endocarditis, an infection of the heart's inner 
              lining or heart valves. This condition can be life-threatening and is more likely to 
              occur in patients with certain heart conditions. Antibiotic premedication helps prevent 
              this serious complication.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Who Needs Antibiotic Premedication
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Not everyone needs antibiotic premedication before dental procedures. The American 
              Heart Association and American Dental Association have specific guidelines for when 
              premedication is recommended:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Heart Conditions Requiring Premedication
            </h4>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Prosthetic heart valves or prosthetic material used for heart valve repair</li>
              <li>Previous infective endocarditis</li>
              <li>Congenital heart disease (unrepaired cyanotic congenital heart disease, including 
                palliative shunts and conduits)</li>
              <li>Completely repaired congenital heart defect with prosthetic material or device 
                during the first six months after the procedure</li>
              <li>Repaired congenital heart defect with residual defects at the site or adjacent to 
                the site of a prosthetic patch or prosthetic device</li>
              <li>Cardiac transplant recipients who develop cardiac valvulopathy</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Other Conditions That May Require Premedication
            </h4>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Artificial joints (in some cases, especially within the first two years after 
                joint replacement)</li>
              <li>Compromised immune systems</li>
              <li>Certain types of cancer treatment</li>
              <li>Organ transplants</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Dental Procedures That May Require Premedication
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Not all dental procedures require antibiotic premedication. The following procedures 
              are most likely to cause bleeding and may require premedication for at-risk patients:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Dental extractions</li>
              <li>Periodontal procedures including surgery, scaling and root planing, probing, and 
                recall maintenance</li>
              <li>Dental implant placement and reimplantation of avulsed teeth</li>
              <li>Endodontic (root canal) instrumentation or surgery only beyond the apex</li>
              <li>Subgingival placement of antibiotic fibers or strips</li>
              <li>Initial placement of orthodontic bands but not brackets</li>
              <li>Intraligamentary local anesthetic injections</li>
              <li>Prophylactic cleaning of teeth or implants where bleeding is anticipated</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Antibiotic Regimens for Premedication
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The specific antibiotic and dosage will be determined by your dentist based on your 
              medical history and any allergies you may have. Common regimens include:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Standard Regimen
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              For patients who can take oral medication: Amoxicillin 2 grams (or 50 mg/kg for 
              children) taken 30-60 minutes before the dental procedure.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Alternative Regimens
            </h4>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>For patients unable to take oral medication: Ampicillin 2 grams (or 50 mg/kg for 
                children) given intramuscularly or intravenously 30-60 minutes before the procedure</li>
              <li>For patients allergic to penicillin: Clindamycin 600 mg (or 20 mg/kg for children) 
                taken 30-60 minutes before the procedure</li>
              <li>Other alternatives include cephalexin, azithromycin, or clarithromycin</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Important Considerations
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Timing is Critical
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Antibiotics must be taken at the correct time to be effective. They should be taken 
              30-60 minutes before the dental procedure to ensure adequate levels in the bloodstream 
              when the procedure begins.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Allergies and Side Effects
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Always inform your dentist of any drug allergies you have. Common side effects of 
              antibiotics may include nausea, diarrhea, and allergic reactions. Contact your dentist 
              or physician if you experience any concerning symptoms.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Communication with Healthcare Providers
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              It's essential to keep both your dentist and your physician informed about your medical 
              conditions and any changes in your health status. Your dentist may need to consult with 
              your physician to determine the best premedication protocol for your specific situation.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When Premedication is Not Needed
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Many dental procedures do not require antibiotic premedication, even for patients with 
              heart conditions. These include:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Routine dental cleanings</li>
              <li>Dental X-rays</li>
              <li>Placement of removable prosthodontic or orthodontic appliances</li>
              <li>Adjustment of orthodontic appliances</li>
              <li>Placement of orthodontic brackets</li>
              <li>Shedding of primary teeth</li>
              <li>Trauma to the lips or oral mucosa</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Preparing for Your Dental Visit
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If you have a medical condition that may require antibiotic premedication, here's how 
              to prepare:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Before Your Appointment
            </h4>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Update your medical history with your dentist</li>
              <li>Bring a list of all current medications</li>
              <li>Inform your dentist of any drug allergies</li>
              <li>Ask your physician for a letter if you have a complex medical history</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              On the Day of Your Procedure
            </h4>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Take your antibiotic at the prescribed time</li>
              <li>Bring your medication with you to the appointment</li>
              <li>Inform the dental team if you forgot to take your medication</li>
              <li>Follow any special instructions from your dentist</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Recent Changes in Guidelines
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Guidelines for antibiotic premedication have evolved over time. The current guidelines 
              are more conservative than in the past, focusing on patients at the highest risk for 
              complications. This change reflects a better understanding of the risks and benefits 
              of antibiotic use.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Conclusion
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Antibiotic premedication is an important preventive measure for patients with certain 
              medical conditions. While not everyone needs it, for those who do, proper timing and 
              adherence to the prescribed regimen are crucial for effectiveness. Always communicate 
              openly with your dental team about your medical history and any concerns you may have 
              about premedication.
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