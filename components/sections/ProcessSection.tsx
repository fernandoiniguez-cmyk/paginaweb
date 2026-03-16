'use client';

import React from 'react';
import Section from '@/components/ui/Section';

interface Step {
  title: string;
  description: string;
}

interface ProcessProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  steps: Step[];
}

const ProcessSection: React.FC<ProcessProps> = ({
  eyebrow = "Engineering Workflow",
  title,
  subtitle,
  steps
}) => {
  return (
    <Section className="bg-[#0A0D12] border-t border-[#1B2430] py-24 lg:py-32 relative overflow-hidden">
      
      {/* Luz volumétrica de fondo */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2D7FF9]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
          <span className="text-[#3CCBFF] text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] drop-shadow-[0_0_8px_rgba(60,203,255,0.5)]">
            // {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F7FA] tracking-tight">
            {title}
          </h2>
          <p className="text-[#8A94A6] text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Contenedor de la Línea de Tiempo */}
        <div className="relative">
          
          {/* Línea conectora horizontal (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[2px] bg-[#1B2430] shadow-[0_0_10px_rgba(45,127,249,0.2)]">
            <div className="h-full bg-gradient-to-r from-[#2D7FF9] to-transparent w-full opacity-50 animate-pulse" />
          </div>

          {/* Línea conectora vertical brillante (Móvil) */}
          <div className="block lg:hidden absolute top-0 left-[23px] sm:left-[31px] w-[2px] h-full bg-[#1B2430] shadow-[0_0_10px_rgba(45,127,249,0.2)]">
             <div className="w-full bg-gradient-to-b from-[#2D7FF9] via-[#3CCBFF]/50 to-transparent h-full opacity-50 animate-pulse" />
          </div>

          {/* Grid de Pasos */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              // Lógica de alternancia (Uno oscuro, uno azul corporativo)
              const isAlternate = idx % 2 !== 0;
              // Retraso de animación para que sea un flujo: 0s, 0.4s, 0.8s...
              const pulseDelay = `${idx * 0.4}s`;

              return (
                <div key={idx} className="relative flex items-start lg:flex-col gap-4 sm:gap-6 lg:gap-8 group">
                  
                  {/* Nodo numérico (Ahora palpita en secuencia) */}
                  <div className="shrink-0 relative mt-1 lg:mt-0">
                    <div 
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-md sm:rounded-lg flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.8)] border animate-pulse relative z-10 transition-all duration-500
                        ${isAlternate 
                          ? 'bg-gradient-to-b from-[#002856] to-[#0A0D12] border-[#3CCBFF]/40' 
                          : 'bg-gradient-to-b from-[#1B2430] to-[#0A0D12] border-[#2D7FF9]/40'
                        }
                      `}
                      style={{ animationDuration: '3s', animationDelay: pulseDelay }}
                    >
                      {/* Brillo interno del botón */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-md pointer-events-none" />
                      <span className={`font-mono text-sm sm:text-base font-bold tracking-widest drop-shadow-[0_0_8px_rgba(60,203,255,0.8)]
                        ${isAlternate ? 'text-[#F5F7FA]' : 'text-[#3CCBFF]'}
                      `}>
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Tarjeta de Contenido UI Alternada y Animada */}
                  <div 
                    className={`relative w-full border rounded-xl p-5 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden transform transition-all duration-300 hover:-translate-y-1
                      ${isAlternate 
                        ? 'bg-gradient-to-b from-[#002856]/40 to-[#0A0D12] border-[#002856]/60 hover:border-[#3CCBFF]/40' 
                        : 'bg-gradient-to-b from-[#131922] to-[#0A0D12] border-[#1B2430] hover:border-[#2D7FF9]/40'
                      }
                    `}
                  >
                    {/* MICRO-ANIMACIÓN: Respiro de fondo sincronizado con el nodo */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-transparent via-[#3CCBFF]/5 to-transparent animate-pulse pointer-events-none"
                      style={{ animationDuration: '3s', animationDelay: pulseDelay }}
                    />
                    
                    {/* Luz de borde superior (Edge Highlight) */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5F7FA]/20 to-transparent opacity-70" />
                    
                    <h3 className="text-[#F5F7FA] font-bold text-sm sm:text-base uppercase tracking-wide mb-2 sm:mb-3 group-hover:text-white transition-colors relative z-10 drop-shadow-md">
                      {step.title}
                    </h3>
                    <p className="text-[#8A94A6] text-xs sm:text-sm leading-relaxed relative z-10 group-hover:text-[#F5F7FA]/90 transition-colors">
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default ProcessSection;