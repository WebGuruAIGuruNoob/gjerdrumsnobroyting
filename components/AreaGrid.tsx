import Link from 'next/link'
import { omrader } from '@/data/omrader'

/** Lenkerutenett til alle områdesidene – brukes på forside og områdehub. */
export function AreaGrid({
  utenom,
  tittel = 'Vi brøyter der du bor',
}: {
  utenom?: string
  tittel?: string
}) {
  const liste = omrader.filter((o) => o.slug !== utenom)
  return (
    <section className="bg-frost">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
          {tittel}
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Fast base i Gjerdrum og korte utrykningstider i hele området – velg ditt sted:
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {liste.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/omrader/${o.slug}`}
                className="flex h-full flex-col rounded-xl border border-ice bg-white p-4 shadow-sm transition hover:border-marine-200 hover:shadow-md"
              >
                <span className="font-display text-lg font-semibold uppercase tracking-wide text-marine-700">
                  {o.sted}
                </span>
                <span className="mt-1 text-xs text-muted">
                  {o.kommune} · utrykning {o.utrykningstid}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
