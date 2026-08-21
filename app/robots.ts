import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    // /takk holdes ute av indeksen via meta noindex på siden selv –
    // en Disallow her ville hindret Google i å se den taggen.
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${site.url}/sitemap.xml`,
  }
}
