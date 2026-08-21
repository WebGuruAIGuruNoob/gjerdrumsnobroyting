'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const LAGRINGSNOKKEL = 'sesongbanner-lukket-2026'

/**
 * Datostyrt sesongbanner (15. aug–30. nov): ærlig knapphet – rutene
 * fylles faktisk opp før sesongen. SSR-rendres synlig (ingen CLS i
 * sesongen); klienten skjuler utenfor vinduet eller etter lukking.
 */
export function SeasonBanner() {
  const [synlig, setSynlig] = useState(true)

  useEffect(() => {
    const nå = new Date()
    const mnd = nå.getMonth() // 0-indeksert: aug = 7, nov = 10
    const iSesongvindu = (mnd === 7 && nå.getDate() >= 15) || mnd === 8 || mnd === 9 || mnd === 10
    const lukket = window.localStorage.getItem(LAGRINGSNOKKEL) === '1'
    if (!iSesongvindu || lukket) setSynlig(false)
  }, [])

  if (!synlig) return null

  return (
    <div className="relative bg-beacon-500 text-night-950">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-10 py-2 text-center text-sm font-semibold sm:px-12">
        <p>
          Sesongavtaler for vinteren fylles opp nå –{' '}
          <Link href="/#tilbud" className="underline underline-offset-2 hover:no-underline">
            bestill gratis befaring før første snøfall
          </Link>
        </p>
      </div>
      <button
        type="button"
        aria-label="Lukk melding"
        onClick={() => {
          window.localStorage.setItem(LAGRINGSNOKKEL, '1')
          setSynlig(false)
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-night-950/70 hover:bg-night-950/10 hover:text-night-950"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M5 5 L15 15 M15 5 L5 15" />
        </svg>
      </button>
    </div>
  )
}
