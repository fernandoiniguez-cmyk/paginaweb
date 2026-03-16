import React from 'react';

interface BlueprintGridBackgroundProps {
  className?: string;
  variant?: 'fine' | 'bold';
}

const BlueprintGridBackground: React.FC<BlueprintGridBackgroundProps> = ({ 
  className = "", 
  variant = 'fine' 
}) => {
  const gridSize = variant === 'fine' ? '25px 25px' : '50px 50px';
  const opacity = variant === 'fine' ? 'opacity-[0.03]' : 'opacity-[0.05]';

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${opacity} ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, #8A94A6 1px, transparent 1px),
          linear-gradient(to bottom, #8A94A6 1px, transparent 1px)
        `,
        backgroundSize: gridSize,
      }}
      aria-hidden="true"
    />
  );
};

export default BlueprintGridBackground;