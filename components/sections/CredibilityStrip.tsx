'use client';

import React from 'react';

export interface CredibilityItem {
  label: string;
}

interface CredibilityStripProps {
  items: CredibilityItem[];
}

const CredibilityStrip: React.FC<CredibilityStripProps> = ({ items }) => {
  return (
    // Fondo claro (Gris Técnico) para romper la oscuridad del Hero y la Máquina
    <div className="relative bg-[#F5F7FA] border-y border-[#E1E8ED] py-10 lg:py-12 z-30 overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.03)]">
      
      {/* Textura de líneas de escaneo muy sutiles en tono oscuro para el contraste */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,40,86,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Indicador LED: Invertido para fondo claro */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E1E8ED] rounded-full shadow-sm">
            {/* LED Azul eléctrico */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#2D7FF9] animate-pulse shadow-[0_0_8px_#2D7FF9]" />
            <span className="text-[10px] text-[#002856] font-mono tracking-widest uppercase font-bold">
              SYS.VALIDATED_FOR_ENVIRONMENTS
            </span>
          </div>
        </div>

        {/* Placas de Hardware Claras (Efecto Aluminio/Blanco) MÁS GRANDES */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white border-2 border-[#E1E8ED] hover:border-[#2D7FF9]/40 px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-md flex items-center gap-3 md:gap-4 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg cursor-default overflow-hidden"
            >
              {/* Reflejo de luz sutil blanco */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
              
              {/* Nodo izquierdo (Tornillo/LED) que reacciona en hover - MÁS GRANDE */}
              <div className="w-2 h-2 bg-[#D1D8DD] group-hover:bg-[#2D7FF9] transition-colors rounded-full shadow-inner" />
              
              {/* Texto en Gris plomo, cambia al Azul de tu logo en hover - MÁS GRANDE Y PESADO */}
              <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-[#495057] group-hover:text-[#002856] transition-colors duration-300">
                {item.label}
              </span>

              {/* Nodo derecho - MÁS GRANDE */}
              <div className="w-2 h-2 bg-[#D1D8DD] group-hover:bg-[#2D7FF9] transition-colors rounded-full shadow-inner" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CredibilityStrip;