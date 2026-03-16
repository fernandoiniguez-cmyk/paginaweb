'use client';

import React from 'react';
import Section from '@/components/ui/Section';

export type DifferentiatorIcon = 'flowchart' | 'shield' | 'blueprint' | 'crossborder';

interface Differentiator {
  title: string;
  description: string;
  iconType: DifferentiatorIcon;
}

interface WhyStellarProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: Differentiator[];
}

// Íconos adaptados al Dark Mode
const DifferentiatorIcons: Record<DifferentiatorIcon, React.ReactNode> = {
  flowchart: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      <rect x="2" y="5" width="2" height="2" />
      <rect x="2" y="11" width="2" height="2" />
      <rect x="2" y="17" width="2" height="2" />
      <path strokeLinecap="round" d="M4 6v6m0 0v6" strokeDasharray="2 2" />
    </svg>
  ),
  shield: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  blueprint: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      <circle cx="12" cy="15" r="2" />
    </svg>
  ),
  crossborder: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      <path strokeLinecap="round" d="M12 3v18" strokeDasharray="4 4" opacity={0.3} />
    </svg>
  )
};

const WhyStellarSection: React.FC<WhyStellarProps> = ({
  eyebrow = "Why Stellar",
  title,
  subtitle,
  items
}) => {
  return (
    <Section className="bg-[#0A0D12] border-t border-[#1B2430] py-24 lg:py-32 relative overflow-hidden">
      
      {/* Background Tech Elements */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2D7FF9]/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2D7FF9]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Asimétrico para romper el diseño centrado de antes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-24">
          <div>
            <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5 mb-6 drop-shadow-[0_0_8px_rgba(60,203,255,0.5)]">
              // {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] leading-[1.1] tracking-tight">
              {title}
            </h2>
          </div>
          <div className="lg:border-l-2 lg:border-[#2D7FF9]/30 lg:pl-8">
            <p className="text-[#8A94A6] text-lg lg:text-xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* GRID ASIMÉTRICO (BENTO BOX) */}
        {/* Usamos 12 columnas. Rompe completamente la monotonía del 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {items.map((item, idx) => {
            // Lógica del Bento Box: 
            // Elemento 0 y 3 son anchos (7 columnas)
            // Elemento 1 y 2 son cuadrados (5 columnas)
            const isWide = idx === 0 || idx === 3;
            
            return (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-xl border transition-all duration-500 hover:-translate-y-1 shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                  ${isWide ? 'md:col-span-7' : 'md:col-span-5'}
                  ${idx % 2 === 0 
                    ? 'bg-gradient-to-br from-[#131922] to-[#0A0D12] border-[#1B2430] hover:border-[#2D7FF9]/50' 
                    : 'bg-gradient-to-br from-[#002856]/40 to-[#0A0D12] border-[#002856]/60 hover:border-[#3CCBFF]/50'
                  }
                `}
              >
                {/* MICRO-ANIMACIÓN DE RADAR: Un haz de luz que cruza la tarjeta periódicamente */}
                <div 
                  className="absolute inset-0 w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(60,203,255,0)_0%,rgba(60,203,255,0.05)_50%,rgba(60,203,255,0)_100%)] animate-[spin_6s_linear_infinite] opacity-50 pointer-events-none"
                  style={{ top: '-50%', left: '-50%', animationDelay: `${idx}s` }}
                />

                {/* Luz de borde superior */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5F7FA]/10 to-transparent" />
                
                {/* Diseño interno dinámico (Horizontal para Wide, Vertical para Cuadrados) */}
                <div className={`relative z-10 p-8 sm:p-10 flex h-full
                  ${isWide ? 'flex-col sm:flex-row sm:items-center gap-8' : 'flex-col gap-6'}
                `}>
                  
                  {/* Ícono Técnico */}
                  <div className={`shrink-0 flex items-center justify-center rounded-lg shadow-inner transition-colors duration-300
                    ${isWide ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-16 h-16'}
                    ${idx % 2 === 0 
                      ? 'bg-[#0A0D12] border border-[#2D7FF9]/30 text-[#2D7FF9] group-hover:bg-[#2D7FF9]/10' 
                      : 'bg-[#002856]/50 border border-[#3CCBFF]/30 text-[#3CCBFF] group-hover:bg-[#3CCBFF]/10'
                    }
                  `}>
                    <div className="relative">
                      {/* Animación de encendido sutil */}
                      <div className="absolute inset-0 bg-current blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-300 animate-pulse" />
                      {DifferentiatorIcons[item.iconType]}
                    </div>
                  </div>

                  {/* Textos */}
                  <div className="flex-grow">
                    <h3 className="text-[#F5F7FA] text-xl sm:text-2xl font-bold group-hover:text-white transition-colors duration-300 tracking-wide mb-3 drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-[#8A94A6] text-sm sm:text-base leading-relaxed group-hover:text-[#F5F7FA]/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default WhyStellarSection;