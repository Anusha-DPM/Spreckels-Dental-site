
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const burgundy = '#441018'
const gold = '#c5a16a'

const benefits = [
  {
    number: '01',
    title: 'A Smile That Stays in Place',
    description:
      'No clicking, no slipping, and no second-guessing yourself in the middle of a conversation.',
    icon: '✓',
  },
  {
    number: '02',
    title: 'Meals Without a Menu Check',
    description:
      'A stable foundation makes it easier to enjoy crunchy, chewy, and hearty foods again.',
    icon: '✦',
  },
  {
    number: '03',
    title: 'Teeth That Look Like Yours',
    description:
      'Each restoration is shaped to suit your face, your smile line, and the look you want.',
    icon: '♡',
  },
  {
    number: '04',
    title: 'Support for Your Jawbone',
    description:
      'Implants stimulate the bone beneath them, which helps preserve the structure that is often lost after tooth loss.',
    icon: '✧',
  },
  {
    number: '05',
    title: 'Care That Fits Your Routine',
    description:
      'Brush, clean around the implants, and keep up with checkups. That is all it takes to look after your new smile.',
    icon: '✓',
  },
]

const treatmentSteps = [
  {
    number: '01',
    title: 'Let’s Talk and Take a Look',
    description:
      'Your visit starts with a conversation about what you want, followed by an exam and imaging to see what your mouth and jawbone need.',
  },
  {
    number: '02',
    title: 'A Plan Built Around You',
    description:
      'We map out where the implants will go, how your teeth will be designed, and what the timeline looks like, so nothing comes as a surprise.',
  },
  {
    number: '03',
    title: 'Laying the Foundation',
    description:
      'Implants are placed with your comfort in mind, creating the base that will support your new arch of teeth.',
  },
  {
    number: '04',
    title: 'Putting Your Smile Together',
    description:
      'Your custom teeth are secured to the implants, and we check how they look, feel, and fit together when you bite.',
  },
  {
    number: '05',
    title: 'Staying by Your Side',
    description:
      'Follow-up visits let us check your healing and keep your implants and gums in great shape for the long run.',
  },
]

const faqs = [
  {
    question: 'Will All-on-X feel different from my dentures?',
    answer:
      'Most patients notice that fixed teeth feel more secure and more natural than a removable denture, since nothing rests on the gums and shifts around.',
  },
  {
    question: 'Do I really need fewer implants than I think?',
    answer:
      'Yes. A full arch is typically supported by four to six implants, and Dr. Rujul G. Parikh DDS will recommend the right number for you.',
  },
  {
    question: 'What if I was told I do not have enough bone?',
    answer:
      'Do not rule yourself out. Imaging during your consultation shows what your jaw can support and which options may work for you.',
  },
  {
    question: 'Should I be nervous about the procedure?',
    answer:
      'It is natural to have questions. We talk through comfort and sedation options beforehand, so you know what to expect and feel at ease.',
  },
  {
    question: 'What does life look like once I am healed?',
    answer:
      'Day to day, you brush, clean around your implants, and visit us regularly. Your teeth are there when you wake up and there when you go to bed.',
  },
]

