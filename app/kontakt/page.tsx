import type { Metadata } from 'next'
import { site } from '@/lib/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { QuoteForm } from '@/components/QuoteForm'
import { RingButton, SmsButton } from '@/components/CTAButtons'

export const metadata: Metadata = {
  title: 'Kontakt oss – Ring eller send SMS for tilbud',
  description:
    'Kontakt Gjerdrum Snøbrøyting: ring eller send SMS til 48 42 42 88, eller bruk tilbudsskjemaet. Uforpliktende tilbud på snøbrøyting, strøing og vintervedlikehold – svar innen 24 timer.',
  alternates: { canonical: '/kontakt' },
}

export default function KontaktSide() {
  return (
    <>
      <Breadcrumbs items={[{ navn: 'Kontakt', url: '/kontakt' }]} />
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-marine-800 sm:text-5xl">
          Snakk med oss i dag
        </h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink">
          Raskeste vei til tilbud: ring eller send SMS med adressen din. I sesongen er vi
          døgnbemannet – utenom sesong svarer vi normalt samme dag.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <RingButton large />
          <SmsButton large />
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-ice bg-white p-5 shadow-sm">
            <dt className="font-display font-semibold uppercase tracking-wide text-marine-700">
              Telefon / SMS
            </dt>
            <dd className="mt-1">
              <a href={site.phoneHref} className="text-lg font-bold text-ink hover:text-marine-600">
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="rounded-xl border border-ice bg-white p-5 shadow-sm">
            <dt className="font-display font-semibold uppercase tracking-wide text-marine-700">
              E-post
            </dt>
            <dd className="mt-1">
              <a href={`mailto:${site.email}`} className="text-lg font-bold text-ink hover:text-marine-600">
                {site.email}
              </a>
            </dd>
          </div>
          <div className="rounded-xl border border-ice bg-white p-5 shadow-sm">
            <dt className="font-display font-semibold uppercase tracking-wide text-marine-700">
              Besøksadresse
            </dt>
            <dd className="mt-1 text-ink">
              {site.address.street}, {site.address.zip} {site.address.city}
            </dd>
          </div>
          <div className="rounded-xl border border-ice bg-white p-5 shadow-sm">
            <dt className="font-display font-semibold uppercase tracking-wide text-marine-700">
              Firma
            </dt>
            <dd className="mt-1 text-ink">
              {site.legalName}
              <br />
              Org.nr: {site.orgNr} MVA
            </dd>
          </div>
        </dl>
      </section>
      <QuoteForm />
    </>
  )
}
