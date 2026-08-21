import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { blogginnlegg, getBlogginnlegg } from '@/data/blogg'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { QuoteForm } from '@/components/QuoteForm'
import { site } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return blogginnlegg.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const innlegg = getBlogginnlegg(slug)
  if (!innlegg) return {}
  return {
    title: innlegg.tittel,
    description: innlegg.beskrivelse,
    alternates: { canonical: `/blogg/${innlegg.slug}` },
    openGraph: {
      type: 'article',
      title: innlegg.tittel,
      description: innlegg.beskrivelse,
      images: [{ url: innlegg.bilde }],
      publishedTime: innlegg.dato,
    },
  }
}

export default async function BloggInnleggSide({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const innlegg = getBlogginnlegg(slug)
  if (!innlegg) notFound()

  const { default: Innhold } = await import(`@/content/blogg/${slug}.mdx`)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: innlegg.tittel,
    description: innlegg.beskrivelse,
    datePublished: innlegg.dato,
    image: `${site.url}${innlegg.bilde}`,
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: { '@id': `${site.url}/#firma` },
    mainEntityOfPage: `${site.url}/blogg/${innlegg.slug}`,
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { navn: 'Blogg', url: '/blogg' },
          { navn: innlegg.tittel, url: `/blogg/${innlegg.slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <header>
          <span className="font-display text-sm font-bold uppercase tracking-widest text-beacon-600">
            {innlegg.kategori}
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-marine-800 sm:text-5xl">
            {innlegg.tittel}
          </h1>
          <time dateTime={innlegg.dato} className="mt-4 block text-sm text-muted">
            {new Date(innlegg.dato).toLocaleDateString('nb-NO', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            · {site.name}
          </time>
        </header>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={innlegg.bilde}
            alt={innlegg.bildeAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
        <div className="prose-blogg mt-8">
          <Innhold />
        </div>
      </article>
      <QuoteForm />
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
