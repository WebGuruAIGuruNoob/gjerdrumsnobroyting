/**
 * Seksjonstittel med eyebrow-mønster: liten oransje etikett over
 * større sentence-case display-tittel. Bryter uppercase-monotonien
 * og gir et fast, gjenkjennelig rytmeelement på alle sider.
 */
export function SectionHeading({
  eyebrow,
  tittel,
  ingress,
  dark = false,
  id,
}: {
  eyebrow?: string
  tittel: string
  ingress?: string
  dark?: boolean
  id?: string
}) {
  return (
    <div id={id} className="max-w-3xl">
      {eyebrow && (
        <p
          className={`font-display text-sm font-bold uppercase tracking-[0.18em] ${
            dark ? 'text-beacon-400' : 'text-beacon-700'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-1 font-display text-3xl font-bold leading-tight tracking-wide sm:text-4xl ${
          dark ? 'text-white' : 'text-marine-800'
        }`}
      >
        {tittel}
      </h2>
      {ingress && (
        <p className={`mt-3 text-lg ${dark ? 'text-ice' : 'text-muted'}`}>{ingress}</p>
      )}
    </div>
  )
}
