'use client'

import { useRef, useState, type RefObject } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  VIDEO_TESTIMONIAL_DESCRIPTION,
  VIDEO_TESTIMONIAL_SRC,
} from './videoTestimonialsShared'

interface VideoTestimonialFeatureProps {
  title: string
  eyebrow?: string
  showViewAllButton?: boolean
  className?: string
}

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 28.5c0 4.5-2.5 7.5-6 9.5l-2-3.5c2.5-1.5 4-3.5 4-6.5 0-1-.5-2-1.5-2.5-1-.5-1.5-1.5-1.5-2.5 0-2 1.5-3.5 4-3.5 3 0 5 2.5 5 6.5zm18 0c0 4.5-2.5 7.5-6 9.5l-2-3.5c2.5-1.5 4-3.5 4-6.5 0-1-.5-2-1.5-2.5-1-.5-1.5-1.5-1.5-2.5 0-2 1.5-3.5 4-3.5 3 0 5 2.5 5 6.5z" />
    </svg>
  )
}

/** Video wrapper — dimensions unchanged (max-w-5xl + aspect-video + object-contain) */
function FeaturedVideoPlayer({
  videoRef,
  isPlaying,
  onPlayClick,
  onPlayingChange,
}: {
  videoRef: RefObject<HTMLVideoElement>
  isPlaying: boolean
  onPlayClick: () => void
  onPlayingChange: (playing: boolean) => void
}) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col justify-center lg:ml-auto lg:mr-0 lg:h-full">
      <div className="group relative flex w-full flex-col justify-center rounded-2xl sm:rounded-[1.75rem] p-1.5 sm:p-2 bg-gradient-to-br from-[#441018]/15 via-[#441018]/5 to-transparent shadow-[0_20px_50px_-12px_rgba(68,16,24,0.35)] hover:shadow-[0_28px_60px_-10px_rgba(68,16,24,0.45)] transition-shadow duration-500 ring-1 ring-[#441018]/10">
        <div className="relative w-full overflow-hidden rounded-xl sm:rounded-3xl bg-black ring-1 ring-gray-200/80">
          <div className="relative w-full aspect-video">
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              controls={isPlaying}
              onPlay={() => onPlayingChange(true)}
              onPause={() => onPlayingChange(false)}
              onEnded={() => onPlayingChange(false)}
              className="absolute inset-0 h-full w-full object-contain"
              title="Spreckels Park Dental patient testimonial"
            >
              <source src={VIDEO_TESTIMONIAL_SRC} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                type="button"
                onClick={onPlayClick}
                className="absolute inset-0 z-10 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-[#441018]/40"
                aria-label="Play patient testimonial video"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#441018]/50 via-black/30 to-black/20 group-hover:from-[#441018]/60 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col items-center gap-4 sm:gap-5">
                  <span className="relative flex h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24 items-center justify-center">
                    <span
                      className="absolute inset-0 rounded-full bg-[#441018]/25 animate-ping"
                      aria-hidden="true"
                    />
                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#441018] text-white shadow-2xl ring-4 ring-white/40 group-hover:scale-105 group-hover:bg-[#5a1a2a] transition-all duration-300">
                      <svg
                        className="ml-1 h-10 w-10 sm:h-12 sm:w-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span className="rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-[#441018] shadow-md">
                    Play Patient Story
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VideoTestimonialFeature({
  title,
  eyebrow = 'Testimonials',
  showViewAllButton = false,
  className = '',
}: VideoTestimonialFeatureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = async () => {
    const video = videoRef.current
    if (!video) return
    try {
      await video.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(true)
    }
  }

  return (
    <section
      className={`relative overflow-hidden py-10 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-white via-gray-50/90 to-white ${className}`}
    >
      {/* Subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #441018 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#441018]/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#441018]/15 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-[#441018]/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#441018]/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch">
          {/* Left — copy (matches video column height on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 lg:col-span-5 relative flex lg:h-full lg:min-h-0"
          >
            <QuoteMark className="absolute -top-4 -left-2 w-20 h-20 text-[#441018]/[0.06] hidden lg:block" aria-hidden="true" />

            <div className="relative flex w-full flex-col rounded-2xl border border-gray-100 bg-white/95 backdrop-blur-sm shadow-lg px-6 py-8 sm:px-8 sm:py-10 lg:h-full lg:min-h-0 lg:py-8 xl:py-10 text-center lg:text-left">
              <div
                className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[#441018] to-[#5a1a2a] hidden lg:block"
                aria-hidden="true"
              />

              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                <span className="hidden lg:block h-px w-10 bg-[#441018]/30" aria-hidden="true" />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#441018]/15 bg-[#441018]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#441018]">
                  <QuoteMark className="w-4 h-4 text-[#441018]/70" />
                  Patient Story
                </span>
              </div>

              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                {eyebrow}
              </p>

              <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-4xl font-normal text-gray-900 font-heading leading-tight mb-5 sm:mb-6">
                {title}
              </h2>

              <p
                className="text-[16px] sm:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-6 lg:flex-1"
                style={{ color: '#656565' }}
              >
                {VIDEO_TESTIMONIAL_DESCRIPTION}
              </p>

              {showViewAllButton && (
                <Link
                  href="/video-testimonials"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#441018] text-white border border-[#441018] rounded-lg hover:bg-white hover:text-[#441018] transition-colors duration-200 font-semibold font-heading text-[15px] sm:text-base shadow-sm lg:mt-auto"
                >
                  View All Testimonials
                  <svg
                    className="h-5 w-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </motion.div>

          {/* Right — video (same max-w-5xl; aspect-video on mobile, fills column on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:col-span-7 flex lg:h-full lg:min-h-0"
          >
            <FeaturedVideoPlayer
              videoRef={videoRef}
              isPlaying={isPlaying}
              onPlayClick={handlePlayClick}
              onPlayingChange={setIsPlaying}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
