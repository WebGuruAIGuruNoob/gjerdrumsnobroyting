'use client'

import { useActionState } from 'react'
import { track } from '@vercel/analytics'
import { sendTilbudsforesporsel, type SkjemaStatus } from '@/app/actions'
import { omrader } from '@/data/omrader'
import { SectionHeading } from './SectionHeading'

const inputKlasse =
  'w-full rounded-lg border border-ice bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-marine-500 focus-visible:ring-2 focus-visible:ring-marine-500/40'

/** Tilbudsskjema for privat, borettslag og bedrift. Kun navn + telefon er påkrevd. */
export function QuoteForm({ forhandsvalgtOmrade }: { forhandsvalgtOmrade?: string }) {
  const [status, formAction, venter] = useActionState<SkjemaStatus, FormData>(
    sendTilbudsforesporsel,
    null
  )

  return (
    <section id="tilbud" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Uforpliktende og gratis"
          tittel="Få tilbud på din adresse"
          ingress="Send adressen, så regner vi på arealet ditt – for private, borettslag, sameier og bedrifter. Vi svarer innen 24 timer, som regel raskere."
        />
        <form action={formAction} className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="hidden" aria-hidden="true">
            <label>
              Ikke fyll ut dette feltet
              <input type="text" name="nettside" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div>
            <label htmlFor="navn" className="mb-1 block text-sm font-semibold">
              Navn *
            </label>
            <input id="navn" name="navn" required autoComplete="name" className={inputKlasse} />
          </div>
          <div>
            <label htmlFor="telefon" className="mb-1 block text-sm font-semibold">
              Telefon *
            </label>
            <input
              id="telefon"
              name="telefon"
              type="tel"
              inputMode="tel"
              required
              autoComplete="tel"
              className={inputKlasse}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="adresse" className="mb-1 block text-sm font-semibold">
              Adressen som skal brøytes
            </label>
            <input
              id="adresse"
              name="adresse"
              autoComplete="street-address"
              placeholder="F.eks. Askvegen 12, 2022 Gjerdrum"
              className={inputKlasse}
            />
          </div>
          <div>
            <label htmlFor="epost" className="mb-1 block text-sm font-semibold">
              E-post
            </label>
            <input id="epost" name="epost" type="email" autoComplete="email" className={inputKlasse} />
          </div>
          <div>
            <label htmlFor="kundetype" className="mb-1 block text-sm font-semibold">
              Type kunde
            </label>
            <select id="kundetype" name="kundetype" className={inputKlasse} defaultValue="Privat">
              <option>Privat</option>
              <option>Borettslag / sameie</option>
              <option>Bedrift / næring</option>
              <option>Offentlig / annet</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="omrade" className="mb-1 block text-sm font-semibold">
              Område
            </label>
            <select
              id="omrade"
              name="omrade"
              className={inputKlasse}
              defaultValue={forhandsvalgtOmrade ?? ''}
            >
              <option value="">Velg område</option>
              {omrader.map((o) => (
                <option key={o.slug} value={o.sted}>
                  {o.sted} ({o.kommune})
                </option>
              ))}
              <option value="Annet">Annet sted</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="melding" className="mb-1 block text-sm font-semibold">
              Hva trenger du hjelp med?
            </label>
            <textarea
              id="melding"
              name="melding"
              rows={4}
              placeholder="F.eks: Brøyteavtale for innkjørsel og gårdsplass, ca. 100 m². Ønsker også strøing."
              className={inputKlasse}
            />
          </div>
          <div aria-live="polite" className="sm:col-span-2">
            {status?.feil && (
              <p role="alert" className="rounded-lg bg-beacon-500/15 px-4 py-3 text-sm font-semibold text-beacon-800">
                {status.feil}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={venter}
              onClick={() => track('skjema_sendt')}
              className="w-full rounded-lg bg-beacon-500 px-7 py-4 font-display text-lg font-bold uppercase tracking-wide text-night-950 shadow-md transition hover:bg-beacon-400 disabled:opacity-60 sm:w-auto"
            >
              {venter ? 'Sender …' : 'Få uforpliktende tilbud'}
            </button>
            <p className="mt-2 text-sm font-semibold text-marine-700">
              Svar innen 24 timer – som regel samme dag.
            </p>
            <p className="mt-2 text-xs text-muted">
              Gratis og uforpliktende. Vi bruker opplysningene kun til å besvare henvendelsen din –
              se personvernerklæringen. {` `}
              <span className="whitespace-nowrap">
                Langsholt Snø og Grønt AS · Org.nr 987 714 603 · Etablert 2005
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
