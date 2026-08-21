import type { Metadata } from 'next'
import { site } from './site'

/**
 * Felles OpenGraph-bygger: per-side openGraph i generateMetadata
 * overskriver hele layout-objektet (shallow merge), så siteName,
 * locale, type og url må alltid settes her – ikke bare i layout.
 */
export function ogFor({
  tittel,
  beskrivelse,
  path,
  type = 'website',
  publishedTime,
  images,
}: {
  tittel: string
  beskrivelse: string
  path: string
  type?: 'website' | 'article'
  publishedTime?: string
  images?: { url: string }[]
}): NonNullable<Metadata['openGraph']> {
  return {
    type,
    locale: 'nb_NO',
    siteName: site.name,
    url: `${site.url}${path}`,
    title: tittel,
    description: beskrivelse,
    ...(publishedTime ? { publishedTime } : {}),
    ...(images ? { images } : {}),
  }
}
