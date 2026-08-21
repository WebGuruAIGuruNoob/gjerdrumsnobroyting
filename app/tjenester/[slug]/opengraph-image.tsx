import { ImageResponse } from 'next/og'
import { getTjeneste, tjenester } from '@/data/tjenester'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return tjenester.map((t) => ({ slug: t.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tjeneste = getTjeneste(slug)
  const navn = tjeneste?.navn ?? 'Vintervedlikehold'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #081220 0%, #0f4470 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', color: '#d3e5f2', fontSize: 34, letterSpacing: 4 }}>
          GJERDRUM SNØBRØYTING
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 20,
            color: '#ffffff',
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: 2,
            lineHeight: 1.05,
          }}
        >
          {navn.toUpperCase()}
        </div>
        <div style={{ display: 'flex', marginTop: 18, color: '#d3e5f2', fontSize: 34 }}>
          Gjerdrum og Romerike · Privat, borettslag og bedrift
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 56,
            color: '#f08c1b',
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          Ring 48 42 42 88 – uforpliktende tilbud
        </div>
      </div>
    ),
    { ...size }
  )
}
