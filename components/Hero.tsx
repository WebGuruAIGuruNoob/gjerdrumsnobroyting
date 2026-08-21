import Image from 'next/image'
import { RingButton, SmsButton } from './CTAButtons'

export function Hero({
  tittel,
  undertittel,
  bilde = '/bilder/hero-broyting.jpg',
  bildeAlt = 'Maskinell snøbrøyting med traktor i Gjerdrum',
  smsHref,
  children,
}: {
  tittel: string
  undertittel: string
  bilde?: string
  bildeAlt?: string
  smsHref?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-night-900">
      <Image
        src={bilde}
        alt={bildeAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div
        className="absolute inset-0 -z-0"
        style={{
          background:
            'linear-gradient(to top, var(--color-night-950) 0%, transparent 55%), linear-gradient(to right, rgba(8,18,32,0.85) 0%, rgba(8,18,32,0.35) 70%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-wide text-white sm:text-5xl md:text-6xl">
          {tittel}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ice sm:text-xl">{undertittel}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <RingButton large />
          <SmsButton large dark href={smsHref} />
        </div>
        {children}
      </div>
    </section>
  )
}
