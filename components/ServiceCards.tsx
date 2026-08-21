import Image from 'next/image'
import Link from 'next/link'
import { tjenester } from '@/data/tjenester'
import { tjenesteIkoner } from './Icons'

/** Tjenestekort med bilde og ikon-chip – brukes på forside og tjenestehub. */
export function ServiceCards({ utenom }: { utenom?: string }) {
  const liste = tjenester.filter((t) => t.slug !== utenom)
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {liste.map((t) => {
        const Ikon = tjenesteIkoner[t.slug]
        return (
          <Link
            key={t.slug}
            href={`/tjenester/${t.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-ice bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <div className="foto absolute inset-0">
                <Image
                  src={t.bilde}
                  alt={t.bildeAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              {Ikon && (
                <span className="absolute bottom-0 left-4 flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-lg bg-marine-700 text-white shadow-md">
                  <Ikon className="h-6 w-6" />
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5 pt-8">
              <h3 className="text-lg font-bold text-marine-800">{t.navn}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.kortBeskrivelse}</p>
              <span className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-marine-600 group-hover:text-marine-500">
                Les mer →
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
