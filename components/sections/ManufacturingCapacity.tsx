'use client';

import React from 'react';
import Section from '@/components/ui/Section';

// Los datos de la maquinaria CON RUTAS DE IMAGEN (Las 6 máquinas)
const machines = [
  {
    name: 'Fadal VMC 2016',
    type: 'Centro de Maquinado CNC',
    image: '/images/fadal-vmc-2016.webp', 
    specs: ['20" x 16" x 20" (X-Y-Z)', 'Tolerancia: ±0.001"'],
    desc: 'Fresado CNC de alta precisión para fabricación de componentes mecánicos, placas, dispositivos e insertos de troquel. Capacidad para trabajar aluminio, aceros y aleaciones.',
  },
  {
    name: 'Fadal VMC 4020',
    type: 'Centro de Maquinado CNC',
    image: '/images/fadal-vmc-4020.webp', 
    specs: ['40" x 20" x 20" (X-Y-Z)', 'Tolerancia: ±0.001"'],
    desc: 'Fresado CNC de alta precisión para fabricación de componentes mecánicos, placas, dispositivos e insertos de troquel. Capacidad para prototipos y producción.',
  },
  {
    name: 'Chevalier',
    type: 'Rectificadora de Superficies',
    image: '/images/rectificadora-chevalier.webp', 
    specs: ['Bancada de 18" x 6"', 'Tolerancia: ±0.0002"'],
    desc: 'Rectificado plano de alta precisión para acabado final de piezas, placas, insertos y componentes de troquel. Ideal para obtener superficies planas y paralelismo preciso.',
  },
  {
    name: 'Hardinge HLV Toolroom',
    type: 'Torno de Precisión',
    image: '/images/torno-hardinge.webp', 
    specs: ['Alta Concentricidad', 'Tolerancia: ±0.0005"'],
    desc: 'Torneado de alta precisión para fabricación y ajuste de ejes, bujes, pernos y componentes cilíndricos. Ideal para piezas de herramental y prototipos.',
  },
  {
    name: 'Bridgeport ProtoTRAK',
    type: 'Fresadora CNC / Convencional',
    image: '/images/fresadora-bridgeport.webp', 
    specs: ['Maquinado Híbrido', 'Aluminio y Aceros'],
    desc: 'Fresado versátil para fabricación y modificación de componentes mecánicos, placas y fixtures. Ideal para prototipos, reparaciones y producción de bajo volumen.',
  },
  {
    name: 'Charmilles ROBOFIL 230F',
    type: 'Wire EDM (Electroerosión)',
    image: '/images/edm-charmilles.webp',
    specs: ['Geometrías Complejas', 'Tolerancia: ±0.0002"'],
    desc: 'Maquinado de precisión mediante electroerosión por hilo para fabricar geometrías complejas en materiales conductivos, aceros endurecidos y aleaciones. Ideal para insertos y troqueles.',
  }
];

