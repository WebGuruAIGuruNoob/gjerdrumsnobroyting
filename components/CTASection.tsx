import { RingButton, SmsButton } from './CTAButtons'

/** Fullbredde CTA-bånd – avslutter alle landingssider. */
export function CTASection({
  tittel = 'Klar for en bekymringsfri vinter?',
  tekst = 'Ring eller send SMS i dag, så får du et uforpliktende tilbud – ofte samme dag. Faste avtaler fylles opp før sesongen, så vent ikke til første snøfall.',
  smsHref,
}: {
  tittel?: string
  tekst?: string
  smsHref?: string
}) {
  return (
    <section className="bg-night-900">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
          {tittel}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ice">{tekst}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <RingButton large />
          <SmsButton large dark href={smsHref} />
        </div>
        <p className="mt-6 text-sm text-ice/70">
          Uforpliktende tilbud · Svar innen 24 timer · Døgnbemanning i sesong
        </p>
      </div>
    </section>
  )
}
