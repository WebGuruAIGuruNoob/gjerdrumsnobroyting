import type { Metadata } from 'next'
import { site } from '@/lib/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Personvernerklæring',
  description: 'Slik behandler Gjerdrum Snøbrøyting personopplysninger på nettsiden og i kundeforhold.',
  alternates: { canonical: '/personvern' },
  robots: { index: true, follow: true },
}

export default function PersonvernSide() {
  return (
    <>
      <Breadcrumbs items={[{ navn: 'Personvern', url: '/personvern' }]} />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-marine-800">
          Personvernerklæring
        </h1>
        <p className="mt-4 leading-relaxed text-ink">
          Behandlingsansvarlig: {site.legalName}, {site.address.street}, {site.address.zip}{' '}
          {site.address.city} (org.nr. {site.orgNr}).
        </p>
        <section className="mt-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-marine-800">
            Hvilke opplysninger vi behandler
          </h2>
          <p className="mt-3 leading-relaxed text-ink">
            Når du sender inn tilbudsskjemaet eller kontakter oss på telefon, SMS eller e-post,
            behandler vi opplysningene du oppgir: navn, telefonnummer, e-postadresse, adresse/område
            og innholdet i henvendelsen. Formålet er å besvare henvendelsen og utarbeide tilbud –
            behandlingsgrunnlaget er GDPR artikkel 6 nr. 1 bokstav b (tiltak før avtaleinngåelse).
          </p>
        </section>
        <section className="mt-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-marine-800">
            Lagring og deling
          </h2>
          <p className="mt-3 leading-relaxed text-ink">
            Henvendelser sendes til vår e-post og lagres så lenge det er nødvendig for å følge opp
            saken. Blir du kunde, lagres kundeopplysninger så lenge kundeforholdet varer og deretter i
            henhold til bokføringslovens krav. Vi selger aldri opplysningene dine og deler dem ikke
            med tredjeparter utover databehandlere som er nødvendige for driften (e-postleverandør og
            hostingleverandør).
          </p>
        </section>
        <section className="mt-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-marine-800">
            Informasjonskapsler
          </h2>
          <p className="mt-3 leading-relaxed text-ink">
            Nettsiden bruker ikke informasjonskapsler til sporing eller markedsføring og laster ikke
            inn tredjeparts analyseskript som krever samtykke.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-marine-800">
            Dine rettigheter
          </h2>
          <p className="mt-3 leading-relaxed text-ink">
            Du har rett til innsyn i, retting av og sletting av opplysningene vi har om deg, samt rett
            til å klage til Datatilsynet. Kontakt oss på{' '}
            <a href={`mailto:${site.email}`} className="font-semibold text-marine-600 hover:underline">
              {site.email}
            </a>{' '}
            eller telefon {site.phoneDisplay}, så hjelper vi deg.
          </p>
        </section>
      </article>
    </>
  )
}
