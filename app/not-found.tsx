import Link from 'next/link'
import { RingButton } from '@/components/CTAButtons'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="font-display text-7xl font-bold text-marine-200">404</span>
      <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
        Denne siden er brøytet bort
      </h1>
      <p className="mt-4 max-w-prose text-muted">
        Siden du leter etter finnes ikke – men hjelpen gjør det. Gå til forsiden, eller ring oss
        direkte hvis du trenger brøyting, strøing eller et tilbud.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <RingButton large />
        <Link href="/" className="font-semibold text-marine-600 hover:underline">
          Til forsiden →
        </Link>
      </div>
    </section>
  )
}
