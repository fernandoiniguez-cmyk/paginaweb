'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface Highlight {
  title: string;
  desc: string;
}

// Ya no pedimos los hotspots en las propiedades
interface WorkstationFeatureProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  highlights: Highlight[];
  primaryCta: { label: string; href: string };
}

const WorkstationFeatureSection: React.FC<WorkstationFeatureProps> = ({
  eyebrow = "Flagship Solution",
  title,
  subtitle,
  highlights,
  primaryCta,
}) => {
  return (
    <Section className="bg-[#05070A] pt-16 pb-24 lg:pt-20 lg:pb-32 relative overflow-hidden">
      
      {/* EL CONECTOR: Línea de energía que "cae" de la sección de arriba */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-24 bg-gradient-to-b from-[#F5F7FA] via-[#3CCBFF] to-transparent opacity-80 z-20" />

      {/* Glow de fondo para darle profundidad de máquina encendida */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-[#2D7FF9]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mt-8">
        
        {/* Izquierda: Copy y UI Cards */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5 mb-2 shadow-[0_0_10px_rgba(60,203,255,0.1)]">
              // {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F7FA] tracking-tight leading-tight drop-shadow-lg">
              {title}
            </h2>
            <p className="text-[#8A94A6] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-2 border-[#2D7FF9]/40 pl-4">
              {subtitle}
            </p>
          </div>

          {/* Tarjetas de Beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {highlights.map((item, idx) => {
              const isAlternate = idx % 2 !== 0;
              const pulseDelay = `${idx * 0.5}s`;
              
              return (
                <div 
                  key={idx} 
                  className={`relative backdrop-blur-sm p-6 rounded-lg transition-all duration-300 group shadow-lg flex flex-col items-start overflow-hidden
                    ${isAlternate 
                      ? 'bg-gradient-to-br from-[#002856]/20 to-[#0A0D12] border border-[#002856]/60 hover:border-[#3CCBFF]/40' 
                      : 'bg-gradient-to-br from-[#131922]/80 to-[#0A0D12] border border-[#1B2430] hover:border-[#2D7FF9]/40'
                    }
                  `}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3CCBFF]/5 to-transparent animate-pulse pointer-events-none"
                    style={{ animationDuration: '3s', animationDelay: pulseDelay }}
                  />

                  <div 
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center mb-5 shadow-inner z-10 animate-pulse
                      ${isAlternate
                        ? 'bg-[#002856]/50 border border-[#3CCBFF]/30 text-[#3CCBFF]'
                        : 'bg-[#0A0D12] border border-[#2D7FF9]/30 text-[#2D7FF9]'
                      }
                    `}
                    style={{ animationDuration: '3s', animationDelay: pulseDelay }}
                  >
                    <span className="font-mono text-xs font-bold drop-shadow-[0_0_5px_currentColor]">0{idx + 1}</span>
                  </div>
                  
                  <h4 className="text-[#F5F7FA] font-bold text-sm mb-2 uppercase tracking-wide relative z-10 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[#8A94A6] text-xs leading-relaxed relative z-10 group-hover:text-[#F5F7FA]/80 transition-colors">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center lg:justify-start">
            <Button href={primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto shadow-[0_0_15px_rgba(45,127,249,0.3)] hover:shadow-[0_0_25px_rgba(45,127,249,0.5)]">
              {primaryCta.label}
            </Button>
          </div>
        </div>

        {/* Derecha: Imagen Limpia (Sin Hotspots) */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#0F141C] border border-[#1B2430] rounded-xl p-2 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
          <div className="relative w-full h-full border border-[#2D7FF9]/20 overflow-hidden bg-[#05070A] rounded-lg">
            
            {/* LA FOTO NUEVA */}
            <img 
              src="/images/automated-test-workstation.webp" 
              alt="Estaciones Automatizadas de Testing" 
              className="w-full h-full object-cover opacity-90 grayscale-[20%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/800x800/0A0D12/3CCBFF?text=Sube+automated-test-workstation.webp";
              }}
            />
            
            {/* Overlay Técnico (Blueprint lines) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(45,127,249,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

            {/* Etiqueta de Sistema (Decorativa) */}
            <div className="absolute top-4 right-4 bg-[#0A0D12]/80 backdrop-blur-md border border-[#3CCBFF]/30 px-3 py-1.5 rounded flex items-center gap-2 shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3CCBFF] animate-ping" />
              <span className="text-[#3CCBFF] font-mono text-[9px] font-bold uppercase tracking-widest">System Online</span>
            </div>
          </div>
          
          {/* Esquinas decorativas */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#1B2430] rounded-tl-xl transition-colors group-hover:border-[#3CCBFF]/50" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#1B2430] rounded-br-xl transition-colors group-hover:border-[#3CCBFF]/50" />
        </div>

      </div>
    </Section>
  );
};

export default WorkstationFeatureSection;