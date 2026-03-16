'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import TechnicalPanel from '@/components/visual/TechnicalPanel';

interface HighlightItem {
  title: string;
  description: string;
}

interface CrossBorderProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  mainText: string;
  highlights: HighlightItem[];
}

const CrossBorderSection: React.FC<CrossBorderProps> = ({
  eyebrow = "Cross-Border Engineering",
  title,
  subtitle,
  mainText,
  highlights
}) => {
  return (
    <Section className="bg-[#0A0D12] border-t border-[#1B2430] py-24 lg:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
        
        {/* Left Column: Strategic Content */}
        <div className="lg:col-span-6 space-y-10">
          
          {/* Header */}
          <div className="space-y-6">
            <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5">
              // {eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA] tracking-tight leading-[1.1]">
              {title}
            </h2>
            <p className="text-[#8A94A6] text-lg lg:text-xl leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {/* Main Context Text */}
          <div className="border-l-2 border-[#2D7FF9]/40 pl-6 py-2">
            <p className="text-[#F5F7FA] text-base leading-relaxed font-medium">
              {mainText}
            </p>
          </div>

          {/* Highlights List */}
          <div className="space-y-6 pt-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group cursor-default">
                <div className="mt-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-[#131922] border border-[#2D7FF9]/30 group-hover:border-[#3CCBFF] transition-colors shrink-0">
                  <div className="w-1.5 h-1.5 bg-[#2D7FF9] group-hover:bg-[#3CCBFF] rounded-full transition-colors" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[#F5F7FA] text-sm font-bold uppercase tracking-wider group-hover:text-[#3CCBFF] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[#8A94A6] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Technical Map Visual */}
        <div className="lg:col-span-6 relative">
          <TechnicalPanel variant="glass" className="bg-[#0F141C] border-[#2D7FF9]/20 shadow-2xl p-0 overflow-hidden group">
            
            {/* Header Data */}
            <div className="p-6 border-b border-[#1B2430] flex justify-between items-center bg-[#131922] relative z-10">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-[#8A94A6] uppercase tracking-widest">Zone_01</span>
                <span className="text-sm font-bold text-[#F5F7FA] uppercase tracking-wide">San Diego, CA</span>
              </div>
              <div className="w-px h-8 bg-[#1B2430]" />
              <div className="flex flex-col gap-1 text-right">
                <span className="text-[9px] font-mono text-[#8A94A6] uppercase tracking-widest">Zone_02</span>
                <span className="text-sm font-bold text-[#F5F7FA] uppercase tracking-wide">Tijuana, MX</span>
              </div>
            </div>

            {/* Map Area */}
            <div className="relative h-[400px] bg-[#0A0D12] overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1B2430_1px,transparent_1px),linear-gradient(to_bottom,#1B2430_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              
              {/* Radar Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#1B2430] rounded-full opacity-30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#2D7FF9]/10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-[#3CCBFF]/10 rounded-full" />

              {/* Node 1: San Diego */}
              <div className="absolute top-[30%] left-[35%] flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#0A0D12] border-2 border-[#3CCBFF] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(60,203,255,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3CCBFF] animate-ping" />
                </div>
                <span className="mt-2 text-[10px] font-mono text-[#F5F7FA] bg-[#0A0D12]/80 px-2 py-0.5 rounded border border-[#1B2430]">SD</span>
              </div>

              {/* Node 2: Tijuana */}
              <div className="absolute top-[65%] left-[65%] flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#0A0D12] border-2 border-[#2D7FF9] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(45,127,249,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2D7FF9] animate-pulse" />
                </div>
                <span className="mt-2 text-[10px] font-mono text-[#F5F7FA] bg-[#0A0D12]/80 px-2 py-0.5 rounded border border-[#1B2430]">TJ</span>
              </div>

              {/* Connecting Data Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <line 
                  x1="35%" y1="30%" 
                  x2="65%" y2="65%" 
                  stroke="#2D7FF9" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  className="opacity-50"
                />
                <circle r="3" fill="#3CCBFF">
                  <animateMotion 
                    dur="3s" 
                    repeatCount="indefinite" 
                    path="M 140 120 L 260 260" /* Aproximación de coordenadas para la animación */
                  />
                </circle>
              </svg>

              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Footer Tag */}
            <div className="p-4 bg-[#131922] border-t border-[#1B2430] flex justify-between items-center px-6 relative z-10">
              <span className="text-[10px] font-mono text-[#3CCBFF] uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3CCBFF] animate-pulse" />
                System.Status: Connected
              </span>
              <span className="text-[10px] font-mono text-[#8A94A6] uppercase tracking-widest">
                Hub // Cali-Baja
              </span>
            </div>

          </TechnicalPanel>
        </div>

      </div>
    </Section>
  );
};

export default CrossBorderSection;