'use client';

import React, { useRef } from 'react';
import Section from '@/components/ui/Section';

export type CapabilityIcon = 'plc' | 'hmi' | 'tooling' | 'integration' | 'cad' | 'architecture';

interface Capability {
  title: string;
  description: string;
  iconType: CapabilityIcon;
}

interface CapabilitiesProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  capabilities: Capability[];
}

// Íconos Técnicos Vectoriales
const CapabilityIcons: Record<CapabilityIcon, React.ReactNode> = {
  plc: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path strokeLinecap="square" d="M8 4v2m4-2v2m4-2v2M8 18v2m4-2v2m4-2v2M4 8h2m-2 4h2m-2 4h2m14-8h2m-2 4h2m-2 4h2" />
    </svg>
  ),
  hmi: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path strokeLinecap="square" d="M2 15h20M7 15v4m10-4v4M5 9h4v2H5z" />
      <circle cx="15" cy="10" r="1.5" />
      <circle cx="18" cy="10" r="1.5" />
    </svg>
  ),
  tooling: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.298l-.272-1.09v-.001a3.002 3.002 0 011.66-3.26l3.24-1.62a4.5 4.5 0 00-6.425 4.312c.045.54.025 1.09-.074 1.631M5 5l14 14" />
    </svg>
  ),
  integration: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  cad: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      <path strokeDasharray="2 2" d="M12 15v-4" />
      <circle cx="12" cy="11" r="1" />
    </svg>
  ),
  architecture: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="8.5" y="14" width="7" height="7" />
      <path strokeLinecap="square" d="M6.5 10v2h11v-2M12 12v2" />
    </svg>
  )
};

const CapabilitiesSection: React.FC<CapabilitiesProps> = ({
  eyebrow = "Technical Capabilities",
  title,
  subtitle,
  capabilities
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Funciones para botones de flechas (Opcional para Desktop)
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Section className="bg-[#05070A] border-t border-[#1B2430] py-24 lg:py-32 relative overflow-hidden">
      
      {/* Background Tech */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D7FF9]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Asimétrico con Controles Integrados */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5 mb-6 shadow-[0_0_10px_rgba(60,203,255,0.1)]">
              // {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] leading-[1.1] tracking-tight mb-6">
              {title}
            </h2>
            <p className="text-[#8A94A6] text-lg lg:text-xl leading-relaxed border-l-2 border-[#2D7FF9]/40 pl-6">
              {subtitle}
            </p>
          </div>

          {/* Controles de Navegación (Visibles solo en Desktop, en móvil se usa el dedo) */}
          <div className="hidden md:flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[#1B2430] flex items-center justify-center text-[#8A94A6] hover:bg-[#131922] hover:text-[#3CCBFF] hover:border-[#3CCBFF]/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-[#1B2430] flex items-center justify-center text-[#8A94A6] hover:bg-[#131922] hover:text-[#3CCBFF] hover:border-[#3CCBFF]/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

      </div>

      {/* APPLE-STYLE SLIDER (CARRUSEL HORIZONTAL) */}
      {/* Permite sangría completa a los lados de la pantalla */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 pb-12 pt-4 hide-scrollbar relative z-20 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {capabilities.map((cap, idx) => {
          const isAlternate = idx % 2 !== 0;

          return (
            <div 
              key={idx} 
              // w-[85vw] hace que en el celular se vea la tarjeta actual y asome un pedacito de la siguiente (El truco maestro de Apple)
              className={`group shrink-0 w-[85vw] sm:w-[380px] snap-center sm:snap-start relative rounded-xl border p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-[0_15px_30px_rgba(0,0,0,0.6)] h-[380px]
                ${isAlternate 
                  ? 'bg-gradient-to-br from-[#002856]/40 to-[#0A0D12] border-[#002856]/60 hover:border-[#3CCBFF]/50' 
                  : 'bg-gradient-to-br from-[#131922] to-[#0A0D12] border-[#1B2430] hover:border-[#2D7FF9]/50'
                }
              `}
            >
              {/* Número de fondo gigante (Textura visual) */}
              <div className="absolute -bottom-6 -right-4 text-[140px] font-bold font-mono leading-none opacity-[0.03] text-[#F5F7FA] pointer-events-none select-none group-hover:opacity-[0.06] transition-opacity duration-500">
                0{idx + 1}
              </div>

              {/* Header de la tarjeta */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`p-4 rounded-lg shadow-inner transition-colors duration-300
                  ${isAlternate
                    ? 'bg-[#0A0D12] border border-[#3CCBFF]/30 text-[#3CCBFF]'
                    : 'bg-[#002856]/30 border border-[#2D7FF9]/30 text-[#2D7FF9]'
                  }
                `}>
                  {CapabilityIcons[cap.iconType]}
                </div>
                <div className="flex items-center gap-2 bg-[#0A0D12]/50 px-2 py-1 rounded border border-[#1B2430]">
                   <span className="text-[#8A94A6] group-hover:text-[#3CCBFF] font-mono text-[10px] font-bold transition-colors">
                    SYS.CAP_0{idx + 1}
                   </span>
                </div>
              </div>

              {/* Textos */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-[#F5F7FA] font-bold text-xl uppercase tracking-wide mb-3 group-hover:text-white transition-colors">
                  {cap.title}
                </h3>
                <p className="text-[#8A94A6] text-sm leading-relaxed group-hover:text-[#F5F7FA]/90 transition-colors">
                  {cap.description}
                </p>
              </div>
              
              {/* Línea de estatus activa abajo */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#3CCBFF] w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          );
        })}
      </div>

      {/* Indicador de Swipe para móvil */}
      <div className="md:hidden flex justify-center items-center gap-2 text-[#8A94A6] mt-2">
        <svg className="w-4 h-4 animate-[bounce-x_2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        <span className="text-[10px] uppercase font-mono tracking-widest">Swipe to explore</span>
        <svg className="w-4 h-4 animate-[bounce-x-reverse_2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </div>

      {/* CSS Global inyectado para ocultar barras de scroll y animaciones */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
        }
        @keyframes bounce-x-reverse {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25%); }
        }
      `}} />

    </Section>
  );
};

export default CapabilitiesSection;