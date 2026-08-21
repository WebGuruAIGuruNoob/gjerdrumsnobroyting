import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Gjerdrum Snøbrøyting – Snøbrøyting i Gjerdrum og på Romerike'

export default async function Image() {
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <svg width="96" height="96" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="10" fill="#ffffff" fillOpacity="0.12" />
            <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
              <line x1="24" y1="8" x2="24" y2="28" />
              <line x1="15.34" y1="13" x2="32.66" y2="23" />
              <line x1="32.66" y1="13" x2="15.34" y2="23" />
            </g>
            <path d="M8 33 L24 39.5 L40 33 L40 37 L24 43.5 L8 37 Z" fill="#f08c1b" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#ffffff', fontSize: 64, fontWeight: 700, letterSpacing: 2 }}>
              GJERDRUM SNØBRØYTING
            </span>
            <span style={{ color: '#d3e5f2', fontSize: 32, marginTop: 8 }}>
              Snøbrøyting · Strøing · Vintervedlikehold
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 64,
            color: '#f08c1b',
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          Ring 48 42 42 88 – døgnbemanning i sesong
        </div>
      </div>
    ),
    { ...size }
  )
}
