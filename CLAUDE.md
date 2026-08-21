# Gjerdrumsnøbrøyting.no – instruksjoner for agenter

## Leveranseregel (VIKTIG)

Når brukeren sier «push og commit»: ALLTID commit + push til GitHub (`main`) først – Vercel auto-deployer derfra til produksjon. Aldri `vercel deploy` som primær leveransevei.

## Innholdsarkitektur (agent-vennlig)

- **Alt sideinnhold er data, ikke JSX.** Tjenester: `data/tjenester.ts`. Områder: `data/omrader/<sted>.ts` (én fil per område, registrert i `data/omrader/index.ts`). Blogg: `data/blogg.ts` + `content/blogg/<slug>.mdx`.
- Nye GEO-sider: følg `data/omrader/ask.ts` som gullstandard – 1 100+ ord, unikt lokalt innhold, 7–9 FAQ, kun verifiserte stedsnavn i `nabolag`.
- Firmainfo (telefon, adresse, org.nr) endres KUN i `lib/site.ts`.

## Redaksjonelle regler

- Norsk bokmål. Aldri kopier setninger mellom områdefiler – alt skal være unikt.
- ALDRI nevn Gjerdrum-skredet fra 2020 eller «skred» i markedsføringstekst.
- ALDRI dikt opp kundeomtaler, statistikk, priser eller firmafakta. Etablerte fakta: etablert 2005, erfaring siden 90-tallet, base Askheim 1f i Gjerdrum, døgnbemanning i sesong, tlf 48 42 42 88.
- Hoved-CTA er alltid Ring + SMS (tel:/sms:-lenker), sekundært tilbudsskjema.
- SEO: dekk begge stavemåter «snøbrøyting» og «snøbrøying». FAQ-innhold får automatisk FAQPage-schema via `FaqSection`.

## Teknisk

- Next.js 16 App Router, alle sider statisk genererte (`dynamicParams = false`).
- Tailwind v4: designtokens ligger i `@theme` i `app/globals.css` (marine/night/beacon/snow-paletten). Ingen tailwind.config.
- `npm run build` skal gå rent gjennom (TypeScript strict) før hver push.
- Skjemaet bruker server action (`app/actions.ts`) + Resend; uten `RESEND_API_KEY` viser det en ring-oss-feilmelding.