const ManufacturingCapacity = () => {
  return (
    <Section className="bg-[#05070A] border-t border-[#1B2430] py-24 lg:py-32 relative overflow-hidden">
      
      {/* Fondo Industrial y Textura */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2D7FF9]/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,127,249,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(45,127,249,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Asimétrico */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-20">
          <div className="max-w-2xl">
            <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5 mb-4 shadow-[0_0_10px_rgba(60,203,255,0.1)]">
              // EQUIPMENT FLEET
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F5F7FA] tracking-tight mb-4 drop-shadow-lg">
              Capacidad de Manufactura
            </h2>
            <p className="text-[#8A94A6] text-lg lg:text-xl leading-relaxed border-l-2 border-[#2D7FF9]/40 pl-5">
              Parque de maquinaria de alta precisión para prototipos, herramentales y producción de bajo volumen.
            </p>
          </div>
          {/* Sutil indicador de sistema */}
          <div className="hidden md:flex items-center gap-2 bg-[#0A0D12] border border-[#1B2430] px-4 py-2 rounded-md">
            <div className="w-2 h-2 rounded-full bg-[#3CCBFF] animate-pulse shadow-[0_0_8px_#3CCBFF]" />
            <span className="text-[10px] text-[#3CCBFF] font-mono tracking-widest uppercase font-bold">
              SYS.FLEET_ACTIVE
            </span>
          </div>
        </div>

        {/* GRID HÍBRIDO: Slider Magnético en Celular / Grid Masonry en Desktop */}
        <div 
          className="flex md:grid flex-nowrap overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 pb-8 md:pb-0 hide-scrollbar scroll-smooth -mx-4 px-4 md:mx-0 md:px-0"
        >
          {machines.map((machine, idx) => (
            <div 
              key={idx}
              // w-[85vw] hace el "Peek-a-boo" en móvil. md:w-auto le devuelve el control al Grid en desktop
              className={`group shrink-0 w-[85vw] md:w-auto snap-center md:snap-align-none relative overflow-hidden rounded-xl border transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col h-full
                ${idx % 2 === 0 
                  ? 'bg-gradient-to-br from-[#131922] to-[#0A0D12] border-[#1B2430] hover:border-[#2D7FF9]/50' 
                  : 'bg-gradient-to-br from-[#002856]/40 to-[#0A0D12] border-[#002856]/60 hover:border-[#3CCBFF]/50'
                }
              `}
            >
              
              {/* Contenedor de la Foto */}
              <div className="relative aspect-video overflow-hidden border-b border-[#1B2430] group-hover:border-[#2D7FF9]/40 bg-[#05070A]">
                <img 
                  src={machine.image} 
                  alt={machine.name} 
                  className="w-full h-full object-cover transition-all duration-700 brightness-90 grayscale-[50%] contrast-[110%] group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x450/0A0D12/3CCBFF?text=IMAGEN+NO+ENCONTRADA";
                  }}
                />
                
                {/* Overlay decorativo sobre la foto */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(45,127,249,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                
                {/* Badge ID técnico sobre la imagen */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[8px] font-mono font-bold uppercase bg-[#0A0D12]/80 backdrop-blur-sm border transition-shadow
                     ${idx % 2 === 0 ? 'text-[#3CCBFF] border-[#3CCBFF]/20' : 'text-[#F5F7FA] border-white/20'}
                  `}>
                    0{idx + 1} // SYS.ID
                  </span>
                </div>
              </div>

              {/* Contenido Técnico */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="mb-5 border-b border-[#1B2430]/50 pb-4">
                  <span className={`text-[10px] font-mono tracking-widest uppercase mb-1.5 block font-bold transition-colors
                     ${idx % 2 === 0 ? 'text-[#3CCBFF]' : 'text-[#F5F7FA]'}
                  `}>
                    {machine.type}
                  </span>
                  <h3 className="text-xl font-bold text-[#F5F7FA] group-hover:text-white transition-colors tracking-wide drop-shadow-md">
                    {machine.name}
                  </h3>
                </div>

                <p className="text-[#8A94A6] text-sm leading-relaxed mb-6 flex-grow group-hover:text-[#F5F7FA]/90 transition-colors">
                  {machine.desc}
                </p>

                {/* Especificaciones Técnicas */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1B2430]/50 bg-transparent">
                  {machine.specs.map((spec, i) => (
                    <span 
                      key={i} 
                      className={`inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold uppercase transition-colors
                         ${idx % 2 === 0 
                           ? 'bg-[#0A0D12] text-[#8A94A6] border border-[#1B2430] group-hover:border-[#3CCBFF]/30 group-hover:text-[#3CCBFF]' 
                           : 'bg-[#002856]/50 text-[#F5F7FA] border border-white/10 group-hover:border-white/40 group-hover:text-white'
                         }
                      `}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resplandor interno dinámico al pasar el mouse */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-[#3CCBFF] w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>

        {/* Indicador de Swipe (Solo visible en Celular) */}
        <div className="md:hidden flex justify-center items-center gap-2 text-[#8A94A6] mt-2">
          <svg className="w-4 h-4 animate-[bounce-x_2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span className="text-[10px] uppercase font-mono tracking-widest">Swipe to explore</span>
          <svg className="w-4 h-4 animate-[bounce-x-reverse_2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>

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

export default ManufacturingCapacity;