import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Esta opción ayuda a Next.js a resolver mejor las rutas cuando se usan alias
  // que apuntan fuera de la carpeta 'src'.
  experimental: {
    // Si usas Turbopack, esto ayuda con la resolución de módulos en la raíz
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;