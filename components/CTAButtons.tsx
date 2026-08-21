'use client'

import { track } from '@vercel/analytics'
import { site } from '@/lib/site'

function PhoneIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  )
}

function SmsIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM7 9h10v2H7V9Zm7 5H7v-2h7v2Zm3-6H7V6h10v2Z" />
    </svg>
  )
}

export function RingButton({
  large = false,
  label = 'Ring 48 42 42 88',
  kilde = 'ukjent',
}: {
  large?: boolean
  label?: string
  kilde?: string
}) {
  return (
    <a
      href={site.phoneHref}
      onClick={() => track('ring_klikk', { kilde })}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-beacon-500 font-display font-bold uppercase tracking-wide text-night-950 shadow-md transition hover:bg-beacon-400 ${
        large ? 'px-7 py-4 text-lg' : 'px-4 py-2.5 text-sm'
      }`}
    >
      <PhoneIcon className={large ? 'h-6 w-6' : 'h-4 w-4'} />
      {label}
    </a>
  )
}

export function SmsButton({
  large = false,
  href,
  dark = false,
  label = 'Send SMS',
  kilde = 'ukjent',
}: {
  large?: boolean
  href?: string
  dark?: boolean
  label?: string
  kilde?: string
}) {
  return (
    <a
      href={href ?? site.smsHref}
      onClick={() => track('sms_klikk', { kilde })}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 font-display font-bold uppercase tracking-wide transition ${
        dark
          ? 'border-white/60 text-white hover:border-white hover:bg-white/10'
          : 'border-marine-600 text-marine-700 hover:bg-marine-50'
      } ${large ? 'px-7 py-4 text-lg' : 'px-4 py-2.5 text-sm'}`}
    >
      <SmsIcon className={large ? 'h-6 w-6' : 'h-4 w-4'} />
      {label}
    </a>
  )
}

/** Sekundær-CTA for desktop, der sms:-lenker ofte feiler stille. */
export function TilbudButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href="/#tilbud"
      onClick={() => track('tilbud_klikk', { kilde: 'header' })}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 border-marine-600 font-display font-bold uppercase tracking-wide text-marine-700 transition hover:bg-marine-50 ${
        large ? 'px-7 py-4 text-lg' : 'px-4 py-2.5 text-sm'
      }`}
    >
      Få tilbud
    </a>
  )
}

export { PhoneIcon, SmsIcon }
