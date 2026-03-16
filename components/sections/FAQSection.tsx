'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  eyebrow = "Technical FAQ",
  title,
  subtitle,
  items
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primera abierta por defecto

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section className="bg-[#0F141C] border-t border-[#1B2430] py-24 lg:py-32">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16 space-y-6">
        <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5">
          // {eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA] tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-[#8A94A6] text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          
          return (
            <div 
              key={idx} 
              className={`border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'border-[#2D7FF9]/50 bg-[#131922] shadow-[0_0_15px_rgba(45,127,249,0.05)]' 
                  : 'border-[#1B2430] bg-[#0A0D12] hover:border-[#2D7FF9]/30'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-[#2D7FF9] opacity-70 group-hover:opacity-100 transition-opacity">
                    0{idx + 1} //
                  </span>
                  <span className={`font-bold text-sm md:text-base tracking-wide transition-colors ${
                    isOpen ? 'text-[#3CCBFF]' : 'text-[#F5F7FA] group-hover:text-[#3CCBFF]'
                  }`}>
                    {item.question}
                  </span>
                </div>
                
                {/* Ícono Técnico Animado (+ / -) */}
                <div className="relative w-5 h-5 ml-4 shrink-0 flex items-center justify-center">
                   <div className={`w-4 h-[2px] transition-colors duration-300 ${isOpen ? 'bg-[#3CCBFF]' : 'bg-[#2D7FF9] group-hover:bg-[#3CCBFF]'}`} />
                   <div className={`absolute w-[2px] h-4 transition-all duration-300 ${isOpen ? 'bg-[#3CCBFF] rotate-90 opacity-0' : 'bg-[#2D7FF9] group-hover:bg-[#3CCBFF] rotate-0 opacity-100'}`} />
                </div>
              </button>
              
              {/* Contenido Desplegable */}
              <div 
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-[#8A94A6] text-sm md:text-base leading-relaxed border-t border-[#1B2430]/50 font-medium">
                    <div className="pl-6 md:pl-10 relative">
                      {/* Marcador visual técnico al lado de la respuesta */}
                      <div className="absolute left-0 top-2 w-[2px] h-4 bg-[#3CCBFF]/50" />
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQSection;