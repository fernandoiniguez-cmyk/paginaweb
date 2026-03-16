import React from 'react';

interface DataLabelProps {
  label: string;
  value: string;
  className?: string;
}

const DataLabel: React.FC<DataLabelProps> = ({ label, value, className = "" }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    {/* Etiqueta en Cian brillante para máximo contraste */}
    <span className="text-[10px] sm:text-xs font-mono text-[#3CCBFF] uppercase tracking-[0.2em] font-bold">
      // {label}
    </span>
    {/* Valor en Blanco puro con sombra para despegarlo del fondo */}
    <span className="text-sm sm:text-base font-bold text-white uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
      {value}
    </span>
  </div>
);

export default DataLabel;