import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

function sanitizeParam(value: string, maxLength: number): string {
  return value.replace(/<[^>]*>/g, '').replace(/[^\w\sÀ-ÿ.,;:!?&''«»—–\-()éèêëàâäùûüôöîïç]/gi, '').slice(0, maxLength);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = sanitizeParam(
    searchParams.get('title') || 'Data & automatisation pour PME bretonnes',
    120
  );
  const subtitle = sanitizeParam(
    searchParams.get('subtitle') || 'Collectif data et IA pour PME bretonnes',
    200
  );

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: 'linear-gradient(135deg, #0C1F3F 0%, #2E4057 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          📍 Lorient, Bretagne
        </div>
      </div>

      {/* Logo text — V18 tiret cyan */}
      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
        <span style={{ fontSize: '36px', fontWeight: 700, color: 'white' }}>balise</span>
        <span style={{ fontSize: '36px', fontWeight: 700, color: '#9A5F3A' }}>-</span>
        <span style={{ fontSize: '36px', fontWeight: 600, color: '#9A5F3A' }}>ia</span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: '52px',
          fontWeight: 700,
          color: 'white',
          lineHeight: 1.15,
          maxWidth: '900px',
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: '24px',
          color: 'rgba(255,255,255,0.6)',
          marginTop: '20px',
          maxWidth: '700px',
        }}
      >
        {subtitle}
      </div>

      {/* Bottom line */}
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '80px',
          display: 'flex',
          gap: '24px',
          fontSize: '16px',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        <span>balise-ia.fr</span>
        <span>·</span>
        <span>Diagnostic gratuit</span>
        <span>·</span>
        <span>PME bretonnes</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
