export const site = {
  name: 'Gjerdrum Snøbrøyting',
  legalName: 'Langsholt Snø og Grønt AS',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gjerdrumsnobroyting.vercel.app',
  phoneDisplay: '48 42 42 88',
  phoneHref: 'tel:+4748424288',
  smsHref: 'sms:+4748424288?body=Hei!%20Jeg%20%C3%B8nsker%20tilbud%20p%C3%A5%20sn%C3%B8br%C3%B8yting.',
  email: 'post@langsholt.com',
  address: {
    street: 'Askheim 1f',
    zip: '2022',
    city: 'Gjerdrum',
  },
  orgNr: '987 714 603',
  founded: 2005,
  region: 'Gjerdrum og Romerike',
} as const

export function smsHrefFor(sted: string): string {
  const body = encodeURIComponent(`Hei! Jeg ønsker tilbud på snøbrøyting i ${sted}.`)
  return `sms:+4748424288?body=${body}`
}
