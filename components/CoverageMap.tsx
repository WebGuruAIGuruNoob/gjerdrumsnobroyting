import Link from 'next/link'
import { omrader } from '@/data/omrader'
import { SectionHeading } from './SectionHeading'
import { SectionDivider } from './SectionDivider'
import { LogoMark } from './Logo'

/**
 * Stilisert dekningskart: basen på Askheim i sentrum, responstidssoner
 * utover, og alle 16 områdene som klikkbare punkter plassert etter
 * omtrentlig geografi (nord opp). Ingen konkurrent har noe tilsvarende.
 */

// Omtrentlige posisjoner i prosent av kartflaten (x fra vest, y fra nord)
const posisjoner: Record<string, { x: number; y: number }> = {
  'snobroyting-ask': { x: 48, y: 45 },
  'snobroyting-gronlund': { x: 41, y: 37 },
  'snobroyting-fjellbakk': { x: 52, y: 35 },
  'snobroyting-sorum': { x: 60, y: 38 },
  'snobroyting-nygard': { x: 58, y: 44 },
  'snobroyting-sandum': { x: 62, y: 51 },
  'snobroyting-gronlundfjellet': { x: 35, y: 44 },
  'snobroyting-vestasen': { x: 40, y: 52 },
  'snobroyting-kankedal': { x: 37, y: 57 },
  'snobroyting-hellen': { x: 54, y: 58 },
  'snobroyting-eltonasen': { x: 36, y: 23 },
  'snobroyting-klofta': { x: 74, y: 51 },
  'snobroyting-lindeberg': { x: 77, y: 60 },
  'snobroyting-frogner': { x: 67, y: 68 },
  'snobroyting-heksebergasen': { x: 56, y: 73 },
  'snobroyting-skedsmokorset': { x: 48, y: 84 },
}

const soner = [
  { r: 16, tekst: '5–10 min' },
  { r: 32, tekst: '10–15 min' },
  { r: 46, tekst: '15–20 min' },
]

export function CoverageMap({ fra = 'snow' }: { fra?: 'snow' | 'white' | 'frost' }) {
  return (
    <section className="bg-night-900">
      <SectionDivider fra={fra} />
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Dekningskart"
          tittel="Utrykningstid fra basen vår i Gjerdrum"
          ingress="Nord er opp, basen er på Askheim – og hele kartet er innenfor 20 minutter. Velg området ditt:"
        />
        <div className="mx-auto mt-10 grid items-center gap-8 lg:grid-cols-[1fr_260px]">
          <div className="relative mx-auto aspect-square w-full max-w-2xl">
            {/* Soner */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {[...soner].reverse().map((sone) => (
                <circle
                  key={sone.r}
                  cx="48"
                  cy="45"
                  r={sone.r}
                  fill="var(--color-marine-500)"
                  fillOpacity="0.13"
                  stroke="var(--color-marine-500)"
                  strokeOpacity="0.45"
                  strokeWidth="0.35"
                  strokeDasharray="1.4 1.1"
                />
              ))}
            </svg>
            {/* Basen */}
            <div
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: '48%', top: '45%' }}
            >
              <LogoMark className="h-9 w-9 drop-shadow-lg md:h-11 md:w-11" />
            </div>
            {/* Områdepunkter */}
            {omrader.map((o) => {
              const pos = posisjoner[o.slug]
              if (!pos) return null
              return (
                <Link
                  key={o.slug}
                  href={`/omrader/${o.slug}`}
                  title={`Snøbrøyting ${o.sted} – utrykning ${o.utrykningstid}`}
                  className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <span className="flex flex-col items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-beacon-500 ring-2 ring-night-900 transition group-hover:scale-150 md:h-3 md:w-3" />
                    <span className="mt-1 whitespace-nowrap rounded bg-night-950/70 px-1.5 py-0.5 text-[0.6rem] font-semibold text-ice transition group-hover:bg-beacon-500 group-hover:text-night-950 md:text-xs">
                      {o.sted}
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
              Responstidssoner
            </h3>
            <ul className="mt-4 space-y-3">
              {soner.map((sone, i) => (
                <li key={sone.r} className="flex items-center gap-3 text-ice">
                  <span
                    aria-hidden="true"
                    className="inline-block h-4 w-4 rounded-full border border-marine-500"
                    style={{ background: `rgba(30,107,168,${0.45 - i * 0.14})` }}
                  />
                  {sone.tekst} fra basen
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[28ch] text-sm leading-relaxed text-ice/70">
              Faste ruter gjør at maskinene ofte allerede er i nærområdet ditt når snøen kommer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
