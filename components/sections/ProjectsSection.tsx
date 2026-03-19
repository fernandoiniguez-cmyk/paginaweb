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

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  eyebrow = "Applications & Projects",
  title,
  subtitle,
  items
}) => {
  return (
    <Section className="bg-[#05070A] border-t border-[#1B2430] py-24 lg:py-32 relative overflow-hidden">
      
      {/* Luces de fondo sutiles */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#131922] to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5 mb-6 shadow-[0_0_10px_rgba(60,203,255,0.1)]">
            // {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA] mb-6 tracking-tight leading-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="text-[#8A94A6] text-lg leading-relaxed border-l-2 border-[#2D7FF9]/40 pl-4">
            {subtitle}
          </p>
        </div>
      </div>

      {/* GRID HÍBRIDO: Slider Magnético en Celular / Grid 3x2 en Desktop */}
      <div 
        className="flex md:grid flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-8 md:pb-0 hide-scrollbar scroll-smooth -mx-4 px-4 md:mx-0 md:px-0 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {items.map((project, idx) => (
          <div 
            key={idx} 
            // w-[85vw] hace el "Peek-a-boo" en móvil. md:w-auto le devuelve el control al Grid en desktop
            className={`group shrink-0 w-[85vw] md:w-auto snap-center md:snap-align-none relative overflow-hidden aspect-[4/3] lg:aspect-[3/2] border border-[#1B2430] bg-[#0A0D12] rounded-lg cursor-default shadow-lg hover:shadow-[0_15px_40px_rgba(45,127,249,0.15)] transition-all duration-500
                ${idx % 2 === 0 
                  ? 'border-[#1B2430] hover:border-[#2D7FF9]/50' 
                  : 'border-[#002856]/60 hover:border-[#3CCBFF]/50'
                }
            `}
          >
            {/* Imagen de Fondo con efecto Reveal */}
            <img 
              src={project.imageSrc} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/1200x800/0A0D12/3CCBFF?text=FOTO+NO+ENCONTRADA";
              }}
            />
            
            {/* Overlay Oscuro para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#0A0D12]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Etiqueta Técnica superior */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span className="text-[#3CCBFF] font-mono text-[9px] uppercase tracking-widest border border-[#3CCBFF]/30 px-2 py-1 bg-[#0A0D12]/80 backdrop-blur-sm rounded-sm">
                APP.0{idx + 1}
              </span>
            </div>

            {/* Contenedor de Texto */}
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end z-10">
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2">
                
                {/* Título */}
                <h3 className="text-[#F5F7FA] font-bold text-xl lg:text-2xl leading-tight border-l-2 border-[#3CCBFF] pl-3 group-hover:text-white transition-colors drop-shadow-md">
                  {project.title}
                </h3>
                
                {/* Descripción (Aparece en hover) */}
                <p className="text-[#8A94A6] text-xs lg:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pl-3 max-w-sm group-hover:text-[#F5F7FA]/90">
                  {project.description}
                </p>

              </div>
            </div>
            
            {/* Borde inferior dinámico */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-[#3CCBFF] w-0 group-hover:w-full transition-all duration-700 ease-out" />
          </div>
        ))}
      </div>

      {/* Indicador de Swipe (Solo visible en Móvil) */}
      <div className="md:hidden flex justify-center items-center gap-2 text-[#8A94A6] mt-4 relative z-10">
          <svg className="w-4 h-4 animate-[bounce-x_2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span className="text-[10px] uppercase font-mono tracking-widest">Swipe projects</span>
          <svg className="w-4 h-4 animate-[bounce-x-reverse_2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </div>
      
      {/* CSS Oculto para desaparecer la barra de scroll nativa en móvil */}
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
      `}} />

    </Section>
  );
};

export default ProjectsSection;