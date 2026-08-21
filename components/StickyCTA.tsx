import { site } from '@/lib/site'
import { PhoneIcon, SmsIcon } from './CTAButtons'

/** Fast handlingslinje nederst på mobil – Ring og SMS alltid ett trykk unna. */
export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-night-700 bg-night-900 md:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-3.5 font-display text-base font-bold uppercase tracking-wide text-night-950"
        style={{ background: 'var(--color-beacon-500)' }}
      >
        <PhoneIcon />
        Ring nå
      </a>
      <a
        href={site.smsHref}
        className="flex items-center justify-center gap-2 py-3.5 font-display text-base font-bold uppercase tracking-wide text-white"
      >
        <SmsIcon />
        Send SMS
      </a>
    </div>
  )
}
