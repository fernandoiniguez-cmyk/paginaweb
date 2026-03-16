'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustNote?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  eyebrow = "Start Your Automation Project",
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustNote = "Initial engineering consultations are free and focused on understanding your automation needs."
}) => {
  return (
    <Section className="bg-[#05070A] relative py-32 md:py-48 overflow-hidden border-t border-[#1B2430]">
      
      {/* Background Technical Accents */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid dots */}
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(#2D7FF9 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        {/* Central Glow for focus */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2D7FF9]/10 blur-[120px] rounded-full" />
        
        {/* Corner Technical Borders */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#3CCBFF]/20 m-8" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#3CCBFF]/20 m-8" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4">
        
        {/* Text Block */}
        <div className="space-y-6 mb-12">
          <span className="inline-block text-[#3CCBFF] text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 border border-[#3CCBFF]/20 bg-[#3CCBFF]/5">
            // {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#F5F7FA] tracking-tight leading-[1.05]">
            {title}
          </h2>
          <p className="text-[#8A94A6] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>

        {/* Buttons Action Area */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto">
          <Button 
            href={primaryCta.href} 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto min-w-[280px] shadow-[0_0_30px_rgba(45,127,249,0.2)] hover:shadow-[0_0_40px_rgba(60,203,255,0.4)] transition-shadow duration-300 text-sm tracking-wide"
          >
            {primaryCta.label}
          </Button>
          
          {secondaryCta && (
            <Button 
              href={secondaryCta.href} 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto min-w-[280px] border-[#2D7FF9]/30 hover:border-[#3CCBFF] text-sm tracking-wide bg-[#0A0D12]/50 backdrop-blur-sm"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>

        {/* Trust Note */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#2D7FF9]/50 to-transparent" />
          {trustNote && (
            <p className="text-[11px] md:text-xs font-mono text-[#8A94A6] uppercase tracking-widest text-center max-w-lg">
              {trustNote}
            </p>
          )}
        </div>

      </div>
      
      {/* Footer Technical Stamp */}
      <div className="absolute bottom-6 right-8 hidden md:block pointer-events-none">
        <div className="flex flex-col gap-1 opacity-30 text-right">
          <span className="text-[9px] font-mono text-[#3CCBFF]">SYS_READY // AWAITING_INPUT</span>
        </div>
      </div>

    </Section>
  );
};

export default CTASection;