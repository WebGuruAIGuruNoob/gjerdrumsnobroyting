import Link from 'next/link'
import { site } from '@/lib/site'
import { Logo } from './Logo'
import { RingButton, SmsButton } from './CTAButtons'

const nav = [
  { href: '/tjenester', label: 'Tjenester' },
  { href: '/omrader', label: 'Områder' },
  { href: '/priser', label: 'Priser' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/blogg', label: 'Blogg' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ice bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label={`${site.name} – til forsiden`}>
          <Logo />
        </Link>
        <nav aria-label="Hovedmeny" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm font-semibold uppercase tracking-wider text-ink transition hover:text-marine-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden md:block">
            <SmsButton />
          </span>
          <RingButton label={`Ring ${site.phoneDisplay}`} />
        </div>
      </div>
      <nav aria-label="Meny" className="flex gap-4 overflow-x-auto border-t border-ice px-4 py-2 lg:hidden">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap font-display text-sm font-semibold uppercase tracking-wider text-marine-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
