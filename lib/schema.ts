import { site } from './site'
import { omrader } from '@/data/omrader'

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
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressCountry: 'NO',
    },
    areaServed: omrader.map((o) => ({
      '@type': 'Place',
      name: `${o.sted}, ${o.kommune}`,
    })),
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

/** Service-schema for tjeneste- og områdesider. */
export function serviceSchema({
  navn,
  beskrivelse,
  url,
  omrade,
}: {
  navn: string
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
    serviceType: navn,
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
