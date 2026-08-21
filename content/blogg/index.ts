import type { ComponentType } from 'react'

/**
 * Import-register med literale stier: gjør at bundleren kan spore
 * alle MDX-modulene statisk (template-literal-imports feiler i
 * Vercels output-tracing på Windows). Nye innlegg registreres her
 * OG i data/blogg.ts.
 */
export const innleggModuler: Record<string, () => Promise<{ default: ComponentType }>> = {
  'fordeler-med-broyteavtale': () => import('./fordeler-med-broyteavtale.mdx'),
  'veisalting-slik-bestiller-du': () => import('./veisalting-slik-bestiller-du.mdx'),
  'hva-koster-snobroyting': () => import('./hva-koster-snobroyting.mdx'),
  'hvem-har-ansvar-for-broyting': () => import('./hvem-har-ansvar-for-broyting.mdx'),
  'klargjor-eiendommen-for-vinteren': () => import('./klargjor-eiendommen-for-vinteren.mdx'),
}
