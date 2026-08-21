import { RingButton, SmsButton } from './CTAButtons'
import { SectionDivider } from './SectionDivider'

/**
 * Fullbredde CTA-bånd – avslutter alle landingssider.
 * `telefonFokus` brukes på sider der tilbudsskjemaet står rett over:
 * da komplementerer båndet skjemaet i stedet for å gjenta det.
 */
export function CTASection({
  tittel = 'Klar for en bekymringsfri vinter?',
  tekst = 'Ring eller send SMS i dag, så får du et uforpliktende tilbud – ofte samme dag. Faste avtaler fylles opp før sesongen, så vent ikke til første snøfall.',
  smsHref,
  telefonFokus = false,
  fra = 'white',
}: {
  tittel?: string
  tekst?: string
  smsHref?: string
  telefonFokus?: boolean
  fra?: 'snow' | 'white' | 'frost'
}) {
  return (
    <section className="bg-night-900">
      <SectionDivider fra={fra} />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 text-center sm:px-6">
        {telefonFokus ? (
          <>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              Foretrekker du å snakke med et menneske?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ice">
              Helt i orden – det gjør de fleste. Ring oss direkte, så får du svar på alt med en gang.
              I sesongen er vi døgnbemannet.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <RingButton large kilde="cta-bunn" />
            </div>
          </>
        ) : (
          <>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              {tittel}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ice">{tekst}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <RingButton large kilde="cta-bunn" />
              <SmsButton large dark href={smsHref} kilde="cta-bunn" />
            </div>
          </>
        )}
        <p className="mt-6 text-sm text-ice/70">
          Uforpliktende tilbud · Svar innen 24 timer · Døgnbemanning i sesong
        </p>
      </div>
    </section>
  )
}
