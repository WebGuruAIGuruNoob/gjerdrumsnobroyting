import type { Metadata } from 'next'
import Link from 'next/link'
import { RingButton } from '@/components/CTAButtons'

export const metadata: Metadata = {
  title: 'Takk for henvendelsen!',
  description: 'Vi har mottatt forespørselen din og kontakter deg innen 24 timer.',
  robots: { index: true, follow: true },
}

export default function TakkSide() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span aria-hidden="true" className="font-display text-6xl">✅</span>
      <h1 className="mt-6 font-display text-4xl font-bold uppercase tracking-wide text-marine-800">
        Takk! Vi har mottatt forespørselen din
      </h1>
      <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
        Vi kontakter deg innen 24 timer – som regel raskere. Haster det, eller vil du bare avklare
        noe med en gang? Ring oss direkte:
      </p>
      <div className="mt-8">
        <RingButton large />
      </div>
      <Link href="/" className="mt-10 font-semibold text-marine-600 hover:underline">
        ← Tilbake til forsiden
      </Link>
    </section>
  )
}
