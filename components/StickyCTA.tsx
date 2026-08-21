'use client'

import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics'
import { site } from '@/lib/site'
import { PhoneIcon, SmsIcon } from './CTAButtons'

/**
 * Fast handlingslinje nederst på mobil – Ring og SMS alltid ett trykk unna.
 * Skjules når tilbudsskjemaet er i viewport (dekker ellers send-knappen)
 * og når tastaturet er åpent (Android legger faste elementer over felter).
 */
export function StickyCTA() {
  const [skjult, setSkjult] = useState(false)

  useEffect(() => {
    let skjemaSynlig = false
    let tastaturApent = false
    const oppdater = () => setSkjult(skjemaSynlig || tastaturApent)

    const skjema = document.getElementById('tilbud')
    let observer: IntersectionObserver | undefined
    if (skjema) {
      observer = new IntersectionObserver(
        ([entry]) => {
          skjemaSynlig = entry.isIntersecting
          oppdater()
        },
        { threshold: 0.15 }
      )
      observer.observe(skjema)
    }

    const vv = window.visualViewport
    const vedResize = () => {
      if (!vv) return
      tastaturApent = vv.height < window.innerHeight * 0.72
      oppdater()
    }
    vv?.addEventListener('resize', vedResize)

    return () => {
      observer?.disconnect()
      vv?.removeEventListener('resize', vedResize)
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-night-700 bg-night-900 pb-[env(safe-area-inset-bottom)] transition-transform duration-200 md:hidden ${
        skjult ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <a
        href={site.phoneHref}
        onClick={() => track('ring_klikk', { kilde: 'stickybar' })}
        className="flex items-center justify-center gap-2 bg-beacon-500 py-3.5 font-display text-base font-bold uppercase tracking-wide text-night-950"
      >
        <PhoneIcon />
        Ring nå
      </a>
      <a
        href={site.smsHref}
        onClick={() => track('sms_klikk', { kilde: 'stickybar' })}
        className="flex flex-col items-center justify-center py-2 font-display font-bold uppercase tracking-wide text-white"
      >
        <span className="flex items-center gap-2 text-base">
          <SmsIcon />
          Send SMS
        </span>
        <span className="text-[0.65rem] font-semibold normal-case tracking-normal text-ice/80">
          Send adressen – få pris
        </span>
      </a>
    </div>
  )
}
