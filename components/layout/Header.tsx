'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { homeDictionary } from '@/content/home/dictionary';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lang = useLanguage();
  const content = homeDictionary[lang as keyof typeof homeDictionary].navigation.header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      // El Header es un "Cristal Claro" para salvar el logo oscuro sobre la página negra
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#F5F7FA]/90 backdrop-blur-md border-[#E1E8ED] py-3 shadow-sm' 
          : 'bg-[#F5F7FA] border-[#E1E8ED] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Aquí va tu Logo Original (Azul oscuro y Gris) */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/images/stellar-logo.svg" alt="Stellar Automation" className="h-9 w-auto" />
        </Link>

        {/* Desktop Nav - Textos en el azul de tu logo */}
        <nav className="hidden md:flex items-center gap-8">
          {content.links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-[#6C757D] hover:text-[#002856] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href={content.ctaHref} variant="primary" size="sm" className="bg-[#002856] text-white hover:bg-[#001D40]">
            {content.cta}
          </Button>
        </div>

        {/* Mobile Menu Toggle (Hamburguesa) */}
        <button 
          className="md:hidden text-[#002856] hover:text-[#2D7FF9] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen 
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

      </div>

      {/* Menú Desplegable en Celular */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F5F7FA] border-b border-[#E1E8ED] py-4 px-6 flex flex-col gap-4 shadow-xl">
          {content.links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-[#002856] border-b border-[#E1E8ED] pb-3"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button href={content.ctaHref} variant="primary" className="w-full justify-center bg-[#002856] text-white py-4">
              {content.cta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;