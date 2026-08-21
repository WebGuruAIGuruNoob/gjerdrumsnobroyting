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
    tittel: 'Brøytestikker settes ut',
    tekst: 'Før sesongstart merker vi arealet ditt med brøytestikker, slik at kanter, belegningsstein og plen skånes gjennom hele vinteren.',
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

/** «Slik fungerer det» – 5 steg fra kontakt til bekymringsfri vinter. */
export function ProcessSteps() {
  return (
    <section className="bg-frost">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
          Slik fungerer det
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Fra første kontakt til bekymringsfri vinter – i fem enkle steg.
        </p>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steg.map((s, i) => (
            <li key={s.tittel} className="rounded-xl border border-ice bg-white p-5 shadow-sm">
              <span className="font-display text-3xl font-bold text-beacon-700">{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold uppercase leading-snug tracking-wide text-ink">
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
