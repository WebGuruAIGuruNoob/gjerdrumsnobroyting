'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/lib/site'
import { Logo } from './Logo'
import { RingButton, SmsButton, TilbudButton } from './CTAButtons'

const nav = [
  { href: '/tjenester', label: 'Tjenester' },
  { href: '/omrader', label: 'Områder' },
  { href: '/priser', label: 'Priser' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/blogg', label: 'Blogg' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  const pathname = usePathname()
  const [apen, setApen] = useState(false)

  // Lukk menyen ved navigasjon
  useEffect(() => {
    setApen(false)
  }, [pathname])

  const erAktiv = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-40 border-b border-ice bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/">
          <Logo />
        </Link>
        <nav aria-label="Hovedmeny" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={erAktiv(item.href) ? 'page' : undefined}
              className={`border-b-2 pb-0.5 font-display text-sm font-semibold uppercase tracking-wider transition hover:text-marine-600 ${
                erAktiv(item.href)
                  ? 'border-beacon-500 text-marine-700'
                  : 'border-transparent text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden xl:block">
            <TilbudButton />
          </span>
          <RingButton label={`Ring ${site.phoneDisplay}`} kilde="header" />
          <button
            type="button"
            aria-expanded={apen}
            aria-controls="mobilmeny"
            aria-label={apen ? 'Lukk meny' : 'Åpne meny'}
            onClick={() => setApen((a) => !a)}
            className="rounded-lg border border-ice p-2.5 text-marine-800 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {apen ? <path d="M5 5 L19 19 M19 5 L5 19" /> : <path d="M3.5 6.5 H20.5 M3.5 12 H20.5 M3.5 17.5 H20.5" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobilmeny-ark */}
      <nav
        id="mobilmeny"
        aria-label="Meny"
        className={`border-t border-ice bg-white lg:hidden ${apen ? 'block' : 'hidden'}`}
      >
        <ul className="px-4 py-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={erAktiv(item.href) ? 'page' : undefined}
                className={`flex items-center justify-between border-b border-ice/60 py-3.5 font-display text-base font-semibold uppercase tracking-wider ${
                  erAktiv(item.href) ? 'text-beacon-700' : 'text-ink'
                }`}
              >
                {item.label}
                <span aria-hidden="true" className="text-muted">›</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 px-4 pb-4 pt-1">
          <RingButton kilde="mobilmeny" />
          <SmsButton kilde="mobilmeny" />
        </div>
      </nav>
    </header>
  )
}
