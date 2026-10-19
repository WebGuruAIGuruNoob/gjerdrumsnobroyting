import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { ServiceCards } from '@/components/ServiceCards'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Gallery } from '@/components/Gallery'
import { CoverageMap } from '@/components/CoverageMap'
import { AreaChips } from '@/components/AreaGrid'
import { FaqSection } from '@/components/Faq'
import { QuoteForm } from '@/components/QuoteForm'
import { CTASection } from '@/components/CTASection'
import { Testimonials } from '@/components/Testimonials'
import { SectionHeading } from '@/components/SectionHeading'
import { SectionDivider } from '@/components/SectionDivider'
import { StikkeListe } from '@/components/Bullets'
import { IconPlog, IconBlokk, IconButikk } from '@/components/Icons'
import { ogFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: 'Snøbrøyting i Gjerdrum og på Romerike – Fast avtale & døgnberedskap' },
  description:
    'Snøbrøyting, strøing og vintervedlikehold i Gjerdrum, på Kløfta, Frogner og Skedsmokorset. Automatisk utrykning, lokal base og døgnbemanning. Ring 48 42 42 88 – uforpliktende tilbud.',
  alternates: { canonical: '/' },
  openGraph: ogFor({
    tittel: 'Snøbrøyting i Gjerdrum og på Romerike – Fast avtale & døgnberedskap',
    beskrivelse:
      'Automatisk utrykning, lokal base og døgnbemanning i sesong. Ring 48 42 42 88 for uforpliktende tilbud.',
    path: '/',
  }),
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
    svar: 'Ja, de fleste velger kombinert avtale: vi brøyter når det snør og strør når det er glatt – helt automatisk. Vi utfører også bortkjøring av snø, takrydding og vårfeiing. Enten du kaller det snøbrøyting eller snøbrøying: alt vintervedlikeholdet er samlet hos én leverandør.',
  },
  {
    sp: 'Hvordan kommer jeg i gang?',
    svar: 'Ring 48 42 42 88 eller send SMS med adressen din, så gir vi deg et uforpliktende tilbud. Tegner du avtale før sesongen, rekker vi befaring og anbefaling om at brøytestikker bør settes ut før første snøfall.',
  },
]

const segmenter = [
  {
    Ikon: IconPlog,
    tittel: 'Privat',
    tekst:
      'Fast brøyteavtale for innkjørsel og gårdsplass: ryddet før du skal på jobb, brøytestikker som bør settes ut ved sesongstart, og skånsom brøyting som skåner plen og belegningsstein. Legg til strøing hvis du bor i bakke.',
    href: '/tjenester/snobroyting',
    lenke: 'Snøbrøyting for private',
  },
  {
    Ikon: IconBlokk,
    tittel: 'Borettslag & sameie',
    tekst:
      'Komplett vinterdrift av fellesarealer med fast sesongpris: brøyting, håndrydding og strøing av gangveier og trapper, prioritert adkomst for renovasjon – og dokumentert sikring som styret kan vise til.',
    href: '/tjenester/vintervedlikehold-borettslag',
    lenke: 'Vinterdrift for borettslag',
  },
  {
    Ikon: IconButikk,
    tittel: 'Bedrift & næring',
    tekst:
      'Kundeparkering og varemottak klare før åpningstid, HMS-dokumentert iskontroll og responstider tilpasset driften din. Én avtale kan dekke flere eiendommer – med samlet fakturering.',
    href: '/tjenester/vintervedlikehold-bedrift',
    lenke: 'Vinterdrift for bedrifter',
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
        <SectionHeading
          eyebrow="Tjenestene våre"
          tittel="Alt du trenger til vinteren – i én avtale"
          ingress="Fra snøbrøyting og strøing til bortkjøring, takrydding og vårfeiing: vi tar totalansvaret for uteområdene dine fra første snøfall til grusen er feid opp om våren."
        />
        <div className="mt-10">
          <ServiceCards />
        </div>
      </section>

      {/* Hvorfor oss */}
      <section className="bg-night-900">
        <SectionDivider fra="snow" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading dark eyebrow="Hvorfor oss" tittel="Derfor velger naboene dine oss" />
            <div className="mt-6">
              <StikkeListe
                dark
                punkter={[
                  <p key="1">
                    <strong className="text-white">Lokal base i Gjerdrum.</strong> Vi holder til på
                    Askheim – ikke i Oslo. Det betyr utrykningstid på minutter og sjåfører som
                    kjenner hver bakke og hvert gårdsrom.
                  </p>,
                  <p key="2">
                    <strong className="text-white">Automatisk utrykning.</strong> Du ringer aldri
                    når det snør. Vi overvåker værradaren og rykker ut når snøfallet passerer avtalt
                    høyde.
                  </p>,
                  <p key="3">
                    <strong className="text-white">Erfaring siden 90-tallet.</strong> Firmaet ble
                    etablert i 2005, men vi har brøytet i Gjerdrum mye lenger. Vi vet hva
                    romeriksvintre krever av både maskiner og folk.
                  </p>,
                  <p key="4">
                    <strong className="text-white">Én avtale – helt ansvar.</strong> Brøyting,
                    strøing, bortkjøring, takrydding og vårfeiing fra samme leverandør. Ett nummer å
                    ringe, null ansvarsfraskrivelse.
                  </p>,
                ]}
              />
            </div>
          </div>
          <div className="foto relative aspect-[4/3] overflow-hidden rounded-2xl">
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

      {/* Segmenter – flat ikon+linje-layout */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <SectionHeading eyebrow="For deg" tittel="Skreddersydd for din situasjon" />
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-ice">
            {segmenter.map(({ Ikon, tittel, tekst, href, lenke }) => (
              <div key={tittel} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-marine-700 text-white">
                  <Ikon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-marine-800">{tittel}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tekst}</p>
                <Link
                  href={href}
                  className="mt-4 inline-block font-display text-sm font-bold uppercase tracking-wider text-marine-600 hover:text-marine-500"
                >
                  {lenke} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
      <FaqSection faq={forsideFaq} />
      <CoverageMap fra="snow" />
      <QuoteForm />
      <CTASection telefonFokus fra="white" />
    </>
  )
}
