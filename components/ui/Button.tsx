'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = "",
  external = false,
}) => {
  // Base técnica y audaz
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3CCBFF] disabled:opacity-50 disabled:pointer-events-none rounded-sm backdrop-blur-sm";
  
  const variants = {
    // Primary: Azul eléctrico vibrante que resalta sobre el negro. 
    primary: "bg-[#2D7FF9] text-white hover:bg-[#3CCBFF] hover:text-[#0A0D12] shadow-[0_0_20px_rgba(45,127,249,0.2)] hover:shadow-[0_0_30px_rgba(60,203,255,0.4)] border border-[#2D7FF9]/50",
    
    // Secondary: Fondo de cristal oscuro con texto blanco
    secondary: "bg-[#131922]/80 text-[#F5F7FA] hover:bg-[#1B2430] border border-[#2D7FF9]/30 hover:border-[#3CCBFF]",
    
    // Outline: Borde sutil y texto BLANCO (para que no desaparezca en el fondo)
    outline: "bg-[#0A0D12]/50 border border-[#F5F7FA]/20 text-[#F5F7FA] hover:border-[#3CCBFF] hover:text-[#3CCBFF] hover:bg-[#3CCBFF]/5",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-[10px]",
    md: "px-6 py-3.5 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isInternal = href.startsWith('/') && !external;
    
    if (isInternal) {
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;