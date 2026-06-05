'use client'

import Script from 'next/script'

const FORM_ID = 'PPE5tyRGLABGSWtnGQQf'
const FORM_EMBED_SCRIPT = 'https://link.digitalpresencematters.com/js/form_embed.js'
const FORM_SRC = `https://link.digitalpresencematters.com/widget/form/${FORM_ID}`

interface AppointmentRequestFormProps {
  title?: string
  variant?: 'footer' | 'contact'
  className?: string
}

export default function AppointmentRequestForm({
  title = 'Request An Appointment',
  variant = 'contact',
  className = '',
}: AppointmentRequestFormProps) {
  const isContact = variant === 'contact'
  const iframeId = isContact ? `inline-${FORM_ID}-contact` : `inline-${FORM_ID}`

  return (
    <>
      <Script src={FORM_EMBED_SCRIPT} strategy="lazyOnload" />
      <div className={`w-full min-w-0 ${className}`}>
        <h2
          className={
            isContact
              ? 'text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center font-heading'
              : 'text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6'
          }
        >
          {title}
        </h2>

        <div className="relative w-full min-w-0 overflow-hidden rounded-lg">
          <div className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[605px] h-[75vh] max-h-[605px] sm:h-[605px] sm:max-h-none">
            <iframe
              src={FORM_SRC}
              className="absolute inset-0 h-full w-full max-w-full"
              style={{
                border: 'none',
                borderRadius: '3px',
                display: 'block',
              }}
              id={iframeId}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="website footer form "
              data-height="605"
              data-layout-iframe-id={iframeId}
              data-form-id={FORM_ID}
              title="website footer form "
              allow="forms"
              loading="lazy"
              scrolling="yes"
            />
          </div>
        </div>
      </div>
    </>
  )
}
