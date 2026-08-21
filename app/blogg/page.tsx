import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogginnlegg } from '@/data/blogg'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { QuoteForm } from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Blogg – Tips og råd om snøbrøyting og vintervedlikehold',
  description:
    'Praktiske råd om brøyteavtaler, strøing, salting og vintervedlikehold fra fagfolkene i Gjerdrum Snøbrøyting. For private, borettslag og bedrifter på Romerike.',
  alternates: { canonical: '/blogg' },
}

export default function BloggSide() {
  const sortert = [...blogginnlegg].sort((a, b) => b.dato.localeCompare(a.dato))
  return (
    <>
      <Breadcrumbs items={[{ navn: 'Blogg', url: '/blogg' }]} />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h1 className="max-w-3xl font-display text-4xl font-bold uppercase tracking-wide text-marine-800 sm:text-5xl">
          Tips og råd for en trygg vinter
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          Her deler vi erfaringene våre fra tiår med vinterdrift på Romerike – slik at du kan ta gode
          valg om brøyting, strøing og vedlikehold, uansett hvem du velger som leverandør.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortert.map((innlegg) => (
            <Link
              key={innlegg.slug}
              href={`/blogg/${innlegg.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-ice bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={innlegg.bilde}
                  alt={innlegg.bildeAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-beacon-800">
                  {innlegg.kategori}
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-marine-800">
                  {innlegg.tittel}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {innlegg.beskrivelse}
                </p>
                <time dateTime={innlegg.dato} className="mt-4 text-xs text-muted">
                  {new Date(innlegg.dato).toLocaleDateString('nb-NO', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <QuoteForm />
      <CTASection telefonFokus fra="white" />
    </>
  )
}
