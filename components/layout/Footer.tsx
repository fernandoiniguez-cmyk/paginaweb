'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070A] border-t border-[#1B2430] pt-20 pb-8 overflow-hidden relative">
      
      {/* Elementos Decorativos de Fondo (Dark Industrial) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D7FF9]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[200px] bg-[#3CCBFF]/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,127,249,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* TRUCO MAESTRO: brightness-0 invert convierte el logo oscuro en Blanco Puro */}
            <Link href="/" className="inline-block">
              <img 
                src="/images/stellar-logo.svg" 
                alt="Stellar Automation" 
                className="h-9 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
              />
            </Link>
            <p className="text-[#8A94A6] text-sm leading-relaxed max-w-sm">
              Advanced engineering and custom automated workstations for critical manufacturing industries in the Cali-Baja region.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[#F5F7FA] text-[10px] font-mono font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#3CCBFF] rounded-full" /> Solutions
            </h4>
            <ul className="space-y-3">
              <li><Link href="#workstations" className="text-[#8A94A6] hover:text-[#3CCBFF] hover:translate-x-1 inline-block text-sm transition-all duration-300">Custom Workstations</Link></li>
              <li><Link href="#capabilities" className="text-[#8A94A6] hover:text-[#3CCBFF] hover:translate-x-1 inline-block text-sm transition-all duration-300">PLC & HMI Integration</Link></li>
              <li><Link href="#capabilities" className="text-[#8A94A6] hover:text-[#3CCBFF] hover:translate-x-1 inline-block text-sm transition-all duration-300">Precision Tooling</Link></li>
              <li><Link href="#process" className="text-[#8A94A6] hover:text-[#3CCBFF] hover:translate-x-1 inline-block text-sm transition-all duration-300">System Integration</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F5F7FA] text-[10px] font-mono font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#3CCBFF] rounded-full" /> Company
            </h4>
            <ul className="space-y-3">
              <li><Link href="#industries" className="text-[#8A94A6] hover:text-[#3CCBFF] hover:translate-x-1 inline-block text-sm transition-all duration-300">Industries</Link></li>
              <li><Link href="#why-stellar" className="text-[#8A94A6] hover:text-[#3CCBFF] hover:translate-x-1 inline-block text-sm transition-all duration-300">Why Stellar</Link></li>
              <li><Link href="#projects" className="text-[#8A94A6] hover:text-[#3CCBFF] hover:translate-x-1 inline-block text-sm transition-all duration-300">Projects</Link></li>
              <li><Link href="#faq" className="text-[#8A94A6] hover:text-[#3CCBFF] hover:translate-x-1 inline-block text-sm transition-all duration-300">Technical FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Column (Terminal Style) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#F5F7FA] text-[10px] font-mono font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#3CCBFF] rounded-full animate-pulse shadow-[0_0_8px_#3CCBFF]" /> Operations Hub
            </h4>
            <div className="bg-[#0A0D12] border border-[#1B2430] p-4 rounded-md shadow-inner space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-[#F5F7FA] font-mono text-xs uppercase tracking-wide">Tijuana, BC — San Diego, CA</span>
                <span className="text-[#8A94A6] text-xs">Cross-Border Engineering Support</span>
              </div>
              <div className="pt-3 border-t border-[#1B2430]">
                <a href="mailto:info@stellarmfgautomation.com" className="text-[#3CCBFF] text-sm hover:text-white transition-colors duration-300 break-all">
                  info@stellarmfgautomation.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Agency Credit */}
        <div className="pt-6 border-t border-[#1B2430] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8A94A6] text-xs font-mono">
            &copy; {currentYear} STELLAR AUTOMATION. ALL RIGHTS RESERVED.
          </p>
          
          {/* EL SELLO DE LA AGENCIA */}
          <p className="text-[#8A94A6] text-xs flex items-center gap-1.5 group">
            Hecho con <span className="text-red-500 text-sm group-hover:scale-125 transition-transform duration-300">❤️</span> por 
            <a 
              href="https://somoslazaro.marketing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-[#F5F7FA] hover:text-[#3CCBFF] transition-colors tracking-wide ml-1 drop-shadow-sm"
            >
              somoslazaro.marketing
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;