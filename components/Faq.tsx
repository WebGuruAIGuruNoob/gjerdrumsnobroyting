import type { Faq } from '@/data/types'
import { IconChevronNed } from './Icons'
import { SectionHeading } from './SectionHeading'

/** FAQ-seksjon med innebygd FAQPage-schema for AI-svarflater og rike resultater. */
export function FaqSection({ faq, tittel = 'Ofte stilte spørsmål' }: { faq: Faq[]; tittel?: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.sp,
      acceptedAnswer: { '@type': 'Answer', text: f.svar },
    })),
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <SectionHeading eyebrow="Spørsmål og svar" tittel={tittel} />
      <div className="mt-6 divide-y divide-ice rounded-xl border border-ice bg-white shadow-sm">
        {faq.map((f) => (
          <details key={f.sp} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {f.sp}
              <span
                aria-hidden="true"
                className="shrink-0 text-marine-600 transition group-open:rotate-180"
              >
                <IconChevronNed className="h-5 w-5" />
              </span>
            </summary>
            <p className="max-w-prose px-5 pb-5 leading-relaxed text-muted">{f.svar}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  )
}
