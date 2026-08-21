import { site } from '@/lib/site'
import { blogginnlegg } from '@/data/blogg'

export const dynamic = 'force-static'

function escapeXml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function GET() {
  const sortert = [...blogginnlegg].sort((a, b) => b.dato.localeCompare(a.dato))
  const items = sortert
    .map(
      (b) => `    <item>
      <title>${escapeXml(b.tittel)}</title>
      <link>${site.url}/blogg/${b.slug}</link>
      <guid>${site.url}/blogg/${b.slug}</guid>
      <description>${escapeXml(b.beskrivelse)}</description>
      <category>${escapeXml(b.kategori)}</category>
      <pubDate>${new Date(b.dato).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)} – Blogg</title>
    <link>${site.url}/blogg</link>
    <description>Tips og råd om snøbrøyting, strøing og vintervedlikehold i Gjerdrum og på Romerike.</description>
    <language>nb-NO</language>
${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
