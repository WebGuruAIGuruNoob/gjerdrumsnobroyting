import Image from 'next/image'
import { SectionHeading } from './SectionHeading'
import { SectionDivider } from './SectionDivider'

const bilder = [
  {
    src: '/bilder/traktor-skjaer-fres.jpg',
    alt: 'Traktor med skjær og fres i arbeid – maskinparken vår',
    tekst: 'Traktor med skjær og fres – arbeidshesten i flåten',
    stor: true,
  },
  {
    src: '/bilder/hero-broyting.jpg',
    alt: 'Maskinell snøbrøyting av gårdsplass i Gjerdrum',
    tekst: 'Maskinell brøyting av gårdsplass',
    stor: false,
  },
  {
    src: '/bilder/bortkjoring-sno.jpg',
    alt: 'Bortkjøring av store snømengder med hjullaster og lastebil',
    tekst: 'Bortkjøring når haugene tar plassen',
    stor: false,
  },
  {
    src: '/bilder/beredskap.jpg',
    alt: 'Brøytemaskin i døgnberedskap gjennom vintersesongen',
    tekst: 'Døgnberedskap gjennom hele sesongen',
    stor: false,
  },
  {
    src: '/bilder/stroing.jpg',
    alt: 'Strøing av grus for trygg fremkommelighet på glatt føre',
    tekst: 'Strøing for trygg fremkommelighet',
    stor: false,
  },
]

/** Bildegalleri fra egen drift – mørk seksjon, ekte maskiner, ekte jobber. */
export function Gallery({
  tittel = 'Maskinene som gjør jobben',
  fra = 'white',
}: {
  tittel?: string
  fra?: 'snow' | 'white' | 'frost'
}) {
  return (
    <section className="bg-night-800">
      <SectionDivider fra={fra} />
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Fra driften vår"
          tittel={tittel}
          ingress="Moderne utstyr dimensjonert for norske vintre – fra smale innkjørsler til store næringsarealer."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {bilder.map((b) => (
            <figure
              key={b.src}
              className={`group relative overflow-hidden rounded-xl ${
                b.stor ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-[4/3]'
              }`}
            >
              <div className="foto absolute inset-0">
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  sizes={b.stor ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night-950/85 to-transparent px-3 pb-2.5 pt-8 text-xs font-semibold text-ice sm:text-sm">
                {b.tekst}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
