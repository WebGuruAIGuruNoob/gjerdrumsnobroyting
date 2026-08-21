export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" className="fill-marine-700" />
      {/* Snøkrystall */}
      <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
        <line x1="24" y1="8" x2="24" y2="28" />
        <line x1="15.34" y1="13" x2="32.66" y2="23" />
        <line x1="32.66" y1="13" x2="15.34" y2="23" />
        <line x1="24" y1="11" x2="20.5" y2="8.5" />
        <line x1="24" y1="11" x2="27.5" y2="8.5" />
        <line x1="17.5" y1="14.3" x2="17.2" y2="10" />
        <line x1="17.5" y1="14.3" x2="13.5" y2="15.8" />
        <line x1="30.5" y1="14.3" x2="30.8" y2="10" />
        <line x1="30.5" y1="14.3" x2="34.5" y2="15.8" />
        <line x1="17.5" y1="21.7" x2="13.5" y2="20.2" />
        <line x1="17.5" y1="21.7" x2="17.2" y2="26" />
        <line x1="30.5" y1="21.7" x2="34.5" y2="20.2" />
        <line x1="30.5" y1="21.7" x2="30.8" y2="26" />
      </g>
      {/* Plogskjær */}
      <path d="M8 33 L24 39.5 L40 33 L40 37 L24 43.5 L8 37 Z" className="fill-beacon-500" />
    </svg>
  )
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-bold uppercase tracking-wide ${dark ? 'text-white' : 'text-marine-800'}`}
        >
          Gjerdrum
        </span>
        <span
          className={`font-display text-[0.78rem] font-semibold uppercase tracking-[0.22em] ${dark ? 'text-ice' : 'text-marine-600'}`}
        >
          Snøbrøyting
        </span>
      </span>
    </span>
  )
}
