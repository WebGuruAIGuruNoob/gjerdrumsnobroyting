import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { ServiceCards } from '@/components/ServiceCards'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Gallery } from '@/components/Gallery'
import { AreaGrid } from '@/components/AreaGrid'
import { FaqSection } from '@/components/Faq'
import { QuoteForm } from '@/components/QuoteForm'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Snøbrøyting i Gjerdrum og på Romerike – Fast avtale & døgnberedskap',
  description:
    'Snøbrøyting, strøing og vintervedlikehold i Gjerdrum, på Kløfta, Frogner og Skedsmokorset. Automatisk utrykning, lokal base og døgnbemanning. Ring 48 42 42 88 – uforpliktende tilbud.',
  alternates: { canonical: '/' },
}

const forsideFaq = [
  {
    sp: 'Hva koster en brøyteavtale?',
    svar: 'Prisen avhenger av arealets størrelse, utløsningshøyde og om strøing skal inngå. En sesongavtale for en vanlig privat innkjørsel er rimeligere enn de fleste tror – ring eller send SMS med adressen din, så får du et konkret tilbud, ofte samme dag.',
  },
  {
    sp: 'Hvilke områder dekker dere?',
    svar: 'Vi har base i Gjerdrum og brøyter i hele kommunen – Ask, Grønlund, Veståsen, Grønlundfjellet og omegn – samt Eltonåsen, Kløfta, Lindeberg, Frogner, Heksebergåsen og Skedsmokorset.',
  },
  {
    sp: 'Når rykker dere ut etter snøfall?',
    svar: 'Automatisk når snøfallet passerer avtalt utløsningshøyde, vanligvis 5–10 cm. Vi overvåker været døgnet rundt i sesongen, og faste kunder er normalt ferdig brøytet i morgentimene etter nattsnø.',
  },
  {
    sp: 'Brøyter dere for både private og bedrifter?',
    svar: 'Ja – private innkjørsler, borettslag og sameier, næringseiendom og offentlige bygg. Avtalen skreddersys etter arealet og behovet ditt, fra enkel innkjørsel til komplett vinterdrift med brøyting, strøing, bortkjøring og takrydding.',
  },
  {
    sp: 'Må jeg binde meg for flere år?',
    svar: 'Nei, standardavtalen vår gjelder per sesong. De fleste kundene våre fornyer år etter år fordi de er fornøyde – ikke fordi de må.',
  },
  {
    sp: 'Hva skjer ved store snøfall og uvær?',
    svar: 'Da kjører vi kontinuerlig med hele maskinparken til alt er ryddet, med prioritet på adkomst for utrykningskjøretøy, bratte partier og arealer med åpningstider. Døgnbemanningen i sesongen gjør at vi aldri «venter til i morgen».',
  },
  {
    sp: 'Tilbyr dere strøing og salting også?',
    svar: 'Ja, de fleste velger kombinert avtale: vi brøyter når det snør og strør når det er glatt – helt automatisk. Vi utfører også bortkjøring av snø, takrydding og vårfeiing.',
  },
  {
    sp: 'Hvordan kommer jeg i gang?',
    svar: 'Ring 48 42 42 88 eller send SMS med adressen din, så gir vi deg et uforpliktende tilbud. Tegner du avtale før sesongen, rekker vi befaring og utsetting av brøytestikker før første snøfall.',
  },
]

