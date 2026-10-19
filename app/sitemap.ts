import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { tjenester } from '@/data/tjenester'
import { omrader } from '@/data/omrader'
import { blogginnlegg } from '@/data/blogg'

/**
 * Innholdsrevisjonsdato: bumpes KUN når sideinnhold faktisk endres,
 * ikke ved hver deploy – lastmod som alltid endrer seg mister tillit
 * hos Google og svekker recrawl-prioriteringen.
 */
const INNHOLD_OPPDATERT = new Date('2026-08-21')

export default function sitemap(): MetadataRoute.Sitemap {
  const statiske = ['', '/tjenester', '/omrader', '/priser', '/om-oss', '/kontakt', '/blogg', '/personvern', '/takk'].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: INNHOLD_OPPDATERT,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })
  )

  const tjenesteSider = tjenester.map((t) => ({
    url: `${site.url}/tjenester/${t.slug}`,
    lastModified: INNHOLD_OPPDATERT,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const omradeSider = omrader.map((o) => ({
    url: `${site.url}/omrader/${o.slug}`,
    lastModified: INNHOLD_OPPDATERT,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const bloggSider = blogginnlegg.map((b) => ({
    url: `${site.url}/blogg/${b.slug}`,
    lastModified: new Date(b.dato),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...statiske, ...tjenesteSider, ...omradeSider, ...bloggSider]
}
