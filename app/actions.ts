'use server'

import { redirect } from 'next/navigation'
import { site } from '@/lib/site'

export type SkjemaStatus = {
  feil?: string
} | null

export async function sendTilbudsforesporsel(
  _prev: SkjemaStatus,
  formData: FormData
): Promise<SkjemaStatus> {
  // Honningfelle mot spam-roboter – ekte brukere ser aldri feltet
  if (formData.get('nettside')) {
    redirect('/takk')
  }

  const navn = String(formData.get('navn') ?? '').trim()
  const telefon = String(formData.get('telefon') ?? '').trim()
  const adresse = String(formData.get('adresse') ?? '').trim()
  const epost = String(formData.get('epost') ?? '').trim()
  const kundetype = String(formData.get('kundetype') ?? '').trim()
  const omrade = String(formData.get('omrade') ?? '').trim()
  const melding = String(formData.get('melding') ?? '').trim()

  if (!navn || !telefon) {
    return { feil: 'Fyll inn navn og telefonnummer, så kan vi kontakte deg.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      feil: `Skjemaet er dessverre utilgjengelig akkurat nå. Ring oss på ${site.phoneDisplay} eller send SMS – vi svarer raskt!`,
    }
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? 'Gjerdrum Snøbrøyting <onboarding@resend.dev>',
      to: [process.env.TILBUD_EPOST ?? site.email],
      reply_to: epost || undefined,
      subject: `Tilbudsforespørsel fra ${navn}${omrade ? ` (${omrade})` : ''}`,
      text: [
        `Navn: ${navn}`,
        `Telefon: ${telefon}`,
        `Adresse: ${adresse || '–'}`,
        `E-post: ${epost || '–'}`,
        `Kundetype: ${kundetype || '–'}`,
        `Område: ${omrade || '–'}`,
        '',
        'Melding:',
        melding || '–',
      ].join('\n'),
    }),
  })

  if (!res.ok) {
    return {
      feil: `Noe gikk galt med innsendingen. Ring oss på ${site.phoneDisplay} eller send SMS, så hjelper vi deg med en gang.`,
    }
  }

  redirect('/takk')
}
