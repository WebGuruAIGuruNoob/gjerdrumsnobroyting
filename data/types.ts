export type Faq = {
  sp: string
  svar: string
}

export type Tjeneste = {
  slug: string
  navn: string
  kortBeskrivelse: string
  metaTittel: string
  metaBeskrivelse: string
  heroTittel: string
  ingress: string
  bilde: string
  bildeAlt: string
  seksjoner: {
    tittel: string
    avsnitt: string[]
    punkter?: string[]
  }[]
  faq: Faq[]
  relaterteTjenester: string[]
}

export type Omrade = {
  slug: string
  sted: string
  kommune: 'Gjerdrum' | 'Nannestad' | 'Ullensaker' | 'Lillestrøm'
  utrykningstid: string
  metaTittel: string
  metaBeskrivelse: string
  heroTittel: string
  heroUndertittel: string
  /** Lokal forankring: 2–3 avsnitt som beviser at vi kjenner stedet */
  intro: string[]
  /** Navngitte nabolag, veier og landemerker vi dekker */
  nabolag: string[]
  /** Lokale forhold: terreng, snø, trafikk – 2–3 avsnitt */
  lokaleForhold: {
    tittel: string
    avsnitt: string[]
  }
  /** Unik tekst per kundesegment i dette området */
  segmenter: {
    privat: string[]
    borettslag: string[]
    bedrift: string[]
  }
  /** 7–10 lokalt vinklede spørsmål og svar */
  faq: Faq[]
  naboOmrader: string[]
}
