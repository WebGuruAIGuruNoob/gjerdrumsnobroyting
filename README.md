# Gjerdrumsnøbrøyting.no

Nettsiden til Gjerdrum Snøbrøyting (Langsholt Snø og Grønt AS) – snøbrøyting, strøing og vintervedlikehold i Gjerdrum og på Romerike.

## Stack

- **Next.js 16** (App Router, TypeScript, statisk generering av alle sider)
- **Tailwind CSS 4** (CSS-first, designtokens i `app/globals.css`)
- **MDX** via `@next/mdx` for blogginnhold
- **Vercel** for hosting – `main` deployes automatisk til produksjon

## Struktur

```
app/                  Sider og ruter (App Router)
  tjenester/[slug]    7 tjenestesider (data-drevet)
  omrader/[slug]      16 GEO-landingssider (data-drevet)
  blogg/[slug]        MDX-blogg
components/           Gjenbrukbare komponenter (Hero, QuoteForm, FAQ …)
data/
  tjenester.ts        Alt innhold for tjenestesidene
  omrader/*.ts        Én fil per område – alt innhold for GEO-sidene
  blogg.ts            Bloggregister (metadata per innlegg)
content/blogg/*.mdx   Selve blogginnleggene
lib/site.ts           Firmainfo, telefon, adresse (endres ETT sted)
lib/schema.ts         JSON-LD-byggere (LocalBusiness, Service, Breadcrumb)
public/bilder/        Bilder (originaler fra langsholt.com)
```

## Vanlige oppgaver

**Nytt blogginnlegg:** legg til en oppføring i `data/blogg.ts` + opprett `content/blogg/<slug>.mdx`. Ferdig – listeside, artikkelside og sitemap følger automatisk.

**Nytt område:** opprett `data/omrader/<navn>.ts` (kopier strukturen fra `ask.ts`), og registrer i `data/omrader/index.ts`.

**Endre telefon/adresse:** `lib/site.ts`.

## Utvikling

```bash
npm install
npm run dev
```

## Deploy

Push til `main` → GitHub → Vercel deployer automatisk til produksjon. Skjemaet krever miljøvariabelen `RESEND_API_KEY` (+ valgfritt `RESEND_FROM`, `TILBUD_EPOST`) i Vercel for e-postvarsling.
