import { ImageResponse } from 'next/og';

// Ruta para edge computing
export const runtime = 'edge';

// Tamaño del favicon
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

// Next.js exige un EXPORT DEFAULT en icon.tsx
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#002856', // Azul Stellar
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}