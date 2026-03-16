import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Cambia esto por tu dominio final cuando lo tengas
  const baseUrl = 'https://stellarmfg.com'; 

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // 1.0 le dice a Google: "Esta es la página principal, ponle toda la atención"
    },
    // Si en el futuro agregas más páginas (ej. /servicios), las pones aquí.
  ];
}