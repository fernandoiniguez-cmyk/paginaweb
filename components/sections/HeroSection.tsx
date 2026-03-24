'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import TechnicalPanel from '@/components/visual/TechnicalPanel';
import BlueprintGridBackground from '@/components/visual/BlueprintGridBackground';
import ScanLineOverlay from '@/components/visual/ScanLineOverlay';
import DataLabel from '@/components/ui/DataLabel';

interface HeroCta {
  label: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  technicalLabels?: string[];
  imageSrc?: string;
  eyebrow?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  technicalLabels = [
    "Custom Workstations", 
    "PLC Integration", 
    "HMI Programming", 
    "Precision Tooling"
  ],
  imageSrc = "/images/hero-workstation.webp",
  eyebrow = "Cross-Border Engineering Support"
}) => {
  return (
    // Agregamos pt-32 para que el nuevo Header claro no tape el contenido
    <Section className="relative min-h-[100vh] flex items-center bg-[#0A0D12] overflow-hidden pt-32 pb-20 border-b border-[#1B2430]">
      
      {/* Backgrounds - Claros Oscuros */}
      <div className="absolute inset-0 opacity-40">
        <BlueprintGridBackground variant="bold" />
      </div>
      <ScanLineOverlay speed="slow" intensity="low" />
      
      {/* Glow central dinámico (Azul Corporativo + Eléctrico mezclado) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-tr from-[#002856]/40 to-[#2D7FF9]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20 w-full">
        
        {/* COLUMNA IZQUIERDA: Textos y CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-6 relative">
          
          {/* Eyebrow - Tarjeta UI pequeña */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#131922]/80 backdrop-blur-sm border border-[#1B2430] shadow-lg w-fit rounded-sm">
            <div className="w-2 h-2 rounded-full bg-[#3CCBFF] shadow-[0_0_8px_#3CCBFF] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#8A94A6] font-bold">
              {eyebrow} <span className="text-[#3CCBFF] ml-1">TJ—SD</span>
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F7FA] leading-[1.1] tracking-tight drop-shadow-2xl">
            {title}
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg lg:text-xl text-[#8A94A6] max-w-xl leading-relaxed">
            {subtitle}
          </p>

          {/* Botones - Ajustados para UI moderna */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button href={primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(45,127,249,0.3)]">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline" size="lg" className="w-full sm:w-auto bg-[#131922]/50 backdrop-blur-sm">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* COLUMNA DERECHA: Imagen y Panel (Adaptado para Móvil) */}
        <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] lg:h-[650px] mt-10 lg:mt-0">
          
          {/* 1. Tarjeta de Imagen (Elevada con sombras corporativas) */}
          <div className="absolute inset-0 lg:-right-4 rounded-xl overflow-hidden border border-[#1B2430] z-0 group shadow-[0_0_50px_rgba(0,40,86,0.6)]">
            <img 
              src={imageSrc} 
              alt="Custom Automated Workstation" 
              className="w-full h-full object-cover grayscale-[0.2] contrast-125 group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
            />
            {/* Gradiente oscuro en la base para que el panel flote mejor */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/40 to-transparent" />
            
            {/* Esquinas técnicas en la imagen */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#3CCBFF]/50" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#3CCBFF]/50" />
          </div>

          {/* 2. PANEL TÉCNICO FLOTANTE (Dinámico en Móvil y Desktop) */}
          {/* En móvil se ancla abajo y ocupa el ancho, en desktop flota a la izquierda */}
          <div className="absolute -bottom-6 left-2 right-2 sm:left-auto sm:right-auto sm:-bottom-10 sm:-left-12 z-10 sm:w-80">
            {/* Usamos backdrop-blur para el efecto UI Glass oscuro */}
            <TechnicalPanel variant="glass" className="border border-[#2D7FF9]/30 bg-[#0F141C]/85 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] p-5 sm:p-6 rounded-sm">
              <div className="flex flex-col gap-5">
                
                {/* Capa 1: Ubicación */}
                <div className="flex justify-between items-start border-b border-[#1B2430] pb-3">
                  <DataLabel label="Zone" value="Cali-Baja" />
                  <DataLabel label="Status" value="Active" />
                </div>
                
                {/* Capa 2: Core Capabilities (Lista compacta para móvil) */}
                <div className="space-y-2.5">
                  <h3 className="text-[#3CCBFF] text-[10px] font-mono uppercase tracking-widest">
                    System.Capabilities
                  </h3>
                  <ul className="space-y-2">
                    {technicalLabels.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 group">
                        <span className="h-[1px] w-3 bg-[#1B2430] group-hover:bg-[#2D7FF9] group-hover:w-5 transition-all" />
                        <span className="text-xs sm:text-sm text-[#F5F7FA] font-medium tracking-wide">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </TechnicalPanel>
          </div>

        </div>
      </div>
    </Section>
  );
};
export default HeroSection;
