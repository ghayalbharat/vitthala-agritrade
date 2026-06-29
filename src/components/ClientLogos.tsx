import React from 'react';

export default function ClientLogos() {
  const logos = [
    { id: 1, name: 'Partner Brand Alpha', url: 'https://drive.google.com/thumbnail?id=1wlbLe4RLa1vUxR2H129lBGEBogqKHj-d&sz=w600' },
    { id: 2, name: 'Partner Brand Beta', url: 'https://drive.google.com/thumbnail?id=14eDDq1vQqhh1WQRlvYejMj_GaLF801PJ&sz=w600' },
    { id: 3, name: 'Partner Brand Gamma', url: 'https://drive.google.com/thumbnail?id=1FH7wJuWe2_SFTt4X27S39BnMjL0vou4k&sz=w600' },
    { id: 4, name: 'Partner Brand Delta', url: 'https://drive.google.com/thumbnail?id=18Ovv4YnRrMn7HBIMJZ12A8NmM1z_PUc2&sz=w600' },
    { id: 5, name: 'Partner Brand Epsilon', url: 'https://drive.google.com/thumbnail?id=1gEmUNos3c1UOy4UjAzkp2KyHx0_w1xIW&sz=w600' },
  ];

  // Double the list to support perfect continuous infinite scroll
  const doubledLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-white border-y border-neutral-200/40 py-16 sm:py-20 overflow-hidden relative select-none">
      {/* Visual left/right shadow overlay to fade the scrolling edges */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 text-center font-sans">
          Trusted by Domestic & Global Processing Leaders
        </p>
      </div>

      {/* Infinite scrolling slider */}
      <div className="relative flex w-full">
        <div className="flex gap-16 sm:gap-28 items-center justify-center animate-infinite-scroll py-2 whitespace-nowrap min-w-full">
          {doubledLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex items-center justify-center h-20 sm:h-24 w-44 sm:w-60 shrink-0 transition-all duration-300 hover:opacity-100 opacity-70 filter grayscale hover:grayscale-0"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-full max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback in case of temporary Google Drive thumbnail block
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animation Keyframes Injection Inline */}
      <style>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 30s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
