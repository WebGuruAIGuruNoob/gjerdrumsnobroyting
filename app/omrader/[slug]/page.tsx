import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { omrader, getOmrade } from '@/data/omrader'
import { tjenester } from '@/data/tjenester'
import { site, smsHrefFor } from '@/lib/site'
import { ogFor } from '@/lib/seo'
import { serviceSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { FaqSection } from '@/components/Faq'
import { QuoteForm } from '@/components/QuoteForm'
import { CTASection } from '@/components/CTASection'
import { Gallery } from '@/components/Gallery'
import { ProcessSteps } from '@/components/ProcessSteps'
import { IconPin, tjenesteIkoner } from '@/components/Icons'

export const dynamicParams = false

export function generateStaticParams() {
  return omrader.map((o) => ({ slug: o.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const omrade = getOmrade(slug)
  if (!omrade) return {}
  return {
    title: { absolute: `${omrade.metaTittel} | Gjerdrum Snøbrøyting`.slice(0, 100) },
    description: omrade.metaBeskrivelse,
    alternates: { canonical: `/omrader/${omrade.slug}` },
    openGraph: ogFor({
      tittel: omrade.metaTittel,
      beskrivelse: omrade.metaBeskrivelse,
      path: `/omrader/${omrade.slug}`,
    }),
  }
}

export default async function OmradeSide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const omrade = getOmrade(slug)
  if (!omrade) notFound()

  const naboer = omrade.naboOmrader
    .map((s) => getOmrade(s))
    .filter((o): o is NonNullable<typeof o> => Boolean(o))
  const smsHref = smsHrefFor(omrade.sted)

  return (
    <>
      <Hero
        tittel={omrade.heroTittel}
        undertittel={omrade.heroUndertittel}
        smsHref={smsHref}
        brodsmuler={[
          { navn: 'Områder', url: '/omrader' },
          { navn: omrade.sted, url: `/omrader/${omrade.slug}` },
        ]}
      >
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-ice">
          <IconPin className="h-4 w-4" />
          {omrade.sted}, {omrade.kommune} kommune · Utrykningstid {omrade.utrykningstid} fra basen vår
          i Gjerdrum
        </p>
      </Hero>
      <SocialProof />

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        {/* Lokal forankring */}
        <section>
          <h2 className="font-display text-2xl font-bold tracking-wide text-marine-800 sm:text-3xl">
            Din lokale brøyter i {omrade.sted}
          </h2>
          {omrade.intro.map((avsnitt) => (
            <p key={avsnitt.slice(0, 40)} className="mt-4 max-w-prose leading-relaxed text-ink">
              {avsnitt}
            </p>
          ))}
        </section>

        {/* Nabolag */}
        <section className="mt-10 rounded-xl border border-ice bg-frost p-6">
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-marine-800">
            Her brøyter vi i {omrade.sted}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {omrade.nabolag.map((n) => (
              <li
                key={n}
                className="inline-flex items-center gap-1.5 rounded-full border border-marine-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-marine-700"
              >
                <IconPin className="h-3.5 w-3.5" />
                {n}
              </li>
            ))}
          </ul>
        </section>

        {/* Lokale forhold */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold tracking-wide text-marine-800 sm:text-3xl">
            {omrade.lokaleForhold.tittel}
          </h2>
          {omrade.lokaleForhold.avsnitt.map((avsnitt) => (
            <p key={avsnitt.slice(0, 40)} className="mt-4 max-w-prose leading-relaxed text-ink">
              {avsnitt}
            </p>
          ))}
        </section>

        {/* Segmenter */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold tracking-wide text-marine-800 sm:text-3xl">
            Snøbrøyting i {omrade.sted} for alle behov
          </h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-wide text-marine-700">
                For deg med egen bolig
              </h3>
              {omrade.segmenter.privat.map((avsnitt) => (
                <p key={avsnitt.slice(0, 40)} className="mt-3 max-w-prose leading-relaxed text-ink">
                  {avsnitt}
                </p>
              ))}
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-wide text-marine-700">
                For borettslag, sameier og veilag
              </h3>
              {omrade.segmenter.borettslag.map((avsnitt) => (
                <p key={avsnitt.slice(0, 40)} className="mt-3 max-w-prose leading-relaxed text-ink">
                  {avsnitt}
                </p>
              ))}
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-wide text-marine-700">
                For bedrifter og næringsdrivende
              </h3>
              {omrade.segmenter.bedrift.map((avsnitt) => (
                <p key={avsnitt.slice(0, 40)} className="mt-3 max-w-prose leading-relaxed text-ink">
                  {avsnitt}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Tjenester i området */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold tracking-wide text-marine-800 sm:text-3xl">
            Alle vintertjenester i {omrade.sted}
          </h2>
          <p className="mt-3 max-w-prose text-muted">
            Alt vi leverer ellers, leverer vi selvfølgelig også i {omrade.sted} – som enkelttjeneste
            eller samlet i én vinteravtale:
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {tjenester.map((t) => {
              const Ikon = tjenesteIkoner[t.slug]
              return (
                <li key={t.slug}>
                  <Link
                    href={`/tjenester/${t.slug}`}
                    className="flex h-full gap-3 rounded-xl border border-ice bg-white p-4 shadow-sm transition hover:border-marine-200 hover:shadow-md"
                  >
                    {Ikon && (
                      <span className="mt-0.5 shrink-0 text-marine-700">
                        <Ikon className="h-7 w-7" />
                      </span>
                    )}
                    <span className="flex flex-col">
                      <span className="font-bold text-marine-800">{t.navn}</span>
                      <span className="mt-1 text-sm text-muted">{t.kortBeskrivelse}</span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </article>

      <ProcessSteps />
      <FaqSection
        faq={omrade.faq}
        tittel={`Spørsmål og svar om snøbrøyting i ${omrade.sted}`}
      />
      <Gallery tittel={`Maskinene som brøyter i ${omrade.sted}`} fra="snow" />

      {/* Naboområder */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="font-display text-xl font-bold uppercase tracking-wide text-marine-800">
          Vi dekker også områdene rundt
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {naboer.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/omrader/${n.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-marine-200 bg-white px-4 py-2 text-sm font-semibold text-marine-700 transition hover:bg-marine-50"
              >
                <IconPin className="h-4 w-4" />
                Snøbrøyting {n.sted} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <QuoteForm forhandsvalgtOmrade={omrade.sted} />
      <CTASection
        tittel={`Klar for en bekymringsfri vinter i ${omrade.sted}?`}
        smsHref={smsHref}
        fra="white"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              navn: `Snøbrøyting ${omrade.sted}`,
              serviceType: 'Snøbrøyting',
              beskrivelse: omrade.metaBeskrivelse,
              url: `${site.url}/omrader/${omrade.slug}`,
              omrade: `${omrade.sted}, ${omrade.kommune}`,
            })
          ),
        }}
      />
    </>
  )
}