export default function Forside() {
  return (
    <>
      <Hero
        tittel="Snøbrøyting i Gjerdrum – trygg ferdsel hele vinteren"
        undertittel="Fast brøyteavtale med automatisk utrykning for privat, borettslag og bedrift. Vi overvåker været døgnet rundt – du våkner til ryddet innkjørsel."
      />
      <SocialProof />

      {/* Tjenester */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
          Alt du trenger til vinteren – i én avtale
        </h2>
        <p className="mt-2 max-w-3xl text-muted">
          Fra snøbrøyting og strøing til bortkjøring, takrydding og vårfeiing: vi tar totalansvaret
          for uteområdene dine fra første snøfall til grusen er feid opp om våren.
        </p>
        <div className="mt-8">
          <ServiceCards />
        </div>
      </section>

      {/* Hvorfor oss */}
      <section className="bg-night-900">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
              Derfor velger naboene dine oss
            </h2>
            <ul className="mt-6 space-y-4 text-ice">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1 font-display text-xl font-bold text-beacon-400">✓</span>
                <p>
                  <strong className="text-white">Lokal base i Gjerdrum.</strong> Vi holder til på
                  Askheim – ikke i Oslo. Det betyr utrykningstid på minutter og sjåfører som kjenner
                  hver bakke og hvert gårdsrom.
                </p>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1 font-display text-xl font-bold text-beacon-400">✓</span>
                <p>
                  <strong className="text-white">Automatisk utrykning.</strong> Du ringer aldri når
                  det snør. Vi overvåker værradaren og rykker ut når snøfallet passerer avtalt høyde.
                </p>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1 font-display text-xl font-bold text-beacon-400">✓</span>
                <p>
                  <strong className="text-white">Erfaring siden 90-tallet.</strong> Firmaet ble
                  etablert i 2005, men vi har brøytet i Gjerdrum mye lenger. Vi vet hva romeriksvintre
                  krever av både maskiner og folk.
                </p>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1 font-display text-xl font-bold text-beacon-400">✓</span>
                <p>
                  <strong className="text-white">Én avtale – helt ansvar.</strong> Brøyting, strøing,
                  bortkjøring, takrydding og vårfeiing fra samme leverandør. Ett nummer å ringe, null
                  ansvarsfraskrivelse.
                </p>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/bilder/traktor-skjaer-fres.jpg"
              alt="Traktor med skjær og fres fra maskinparken til Gjerdrum Snøbrøyting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Segmenter */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
          Skreddersydd for din situasjon
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-xl border border-ice bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-marine-700">
              Privat
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Fast brøyteavtale for innkjørsel og gårdsplass: ryddet før du skal på jobb, brøytestikker
              satt ut ved sesongstart og skånsom brøyting som skåner plen og belegningsstein. Legg til
              strøing hvis du bor i bakke.
            </p>
            <Link href="/tjenester/snobroyting" className="mt-4 inline-block font-display text-sm font-bold uppercase tracking-wider text-beacon-600 hover:text-beacon-500">
              Snøbrøyting for private →
            </Link>
          </div>
          <div className="rounded-xl border border-ice bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-marine-700">
              Borettslag &amp; sameie
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Komplett vinterdrift av fellesarealer med fast sesongpris: brøyting, håndrydding og
              strøing av gangveier og trapper, prioritert adkomst for renovasjon – og dokumentert
              sikring som styret kan vise til.
            </p>
            <Link href="/tjenester/vintervedlikehold-borettslag" className="mt-4 inline-block font-display text-sm font-bold uppercase tracking-wider text-beacon-600 hover:text-beacon-500">
              Vinterdrift for borettslag →
            </Link>
          </div>
          <div className="rounded-xl border border-ice bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-marine-700">
              Bedrift &amp; næring
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Kundeparkering og varemottak klare før åpningstid, HMS-dokumentert iskontroll og
              responstider tilpasset driften din. Én avtale kan dekke flere eiendommer – med samlet
              fakturering.
            </p>
            <Link href="/tjenester/vintervedlikehold-bedrift" className="mt-4 inline-block font-display text-sm font-bold uppercase tracking-wider text-beacon-600 hover:text-beacon-500">
              Vinterdrift for bedrifter →
            </Link>
          </div>
        </div>
      </section>

      <Gallery />
      <AreaGrid />
      <FaqSection faq={forsideFaq} />
      <QuoteForm />
      <CTASection />
    </>
  )
}
