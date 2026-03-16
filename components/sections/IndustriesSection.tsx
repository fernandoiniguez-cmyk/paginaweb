'use client';

import React from 'react';
import Section from '@/components/ui/Section';

// Definimos los tipos de íconos disponibles
export type IndustryIconType = 'medical' | 'aerospace' | 'electronics' | 'manufacturing';

interface Industry {
  name: string;
  description: string;
  iconType: IndustryIconType;
}

interface IndustriesSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  industries: Industry[];
}

// Diccionario interno de íconos vectoriales
const IndustryIcons: Record<IndustryIconType, React.ReactNode> = {
  medical: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m-8-8h16M6 4h12M6 20h12" />
      <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="2 2" />
    </svg>
  ),
  aerospace: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  electronics: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  manufacturing: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.78.929l-.15.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
};

const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  eyebrow = "Industries We Support",
  title,
  subtitle,
  industries
}) => {
  return (
    // Fondo vuelve al Dark Industrial
    <Section className="bg-[#05070A] border-t border-[#1B2430] py-24 lg:py-32 relative overflow-hidden">
      
      {/* Luz volumétrica tenue */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#2D7FF9]/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Header Centrado */}
      <div className="flex flex-col items-center text-center mb-16 space-y-6 max-w-3xl mx-auto relative z-10">
        <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5 drop-shadow-[0_0_8px_rgba(60,203,255,0.5)]">
          // {eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA] leading-tight tracking-tight drop-shadow-lg">
          {title}
        </h2>
        <p className="text-[#8A94A6] text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Grid 2x2 de Industrias con Sistema "Uno y Uno" */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto relative z-10">
        {industries.map((industry, idx) => {
          // Lógica de alternancia (0 y 3 son oscuros, 1 y 2 son azules)
          // Esto crea un patrón de ajedrez en Desktop y uno y uno en Celular
          const isAlternate = idx % 2 !== 0;
          // Retraso para que las luces palpiten en cadena
          const pulseDelay = `${idx * 0.5}s`;

          return (
            <div 
              key={idx} 
              className={`group relative p-8 lg:p-10 rounded-xl transition-all duration-500 overflow-hidden cursor-default shadow-[0_20px_40px_rgba(0,0,0,0.8)] transform hover:-translate-y-1
                ${isAlternate 
                  ? 'bg-gradient-to-br from-[#002856]/40 to-[#0A0D12] border border-[#002856]/60 hover:border-[#3CCBFF]/50' 
                  : 'bg-gradient-to-br from-[#131922] to-[#0A0D12] border border-[#1B2430] hover:border-[#2D7FF9]/50'
                }
              `}
            >
              {/* Luz de borde superior */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5F7FA]/20 to-transparent opacity-70" />

              {/* Fondo Blueprint sutil on hover */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1B2430_1px,transparent_1px),linear-gradient(to_bottom,#1B2430_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />

              <div className="space-y-6 relative z-10 flex flex-col h-full">
                
                {/* Header de la Tarjeta (Ícono + Status Animado) */}
                <div className="flex justify-between items-start">
                  
                  {/* Ícono de Industria */}
                  <div className={`p-3 rounded-md shadow-inner transition-colors duration-300
                    ${isAlternate
                      ? 'bg-[#002856]/50 border border-[#3CCBFF]/30 text-[#3CCBFF] group-hover:bg-[#3CCBFF]/20'
                      : 'bg-[#0A0D12] border border-[#2D7FF9]/30 text-[#2D7FF9] group-hover:bg-[#2D7FF9]/20'
                    }
                  `}>
                    {IndustryIcons[industry.iconType]}
                  </div>
                  
                  {/* Animación "Status: CONNECTED" Infinito (No necesita hover) */}
                  <div className="flex items-center gap-2 bg-[#0A0D12]/50 px-2 py-1 rounded border border-[#1B2430]">
                    <div 
                      className={`w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px_currentColor]
                        ${isAlternate ? 'bg-[#F5F7FA] text-[#F5F7FA]' : 'bg-[#3CCBFF] text-[#3CCBFF]'}
                      `}
                      style={{ animationDuration: '2s', animationDelay: pulseDelay }}
                    />
                    <span className={`text-[9px] font-mono tracking-widest uppercase font-bold
                       ${isAlternate ? 'text-[#F5F7FA]' : 'text-[#3CCBFF]'}
                    `}>
                      ACTIVE
                    </span>
                  </div>

                </div>

                {/* Contenido (Empuja el texto hacia arriba) */}
                <div className="flex-grow">
                  <h3 className="text-[#F5F7FA] font-bold text-2xl mb-3 group-hover:text-white transition-colors drop-shadow-md">
                    {industry.name}
                  </h3>
                  <p className="text-[#8A94A6] text-base leading-relaxed group-hover:text-[#F5F7FA]/90 transition-colors">
                    {industry.description}
                  </p>
                </div>
                
                {/* Línea de escaneo base (Animación de carga continua) */}
                <div 
                  className={`h-[2px] w-full mt-4 overflow-hidden rounded-full
                    ${isAlternate ? 'bg-[#002856]/40' : 'bg-[#1B2430]'}
                  `}
                >
                  <div 
                    className={`h-full w-1/3 rounded-full animate-[slide_3s_ease-in-out_infinite]
                      ${isAlternate ? 'bg-[#3CCBFF]' : 'bg-[#2D7FF9]'}
                    `}
                    style={{ animationDelay: pulseDelay }}
                  />
                </div>
                
              </div>
            </div>
          );
        })}
      </div>

      {/* Definimos el keyframe para la animación de carga de la línea base */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
      `}} />

    </Section>
  );
};

export default IndustriesSection;