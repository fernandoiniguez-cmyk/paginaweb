'use client';

import React from 'react';
import Section from '@/components/ui/Section';

interface ProjectItem {
  title: string;
  description: string;
  imageSrc: string; 
}

interface ProjectsSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: ProjectItem[];
}

// LOGOS DE LOS CLIENTES
const clientLogos = [
  { src: '/images/logo-inventus.png', alt: 'Inventus Power', boxWidth: 'w-[120px] lg:w-[150px]' },
  { src: '/images/logo-bourns.png', alt: 'Bourns', boxWidth: 'w-[160px] lg:w-[200px]' },
  { src: '/images/logo-stryker.png', alt: 'Stryker', boxWidth: 'w-[200px] lg:w-[260px]' },
  { src: '/images/logo-alliance.png', alt: 'Alliance Daikin', boxWidth: 'w-[180px] lg:w-[240px]' },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  eyebrow = "Applications & Projects",
  title,
  subtitle,
  items
}) => {
  return (
    <Section className="bg-[#05070A] border-t border-[#1B2430] pt-24 lg:pt-32 pb-0 relative overflow-hidden">
      
      {/* Luces de fondo sutiles */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#131922] to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5 mb-6 shadow-[0_0_10px_rgba(60,203,255,0.1)] rounded-full">
            // {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA] mb-6 tracking-tight leading-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="text-[#8A94A6] text-lg leading-relaxed pl-4 border-l-2 border-[#2D7FF9]/40">
            {subtitle}
          </p>
        </div>
      </div>

      {/* CARRUSEL ESTILO APPLE: Foto separada del texto, bordes redondeados, scroll suave */}
      <div 
        className="flex md:grid flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-8 md:pb-0 hide-scrollbar scroll-smooth -mx-4 px-4 md:mx-0 md:px-0 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {items.map((project, idx) => (
          <div 
            key={idx} 
            // Estilo de tarjeta Apple: bg sólido, borde sutil, redondeado pronunciado (rounded-2xl)
            className="group flex flex-col shrink-0 w-[85vw] md:w-auto snap-center md:snap-align-none relative overflow-hidden rounded-2xl border border-[#1B2430] bg-[#0A0D12] shadow-lg hover:shadow-[0_15px_40px_rgba(45,127,249,0.1)] hover:border-[#2D7FF9]/40 transition-all duration-500"
          >
            {/* MITAD SUPERIOR: La Foto Intacta */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[#131922]">
              <img 
                src={project.imageSrc} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/1200x800/131922/3CCBFF?text=FOTO+NO+ENCONTRADA";
                }}
              />
              {/* Etiqueta tipo "Píldora" de Apple */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-[#0A0D12]/70 backdrop-blur-md text-[#3CCBFF] font-mono text-[10px] uppercase tracking-widest border border-[#3CCBFF]/20 px-3 py-1.5 rounded-full shadow-sm">
                  APP.0{idx + 1}
                </span>
              </div>
            </div>

            {/* MITAD INFERIOR: El Texto Limpio y Separado */}
            <div className="p-6 lg:p-8 flex flex-col flex-grow justify-start gap-3 bg-[#0A0D12] relative">
              {/* Línea decorativa sutil en hover */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#3CCBFF] group-hover:w-full transition-all duration-700 ease-out" />
              
              <h3 className="text-[#F5F7FA] font-semibold text-xl lg:text-2xl leading-tight tracking-tight group-hover:text-[#3CCBFF] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[#8A94A6] text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>

      {/* Indicador de Swipe (Solo visible en Móvil) */}
      <div className="md:hidden flex justify-center items-center gap-2 text-[#8A94A6] mt-6 mb-8 relative z-10">
          <svg className="w-4 h-4 animate-[bounce-x_2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span className="text-[10px] uppercase font-mono tracking-widest">Swipe projects</span>
          <svg className="w-4 h-4 animate-[bounce-x-reverse_2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </div>

      {/* ========================================= */}
      {/* SECCIÓN DE LOGOS DE CLIENTES (CARRUSEL)   */}
      {/* ========================================= */}
      <div className="mt-16 lg:mt-24 pt-12 border-t border-[#1B2430] bg-[#0A0D12]/50 relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center mb-10">
          <h4 className="text-[#8A94A6] text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-2 justify-center">
            CLIENT_PARTNERSHIP_FEED // ACTIVE
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e] ml-1" />
          </h4>
        </div>

        <div className="relative w-full overflow-hidden flex items-center h-28 pb-8">
          <div className="flex w-fit scroll-logos-infinite animate-scrollLogos hover:[animation-play-state:paused] cursor-default items-center">
            <div className="flex items-center justify-center space-x-12 lg:space-x-20 px-8">
              {clientLogos.map((logo, index) => (
                <div key={`g1-${index}`} className={`shrink-0 flex items-center justify-center ${logo.boxWidth}`}>
                  <img src={logo.src} alt={logo.alt} className="w-full h-auto max-h-[90px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-12 lg:space-x-20 px-8">
              {clientLogos.map((logo, index) => (
                <div key={`g2-${index}`} className={`shrink-0 flex items-center justify-center ${logo.boxWidth}`}>
                  <img src={logo.src} alt={logo.alt} className="w-full h-auto max-h-[90px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animaciones */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
        }
        @keyframes bounce-x-reverse {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25%); }
        }
        
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-scrollLogos {
          animation: scrollLogos 25s linear infinite; 
        }
      `}} />

    </Section>
  );
};

export default ProjectsSection;