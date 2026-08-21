import type { Metadata } from 'next'
import { ServiceCards } from '@/components/ServiceCards'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { QuoteForm } from '@/components/QuoteForm'
import { SocialProof } from '@/components/SocialProof'

export const metadata: Metadata = {
  title: 'Våre tjenester – Snøbrøyting, strøing og vintervedlikehold',
  description:
    'Alle vintertjenester fra én leverandør i Gjerdrum: snøbrøyting, strøing og salting, bortkjøring av snø, takrydding, vintervedlikehold for borettslag og bedrift, og vårfeiing.',
  alternates: { canonical: '/tjenester' },
}

export default function TjenesterSide() {
  return (
    <>
      <Breadcrumbs items={[{ navn: 'Tjenester', url: '/tjenester' }]} />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h1 className="max-w-3xl font-display text-4xl font-bold uppercase tracking-wide text-marine-800 sm:text-5xl">
          Vintertjenester fra A til Å
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          Vi tar totalansvaret for uteområdene dine gjennom hele vinteren – fra første snøfall til
          grusen er feid opp om våren. Én leverandør, én avtale, ett nummer å ringe.
        </p>
        <div className="mt-10">
          <ServiceCards />
        </div>
      </section>
      <SocialProof />
      <QuoteForm />
      <CTASection />
    </>
  )
}
