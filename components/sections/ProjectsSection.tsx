'use client';

import React from 'react';
import Section from '@/components/ui/Section';

interface ProjectItem {
  title: string;
  description: string;
  imageSrc: string; // Asumimos que la imagen ya existe
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
    <Section className="bg-[#0F141C] border-t border-[#1B2430] py-24 lg:py-32">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5 mb-6">
            // {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA] mb-6 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-[#8A94A6] text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Grid 2x2 Fotográfico de Aplicaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-7xl mx-auto">
        {items.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative overflow-hidden aspect-[4/3] lg:aspect-[16/10] border border-[#1B2430] bg-[#0A0D12] rounded-sm cursor-default"
          >
            {/* Imagen de Fondo (Escala de grises que toma color en hover) */}
            <img 
              src={project.imageSrc} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            {/* Overlay Técnico Oscuro (Siempre visible, más intenso abajo) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Decorador Técnico superior */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span className="text-[#3CCBFF] font-mono text-[10px] uppercase tracking-widest border border-[#3CCBFF]/30 px-2 py-1 bg-[#0A0D12]/50 backdrop-blur-sm">
                APP_0{idx + 1} // ACTIVE
              </span>
            </div>

            {/* Contenedor de Texto con efecto Slide-Up */}
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end z-10">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-3">
                
                {/* Título (Siempre visible, pero sube en hover) */}
                <h3 className="text-[#F5F7FA] font-bold text-2xl lg:text-3xl leading-tight border-l-2 border-[#2D7FF9] pl-4">
                  {project.title}
                </h3>
                
                {/* Descripción (Aparece en hover) */}
                <p className="text-[#8A94A6] text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pl-4 max-w-md">
                  {project.description}
                </p>

              </div>
            </div>
            
          </div>
        ))}
      </div>
      
    </Section>
  );
};

export default ProjectsSection;