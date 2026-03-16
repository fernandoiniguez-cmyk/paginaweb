'use client';

import React from 'react';
// Idea 3: Hook de detección de idioma
import { useLanguage } from '@/lib/hooks/useLanguage'; 
// El "Cerebro" del contenido
import { homeDictionary } from '@/content/home/dictionary';

// Sections - Layout Components
import HeroSection from '@/components/sections/HeroSection';
import CredibilityStrip from '@/components/sections/CredibilityStrip';
import WorkstationFeatureSection from '@/components/sections/WorkstationFeatureSection';
import ProcessSection from '@/components/sections/ProcessSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import WhyStellarSection from '@/components/sections/WhyStellarSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CrossBorderSection from '@/components/sections/CrossBorderSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  // Detectamos si el cliente habla 'es' o 'en' mediante el navegador
  const lang = useLanguage();
  
  // Extraemos el contenido del diccionario y protegemos el tipo para TypeScript
  const content = homeDictionary[lang as keyof typeof homeDictionary];

  return (
    <main className="bg-[#0A0D12] min-h-screen">
      
      {/* 1. Hero: Identidad y llamada a la acción principal */}
      <HeroSection 
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
      />

      {/* 2. Credibility: Barras de logotipos / confianza */}
      <CredibilityStrip 
        items={content.credibility.items} 
      />

      {/* 3. Flagship Product: Ancla #workstations */}
      <div id="workstations">
        <WorkstationFeatureSection 
          eyebrow={content.workstation.eyebrow}
          title={content.workstation.title}
          subtitle={content.workstation.subtitle}
          highlights={content.workstation.highlights}
          primaryCta={content.workstation.primaryCta}
          hotspots={content.workstation.hotspots as any}
        />
      </div>

      {/* 4. Engineering Process: Ancla #process */}
      <div id="process" className="scroll-mt-24">
        <ProcessSection 
          eyebrow={content.process.eyebrow}
          title={content.process.title}
          subtitle={content.process.subtitle}
          steps={content.process.steps}
        />
      </div>

      {/* 5. Industries: Ancla #industries */}
      <div id="industries" className="scroll-mt-24">
        {/* Usamos "as any" para silenciar el pánico de TypeScript sobre los íconos */}
        <IndustriesSection 
          eyebrow={content.industries.eyebrow}
          title={content.industries.title}
          subtitle={content.industries.subtitle}
          industries={content.industries.industries as any} 
        />
      </div>

      {/* 6. Why Stellar: Ancla #why-stellar */}
      <div id="why-stellar" className="scroll-mt-24">
        <WhyStellarSection 
          eyebrow={content.whyStellar.eyebrow}
          title={content.whyStellar.title}
          subtitle={content.whyStellar.subtitle}
          items={content.whyStellar.items as any}
        />
      </div>

      {/* 7. Capabilities: Ancla #capabilities */}
      <div id="capabilities" className="scroll-mt-24">
        <CapabilitiesSection 
          eyebrow={content.capabilities.eyebrow}
          title={content.capabilities.title}
          subtitle={content.capabilities.subtitle}
          capabilities={content.capabilities.capabilities as any}
        />
      </div>

      {/* 8. Projects/Applications: Ancla #projects */}
      <div id="projects" className="scroll-mt-24">
        <ProjectsSection 
          eyebrow={content.projects.eyebrow}
          title={content.projects.title}
          subtitle={content.projects.subtitle}
          items={content.projects.items}
        />
      </div>

      {/* 9. Cross-Border Advantage */}
      <CrossBorderSection 
        eyebrow={content.crossBorder.eyebrow}
        title={content.crossBorder.title}
        subtitle={content.crossBorder.subtitle}
        mainText={content.crossBorder.mainText} // <-- CORREGIDO: Faltaba esta línea
        highlights={content.crossBorder.highlights}
      />

      {/* 10. Technical FAQ: Ancla #faq */}
      <div id="faq" className="scroll-mt-24">
        <FAQSection 
          eyebrow={content.faq.eyebrow}
          title={content.faq.title}
          subtitle={content.faq.subtitle}
          items={content.faq.items}
        />
      </div>

      {/* 11. Final CTA: Ancla #cta */}
      <div id="cta">
        <CTASection 
          eyebrow={content.cta.eyebrow}
          title={content.cta.title}
          subtitle={content.cta.subtitle}
          primaryCta={content.cta.primaryCta}
          secondaryCta={content.cta.secondaryCta}
          trustNote={content.cta.trustNote}
        />
      </div>
      
    </main>
  );
}