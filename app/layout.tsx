import type { Metadata } from 'next'
import { Barlow_Condensed, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { site } from '@/lib/site'
import { localBusinessSchema, webSiteSchema } from '@/lib/schema'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StickyCTA } from '@/components/StickyCTA'
import { SeasonBanner } from '@/components/SeasonBanner'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Snøbrøyting i Gjerdrum og på Romerike – Gjerdrum Snøbrøyting',
    template: '%s | Gjerdrum Snøbrøyting',
  },
  description:
    'Profesjonell snøbrøyting, strøing og vintervedlikehold for privat, borettslag og bedrift i Gjerdrum og på Romerike. Døgnbemanning i sesong – ring 48 42 42 88 for uforpliktende tilbud.',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${barlow.variable} ${sourceSans.variable}`}>
      <body>
        <SeasonBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
