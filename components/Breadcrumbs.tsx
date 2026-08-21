import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/schema'

export function Breadcrumbs({ items }: { items: { navn: string; url: string }[] }) {
  const alle = [{ navn: 'Forside', url: '/' }, ...items]
  return (
    <nav aria-label="Brødsmulesti" className="mx-auto max-w-7xl px-4 pt-5 sm:px-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {alle.map((item, i) => (
          <li key={item.url} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === alle.length - 1 ? (
              <span aria-current="page" className="font-semibold text-ink">
                {item.navn}
              </span>
            ) : (
              <Link href={item.url} className="hover:text-marine-600 hover:underline">
                {item.navn}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(alle)) }}
      />
    </nav>
  )
}
