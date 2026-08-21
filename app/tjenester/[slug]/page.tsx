import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { tjenester, getTjeneste } from '@/data/tjenester'
import { site } from '@/lib/site'
import { ogFor } from '@/lib/seo'
import { serviceSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { FaqSection } from '@/components/Faq'
import { QuoteForm } from '@/components/QuoteForm'
import { CTASection } from '@/components/CTASection'
import { AreaGrid } from '@/components/AreaGrid'
import { StikkeListe } from '@/components/Bullets'
import { tjenesteIkoner } from '@/components/Icons'

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
    title: { absolute: `${tjeneste.metaTittel} | Gjerdrum Snøbrøyting`.slice(0, 100) },
    description: tjeneste.metaBeskrivelse,
    alternates: { canonical: `/tjenester/${tjeneste.slug}` },
    openGraph: ogFor({
      tittel: tjeneste.metaTittel,
      beskrivelse: tjeneste.metaBeskrivelse,
      path: `/tjenester/${tjeneste.slug}`,
    }),
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
        brodsmuler={[
          { navn: 'Tjenester', url: '/tjenester' },
          { navn: tjeneste.navn, url: `/tjenester/${tjeneste.slug}` },
        ]}
      />
      <SocialProof />

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        {tjeneste.seksjoner.map((seksjon) => (
          <section key={seksjon.tittel} className="mt-10 first:mt-0">
            <h2 className="font-display text-2xl font-bold tracking-wide text-marine-800 sm:text-3xl">
              {seksjon.tittel}
            </h2>
            {seksjon.avsnitt.map((avsnitt) => (
              <p key={avsnitt.slice(0, 40)} className="mt-4 max-w-prose leading-relaxed text-ink">
                {avsnitt}
              </p>
            ))}
            {seksjon.punkter && (
              <div className="mt-4">
                <StikkeListe punkter={seksjon.punkter} />
              </div>
            )}
          </section>
        ))}

        <aside className="mt-12 rounded-xl border border-ice bg-frost p-6">
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-marine-800">
            Relaterte tjenester
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {relaterte.map((r) => {
              const Ikon = tjenesteIkoner[r.slug]
              return (
                <li key={r.slug}>
                  <Link
                    href={`/tjenester/${r.slug}`}
                    className="flex h-full items-center gap-3 rounded-lg border border-ice bg-white p-3 font-semibold text-marine-700 transition hover:border-marine-500"
                  >
                    {Ikon && <Ikon className="h-6 w-6 shrink-0" />}
                    <span className="text-sm">{r.navn}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </aside>
      </article>

      <FaqSection faq={tjeneste.faq} tittel={`Spørsmål og svar om ${tjeneste.navn.toLowerCase()}`} />
      <AreaGrid tittel={`${tjeneste.navn} i hele området`} />
      <QuoteForm />
      <CTASection telefonFokus fra="white" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              navn: tjeneste.navn,
              serviceType: tjeneste.navn,
              beskrivelse: tjeneste.metaBeskrivelse,
              url: `${site.url}/tjenester/${tjeneste.slug}`,
            })
          ),
        }}
      />
    </>
  )
}
