import React from 'react';

interface HotspotMarkerProps {
  x: number; // Porcentaje 0-100
  y: number; // Porcentaje 0-100
  label: string;
  className?: string;
}

const HotspotMarker: React.FC<HotspotMarkerProps> = ({ x, y, label, className = "" }) => {
  return (
    <div 
      className={`absolute group cursor-help ${className}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative flex items-center justify-center">
        {/* Pulse Effect */}
        <div className="absolute w-6 h-6 bg-[#3CCBFF]/20 rounded-full animate-ping" />
        {/* Core Dot */}
        <div className="relative w-3 h-3 bg-[#3CCBFF] border-2 border-[#0A0D12] rounded-full shadow-[0_0_10px_rgba(60,203,255,0.5)]" />
        
        {/* Label Tooltip */}
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
          <div className="bg-[#1B2430] border border-[#3CCBFF]/30 px-3 py-1.5 whitespace-nowrap shadow-xl">
            <span className="text-[10px] font-mono text-[#F5F7FA] uppercase tracking-tighter">
              {label}
            </span>
          </div>
          {/* Tooltip Arrow */}
          <div className="w-2 h-2 bg-[#1B2430] border-r border-b border-[#3CCBFF]/30 rotate-45 mx-auto -mt-1" />
        </div>
      </div>
    </div>
  );
};

export default HotspotMarker;