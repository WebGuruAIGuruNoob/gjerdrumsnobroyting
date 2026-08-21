import type { Metadata } from 'next'
import { CoverageMap } from '@/components/CoverageMap'
import { AreaChips } from '@/components/AreaGrid'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { QuoteForm } from '@/components/QuoteForm'
import { SocialProof } from '@/components/SocialProof'
import { ogFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Områder vi dekker – Snøbrøyting i Gjerdrum og på Romerike',
  description:
    'Vi brøyter i Ask, Grønlund, Veståsen, Kløfta, Frogner, Skedsmokorset og hele Gjerdrum-området. Lokal base og kort utrykningstid – finn ditt område og få uforpliktende tilbud.',
  alternates: { canonical: '/omrader' },
  openGraph: ogFor({
    tittel: 'Områder vi dekker – Snøbrøyting i Gjerdrum og på Romerike',
    beskrivelse:
      'Lokal base i Gjerdrum og kort utrykningstid i 16 områder på Romerike. Finn ditt område.',
    path: '/omrader',
  }),
}

export default function OmraderSide() {
  return (
    <>
      <Breadcrumbs items={[{ navn: 'Områder', url: '/omrader' }]} />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h1 className="max-w-3xl font-display text-4xl font-bold uppercase tracking-wide text-marine-800 sm:text-5xl">
          Snøbrøyting der du bor
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          Med base sentralt i Gjerdrum dekker vi hele kommunen og nabotettstedene på Romerike – fra
          Ask og Grønlund til Kløfta, Frogner og Skedsmokorset. Kort utrykningstid og sjåfører med
          lokalkunnskap er hele forskjellen når snøen kommer: velg området ditt, og les hva vi kan
          gjøre for akkurat din adresse.
        </p>
        <div className="mt-8">
          <AreaChips />
        </div>
      </section>
      <CoverageMap fra="snow" />
      <SocialProof />
      <QuoteForm />
      <CTASection telefonFokus fra="white" />
    </>
  )
}
