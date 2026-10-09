'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RootCanalTreatmentForChildrenPage() {
  const relatedArticles = [
    {
      title: 'Root Canal Treatment',
      description: 'Comprehensive guide to root canal treatment, including the procedure, benefits, and what to expect during recovery.',
      href: '/patient-education/endodontics/root-canal-treatment'
    },
    {
      title: 'Root Canal FAQs',
      description: 'Common questions and answers about root canal treatment, procedure, recovery, and what to expect during your endodontic care journey.',
      href: '/patient-education/endodontics/root-canal-faqs'
    },
    {
      title: 'Broken Teeth',
      description: 'Understanding the causes, types, and treatment options for broken teeth and how endodontics can help restore damaged teeth.',
      href: '/patient-education/endodontics/broken-teeth'
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
              Root Canal Treatment for Children
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Specialized endodontic care for children, including baby teeth and young permanent 
              teeth, to preserve their oral health and development.
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
              Understanding Root Canal Treatment for Children
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Root canal treatment for children is a specialized dental procedure designed to 
              save infected or damaged teeth in young patients. While the concept may seem 
              concerning to parents, modern pediatric endodontics is safe, effective, and 
              often the best way to preserve your child's oral health and development.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Why Children May Need Root Canal Treatment
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Children may require root canal treatment for several reasons:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Deep cavities that have reached the pulp</li>
              <li>Dental trauma from falls, sports injuries, or accidents</li>
              <li>Severe tooth decay that has compromised the nerve</li>
              <li>Infection in baby teeth that could affect permanent teeth</li>
              <li>Developmental issues with tooth structure</li>
              <li>Previous dental work that has failed</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Baby Teeth vs. Permanent Teeth
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The approach to root canal treatment differs between baby teeth and permanent teeth:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Baby Teeth (Primary Teeth)
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Baby teeth serve as important placeholders for permanent teeth and help guide 
              proper jaw development. Preserving them is crucial for:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Maintaining proper spacing for permanent teeth</li>
              <li>Supporting normal speech development</li>
              <li>Ensuring proper chewing and nutrition</li>
              <li>Preventing infection from spreading to permanent teeth</li>
              <li>Maintaining facial structure and appearance</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Permanent Teeth
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Root canal treatment on permanent teeth in children follows similar principles 
              to adult treatment but with special considerations for:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Incomplete root development</li>
              <li>Younger, more sensitive pulp tissue</li>
              <li>Different treatment techniques for immature teeth</li>
              <li>Long-term planning for dental development</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Special Considerations for Children
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Pediatric root canal treatment requires special considerations:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Age-Appropriate Communication
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Dentists use child-friendly language and explanations to help children understand 
              what will happen during treatment, reducing fear and anxiety.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Behavioral Management
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Techniques such as tell-show-do, positive reinforcement, and distraction are 
              used to help children cooperate during treatment.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Sedation Options
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              For anxious children or complex cases, various sedation options may be available, 
              including nitrous oxide (laughing gas) or oral sedation.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Types of Pediatric Root Canal Treatment
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Different approaches are used depending on the child's age and tooth type:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Pulpotomy (Baby Teeth)
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A partial root canal treatment that removes only the infected portion of the 
              pulp in the crown of the tooth, leaving the healthy root pulp intact. This 
              is often sufficient for baby teeth.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Pulpectomy (Complete Root Canal)
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Removes all the pulp from both the crown and roots of the tooth. This is 
              performed when the infection has spread to the root canals.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Apexification (Immature Permanent Teeth)
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              A specialized procedure for permanent teeth that haven't finished developing 
              their roots. This encourages the root to continue developing and close properly.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Signs Your Child May Need Root Canal Treatment
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Watch for these symptoms that may indicate the need for treatment:
            </p>
            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Complaints of tooth pain, especially when eating</li>
              <li>Sensitivity to hot or cold foods and drinks</li>
              <li>Swelling or tenderness in the gums</li>
              <li>Darkening or discoloration of a tooth</li>
              <li>Pus drainage or a pimple on the gums</li>
              <li>Reluctance to chew on one side of the mouth</li>
              <li>Fever or general malaise</li>
              <li>Bad breath or taste in the mouth</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              The Treatment Process
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The procedure is adapted to be child-friendly and comfortable:
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Preparation and Comfort
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The dentist will explain the procedure in child-friendly terms and ensure 
              your child is comfortable. Local anesthesia is used to numb the area completely.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Treatment Steps
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The procedure involves removing infected tissue, cleaning the canals, and 
              filling them with appropriate materials. For baby teeth, a special filling 
              material that dissolves with the root is often used.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Restoration
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              After treatment, the tooth is restored with a filling or crown to protect 
              it and restore function. For baby teeth, stainless steel crowns are commonly used.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Recovery and Aftercare
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Post-treatment care is important for successful healing:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Immediate Care
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Your child may experience some mild discomfort that can be managed with 
              over-the-counter pain relievers. Avoid chewing on the treated tooth until 
              it's fully restored.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Oral Hygiene
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Continue normal brushing and flossing, but be gentle around the treated tooth. 
              Supervise young children to ensure proper cleaning.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Follow-up Care
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Attend all scheduled follow-up appointments to monitor healing and ensure 
              the treatment is successful.
            </p>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Success Rates and Long-term Outcomes
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Pediatric root canal treatment has excellent success rates:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Baby teeth: 85-95% success rate</li>
              <li>Permanent teeth: 90-95% success rate</li>
              <li>Proper treatment preserves space for permanent teeth</li>
              <li>Prevents infection from affecting developing permanent teeth</li>
              <li>Maintains normal oral development and function</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention Strategies
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              To prevent the need for root canal treatment in children:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Establish good oral hygiene habits early</li>
              <li>Regular dental checkups starting by age 1</li>
              <li>Limit sugary foods and drinks</li>
              <li>Use fluoride toothpaste and consider fluoride treatments</li>
              <li>Wear mouthguards during sports activities</li>
              <li>Address cavities promptly before they reach the pulp</li>
              <li>Supervise brushing until age 8-10</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Seek Immediate Care
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Contact your dentist immediately if your child experiences:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Severe pain that doesn't respond to medication</li>
              <li>Visible swelling in the face or mouth</li>
              <li>Fever or signs of infection</li>
              <li>Difficulty breathing or swallowing</li>
              <li>An allergic reaction to medication</li>
              <li>The temporary filling or crown falls out</li>
            </ul>

            <h3 className="text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Supporting Your Child Through Treatment
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              As a parent, you can help your child have a positive experience:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Preparation
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Explain the procedure in simple, positive terms. Avoid using scary words 
              and focus on how the treatment will help them feel better.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Comfort and Reassurance
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Stay calm and reassuring during the appointment. Your child will pick up 
              on your emotions, so maintaining a positive attitude is important.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 font-heading mb-3">
              Rewards and Recognition
            </h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Praise your child for their bravery and cooperation. Small rewards can 
              help make the experience more positive.
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