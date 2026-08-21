import type { Faq } from '@/data/types'

/** FAQ-seksjon med innebygd FAQPage-schema for rike søkeresultater. */
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
      <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-marine-800">
        {tittel}
      </h2>
      <div className="mt-6 divide-y divide-ice rounded-xl border border-ice bg-white shadow-sm">
        {faq.map((f) => (
          <details key={f.sp} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {f.sp}
              <span
                aria-hidden="true"
                className="text-xl leading-none text-marine-600 transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-prose leading-relaxed text-muted">{f.svar}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  )
}
