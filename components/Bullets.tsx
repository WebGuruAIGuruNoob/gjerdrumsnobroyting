import { IconStikke } from './Icons'

/** Punktliste med brøytestikke-markør i stedet for «✓». */
export function StikkeListe({
  punkter,
  dark = false,
  className = '',
}: {
  punkter: React.ReactNode[]
  dark?: boolean
  className?: string
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {punkter.map((punkt, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden="true"
            className={`mt-0.5 shrink-0 ${dark ? 'text-ice' : 'text-marine-600'}`}
          >
            <IconStikke />
          </span>
          <div className={dark ? 'text-ice' : 'text-ink'}>{punkt}</div>
        </li>
      ))}
    </ul>
  )
}
