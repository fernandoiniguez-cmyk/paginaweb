import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Stellar Automation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: '#05070A',
          color: '#F5F7FA',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '16px solid #2D7FF9',
        }}
      >
        <div style={{ color: '#3CCBFF', fontSize: 32, marginBottom: 20, letterSpacing: '0.2em' }}>
          // FLAGSHIP SOLUTION
        </div>
        <strong>STELLAR AUTOMATION</strong>
      </div>
    ),
    { ...size }
  );
}