import { site } from '@/lib/site'

const punkter = [
  { tall: `${new Date().getFullYear() - site.founded}+ år`, tekst: 'som registrert firma – erfaring siden 90-tallet' },
  { tall: '24/7', tekst: 'døgnbemanning gjennom hele vintersesongen' },
  { tall: 'Automatisk', tekst: 'utrykning når snøfallet passerer avtalt høyde' },
  { tall: 'Lokal', tekst: 'base i Gjerdrum – kort utrykningstid i hele området' },
]

/** Faktabasert tillitsstripe – vises rett under hero på alle landingssider. */
export function SocialProof() {
  return (
    <section aria-label="Hvorfor velge oss" className="border-b border-ice bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {punkter.map((p) => (
          <div key={p.tall} className="flex flex-col">
            <span className="font-display text-2xl font-bold uppercase text-marine-700 sm:text-3xl">
              {p.tall}
            </span>
            <span className="mt-1 text-sm leading-snug text-muted">{p.tekst}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
