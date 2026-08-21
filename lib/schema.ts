import { site } from './site'
import { omrader } from '@/data/omrader'
import { tjenester } from '@/data/tjenester'

/** LocalBusiness-schema – ligger i layout og gjelder hele nettstedet. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#firma`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: '+4748424288',
    email: site.email,
    foundingDate: String(site.founded),
    image: `${site.url}/bilder/traktor-skjaer-fres.jpg`,
    logo: `${site.url}/icon.svg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressCountry: 'NO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 60.0578,
      longitude: 11.0347,
    },
    areaServed: omrader.map((o) => ({
      '@type': 'Place',
      name: `${o.sted}, ${o.kommune}`,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vintertjenester',
      itemListElement: tjenester.map((t) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: t.navn,
          url: `${site.url}/tjenester/${t.slug}`,
        },
      })),
    },
    description:
      'Profesjonell snøbrøyting, strøing, bortkjøring av snø, takrydding og vintervedlikehold for privatpersoner, borettslag og bedrifter i Gjerdrum og på Romerike.',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      description: 'Døgnbemanning i vintersesongen',
    },
  }
}

/** WebSite-node – navnesignal for søkemotorer og AI-svarflater. */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    inLanguage: 'nb-NO',
    publisher: { '@id': `${site.url}/#firma` },
  }
}

/** Service-schema for tjeneste- og områdesider. */
export function serviceSchema({
  navn,
  serviceType,
  beskrivelse,
  url,
  omrade,
}: {
  navn: string
  /** Ren tjenestetype uten stedsnavn – geografien bæres av areaServed */
  serviceType: string
  beskrivelse: string
  url: string
  omrade?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: navn,
    description: beskrivelse,
    url,
    serviceType,
    provider: { '@id': `${site.url}/#firma` },
    ...(omrade ? { areaServed: { '@type': 'Place', name: omrade } } : {}),
  }
}

/** BreadcrumbList-schema. */
export function breadcrumbSchema(items: { navn: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.navn,
      item: `${site.url}${item.url}`,
    })),
  }
}
