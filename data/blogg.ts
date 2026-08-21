export type Blogginnlegg = {
  slug: string
  tittel: string
  beskrivelse: string
  dato: string
  kategori: string
  bilde: string
  bildeAlt: string
}

/**
 * Registrer nye innlegg her + legg MDX-filen i content/blogg/<slug>.mdx.
 * Det er alt som skal til – sitemap, listeside og artikkelside følger automatisk.
 */
export const blogginnlegg: Blogginnlegg[] = [
  {
    slug: 'fordeler-med-broyteavtale',
    tittel: 'Fordeler med brøyteavtale – trygghet og effektivitet gjennom vinteren',
    beskrivelse:
      'Hvorfor fast brøyteavtale lønner seg: rask respons, forutsigbar pris, færre skader og en vinter du ikke trenger å tenke på. Alt du bør vite før du signerer.',
    dato: '2026-08-21',
    kategori: 'Snøbrøyting',
    bilde: '/bilder/blogg-broyteavtale-cover.png',
    bildeAlt: 'Brøytetraktor rydder snø for avtalekunde',
  },
  {
    slug: 'veisalting-slik-bestiller-du',
    tittel: 'Veisalting og strøing: slik bestiller du – og slik brukes saltet riktig',
    beskrivelse:
      'Når trenger du salting, når holder grus – og kan salt skade asfalten? Praktisk veiledning for bestilling av veisalting og strøtjenester på Romerike.',
    dato: '2026-08-21',
    kategori: 'Strøing og salting',
    bilde: '/bilder/blogg-veisalting-cover.png',
    bildeAlt: 'Salting og strøing av vei på vinterføre',
  },
  {
    slug: 'hvem-har-ansvar-for-broyting',
    tittel: 'Hvem har ansvar for brøyting? Kommune, huseier, borettslag og veilag',
    beskrivelse:
      'Kommunen tar veien, du tar innkjørselen – og styret tar fellesarealene. Slik fordeles brøyte- og strøansvaret, og dette risikerer du hvis det glipper.',
    dato: '2026-08-21',
    kategori: 'Ansvar og regelverk',
    bilde: '/bilder/blogg-broyteavtale-inline.png',
    bildeAlt: 'Brøytet boliggate med tydelig ansvarsdeling mellom vei og innkjørsel',
  },
  {
    slug: 'klargjor-eiendommen-for-vinteren',
    tittel: 'Klargjør eiendommen for vinteren: sjekklisten før første snøfall',
    beskrivelse:
      'Syv ting du bør gjøre i september–oktober: sikre brøyteavtale, rydde arealer, merke kanter, planlegge snølagring og mer. Sjekklisten fra fagfolkene.',
    dato: '2026-08-21',
    kategori: 'Tips og råd',
    bilde: '/bilder/blogg-veisalting-inline.png',
    bildeAlt: 'Gårdsplass klargjort for vintersesongen før første snøfall',
  },
  {
    slug: 'hva-koster-snobroyting',
    tittel: 'Hva koster snøbrøyting? Slik settes prisen på brøyteavtaler',
    beskrivelse:
      'Areal, utløsningshøyde, strøing og responstid: her er faktorene som faktisk bestemmer prisen på snøbrøyting – og hvordan du får riktig pris for ditt areal.',
    dato: '2026-08-21',
    kategori: 'Priser',
    bilde: '/bilder/hero-broyting.jpg',
    bildeAlt: 'Snøbrøyting av innkjørsel – hva koster det?',
  },
]

export function getBlogginnlegg(slug: string): Blogginnlegg | undefined {
  return blogginnlegg.find((b) => b.slug === slug)
}
