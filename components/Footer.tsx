import Link from 'next/link'
import { site } from '@/lib/site'
import { tjenester } from '@/data/tjenester'
import { omrader } from '@/data/omrader'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-night-900 pb-24 text-ice md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ice/80">
            Profesjonell snøbrøyting, strøing og vintervedlikehold i Gjerdrum og på Romerike.
            Etablert {site.founded} – erfaring siden 90-tallet og døgnbemanning i sesongen.
          </p>
          <div className="mt-5 space-y-1 text-sm">
            <p>
              <a href={site.phoneHref} className="font-semibold text-white hover:text-beacon-400">
                Tlf: {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p className="text-ice/70">
              {site.legalName}
              <br />
              {site.address.street}, {site.address.zip} {site.address.city}
              <br />
              Org.nr: {site.orgNr} MVA
            </p>
          </div>
        </div>

        <nav aria-label="Tjenester">
          <p className="font-display text-base font-bold uppercase tracking-wider text-white">
            Tjenester
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {tjenester.map((t) => (
              <li key={t.slug}>
                <Link href={`/tjenester/${t.slug}`} className="text-ice/80 transition hover:text-white">
                  {t.navn}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/priser" className="text-ice/80 transition hover:text-white">
                Priser
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Områder" className="lg:col-span-2">
          <p className="font-display text-base font-bold uppercase tracking-wider text-white">
            Snøbrøyting i ditt område
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {omrader.map((o) => (
              <li key={o.slug}>
                <Link href={`/omrader/${o.slug}`} className="text-ice/80 transition hover:text-white">
                  Snøbrøyting {o.sted}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-night-700">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-ice/60 sm:flex-row sm:items-center sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Alle rettigheter forbeholdt.
          </p>
          <p>
            <a href="/bot-policy.txt" className="mr-4 inline-flex min-h-11 items-center hover:text-white">Robot &amp; AI content policy</a>
            <Link href="/personvern" className="hover:text-white">
              Personvernerklæring
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
