'use client'

import { useActionState } from 'react'
import { sendTilbudsforesporsel, type SkjemaStatus } from '@/app/actions'
import { omrader } from '@/data/omrader'

const inputKlasse =
  'w-full rounded-lg border border-ice bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-marine-500'

/** Tilbudsskjema for privat, borettslag og bedrift. */
export function QuoteForm({ forhandsvalgtOmrade }: { forhandsvalgtOmrade?: string }) {
  const [status, formAction, venter] = useActionState<SkjemaStatus, FormData>(
    sendTilbudsforesporsel,
    null
  )

  return (
    <section id="tilbud" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
          Få uforpliktende tilbud
        </h2>
        <p className="mt-2 text-muted">
          For borettslag, sameier, bedrifter og private. Fyll ut skjemaet, så kontakter vi deg innen
          24 timer – eller ring oss direkte for raskere svar.
        </p>
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
              required
              autoComplete="tel"
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
          {status?.feil && (
            <p role="alert" className="rounded-lg bg-beacon-500/15 px-4 py-3 text-sm font-semibold text-beacon-700 sm:col-span-2">
              {status.feil}
            </p>
          )}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={venter}
              className="w-full rounded-lg bg-marine-600 px-7 py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition hover:bg-marine-500 disabled:opacity-60 sm:w-auto"
            >
              {venter ? 'Sender …' : 'Send forespørsel'}
            </button>
            <p className="mt-3 text-xs text-muted">
              Uforpliktende og gratis. Vi bruker opplysningene kun til å besvare henvendelsen din –
              se personvernerklæringen.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
