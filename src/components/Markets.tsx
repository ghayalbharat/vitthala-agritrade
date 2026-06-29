import React from 'react';
import { MapPin, Ship, CheckCircle, ArrowUpRight } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function Markets() {
  const marketNetworks = [
    {
      id: 'domestic',
      title: 'Domestic Markets',
      tagline: 'Across India Sourcing & Supply',
      description: 'Supplying premium grade-A commodities to large processors, national consumer goods companies, and leading agricultural wholesalers across key states in India.',
      icon: MapPin,
      points: [
        'Direct supply lines to major millers, distillers, and starch industries.',
        'Sourcing presence across critical agricultural mandis and production hubs.',
        'SGS verified moisture and purity consistency during domestic logistics.'
      ],
      states: 'Maharashtra • MP • Gujarat • Karnataka • AP',
      highlightColor: 'text-emerald-700'
    },
    {
      id: 'export',
      title: 'Export Markets',
      tagline: 'Dubai & Global Trade Hubs',
      description: 'Present in the Middle East through certified export partners and reliable trade corridors, adhering strictly to global sanitary and phytosanitary (SPS) norms.',
      icon: Ship,
      points: [
        'Dubai trade desk facilitating seamless GCC supply chains.',
        'Strict compliance with phytosanitary certificates and export quarantine.',
        'Containerized shipping routes optimized for quality and freshness.'
      ],
      states: 'UAE (Dubai) • Middle East • East Africa • Asia-Pac',
      highlightColor: 'text-amber-700'
    }
  ];

  return (
    <section id="markets" className="py-24 bg-[#010502] text-white border-b border-neutral-900 relative overflow-hidden select-none" style={{ contentVisibility: 'auto' }}>
      {/* Immersive background image from user's Google Drive link with fallbacks and overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1db0g3R-JRuheWwBnLeHV0RPHXSHgazmi" 
          className="w-full h-full object-cover opacity-35 filter brightness-50 contrast-[1.1]"
          alt="Markets & Networks Background"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Robust fallback chain
            const currentSrc = e.currentTarget.src;
            if (currentSrc.includes("lh3.googleusercontent.com")) {
              e.currentTarget.src = "https://docs.google.com/uc?export=download&id=1db0g3R-JRuheWwBnLeHV0RPHXSHgazmi";
            } else if (currentSrc.includes("export=download")) {
              e.currentTarget.src = "https://docs.google.com/uc?export=view&id=1db0g3R-JRuheWwBnLeHV0RPHXSHgazmi";
            } else {
              // Final fallback to high-quality logistics image
              e.currentTarget.src = "/src/assets/images/global_grain_logistics_1782544538340.jpg";
            }
          }}
        />
        {/* Deep, rich forest green & black overlay for a mysterious, high-end organic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010502]/98 via-[#041F06]/92 to-[#010301]/98 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#021c05]/65 mix-blend-color-burn" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER BADGE AND SECTION HEADER (CENTERED) */}
        <ScrollAnimate>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[10px] font-bold tracking-widest text-[#FCB92C] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              6. Markets & Key Clients
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mt-4 mb-4">
              Domestic Sourcing & Export Networks
            </h2>
            <div className="w-16 h-[2.5px] bg-[#FCB92C] mx-auto my-6" />
            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-sans font-medium max-w-2xl mx-auto">
              Vitthala AgriTrade maintains robust commercial links across state-level borders and international marine corridors. We supply certified crop lots directly to high-capacity consumer brands, starch conglomerates, and GCC trade networks.
            </p>
          </div>
        </ScrollAnimate>
 
        {/* DOUBLE COLUMN SPLIT: DOMESTIC VS EXPORT */}
        <ScrollAnimate delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {marketNetworks.map((mkt) => {
            const Icon = mkt.icon;
            const isDomestic = mkt.id === 'domestic';
            const isExport = mkt.id === 'export';
            return (
              <div
                key={mkt.id}
                className="backdrop-blur-xl border border-white/40 bg-white/75 hover:bg-white/85 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:-translate-y-1 group text-neutral-900"
              >
                <div className="space-y-6">
                  {/* Header Block */}
                  <div className="flex items-baseline justify-between border-b border-black/10 pb-5">
                    <div className="space-y-1 text-left">
                      <span className={`text-[10px] font-bold tracking-wider uppercase font-mono ${
                        isDomestic 
                          ? 'text-emerald-800' 
                          : isExport 
                          ? 'text-amber-800' 
                          : 'text-neutral-500'
                      }`}>
                        {mkt.tagline}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-black text-[#112F13] tracking-tight">
                        {mkt.title}
                      </h3>
                    </div>
                    <div className={`h-11 w-11 rounded-2xl flex items-center justify-center border shadow-sm ${
                      isDomestic 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : isExport 
                        ? 'bg-amber-50 text-amber-700 border-amber-100' 
                        : 'bg-neutral-50 text-neutral-700 border-neutral-100'
                    }`}>
                      <Icon size={18} className="stroke-[2.5]" />
                    </div>
                  </div>
 
                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed font-sans text-left text-neutral-700 font-medium">
                    {mkt.description}
                  </p>
 
                  {/* Bullet points */}
                  <ul className="space-y-3 pt-2 text-left">
                    {mkt.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-neutral-800 font-medium">
                        <CheckCircle size={15} className={`mt-0.5 shrink-0 ${isDomestic ? 'text-emerald-600' : isExport ? 'text-amber-600' : 'text-emerald-600'}`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
 
                {/* Footer geographic focus */}
                <div className="border-t border-black/10 pt-5 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-left">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase font-bold font-mono tracking-wider text-neutral-500">Active Footprint</span>
                    <p className="text-xs font-bold font-sans text-neutral-900">{mkt.states}</p>
                  </div>
                  <span className="text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md font-bold flex items-center gap-1 border text-neutral-900 bg-black/5 border-black/10 hover:bg-black/10 transition-all duration-200">
                    <span>Active Corridor</span>
                    <ArrowUpRight size={11} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        </ScrollAnimate>
 
      </div>
    </section>
  );
}
