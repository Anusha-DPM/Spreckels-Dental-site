'use client'

import { motion } from 'framer-motion'
import { Layout } from '../../components'

export default function SiteMap() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#441018] pt-[160px] pb-16 lg:pt-[160px] lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Site Map
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Navigate through all pages and sections of our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="prose prose-lg max-w-none">
              <h2>Site Map</h2>
              
              <div className="space-y-8">
                {/* Main Pages */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Main Pages</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/" className="text-gray-600 hover:text-[#441018] transition-colors">Home</a></li>
                    <li><a href="/about" className="text-gray-600 hover:text-[#441018] transition-colors">About Us</a></li>
                    <li><a href="/office" className="text-gray-600 hover:text-[#441018] transition-colors">Office</a></li>
                    <li><a href="/dental-staff" className="text-gray-600 hover:text-[#441018] transition-colors">Dental Staff</a></li>
                    <li><a href="/services" className="text-gray-600 hover:text-[#441018] transition-colors">Services</a></li>
                    <li><a href="/blog" className="text-gray-600 hover:text-[#441018] transition-colors">Blog</a></li>
                    <li><a href="/contact" className="text-gray-600 hover:text-[#441018] transition-colors">Contact</a></li>
                    <li><a href="/appointment-request" className="text-gray-600 hover:text-[#441018] transition-colors">Appointment Request</a></li>
                    <li><a href="/insurance-billing" className="text-gray-600 hover:text-[#441018] transition-colors">Insurance & Billing</a></li>
                    <li><a href="/smile-gallery" className="text-gray-600 hover:text-[#441018] transition-colors">Smile Gallery</a></li>
                    <li><a href="/video-testimonials" className="text-gray-600 hover:text-[#441018] transition-colors">Video Testimonials</a></li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Services</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/general-cosmetic-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">General & Cosmetic Dentistry</a></li>
                    <li><a href="/dental-implants" className="text-gray-600 hover:text-[#441018] transition-colors">Dental Implants</a></li>
                    <li><a href="/all-on-4-implant-dentures" className="text-gray-600 hover:text-[#441018] transition-colors">All-on-4 Implant Dentures</a></li>
                    <li><a href="/services/orthodontics" className="text-gray-600 hover:text-[#441018] transition-colors">Orthodontics</a></li>
                    <li><a href="/services/sedation-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">Sedation Dentistry</a></li>
                    <li><a href="/services/teeth-whitening" className="text-gray-600 hover:text-[#441018] transition-colors">Teeth Whitening</a></li>
                    <li><a href="/services/platelet-rich-fibrin-therapy" className="text-gray-600 hover:text-[#441018] transition-colors">Platelet Rich Fibrin Therapy</a></li>
                  </ul>
                </div>

                {/* Patient Education - Main */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Education</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education" className="text-gray-600 hover:text-[#441018] transition-colors">Patient Education Overview</a></li>
                    <li><a href="/patient-education/educational-videos" className="text-gray-600 hover:text-[#441018] transition-colors">Educational Videos</a></li>
                  </ul>
                </div>

                {/* Patient Education - Cosmetic and General */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cosmetic & General Dentistry Education</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education/cosmetic-general-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">Overview</a></li>
                    <li><a href="/patient-education/cosmetic-general-dentistry/bonding" className="text-gray-600 hover:text-[#441018] transition-colors">Bonding</a></li>
                    <li><a href="/patient-education/cosmetic-general-dentistry/bridges" className="text-gray-600 hover:text-[#441018] transition-colors">Bridges</a></li>
                    <li><a href="/patient-education/cosmetic-general-dentistry/bruxism" className="text-gray-600 hover:text-[#441018] transition-colors">Bruxism</a></li>
                    <li><a href="/patient-education/cosmetic-general-dentistry/common-dental-procedures" className="text-gray-600 hover:text-[#441018] transition-colors">Common Dental Procedures</a></li>
                    <li><a href="/patient-education/cosmetic-general-dentistry/crown-lengthening" className="text-gray-600 hover:text-[#441018] transition-colors">Crown Lengthening</a></li>
                    <li><a href="/patient-education/cosmetic-general-dentistry/crowns" className="text-gray-600 hover:text-[#441018] transition-colors">Crowns</a></li>
                    <li><a href="/patient-education/cosmetic-general-dentistry/dentures" className="text-gray-600 hover:text-[#441018] transition-colors">Dentures</a></li>
                    <li><a href="/patient-education/cosmetic-general-dentistry/fillings" className="text-gray-600 hover:text-[#441018] transition-colors">Fillings</a></li>
                  </ul>
                </div>

                {/* Patient Education - Endodontics */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Endodontics Education</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education/endodontics" className="text-gray-600 hover:text-[#441018] transition-colors">Overview</a></li>
                    <li><a href="/patient-education/endodontics/apicoectomy" className="text-gray-600 hover:text-[#441018] transition-colors">Apicoectomy</a></li>
                    <li><a href="/patient-education/endodontics/broken-teeth" className="text-gray-600 hover:text-[#441018] transition-colors">Broken Teeth</a></li>
                    <li><a href="/patient-education/endodontics/combined-root-and-gum-problems" className="text-gray-600 hover:text-[#441018] transition-colors">Combined Root and Gum Problems</a></li>
                    <li><a href="/patient-education/endodontics/root-canal-faqs" className="text-gray-600 hover:text-[#441018] transition-colors">Root Canal FAQs</a></li>
                    <li><a href="/patient-education/endodontics/root-canal-retreatment" className="text-gray-600 hover:text-[#441018] transition-colors">Root Canal Retreatment</a></li>
                    <li><a href="/patient-education/endodontics/root-canal-treatment" className="text-gray-600 hover:text-[#441018] transition-colors">Root Canal Treatment</a></li>
                    <li><a href="/patient-education/endodontics/root-canal-treatment-for-children" className="text-gray-600 hover:text-[#441018] transition-colors">Root Canal Treatment for Children</a></li>
                    <li><a href="/patient-education/endodontics/tooth-sensitivity" className="text-gray-600 hover:text-[#441018] transition-colors">Tooth Sensitivity</a></li>
                  </ul>
                </div>

                {/* Patient Education - Emergency Care */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Care</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education/emergency-care" className="text-gray-600 hover:text-[#441018] transition-colors">Overview</a></li>
                    <li><a href="/patient-education/emergency-care/gum-emergencies" className="text-gray-600 hover:text-[#441018] transition-colors">Gum Emergencies</a></li>
                    <li><a href="/patient-education/emergency-care/orthodontic-emergencies" className="text-gray-600 hover:text-[#441018] transition-colors">Orthodontic Emergencies</a></li>
                    <li><a href="/patient-education/emergency-care/tooth-pain" className="text-gray-600 hover:text-[#441018] transition-colors">Tooth Pain</a></li>
                    <li><a href="/patient-education/emergency-care/traumatic-dental-injuries" className="text-gray-600 hover:text-[#441018] transition-colors">Traumatic Dental Injuries</a></li>
                  </ul>
                </div>

                 {/* Patient Education - Oral Health */}
                 <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Oral Health</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education/oral-health" className="text-gray-600 hover:text-[#441018] transition-colors">Overview</a></li>
                    <li><a href="/patient-education/oral-health/aging-and-oral-health" className="text-gray-600 hover:text-[#441018] transition-colors">Aging and Oral Health</a></li>
                    <li><a href="/patient-education/oral-health/antibiotic-premedication" className="text-gray-600 hover:text-[#441018] transition-colors">Antibiotic Premedication</a></li>
                    <li><a href="/patient-education/oral-health/bad-breath" className="text-gray-600 hover:text-[#441018] transition-colors">Bad Breath</a></li>
                    <li><a href="/patient-education/oral-health/blood-pressure-medications-and-your-oral-health" className="text-gray-600 hover:text-[#441018] transition-colors">Blood Pressure Medications</a></li>
                  </ul>
                </div>

                {/* Patient Education - Oral Hygiene */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Oral Hygiene</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education/oral-hygiene" className="text-gray-600 hover:text-[#441018] transition-colors">Overview</a></li>
                    <li><a href="/patient-education/oral-hygiene/how-to-brush-and-floss" className="text-gray-600 hover:text-[#441018] transition-colors">How to Brush and Floss</a></li>
                    <li><a href="/patient-education/oral-hygiene/how-to-prevent-cavities" className="text-gray-600 hover:text-[#441018] transition-colors">How to Prevent Cavities</a></li>
                    <li><a href="/patient-education/oral-hygiene/interdental-cleaning-devices" className="text-gray-600 hover:text-[#441018] transition-colors">Interdental Cleaning Devices</a></li>
                    <li><a href="/patient-education/oral-hygiene/mouthwash" className="text-gray-600 hover:text-[#441018] transition-colors">Mouthwash</a></li>
                    <li><a href="/patient-education/oral-hygiene/oral-hygiene-for-kids" className="text-gray-600 hover:text-[#441018] transition-colors">Oral Hygiene for Kids</a></li>
                    <li><a href="/patient-education/oral-hygiene/toothpaste" className="text-gray-600 hover:text-[#441018] transition-colors">Toothpaste</a></li>
                  </ul>
                </div>

                {/* Patient Education - Oral Surgery */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Oral Surgery Education</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education/oral-surgery" className="text-gray-600 hover:text-[#441018] transition-colors">Overview</a></li>
                    <li><a href="/patient-education/oral-surgery/blood-thinners-and-oral-surgery" className="text-gray-600 hover:text-[#441018] transition-colors">Blood Thinners</a></li>
                    <li><a href="/patient-education/oral-surgery/cleft-lip-and-palate" className="text-gray-600 hover:text-[#441018] transition-colors">Cleft Lip and Palate</a></li>
                    <li><a href="/patient-education/oral-surgery/corrective-jaw-surgery" className="text-gray-600 hover:text-[#441018] transition-colors">Corrective Jaw Surgery</a></li>
                    <li><a href="/patient-education/oral-surgery/extractions" className="text-gray-600 hover:text-[#441018] transition-colors">Extractions</a></li>
                    <li><a href="/patient-education/oral-surgery/facial-trauma-and-reconstructive-surgery" className="text-gray-600 hover:text-[#441018] transition-colors">Facial Trauma</a></li>
                    <li><a href="/patient-education/oral-surgery/oral-cancer-screenings-and-surgery" className="text-gray-600 hover:text-[#441018] transition-colors">Oral Cancer Screenings</a></li>
                    <li><a href="/patient-education/oral-surgery/oral-diagnosis-and-biopsies" className="text-gray-600 hover:text-[#441018] transition-colors">Oral Diagnosis and Biopsies</a></li>
                    <li><a href="/patient-education/oral-surgery/oral-surgery-procedures" className="text-gray-600 hover:text-[#441018] transition-colors">Procedures</a></li>
                  </ul>
                </div>

                 {/* Patient Education - Pediatric Dentistry */}
                 <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pediatric Dentistry Education</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education/pediatric-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">Overview</a></li>
                    <li><a href="/patient-education/pediatric-dentistry/about-pediatric-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">About Pediatric Dentistry</a></li>
                    <li><a href="/patient-education/pediatric-dentistry/fluoride-and-your-child" className="text-gray-600 hover:text-[#441018] transition-colors">Fluoride</a></li>
                    <li><a href="/patient-education/pediatric-dentistry/nitrous-oxide-for-children" className="text-gray-600 hover:text-[#441018] transition-colors">Nitrous Oxide</a></li>
                    <li><a href="/patient-education/pediatric-dentistry/pregnancy-and-your-childs-developing-teeth" className="text-gray-600 hover:text-[#441018] transition-colors">Pregnancy & Developing Teeth</a></li>
                    <li><a href="/patient-education/pediatric-dentistry/sealants" className="text-gray-600 hover:text-[#441018] transition-colors">Sealants</a></li>
                    <li><a href="/patient-education/pediatric-dentistry/sleep-apnea-in-children" className="text-gray-600 hover:text-[#441018] transition-colors">Sleep Apnea</a></li>
                  </ul>
                </div>

                {/* Patient Education - Technology */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technology Education</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/patient-education/technology" className="text-gray-600 hover:text-[#441018] transition-colors">Overview</a></li>
                    <li><a href="/patient-education/technology/air-abrasion" className="text-gray-600 hover:text-[#441018] transition-colors">Air Abrasion</a></li>
                    <li><a href="/patient-education/technology/anesthesia-wand" className="text-gray-600 hover:text-[#441018] transition-colors">Anesthesia Wand</a></li>
                    <li><a href="/patient-education/technology/cone-beam-ct-imaging" className="text-gray-600 hover:text-[#441018] transition-colors">Cone Beam CT Imaging</a></li>
                    <li><a href="/patient-education/technology/digital-dental-impressions" className="text-gray-600 hover:text-[#441018] transition-colors">Digital Dental Impressions</a></li>
                    <li><a href="/patient-education/technology/digital-x-rays" className="text-gray-600 hover:text-[#441018] transition-colors">Digital X-Rays</a></li>
                    <li><a href="/patient-education/technology/intraoral-camera" className="text-gray-600 hover:text-[#441018] transition-colors">Intraoral Camera</a></li>
                  </ul>
                </div>
                
                {/* Other Educational Pages */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Other Education</h3>
                  <ul className="ml-6 space-y-1">
                     <li><a href="/patient-education/implant-dentistry" className="text-gray-600 hover:text-[#441018] transition-colors">Implant Dentistry Education</a></li>
                     <li><a href="/patient-education/orthodontics" className="text-gray-600 hover:text-[#441018] transition-colors">Orthodontics Education</a></li>
                     <li><a href="/patient-education/periodontal-therapy" className="text-gray-600 hover:text-[#441018] transition-colors">Periodontal Therapy Education</a></li>
                     <li><a href="/patient-education/adult-orthodontic-treatment" className="text-gray-600 hover:text-[#441018] transition-colors">Adult Orthodontic Treatment</a></li>
                     <li><a href="/patient-education/aging-and-oral-health" className="text-gray-600 hover:text-[#441018] transition-colors">Aging and Oral Health</a></li>
                     <li><a href="/patient-education/air-abrasion" className="text-gray-600 hover:text-[#441018] transition-colors">Air Abrasion</a></li>
                     <li><a href="/patient-education/anesthesia-wand" className="text-gray-600 hover:text-[#441018] transition-colors">Anesthesia Wand</a></li>
                  </ul>
                </div>

                {/* Legal Pages */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Pages</h3>
                  <ul className="ml-6 space-y-1">
                    <li><a href="/privacy-policy" className="text-gray-600 hover:text-[#441018] transition-colors">Privacy Policy</a></li>
                    <li><a href="/disclaimer" className="text-gray-600 hover:text-[#441018] transition-colors">Disclaimer</a></li>
                    <li><a href="/sitemap.xml" className="text-gray-600 hover:text-[#441018] transition-colors">Site Map</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
