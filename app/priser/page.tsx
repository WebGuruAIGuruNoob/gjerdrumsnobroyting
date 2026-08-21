import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqSection } from '@/components/Faq'
import { QuoteForm } from '@/components/QuoteForm'
import { CTASection } from '@/components/CTASection'
import { SocialProof } from '@/components/SocialProof'

export const metadata: Metadata = {
  title: 'Priser på snøbrøyting – Hva koster en brøyteavtale?',
  description:
    'Hva koster snøbrøyting i Gjerdrum? Se hva som påvirker prisen på brøyteavtale, strøing og bortkjøring – og få et konkret, uforpliktende tilbud på ditt areal samme dag.',
  alternates: { canonical: '/priser' },
}

const prisFaq = [
  {
    sp: 'Hva koster en brøyteavtale for en vanlig innkjørsel?',
    svar: 'For en vanlig privat innkjørsel med gårdsplass gir vi fastpris per sesong – de fleste blir positivt overrasket over nivået. Send oss adressen på SMS, så får du et konkret tall, ofte samme dag. Prisen påvirkes mest av areal og om strøing skal inngå.',
  },
  {
    sp: 'Er det billigst med fastpris eller pris per utrykning?',
    svar: 'Fastpris per sesong gir forutsigbarhet: du betaler det samme uansett om det snør mye eller lite. Pris per utrykning kan bli rimeligere i snøfattige vintre, men dyrere i snørike. De fleste private og borettslag velger fastpris for budsjettets skyld.',
  },
  {
    sp: 'Hvorfor oppgir dere ikke faste priser på nettsiden?',
    svar: 'Fordi to arealer sjelden er like: en bratt innkjørsel med snuplass krever mer enn en flat og rett, og responstidskrav påvirker prisen for næringskunder. I stedet gir vi deg et presist tilbud på ditt areal – gratis, uforpliktende og som regel samme dag.',
  },
  {
    sp: 'Hva påvirker prisen mest?',
    svar: 'Arealets størrelse og form, utløsningshøyde (hvor lite snø som skal til før vi rykker ut), om strøing og salting inngår, responstidskrav, og tilleggstjenester som bortkjøring, takrydding og vårfeiing.',
  },
  {
    sp: 'Koster befaring noe?',
    svar: 'Nei, befaring og tilbud er alltid gratis og uforpliktende – både for private, borettslag og bedrifter.',
  },
  {
    sp: 'Kan borettslaget få én samlet pris for hele vinteren?',
    svar: 'Ja, borettslag og sameier får fastpris per sesong for hele vinterdriften – brøyting, strøing, håndrydding og eventuelt bortkjøring og takkontroll. Da er vinterbudsjettet spikret i september.',
  },
]

const faktorer = [
  {
    tittel: 'Areal og utforming',
    tekst: 'Størrelsen betyr mest, men formen betyr mye: trange passasjer, snuplasser og hindringer tar mer tid enn åpne flater.',
  },
  {
    tittel: 'Utløsningshøyde',
    tekst: 'Skal vi rykke ut ved 5 cm eller 10 cm? Lavere utløsningshøyde gir flere utrykninger og høyere komfort – og litt høyere pris.',
  },
  {
    tittel: 'Strøing og salting',
    tekst: 'Kombinert avtale med strøing koster mer enn ren brøyting, men er ofte det som faktisk holder arealet trygt og brukbart.',
  },
  {
    tittel: 'Responstid',
    tekst: 'Næringskunder med åpningstider eller døgndrift trenger garantert responstid – det dimensjonerer vi ruter og beredskap etter.',
  },
  {
    tittel: 'Tilleggstjenester',
    tekst: 'Bortkjøring av snø, takrydding og vårfeiing kan inkluderes i avtalen eller bestilles ved behov.',
  },
  {
    tittel: 'Avtaleform',
    tekst: 'Fastpris per sesong gir forutsigbarhet, pris per utrykning gir fleksibilitet. Vi setter opp begge deler – du velger.',
  },
]

export default function PriserSide() {
  return (
    <>
      <Breadcrumbs items={[{ navn: 'Priser', url: '/priser' }]} />
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-marine-800 sm:text-5xl">
          Hva koster snøbrøyting?
        </h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink">
          Det ærlige svaret: det kommer an på arealet ditt – og alle som gir deg en pris uten å vite
          noe om det, gjetter. Det gode svaret: du får et presist, uforpliktende tilbud fra oss samme
          dag ved å sende adressen din på SMS eller ringe {`48 42 42 88`}. Her er hva som faktisk
          bestemmer prisen, slik at du vet hva du skal spørre om – uansett hvem du henter tilbud fra.
        </p>
      </section>

      <section className="bg-frost">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
            Dette bestemmer prisen
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {faktorer.map((f) => (
              <div key={f.tittel} className="rounded-xl border border-ice bg-white p-5 shadow-sm">
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-marine-700">
                  {f.tittel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
          Slik får du riktig pris – på under ett minutt
        </h2>
        <ol className="mt-6 space-y-4">
          <li className="flex gap-4">
            <span className="font-display text-2xl font-bold text-beacon-600">1</span>
            <p className="max-w-prose text-ink">
              <strong>Send adressen din på SMS</strong> til 48 42 42 88 – eller ring, eller bruk
              skjemaet nedenfor.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-display text-2xl font-bold text-beacon-600">2</span>
            <p className="max-w-prose text-ink">
              <strong>Vi vurderer arealet</strong> – ofte holder kartet, ellers tar vi en gratis
              befaring.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-display text-2xl font-bold text-beacon-600">3</span>
            <p className="max-w-prose text-ink">
              <strong>Du får et konkret tilbud</strong> – som regel samme dag, alltid uforpliktende.
            </p>
          </li>
        </ol>
      </section>

      <SocialProof />
      <FaqSection faq={prisFaq} tittel="Spørsmål og svar om pris" />
      <QuoteForm />
      <CTASection
        tittel="Få prisen på ditt areal i dag"
        tekst="Send adressen på SMS eller ring 48 42 42 88 – du har som regel et konkret tilbud før dagen er omme."
      />
    </>
  )
}