const stats = [
  { number: '25+', label: 'Years of experience' },
  { number: '10,000+', label: 'Smiles transformed' },
  { number: '500+', label: 'Successful procedures' },
  { number: '5,000+', label: 'Happy patients' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function AllOnXExperienceSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="all-on-x-page overflow-hidden bg-white text-[#292525]">
      <style jsx global>{`
        .all-on-x-page {
          font-family: inherit;
        }

        .all-on-x-page h1,
        .all-on-x-page h2,
        .all-on-x-page h3 {
          font-family: inherit;
          font-weight: 400;
        }

        .all-on-x-page h1 {
          font-size: 27px;
          line-height: 1.25;
        }

        @media (min-width: 640px) {
          .all-on-x-page h1 {
            font-size: 1.875rem;
          }
        }

        @media (min-width: 768px) {
          .all-on-x-page h1 {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 1024px) {
          .all-on-x-page h1 {
            font-size: 3rem;
          }
        }

        .all-on-x-page h2 {
          line-height: 1.25;
        }

        .all-on-x-page h3 {
          line-height: 1.35;
        }

        .all-on-x-page p {
          font-family: inherit;
        }

        .all-on-x-page a,
        .all-on-x-page button {
          font-family: inherit;
        }
      `}</style>

      {/* INTRODUCTION */}
      <section className="relative bg-[#faf7f5] py-14 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="text-center lg:text-left"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e4d6d1] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#441018]">
              <span className="h-2 w-2 rounded-full bg-[#c5a16a]" />
              All-on-X Dental Implants
            </span>

            <h1 className="mb-6 text-3xl font-normal leading-tight tracking-tight text-[#441018] sm:text-4xl lg:text-[46px]">
              Eat What You Love, Talk Freely, and Smile Without Holding Back
            </h1>

            <div className="space-y-4 text-base leading-relaxed text-[#656565] sm:text-lg">
              <p>
                Think about the last time you skipped a favorite food,
                covered your mouth in a photo, or felt your denture move at
                the wrong moment. Living with missing or failing teeth means
                making small adjustments all day long. All-on-X dental
                implants at Spreckels Park Dental are designed to take those
                adjustments off your plate. A full arch of teeth is secured
                to a few carefully placed implants, so your smile stays put,
                and your focus goes back to the people and moments in front
                of you.
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="/appointment-request"
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[#441018] px-7 py-4 text-[15px] font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#60212b] focus:outline-none focus:ring-2 focus:ring-[#c5a16a] focus:ring-offset-2 sm:text-base"
              >
                Book Appointment
              </a>

              <a
                href="tel:+12098251030"
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[#441018] bg-transparent px-7 py-4 text-[15px] font-semibold text-[#441018] transition-all duration-300 hover:bg-[#441018] hover:text-white sm:text-base"
              >
                Call (209) 825-1030
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          >
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-3xl border-r-2 border-t-2 border-[#c5a16a] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#eee5e1] shadow-xl sm:aspect-[6/5]">
              <Image
                src="/HomeAllOnXDentalImplant.jpg"
                alt="All-on-X dental implant treatment at Spreckels Park Dental"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
                <p className="text-lg font-semibold text-white sm:text-xl">
                  A smile you can count on
                </p>
                <p className="mt-1 text-sm leading-6 text-white/90">
                  Personalized full-arch implant care in Manteca, CA
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 right-4 rounded-xl border border-[#eee5e1] bg-white p-4 shadow-lg sm:bottom-6 sm:left-auto sm:right-[-18px] sm:max-w-[250px] sm:p-5">
              <p className="text-sm font-semibold text-[#441018]">
                Personalized treatment planning
              </p>
              <p className="mt-1 text-xs leading-5 text-[#656565]">
                Explore an option designed around your oral health and goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALL-ON-X EXPLAINED */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-[#9a784c]">
              Understand Your Options
            </span>
            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#441018] sm:text-4xl">
              All-on-X, Explained Simply
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#c5a16a]" />
          </motion.div>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-[#eee5e1] bg-[#faf7f5] p-6 sm:p-9"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#441018] text-xl text-white">
                +
              </div>
              <div className="space-y-4 text-base leading-relaxed text-[#656565] sm:text-lg">
                <p>
                  Most people expect that replacing a full arch means placing
                  an implant for every tooth. That is not how All-on-X works.
                  Instead, four to six implants act like strong anchor points,
                  and a complete arch of custom teeth is attached on top of
                  them. Think of it like a sturdy bridge supported by a few
                  well-placed pillars instead of one for every plank.
                </p>
                <p>
                  Because the implants are positioned strategically, this
                  approach makes smart use of the bone you already have. The
                  result is a restoration that feels steady, looks natural,
                  and does not rely on adhesives or a removable plate.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="relative overflow-hidden rounded-2xl bg-[#441018] p-7 text-white sm:p-10"
            >
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
              <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-white/10" />

              <span className="relative text-xs font-bold uppercase tracking-[0.18em] text-[#dfc49b]">
                A closer look
              </span>
              <h3 className="relative mt-4 text-2xl font-normal leading-snug text-white sm:text-3xl">
                A complete arch, supported by strategically placed implants.
              </h3>

              <div className="relative mt-8 space-y-5">
                {[
                  'Four to six implants may support a full arch.',
                  'Custom teeth are secured to the implants.',
                  'Your plan is based on your individual oral health.',
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-[#dfc49b]">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-white/90 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/appointment-request"
                className="relative mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-[15px] font-semibold text-[#441018] transition hover:bg-[#f0e6dc] sm:w-auto sm:text-base"
              >
                Explore Your Options
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CANDIDACY */}
      <section className="bg-[#faf7f5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-[#9a784c]">
              Is It Right for You?
            </span>
            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#441018] sm:text-4xl">
              Could All-on-X Be the Right Fit for You?
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-[#c5a16a]" />
            <p className="mt-6 text-base leading-relaxed text-[#656565] sm:text-lg">
              You may want to explore All-on-X if any of this sounds familiar:
            </p>

            <div className="mt-7 rounded-2xl bg-[#441018] p-6 text-white sm:p-8">
              <p className="text-lg font-normal">
                Your next step starts with a conversation.
              </p>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Not sure where you stand? That is completely normal. A
                consultation gives you real answers based on your mouth, your
                jawbone, and your goals, with no pressure to decide on the
                spot.
              </p>
              <a
                href="/appointment-request"
                className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-[15px] font-semibold text-[#441018] transition hover:bg-[#f0e6dc] sm:w-auto sm:text-base"
              >
                Schedule a Consultation
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {[
              'Your remaining teeth are decayed, damaged, or loosened by gum disease, and saving them is no longer realistic',
              'Your dentures slip, rub, or make certain foods feel off limits',
              'You have been patching problems one tooth at a time and want a lasting, complete solution',
              'You would rather have fixed teeth than a removable appliance you take out each night',
              'You are ready to rebuild your bite and your confidence in one thoughtful plan',
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl border border-[#eee5e1] bg-white p-5 transition duration-300 hover:border-[#c5a16a] hover:shadow-sm sm:p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5ece6] text-sm font-bold text-[#441018]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-7 text-[#565050] sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DOCTOR PROFILE */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-2xl border border-[#eee5e1] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative min-h-[340px] bg-[#f2e9e5] sm:min-h-[440px] lg:min-h-full"
              >
                <Image
                  src="/Rujul.jpeg"
                  alt="Dr. Rujul G. Parikh DDS"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#441018]/95 to-transparent p-6 pt-20 sm:p-8 sm:pt-24">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dfc49b]">
                    Your Dental Care Team
                  </p>
                  <h3 className="mt-2 text-2xl font-normal text-white sm:text-3xl">
                    Dr. Rujul G. Parikh DDS
                  </h3>
                  <p className="mt-2 text-sm text-white/90">
                    General & Implant Dentist
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 sm:p-9 lg:p-12"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-[#9a784c]">
                  Experience & Personalized Care
                </span>
                <h2 className="mt-4 text-3xl font-normal leading-tight text-[#441018] sm:text-4xl">
                  The Dentist Who Will Guide You Through It
                </h2>
                <div className="mt-5 h-1 w-16 rounded-full bg-[#c5a16a]" />

                <p className="mt-6 text-base leading-relaxed text-[#656565] sm:text-lg">
                  Dr. Rujul G. Parikh DDS has spent more than 25 years helping
                  Manteca families keep their smiles healthy, and he treats
                  every full-arch case as personal. He is known for explaining
                  each step in plain language, so you always know what is
                  happening and why. From dental implants and All-on-X
                  restorations to dentures, crowns, and cosmetic care, he
                  offers the range of experience that helps patients feel
                  comfortable and informed at every visit.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#faf7f5] p-4">
                    <p className="text-2xl font-bold text-[#441018]">25+</p>
                    <p className="mt-1 text-xs leading-5 text-[#656565] sm:text-sm">
                      Years of experience
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#faf7f5] p-4">
                    <p className="text-2xl font-bold text-[#441018]">All-on-X</p>
                    <p className="mt-1 text-xs leading-5 text-[#656565] sm:text-sm">
                      Implant treatment options
                    </p>
                  </div>
                </div>

                <a
                  href="/appointment-request"
                  className="mt-7 inline-flex min-h-[50px] w-full items-center justify-center rounded-lg bg-[#441018] px-7 py-4 text-[15px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#60212b] sm:w-auto sm:text-base"
                >
                  Book Appointment
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#faf7f5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-[#9a784c]">
              Designed Around Your Life
            </span>
            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#441018] sm:text-4xl">
              What Changes When Your Teeth Stay Put
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#c5a16a]" />
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`group rounded-2xl border border-[#eee5e1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a16a] hover:shadow-lg sm:p-7 ${
                  index === 3 ? 'lg:col-start-1' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5ece6] text-xl text-[#441018] transition group-hover:bg-[#441018] group-hover:text-white">
                    {benefit.icon}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-[#c5a16a]">
                    {benefit.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-normal leading-snug text-[#441018]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#656565] sm:text-base">
                  {benefit.description}
                </p>
              </motion.article>
            ))}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center rounded-2xl bg-[#441018] p-7 text-white sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dfc49b]">
                Ready to learn more?
              </p>
              <h3 className="mt-4 text-2xl font-normal leading-snug">
                Let’s talk about your smile.
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Get answers about your treatment options and the next steps
                for your individual needs.
              </p>
              <a
                href="/appointment-request"
                className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-5 py-3 text-[15px] font-semibold text-[#441018] transition hover:bg-[#f0e6dc] sm:text-base"
              >
                Book Appointment
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-[#9a784c]">
              Your Treatment Journey
            </span>
            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#441018] sm:text-4xl">
              From Your First Visit to Your New Smile
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#c5a16a]" />
            <p className="mt-5 text-base leading-relaxed text-[#656565] sm:text-lg">
              Every step is planned around your needs, comfort, and oral health.
            </p>
          </motion.div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="absolute bottom-8 left-[23px] top-8 hidden w-px bg-[#e5d4c5] sm:block" />
            <div className="space-y-5 sm:space-y-6">
              {treatmentSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="relative flex items-start gap-4 rounded-2xl border border-[#eee5e1] bg-white p-5 shadow-sm transition hover:border-[#c5a16a] sm:gap-6 sm:p-7"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#441018] text-sm font-bold text-white sm:h-14 sm:w-14">
                    {step.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-normal leading-snug text-[#441018] sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#656565] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf7f5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-[#9a784c]">
              Your Questions Answered
            </span>
            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#441018] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-[#c5a16a]" />
            <p className="mt-6 text-base leading-relaxed text-[#656565] sm:text-lg">
              Learn more about All-on-X, what to expect, and how to take your
              next step with confidence.
            </p>

            <div className="mt-7 rounded-2xl bg-[#441018] p-6 text-white">
              <h3 className="text-lg font-normal">Still have questions?</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Our team can help you understand your treatment options.
              </p>
              <a
                href="tel:+12098251030"
                className="mt-5 inline-flex min-h-[46px] w-full items-center justify-center rounded-lg border border-white/60 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white hover:text-[#441018] sm:text-base"
              >
                Call (209) 825-1030
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border bg-white transition-colors duration-300 ${
                    isOpen
                      ? 'border-[#c5a16a] shadow-sm'
                      : 'border-[#eee5e1]'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex min-h-[68px] w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="text-sm font-semibold leading-6 text-[#441018] sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-45 bg-[#441018] text-white'
                          : 'bg-[#f5ece6] text-[#441018]'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <div className="mb-4 h-px bg-[#eee5e1]" />
                      <p className="text-sm leading-7 text-[#656565] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE STATS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-[#9a784c]">
              Spreckels Park Dental
            </span>
            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#441018] sm:text-4xl">
              Experience That Shows in Every Smile
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#c5a16a]" />
            <p className="mt-5 text-base leading-relaxed text-[#656565] sm:text-lg">
              Choosing a dentist for a major treatment is a big decision. At
              Spreckels Park Dental, you will find a team that listens,
              explains, and cares about how your smile looks and works for
              years to come.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-[#eee5e1] bg-[#faf7f5] px-3 py-7 text-center transition hover:border-[#c5a16a] hover:shadow-md sm:px-5 sm:py-9"
              >
                <p className="text-2xl font-bold tracking-tight text-[#441018] sm:text-4xl">
                  {stat.number}
                </p>
                <div className="mx-auto my-4 h-1 w-8 rounded-full bg-[#c5a16a]" />
                <p className="text-xs leading-5 text-[#656565] sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#441018] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"
        >
          <span className="inline-flex rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#dfc49b]">
            Your Smile Starts Here
          </span>

          <h2 className="mt-6 text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-5xl">
            Your New Smile Starts With One Conversation
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#c5a16a]" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            You do not need to have every answer before you call. Bring your
            questions, your concerns, and your goals, and we will help you
            see what All-on-X could do for you. Schedule your consultation at
            Spreckels Park Dental and take the first step toward teeth you
            can count on.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/appointment-request"
              className="inline-flex min-h-[54px] items-center justify-center rounded-lg bg-white px-8 py-4 text-[15px] font-semibold uppercase tracking-wide text-[#441018] transition duration-300 hover:bg-[#f0e6dc] sm:text-base"
            >
              Contact Us
            </a>
            <a
              href="tel:+12098251030"
              className="inline-flex min-h-[54px] items-center justify-center rounded-lg border border-white px-8 py-4 text-[15px] font-semibold uppercase tracking-wide text-white transition duration-300 hover:bg-white hover:text-[#441018] sm:text-base"
            >
              Call (209) 825-1030
            </a>
          </div>

          <p className="mt-7 text-sm text-white/65">
            Spreckels Park Dental · Manteca, California
          </p>
        </motion.div>
      </section>
    </main>
  )
}
