/**
 * Plogskjær-deler: diagonal overgang mellom lys og mørk seksjon,
 * med varsellys-oransje kantlinje langs skjæret. Plasseres ØVERST
 * i den mørke seksjonen; `fra` er fargen på seksjonen over.
 */
export function SectionDivider({ fra = 'snow' }: { fra?: 'snow' | 'white' | 'frost' }) {
  const farge =
    fra === 'white' ? '#ffffff' : fra === 'frost' ? 'var(--color-frost)' : 'var(--color-snow)'
  return (
    <div aria-hidden="true" className="relative h-8 overflow-hidden md:h-12">
      <svg
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path d="M0 0 H100 V2.5 L38 12 L0 4.5 Z" fill="var(--color-beacon-500)" />
        <path d="M0 0 H100 V1.4 L38 10.6 L0 3.4 Z" fill={farge} />
      </svg>
    </div>
  )
}
