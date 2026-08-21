/**
 * Egetegnet ikonsett – 24×24 strek-ikoner i logoens konstruksjon:
 * marine strek (currentColor) + ett varsellys-oransje aksent-element per ikon.
 */

type IconProps = { className?: string }

function Svg({ className = 'h-6 w-6', children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const beacon = 'var(--color-beacon-500)'

/** Plogskjær som skyver snø */
export function IconPlog({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 19 L20 8 C 16 10, 13.5 14, 13 19 Z" />
      <path d="M3 19 H21" />
      <circle cx="9.5" cy="16.5" r="0.9" fill={beacon} stroke="none" />
      <circle cx="6.5" cy="14" r="0.9" fill={beacon} stroke="none" />
      <circle cx="8" cy="11.5" r="0.9" fill={beacon} stroke="none" />
    </Svg>
  )
}

/** Strøvifte – beholder som sprer grus */
export function IconStro({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8.5 4 H15.5 L14 9.5 H10 Z" />
      <path d="M12 9.5 V12" />
      <circle cx="6" cy="16" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="16.6" r="0.9" fill={beacon} stroke="none" />
      <circle cx="18" cy="16" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="19.5" r="0.9" fill={beacon} stroke="none" />
      <circle cx="9" cy="20" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="20" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="19.5" r="0.9" fill={beacon} stroke="none" />
    </Svg>
  )
}

/** Tippbil – bortkjøring av snø */
export function IconTipp({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M2.5 17 H21.5" />
      <circle cx="7" cy="17" r="1.9" />
      <circle cx="16.5" cy="17" r="1.9" />
      <path d="M3.5 14.5 V10.5 H7.5 L9.5 13" />
      <path d="M10 14 L19 14 L21 7 L12 8.2 Z" />
      <circle cx="21.8" cy="10.5" r="0.9" fill={beacon} stroke="none" />
      <circle cx="22.4" cy="13.2" r="0.9" fill={beacon} stroke="none" />
    </Svg>
  )
}

/** Tak med snø som fjernes */
export function IconTak({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 11 L12 4 L21 11" />
      <path d="M5.5 9.5 V19 H18.5 V9.5" />
      <path d="M8 4.5 H10" />
      <circle cx="20" cy="14" r="0.9" fill={beacon} stroke="none" />
      <circle cx="21.2" cy="17" r="0.9" fill={beacon} stroke="none" />
    </Svg>
  )
}

/** Boligblokk – borettslag og sameier */
export function IconBlokk({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="5" y="4" width="14" height="16" rx="1" />
      <path d="M9 8 H10.5 M13.5 8 H15 M9 12 H10.5 M13.5 12 H15 M9 16 H10.5" />
      <path d="M13.5 20 V16 H15 V20" stroke={beacon} />
    </Svg>
  )
}

/** Butikkfasade – bedrift og næring */
export function IconButikk({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 9 L5 4.5 H19 L20 9" />
      <path d="M4 9 C4 10.4 5.1 11.5 6.6 11.5 C8 11.5 9.2 10.4 9.2 9 C9.2 10.4 10.4 11.5 11.9 11.5 C13.4 11.5 14.6 10.4 14.6 9 C14.6 10.4 15.8 11.5 17.3 11.5 C18.8 11.5 20 10.4 20 9" />
      <path d="M5.5 11.5 V19.5 H18.5 V11.5" />
      <path d="M13.8 19.5 V14.5 H16.5 V19.5" stroke={beacon} />
    </Svg>
  )
}

/** Feiekost – vårfeiing */
export function IconKost({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M18.5 4 L10.5 12.5" />
      <path d="M10.5 12.5 L6 17.5 C 7.5 19.5, 10.5 20, 13 18.5 Z" />
      <circle cx="16" cy="17" r="0.9" fill={beacon} stroke="none" />
      <circle cx="18.5" cy="14.5" r="0.9" fill={beacon} stroke="none" />
    </Svg>
  )
}

/** Klokke – responstid */
export function IconKlokke({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5 V12 L15.5 14" stroke={beacon} />
    </Svg>
  )
}

/** Kartnål – område */
export function IconPin({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 21 C 12 21, 5.5 14.5, 5.5 10 C 5.5 6.4 8.4 3.5 12 3.5 C 15.6 3.5 18.5 6.4 18.5 10 C 18.5 14.5 12 21 12 21 Z" />
      <circle cx="12" cy="10" r="2.2" fill={beacon} stroke="none" />
    </Svg>
  )
}

/** Avtaledokument – kontrakt og avtaleform */
export function IconAvtale({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 3.5 H15 L18.5 7 V20.5 H6 Z" />
      <path d="M15 3.5 V7 H18.5" />
      <path d="M9 12 H15.5 M9 15.5 H13" />
      <path d="M9 18.8 L10.2 20 L12.4 17.5" stroke={beacon} />
    </Svg>
  )
}

/** Chevron ned – accordion og pekere */
export function IconChevronNed({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 9.5 L12 15.5 L18 9.5" />
    </Svg>
  )
}

/**
 * Brøytestikke – kulepunkt-markøren vår (stav med oransje refleksbånd),
 * slik de står langs alle brøyteruter i norsk vinter.
 */
export function IconStikke({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 V20.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M12 6 V10" stroke={beacon} strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M6.5 20.5 H17.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  )
}

export const tjenesteIkoner: Record<string, (p: IconProps) => React.ReactElement> = {
  snobroyting: IconPlog,
  'stroing-og-salting': IconStro,
  'bortkjoring-av-sno': IconTipp,
  takrydding: IconTak,
  'vintervedlikehold-borettslag': IconBlokk,
  'vintervedlikehold-bedrift': IconButikk,
  varfeiing: IconKost,
}
