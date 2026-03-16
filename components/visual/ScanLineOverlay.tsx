'use client'; 

import React from 'react';

interface ScanLineOverlayProps {
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
  intensity?: 'low' | 'high';
}

const ScanLineOverlay: React.FC<ScanLineOverlayProps> = ({ 
  className = "", 
  speed = 'normal',
  intensity = 'low'
}) => {
  const duration = {
    slow: '10s',
    normal: '6s',
    fast: '3s'
  }[speed];

  const opacity = intensity === 'low' ? 'opacity-[0.05]' : 'opacity-[0.1]';

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${className}`}>
      <div 
        className={`w-full h-20 bg-gradient-to-b from-transparent via-[#3CCBFF] to-transparent ${opacity}`}
        style={{
          animation: `scanline ${duration} linear infinite`,
        }}
      />
      
      {/* CORRECCIÓN: Etiqueta <style> pura de HTML, sin 'jsx global' */}
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
      `}</style>
    </div>
  );
};

export default ScanLineOverlay;