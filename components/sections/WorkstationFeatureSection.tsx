'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface Hotspot {
  x: number;
  y: number;
  label: string;
}

interface Highlight {
  title: string;
  desc: string;
}

interface WorkstationFeatureProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  highlights: Highlight[];
  primaryCta: { label: string; href: string };
  hotspots?: Hotspot[];
}

const WorkstationFeatureSection: React.FC<WorkstationFeatureProps> = ({
  eyebrow = "Flagship Solution",
  title,
  subtitle,
  highlights,
  primaryCta,
  hotspots = []
}) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <Section className="bg-[#0A0D12] pt-16 pb-24 lg:pt-20 lg:pb-32 relative overflow-hidden">
      
      {/* EL CONECTOR: Línea de energía que "cae" de la sección de arriba */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-24 bg-gradient-to-b from-[#F5F7FA] via-[#3CCBFF] to-transparent opacity-80 z-20" />

      {/* Glow de fondo para darle profundidad de máquina encendida */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-[#2D7FF9]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mt-8">
        
        {/* Izquierda: Copy y UI Cards */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-[#3CCBFF] text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] block drop-shadow-[0_0_8px_rgba(60,203,255,0.5)]">
              // {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F7FA] tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-[#8A94A6] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>
          </div>

          {/* Tarjetas de Beneficios con MICRO-ANIMACIONES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {highlights.map((item, idx) => {
              const isAlternate = idx % 2 !== 0;
              // Calculamos un retraso para que brillen una tras otra (0s, 0.5s, 1s, 1.5s)
              const pulseDelay = `${idx * 0.5}s`;
              
              return (
                <div 
                  key={idx} 
                  className={`relative backdrop-blur-sm p-6 rounded-lg transition-all duration-300 group shadow-lg flex flex-col items-start overflow-hidden
                    ${isAlternate 
                      ? 'bg-[#002856]/20 border border-[#002856]/60' 
                      : 'bg-[#131922]/80 border border-[#1B2430]'
                    }
                  `}
                >
                  {/* MICRO-ANIMACIÓN 1: Luz de escaneo de fondo que respira infinitamente */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3CCBFF]/5 to-transparent animate-pulse pointer-events-none"
                    style={{ animationDuration: '3s', animationDelay: pulseDelay }}
                  />

                  {/* Ícono/Número con animación de hardware encendido */}
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
                  
                  <h4 className="text-[#F5F7FA] font-bold text-sm mb-2 uppercase tracking-wide relative z-10">
                    {item.title}
                  </h4>
                  <p className="text-[#8A94A6] text-xs leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center lg:justify-start">
            <Button href={primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto">
              {primaryCta.label}
            </Button>
          </div>
        </div>

        {/* Derecha: Imagen Interactiva (La Máquina) */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#0F141C] border border-[#1B2430] rounded-xl p-2 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="relative w-full h-full border border-[#2D7FF9]/20 overflow-hidden bg-black rounded-lg group">
            
            <img 
              src="/images/workstation-flagship.webp" 
              alt="Custom Automated Workstation" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(45,127,249,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

            {/* Hotspots Interactivos (Estos ya tenían micro-animación ping) */}
            {hotspots.map((spot, idx) => (
              <div 
                key={idx}
                className="absolute z-20 group/spot"
                style={{ top: `${spot.y}%`, left: `${spot.x}%`, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => setActiveHotspot(idx)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={() => setActiveHotspot(activeHotspot === idx ? null : idx)} 
              >
                <div className="relative w-8 h-8 flex items-center justify-center cursor-pointer">
                  {/* MICRO-ANIMACIÓN 2: Ping infinito para invitar al clic en móvil */}
                  <div className="absolute inset-0 bg-[#3CCBFF] rounded-full animate-ping opacity-30" />
                  <div className="relative w-3 h-3 bg-[#3CCBFF] rounded-full shadow-[0_0_15px_#3CCBFF] border-2 border-[#0A0D12]" />
                </div>

                <div className={`
                  absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max max-w-[180px] sm:max-w-[220px]
                  bg-[#0A0D12]/95 backdrop-blur-xl border border-[#3CCBFF]/40 p-4 
                  transition-all duration-300 transform rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.9)] z-30
                  ${activeHotspot === idx ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
                `}>
                  <div className="text-[#3CCBFF] text-[9px] font-mono mb-1.5 uppercase tracking-widest border-b border-[#3CCBFF]/20 pb-1">SYS.NODE_0{idx + 1}</div>
                  <div className="text-white text-xs font-bold leading-relaxed">{spot.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#1B2430] rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#1B2430] rounded-br-xl" />
        </div>

      </div>
    </Section>
  );
};

export default WorkstationFeatureSection;