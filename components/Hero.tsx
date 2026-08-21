import Image from 'next/image'
import { RingButton, SmsButton } from './CTAButtons'
import { Breadcrumbs } from './Breadcrumbs'

/**
 * Hero med skrå plogskjær-underkant og varsellys-kantlinje.
 * Mikrotillit-raden ligger rett under CTA-ene – risikoreversering
 * på beslutningspunktet, synlig over bretten også på mobil.
 */
export function Hero({
  tittel,
  undertittel,
  bilde = '/bilder/hero-broyting.jpg',
  bildeAlt = 'Maskinell snøbrøyting med traktor i Gjerdrum',
  smsHref,
  brodsmuler,
  children,
}: {
  tittel: string
  undertittel: string
  bilde?: string
  bildeAlt?: string
  smsHref?: string
  brodsmuler?: { navn: string; url: string }[]
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-night-900 pb-10 md:pb-14">
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
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 md:pb-20 md:pt-10">
        {brodsmuler && <Breadcrumbs items={brodsmuler} dark inline />}
        <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-ice">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-beacon-400 opacity-75 motion-reduce:hidden"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-beacon-500"></span>
          </span>
          Døgnbemanning i sesong – automatisk utrykning
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-wide text-white sm:text-5xl md:text-6xl">
          {tittel}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ice sm:text-xl">{undertittel}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <RingButton large kilde="hero" />
          <SmsButton large dark href={smsHref} kilde="hero" />
        </div>
        <p className="mt-5 text-sm text-ice/80">
          Uforpliktende tilbud · Svar innen 24 timer · Gratis befaring · Etablert 2005
        </p>
        {children}
      </div>
      {/* Plogskjær-underkant med varsellys-kantlinje */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-10 md:h-14">
        <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 12 H100 V4.5 L38 0 L0 7.5 Z" fill="var(--color-beacon-500)" />
          <path d="M0 12 H100 V5.6 L38 1.4 L0 8.6 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
