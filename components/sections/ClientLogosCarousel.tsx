'use client';

import React from 'react';

// LOGO DATA - Assume they are in public/images/ with these names and cleaned backgrounds
const logos = [
  { src: '/images/logo-bourns.png', alt: 'Bourns Logo (Original Color)', width: 140 },
  { src: '/images/logo-stryker.png', alt: 'Stryker Logo (Original Color)', width: 140 },
  { src: '/images/logo-alliance.png', alt: 'Alliance Air Products - Daikin (Original Color)', width: 200 },
  { src: '/images/logo-inventus.png', alt: 'Inventus Power Logo (Original Color)', width: 140 },
];

const ClientLogosCarousel: React.FC = () => {
  return (
    <section className="bg-black border-t border-[#1B2430] py-16 relative overflow-hidden">
      {/* Background technical details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D7FF9]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(60,203,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center mb-10">
        <h4 className="text-[#F5F7FA] text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-2 justify-center">
          <span className="w-1.5 h-1.5 bg-[#3CCBFF] rounded-full animate-pulse shadow-[0_0_8px_#3CCBFF]" />
          CLIENT_PARTNERSHIP_FEED // ACTIVE
        </h4>
      </div>

      {/* Infinite Scrolling Carousel Container */}
      <div className="relative w-full overflow-hidden flex items-center h-28">
        {/* The scrolling band of logos */}
        <div className="flex w-fit scroll-logos-infinite animate-scrollLogos">
          {/* Group 1 (duplicated for seamless effect) */}
          <div className="flex items-center space-x-20 px-10">
            {logos.map((logo, index) => (
              <img
                key={`group1-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={50} // Aspect ratio preserved
                className="object-contain"
                loading="eager" // Important for scrolling
              />
            ))}
          </div>
          {/* Group 2 (identical to Group 1) */}
          <div className="flex items-center space-x-20 px-10">
            {logos.map((logo, index) => (
              <img
                key={`group2-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={50} // Aspect ratio preserved
                className="object-contain"
                loading="eager" // Important for scrolling
              />
            ))}
          </div>
        </div>
      </div>

      {/* Embedded CSS for infinite scroll - Copy this whole block into your project */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Scrolls exactly one full list length */
        }
        .animate-scrollLogos {
          animation: scrollLogos 30s linear infinite; /* Adjust time for speed */
        }
        .animate-scrollLogos:hover {
          animation-play-state: paused; /* Pause on hover */
        }
        `,
      }} />

    </section>
  );
};

export default ClientLogosCarousel;