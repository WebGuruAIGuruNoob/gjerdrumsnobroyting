import { omtaler } from '@/data/omtaler'
import { SectionHeading } from './SectionHeading'

/** Ekte kundeomtaler – rendres først når data/omtaler.ts har innhold. */
export function Testimonials() {
  if (omtaler.length === 0) return null
  return (
    <section className="bg-frost">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading eyebrow="Kundene våre" tittel="Det naboene dine sier" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {omtaler.map((o) => (
            <figure key={o.sitat.slice(0, 40)} className="rounded-xl border border-ice bg-white p-6 shadow-sm">
              <blockquote className="text-ink">«{o.sitat}»</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-marine-700">
                {o.navn}
                {o.kontekst && <span className="font-normal text-muted"> · {o.kontekst}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
