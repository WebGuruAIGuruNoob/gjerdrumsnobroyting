import { SectionHeading } from './SectionHeading'

const steg = [
  {
    tittel: 'Befaring og tilbud',
    tekst: 'Ring eller send SMS med adressen din. Vi vurderer arealet – ved behov med gratis befaring – og gir deg et konkret, uforpliktende tilbud.',
  },
  {
    tittel: 'Avtale med utløsningshøyde',
    tekst: 'Vi avtaler når brøytingen skal utløses (typisk 5–10 cm snø), hva som skal strøs, og eventuelle spesialbehov som håndrydding eller bortkjøring.',
  },
  {
    tittel: 'Brøytestikker bør settes ut',
    tekst: 'Før sesongstart bør arealet merkes med brøytestikker, slik at kanter, belegningsstein og plen skånes gjennom hele vinteren.',
  },
  {
    tittel: 'Automatisk utrykning',
    tekst: 'Vi overvåker været døgnet rundt. Når snøfallet passerer avtalt høyde, rykker maskinene ut – du trenger aldri ringe eller bestille.',
  },
  {
    tittel: 'Oppfølging hele sesongen',
    tekst: 'Strøing ved glatte forhold, bortkjøring når haugene tar plassen, og vårfeiing når sesongen er over. Ett kontaktpunkt hele veien.',
  },
]

/** «Slik fungerer det» – sammenkoblet tidslinje: innholdet ER en sekvens. */
export function ProcessSteps() {
  return (
    <section className="bg-frost">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Slik fungerer det"
          tittel="Fra første kontakt til bekymringsfri vinter"
          ingress="Fem steg – og fire av dem er vår jobb."
        />
        <ol className="relative mt-10 grid gap-8 border-l-2 border-ice pl-8 lg:grid-cols-5 lg:gap-6 lg:border-l-0 lg:pl-0">
          {/* Horisontal rute-linje på store skjermer */}
          <div
            aria-hidden="true"
            className="absolute left-8 right-4 top-[1.05rem] hidden h-0.5 bg-ice lg:block"
          />
          {steg.map((s, i) => (
            <li key={s.tittel} className="relative lg:pt-0">
              <span
                aria-hidden="true"
                className="absolute -left-[2.55rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-beacon-500 font-display text-lg font-bold text-night-950 ring-4 ring-frost lg:static lg:mb-4 lg:flex"
              >
                {i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold leading-snug tracking-wide text-marine-800">
                {s.tittel}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.tekst}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
