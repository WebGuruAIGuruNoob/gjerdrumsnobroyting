import Link from 'next/link'
import { omrader } from '@/data/omrader'
import { IconPin } from './Icons'
import { SectionHeading } from './SectionHeading'

/** Kompakte område-chips – lenker til alle GEO-sidene. */
export function AreaChips({ utenom }: { utenom?: string }) {
  const liste = omrader.filter((o) => o.slug !== utenom)
  return (
    <ul className="flex flex-wrap gap-2.5">
      {liste.map((o) => (
        <li key={o.slug}>
          <Link
            href={`/omrader/${o.slug}`}
            title={`Snøbrøyting ${o.sted} (${o.kommune}) – utrykning ${o.utrykningstid}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-marine-200 bg-white py-2 pl-2.5 pr-4 text-sm font-semibold text-marine-700 transition hover:border-marine-500 hover:bg-marine-50"
          >
            <IconPin className="h-4 w-4" />
            {o.sted}
            <span className="font-normal text-muted">· {o.utrykningstid}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** Områdeseksjon med chips – brukes der dekningskartet ikke vises. */
export function AreaGrid({
  utenom,
  tittel = 'Vi brøyter der du bor',
}: {
  utenom?: string
  tittel?: string
}) {
  return (
    <section className="bg-frost">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Områdene våre"
          tittel={tittel}
          ingress="Fast base i Gjerdrum og korte utrykningstider i hele området – velg ditt sted:"
        />
        <div className="mt-8">
          <AreaChips utenom={utenom} />
        </div>
      </div>
    </section>
  )
}
