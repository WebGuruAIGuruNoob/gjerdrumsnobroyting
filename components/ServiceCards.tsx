import Image from 'next/image'
import Link from 'next/link'
import { tjenester } from '@/data/tjenester'

/** Tjenestekort med bilde – brukes på forside og tjenestehub. */
export function ServiceCards({ utenom }: { utenom?: string }) {
  const liste = tjenester.filter((t) => t.slug !== utenom)
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {liste.map((t) => (
        <Link
          key={t.slug}
          href={`/tjenester/${t.slug}`}
          className="group flex flex-col overflow-hidden rounded-xl border border-ice bg-white shadow-sm transition hover:shadow-md"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={t.bilde}
              alt={t.bildeAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-marine-800">
              {t.navn}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.kortBeskrivelse}</p>
            <span className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-beacon-600 group-hover:text-beacon-500">
              Les mer →
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
