'use client';

import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  useEffect(() => {
    // Detecta el idioma del navegador (ej: "es-MX" -> "es")
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es') {
      setLang('es');
    } else {
      setLang('en');
    }
  }, []);

  return lang;
};