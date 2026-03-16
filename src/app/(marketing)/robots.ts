import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://stellarmfg.com'; // Tu dominio real

  return {
    rules: {
      userAgent: '*', // Aplica para todos los bots (Googlebot, Bingbot, etc.)
      allow: '/',     // Tienen permiso de leer toda la página
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}