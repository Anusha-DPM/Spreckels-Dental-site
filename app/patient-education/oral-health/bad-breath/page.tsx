'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BadBreathPage() {
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
              Bad Breath
            </h1>
            <p className="text-[16px] sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-sans">
              Understanding the causes of bad breath and effective strategies for maintaining fresh breath 
              and optimal oral health.
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
              Understanding Bad Breath (Halitosis)
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Bad breath, medically known as halitosis, is a common condition that affects millions 
              of people worldwide. While it can be embarrassing and affect social interactions, 
              understanding its causes and implementing proper prevention strategies can help you 
              maintain fresh breath and confidence.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Common Causes of Bad Breath
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Bad breath can stem from various sources, both oral and systemic. Understanding the 
              underlying cause is the first step toward effective treatment.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Oral Health Issues
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The most common cause of bad breath is poor oral hygiene. When food particles remain 
              in the mouth, bacteria break them down, releasing foul-smelling compounds. Other oral 
              health issues include:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Gum Disease:</strong> Periodontal disease can cause persistent bad breath 
                due to bacterial infection and inflammation</li>
              <li><strong>Cavities:</strong> Tooth decay provides a breeding ground for bacteria that 
                produce unpleasant odors</li>
              <li><strong>Dry Mouth:</strong> Reduced saliva flow allows bacteria to thrive and 
                produce more odor-causing compounds</li>
              <li><strong>Oral Infections:</strong> Infections in the mouth, throat, or tonsils can 
                cause bad breath</li>
              <li><strong>Dental Appliances:</strong> Poorly cleaned dentures, braces, or other 
                dental devices can harbor bacteria</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Food and Lifestyle Factors
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Certain foods and habits can contribute to bad breath:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Strong Foods:</strong> Garlic, onions, spices, and certain cheeses can 
                cause temporary bad breath</li>
              <li><strong>Tobacco Use:</strong> Smoking and chewing tobacco not only cause bad breath 
                but also increase the risk of gum disease</li>
              <li><strong>Alcohol:</strong> Alcoholic beverages can dry out the mouth and contribute 
                to bad breath</li>
              <li><strong>Coffee:</strong> Coffee can cause dry mouth and leave behind compounds that 
                contribute to bad breath</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Medical Conditions
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Some medical conditions can cause or contribute to bad breath:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Respiratory Infections:</strong> Sinus infections, bronchitis, and other 
                respiratory conditions</li>
              <li><strong>Gastrointestinal Issues:</strong> Acid reflux, GERD, and other digestive 
                problems</li>
              <li><strong>Diabetes:</strong> Can cause a distinctive fruity breath odor</li>
              <li><strong>Liver or Kidney Disease:</strong> Can cause breath to smell like ammonia</li>
              <li><strong>Medications:</strong> Some medications can cause dry mouth or release 
                compounds that contribute to bad breath</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Prevention and Treatment Strategies
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Proper Oral Hygiene
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              The foundation of fresh breath is excellent oral hygiene:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Brush Twice Daily:</strong> Use a soft-bristled toothbrush and fluoride 
                toothpaste for at least two minutes</li>
              <li><strong>Floss Daily:</strong> Remove food particles and plaque between teeth</li>
              <li><strong>Clean Your Tongue:</strong> Use a tongue scraper or toothbrush to remove 
                bacteria from the tongue surface</li>
              <li><strong>Use Mouthwash:</strong> Choose an antibacterial mouthwash to kill 
                odor-causing bacteria</li>
              <li><strong>Replace Your Toothbrush:</strong> Change your toothbrush every 3-4 months 
                or when bristles become frayed</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Dietary Considerations
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              What you eat and drink can significantly impact your breath:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Stay Hydrated:</strong> Drink plenty of water to maintain saliva production</li>
              <li><strong>Eat Fresh Foods:</strong> Crunchy fruits and vegetables can help clean teeth 
                and stimulate saliva</li>
              <li><strong>Limit Sugary Foods:</strong> Sugar feeds bacteria that cause bad breath</li>
              <li><strong>Consider Probiotics:</strong> Some studies suggest probiotics may help 
                maintain oral health</li>
              <li><strong>Chew Sugar-Free Gum:</strong> Stimulates saliva production and helps clean 
                the mouth</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Lifestyle Changes
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Making certain lifestyle adjustments can help prevent bad breath:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Quit Smoking:</strong> Tobacco use is a major cause of bad breath and 
                oral health problems</li>
              <li><strong>Limit Alcohol:</strong> Alcohol can dry out the mouth and contribute to 
                bad breath</li>
              <li><strong>Manage Stress:</strong> Stress can affect saliva production and contribute 
                to dry mouth</li>
              <li><strong>Get Adequate Sleep:</strong> Poor sleep can affect oral health and 
                contribute to bad breath</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              When to Seek Professional Help
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While most cases of bad breath can be resolved with proper oral hygiene, some situations 
              require professional attention:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li>Persistent bad breath despite good oral hygiene</li>
              <li>Bad breath accompanied by other symptoms like tooth pain or bleeding gums</li>
              <li>Bad breath that develops suddenly or changes in character</li>
              <li>Bad breath in children that doesn't improve with proper brushing</li>
              <li>Bad breath associated with medical conditions or medications</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Professional Treatment Options
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Dental Treatment
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Your dentist can help identify and treat the underlying cause of bad breath:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Professional Cleaning:</strong> Removes plaque and tartar that can cause 
                bad breath</li>
              <li><strong>Treatment of Gum Disease:</strong> Addresses periodontal issues that 
                contribute to bad breath</li>
              <li><strong>Cavity Treatment:</strong> Fills cavities that can harbor bacteria</li>
              <li><strong>Dental Appliance Cleaning:</strong> Professional cleaning of dentures, 
                braces, or other devices</li>
            </ul>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Medical Evaluation
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              If oral causes are ruled out, your dentist may refer you to a physician to evaluate 
              for underlying medical conditions that could be causing bad breath.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Home Remedies and Quick Fixes
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              While not substitutes for proper oral hygiene, these can provide temporary relief:
            </p>

            <ul className="list-disc pl-6 text-[16px] text-gray-700 leading-relaxed font-sans mb-6 space-y-2">
              <li><strong>Saltwater Rinse:</strong> Can help kill bacteria and freshen breath</li>
              <li><strong>Baking Soda:</strong> Neutralizes acids and can help freshen breath</li>
              <li><strong>Herbs and Spices:</strong> Parsley, mint, and cloves can temporarily 
                mask bad breath</li>
              <li><strong>Apple Cider Vinegar:</strong> Some people find it helpful for bad breath, 
                though evidence is limited</li>
            </ul>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Special Considerations
            </h3>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Morning Breath
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Morning breath is common and occurs because saliva production decreases during sleep, 
              allowing bacteria to multiply. Brushing and flossing before bed and staying hydrated 
              can help minimize morning breath.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Bad Breath in Children
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Children can also experience bad breath, often due to poor oral hygiene, mouth 
              breathing, or foreign objects in the nose. Teaching proper brushing techniques and 
              supervising oral hygiene is important.
            </p>

            <h4 className="text-[22px] sm:text-xl font-semibold text-gray-900 font-heading mb-3">
              Bad Breath During Pregnancy
            </h4>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Hormonal changes during pregnancy can affect oral health and contribute to bad breath. 
              Maintaining good oral hygiene and regular dental checkups is especially important 
              during pregnancy.
            </p>

            <h3 className="text-[22px] sm:text-2xl font-normal text-gray-900 font-heading mb-4 mt-8">
              Conclusion
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-sans mb-6">
              Bad breath is a common but treatable condition. By understanding its causes and 
              implementing proper prevention strategies, you can maintain fresh breath and confidence. 
              Remember that persistent bad breath may indicate an underlying health issue, so don't 
              hesitate to seek professional help if home remedies don't resolve the problem.
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