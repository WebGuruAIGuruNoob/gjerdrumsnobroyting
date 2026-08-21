export type Omtale = {
  /** Sitatet, ordrett fra kunden */
  sitat: string
  /** Navn slik kunden har godkjent visning (f.eks. «Kari N., Ask») */
  navn: string
  /** Kundetype/sted, f.eks. «Borettslag, Skedsmokorset» */
  kontekst?: string
}

/**
 * KUN ekte kundeomtaler legges inn her – med kundens samtykke.
 * Vi dikter aldri opp omtaler. Når listen har innhold, vises
 * Testimonials-seksjonen automatisk på forsiden.
 */
export const omtaler: Omtale[] = []
