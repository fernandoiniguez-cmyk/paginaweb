import React from 'react';

interface ProcessStepCardProps {
  index: number;
  title: string;
  description: string;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ index, title, description }) => {
  return (
    <div className="relative pl-8 border-l border-[#1B2430] group hover:border-[#2D7FF9] transition-colors duration-500 pb-12 last:pb-0">
      {/* Step Indicator */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0A0D12] border-2 border-[#1B2430] group-hover:border-[#2D7FF9] transition-colors duration-500" />
      
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[10px] text-[#2D7FF9] font-bold tracking-widest uppercase">
          Phase 0{index}
        </span>
        <h3 className="text-[#F5F7FA] text-lg font-bold tracking-tight group-hover:text-[#3CCBFF] transition-colors">
          {title}
        </h3>
        <p className="text-[#8A94A6] text-sm leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStepCard;