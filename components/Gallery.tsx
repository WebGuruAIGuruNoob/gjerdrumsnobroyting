import Image from 'next/image'

const bilder = [
  { src: '/bilder/traktor-skjaer-fres.jpg', alt: 'Traktor med skjær og fres i arbeid – maskinparken vår' },
  { src: '/bilder/hero-broyting.jpg', alt: 'Maskinell snøbrøyting av gårdsplass i Gjerdrum' },
  { src: '/bilder/bortkjoring-sno.jpg', alt: 'Bortkjøring av store snømengder med hjullaster og lastebil' },
  { src: '/bilder/beredskap.jpg', alt: 'Brøytemaskin i døgnberedskap gjennom vintersesongen' },
  { src: '/bilder/stroing.jpg', alt: 'Strøing av grus for trygg fremkommelighet på glatt føre' },
  { src: '/bilder/varfeiing.jpg', alt: 'Vårfeiing av uteområder etter endt vintersesong' },
]

/** Bildegalleri fra egen drift – ekte maskiner, ekte jobber. */
export function Gallery({ tittel = 'Fra maskinparken vår' }: { tittel?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
        {tittel}
      </h2>
      <p className="mt-2 max-w-2xl text-muted">
        Moderne utstyr dimensjonert for norske vintre – fra smale innkjørsler til store næringsarealer.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {bilder.map((b) => (
          <div key={b.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={b.src}
              alt={b.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
