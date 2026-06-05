'use client'

import Script from 'next/script'

const FORM_ID = 'PPE5tyRGLABGSWtnGQQf'
const FORM_EMBED_SCRIPT = 'https://link.digitalpresencematters.com/js/form_embed.js'
const FORM_SRC = `https://link.digitalpresencematters.com/widget/form/${FORM_ID}`
const FORM_HEIGHT = 605

interface AppointmentRequestFormProps {
  title?: string
  variant?: 'footer' | 'contact'
  className?: string
}

export default function AppointmentRequestForm({
  title = 'Request An Appointment',
  variant = 'footer',
  className = '',
}: AppointmentRequestFormProps) {
  const isContact = variant === 'contact'
  const iframeId = isContact ? `inline-${FORM_ID}-contact` : `inline-${FORM_ID}`

  return (
    <>
      <Script src={FORM_EMBED_SCRIPT} strategy="lazyOnload" />
      <div className={className}>
        <h2
          className={
            isContact
              ? 'text-[22px] sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center font-heading'
              : 'text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6'
          }
        >
          {title}
        </h2>

        <div
          className={isContact ? 'w-full overflow-hidden rounded-lg' : 'w-full rounded-lg'}
          style={{ height: `${FORM_HEIGHT}px`, minHeight: `${FORM_HEIGHT}px` }}
        >
          <iframe
            src={FORM_SRC}
            style={{
              width: '100%',
              height: '100%',
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
            data-height={String(FORM_HEIGHT)}
            data-layout-iframe-id={iframeId}
            data-form-id={FORM_ID}
            title="website footer form "
            allow="forms"
            loading="lazy"
            scrolling="yes"
          />
        </div>
      </div>
    </>
  )
}
