import React from 'react';
import "@/styles/globals.css";
import { generateOrganizationSchema } from "@/lib/seo/jsonld";

// 1. Importamos el Header y Footer que acabamos de crear
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generamos el esquema técnico para Google
  const schema = generateOrganizationSchema({
    name: "Stellar Manufacturing and Automation",
    description: "Advanced engineering and custom automated workstations for critical industries in Tijuana & San Diego.",
    url: "https://stellarmfg.com", // Cambiar por tu dominio final
    logo: "https://stellarmfg.com/logo.png",
    address: {
      streetAddress: "Tijuana Industrial Zone",
      addressLocality: "Tijuana",
      addressRegion: "BC",
      postalCode: "22000",
      addressCountry: "MX"
    },
    contact: {
      telephone: "+526643755043",
      contactType: "technical support"
    }
  });

  return (
    // 2. Agregamos "scroll-smooth" para que la navegación por anclas (#) sea fluida
    <html lang="en" className="scroll-smooth"> 
      <head>
        {/* Inyección de Datos Estructurados (Idea 1: SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      {/* 3. Convertimos el body en un flex container de altura mínima 100vh */}
      <body className="bg-[#0A0D12] antialiased min-h-screen flex flex-col">
        
        {/* El Menú de Navegación se queda pegado arriba */}
        <Header />

        {/* El contenido dinámico de la página (page.tsx) se inyecta aquí */}
        <main className="flex-1 relative">
          {children}
        </main>

        {/* El Pie de Página cierra la vista */}
        <Footer />

      </body>
    </html>
  );
}