import type { Metadata } from 'next'
import Image from 'next/image'
import { site } from '@/lib/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SocialProof } from '@/components/SocialProof'
import { Gallery } from '@/components/Gallery'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Om oss – Lokalt brøytefirma i Gjerdrum siden 2005',
  description:
    'Gjerdrum Snøbrøyting drives av Langsholt Snø og Grønt AS – etablert 2005 med erfaring siden 90-tallet. Lokal base på Askheim, moderne maskinpark og døgnbemanning i sesongen.',
  alternates: { canonical: '/om-oss' },
}

export default function OmOssSide() {
  return (
    <>
      <Breadcrumbs items={[{ navn: 'Om oss', url: '/om-oss' }]} />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-marine-800 sm:text-5xl">
          Lokalt eierskap, lokal stolthet
        </h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink">
          Gjerdrum Snøbrøyting drives av {site.legalName} – et lokalt firma med base på Askheim i
          Gjerdrum. Selskapet ble etablert i 2005, men historien vår med brøyting i bygda strekker seg
          tilbake til 90-tallet.
        </p>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="/bilder/beredskap.jpg"
            alt="Brøytemaskin fra Gjerdrum Snøbrøyting i vinterberedskap"
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-marine-800 sm:text-3xl">
            Hvorfor vi gjør dette
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed text-ink">
            Vinteren på Romerike er ikke til å spøke med: snøfallene kan komme tett, mildvær og
            påfølgende kulde gjør gårdsplasser til skøytebaner, og alle skal likevel på jobb, skole og
            trening som normalt. Jobben vår er å gjøre vinteren til et ikke-tema for kundene våre – de
            skal våkne til ryddet innkjørsel og trygg adkomst, uten å ha løftet en finger.
          </p>
          <p className="mt-4 max-w-prose leading-relaxed text-ink">
            Det klarer vi fordi vi er lokale. Basen vår ligger sentralt i Gjerdrum, sjåførene kjenner
            rutene sine ned til hver enkelt kantstein, og vi følger været her – ikke fra et
            driftskontor i Oslo. Når snøfallet passerer avtalt høyde, er maskinene i gang på minutter.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-marine-800 sm:text-3xl">
            Fra snøfall til vårfeiing
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed text-ink">
            Vi leverer hele vinterdriften: snøbrøyting, strøing og salting, bortkjøring av snø,
            takrydding – og vårfeiingen som gjør uteområdene klare igjen når sesongen er over. Kundene
            våre er alt fra privatpersoner med én innkjørsel til borettslag, sameier, bedrifter og
            offentlige bygg med store arealer og strenge krav.
          </p>
          <p className="mt-4 max-w-prose leading-relaxed text-ink">
            I sesongen har vi døgnbemanning. Det betyr ikke bare at telefonen besvares – det betyr at
            maskinene faktisk kjører når det trengs, uansett om snøen kommer klokka fire om
            ettermiddagen eller fire om natten.
          </p>
        </section>
        <section className="mt-10 rounded-xl border border-ice bg-frost p-6">
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-marine-800">
            Fakta om firmaet
          </h2>
          <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-muted">Juridisk navn</dt>
              <dd className="text-ink">{site.legalName}</dd>
            </div>
            <div>
              <dt className="font-semibold text-muted">Organisasjonsnummer</dt>
              <dd className="text-ink">{site.orgNr} MVA</dd>
            </div>
            <div>
              <dt className="font-semibold text-muted">Etablert</dt>
              <dd className="text-ink">{site.founded} – erfaring siden 90-tallet</dd>
            </div>
            <div>
              <dt className="font-semibold text-muted">Adresse</dt>
              <dd className="text-ink">
                {site.address.street}, {site.address.zip} {site.address.city}
              </dd>
            </div>
          </dl>
        </section>
      </article>
      <SocialProof />
      <Gallery />
      <CTASection />
    </>
  )
}
