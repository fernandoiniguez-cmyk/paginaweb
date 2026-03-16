import React from 'react';

interface TechnicalPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'solid' | 'glass';
}

const TechnicalPanel: React.FC<TechnicalPanelProps> = ({ 
  children, 
  className = "", 
  variant = 'solid' 
}) => {
  // Base 100% Dark Industrial
  const baseClasses = "relative border border-[#1B2430] transition-all duration-300";
  
  const variants = {
    // Solid: Fondo grafito oscuro
    solid: "bg-[#131922] shadow-[0_20px_40px_rgba(0,0,0,0.6)]",
    // Glass: Negro translúcido profundo (AQUÍ ESTABA EL ERROR)
    glass: "bg-[#0A0D12]/80 backdrop-blur-xl shadow-2xl",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {/* Esquinas técnicas decorativas en Cian */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#3CCBFF]/40" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#3CCBFF]/40" />
      
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default TechnicalPanel;