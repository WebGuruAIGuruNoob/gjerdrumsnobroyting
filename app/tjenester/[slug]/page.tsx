import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { tjenester, getTjeneste } from '@/data/tjenester'
import { site } from '@/lib/site'
import { serviceSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqSection } from '@/components/Faq'
import { QuoteForm } from '@/components/QuoteForm'
import { CTASection } from '@/components/CTASection'
import { AreaGrid } from '@/components/AreaGrid'

export const dynamicParams = false

export function generateStaticParams() {
  return tjenester.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tjeneste = getTjeneste(slug)
  if (!tjeneste) return {}
  return {
    title: tjeneste.metaTittel,
    description: tjeneste.metaBeskrivelse,
    alternates: { canonical: `/tjenester/${tjeneste.slug}` },
    openGraph: {
      title: tjeneste.metaTittel,
      description: tjeneste.metaBeskrivelse,
    },
  }
}

export default async function TjenesteSide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tjeneste = getTjeneste(slug)
  if (!tjeneste) notFound()

  const relaterte = tjeneste.relaterteTjenester
    .map((s) => getTjeneste(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))

  return (
    <>
      <Hero
        tittel={tjeneste.heroTittel}
        undertittel={tjeneste.ingress}
        bilde={tjeneste.bilde}
        bildeAlt={tjeneste.bildeAlt}
      />
      <SocialProof />
      <Breadcrumbs
        items={[
          { navn: 'Tjenester', url: '/tjenester' },
          { navn: tjeneste.navn, url: `/tjenester/${tjeneste.slug}` },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        {tjeneste.seksjoner.map((seksjon) => (
          <section key={seksjon.tittel} className="mt-10 first:mt-0">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-marine-800 sm:text-3xl">
              {seksjon.tittel}
            </h2>
            {seksjon.avsnitt.map((avsnitt) => (
              <p key={avsnitt.slice(0, 40)} className="mt-4 max-w-prose leading-relaxed text-ink">
                {avsnitt}
              </p>
            ))}
            {seksjon.punkter && (
              <ul className="mt-4 space-y-2">
                {seksjon.punkter.map((punkt) => (
                  <li key={punkt} className="flex gap-3">
                    <span aria-hidden="true" className="mt-0.5 font-display text-lg font-bold text-beacon-700">✓</span>
                    <span className="text-ink">{punkt}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <aside className="mt-12 rounded-xl border border-ice bg-frost p-6">
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-marine-800">
            Relaterte tjenester
          </h2>
          <ul className="mt-3 space-y-2">
            {relaterte.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/tjenester/${r.slug}`}
                  className="font-semibold text-marine-600 hover:underline"
                >
                  {r.navn} →
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>

      <FaqSection faq={tjeneste.faq} tittel={`Spørsmål og svar om ${tjeneste.navn.toLowerCase()}`} />
      <AreaGrid tittel={`${tjeneste.navn} i hele området`} />
      <QuoteForm />
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              navn: tjeneste.navn,
              beskrivelse: tjeneste.metaBeskrivelse,
              url: `${site.url}/tjenester/${tjeneste.slug}`,
            })
          ),
        }}
      />
    </>
  )
}
