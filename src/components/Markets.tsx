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
      highlightColor: 'text-[#1A7721]'
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
      highlightColor: 'text-amber-500'
    }
  ];

  return (
    <section id="markets" className="py-24 bg-white text-neutral-900 border-b border-neutral-100 select-none" style={{ contentVisibility: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER BADGE AND SECTION HEADER */}
        <ScrollAnimate>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-5 space-y-3 text-left">
              <span className="text-[10px] font-bold tracking-widest text-[#1A7721] uppercase bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full">
                6. Markets & Key Clients
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-neutral-900">
                Domestic Sourcing & Export Networks
              </h2>
            </div>
            <div className="lg:col-span-7 text-left">
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
                Vitthala AgriTrade maintains robust commercial links across state-level borders and international marine corridors. We supply certified crop lots directly to high-capacity consumer brands, starch conglomerates, and GCC trade networks.
              </p>
            </div>
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
                className={`border rounded-[2.5rem] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 ${
                  isDomestic
                    ? 'bg-[#ADEBB3] border-emerald-500/10 hover:border-emerald-500/25'
                    : isExport
                    ? 'bg-[#FFFDD1] border-amber-500/10 hover:border-amber-500/25'
                    : 'bg-[#FCFCF9] border-neutral-200/50 hover:border-neutral-200'
                }`}
              >
                <div className="space-y-6">
                  {/* Header Block */}
                  <div className={`flex items-baseline justify-between border-b pb-5 ${
                    isDomestic 
                      ? 'border-emerald-900/10' 
                      : isExport 
                      ? 'border-amber-900/10' 
                      : 'border-neutral-100'
                  }`}>
                    <div className="space-y-1 text-left">
                      <span className={`text-[10px] font-bold tracking-wider uppercase font-mono ${
                        isDomestic 
                          ? 'text-emerald-900/70' 
                          : isExport 
                          ? 'text-amber-900/70' 
                          : 'text-neutral-400'
                      }`}>
                        {mkt.tagline}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-black text-neutral-900 tracking-tight">
                        {mkt.title}
                      </h3>
                    </div>
                    <div className={`h-11 w-11 rounded-2xl flex items-center justify-center border shadow-sm ${
                      isDomestic 
                        ? 'bg-white/80 text-emerald-900 border-white/90' 
                        : isExport 
                        ? 'bg-white/80 text-amber-900 border-white/90' 
                        : 'bg-white text-neutral-800 border-neutral-200/60'
                    }`}>
                      <Icon size={18} className={isDomestic ? 'text-[#1A7721]' : isExport ? 'text-amber-600' : mkt.highlightColor} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed font-sans text-left ${
                    isDomestic 
                      ? 'text-emerald-950/80 font-medium' 
                      : isExport 
                      ? 'text-amber-950/85 font-medium' 
                      : 'text-neutral-600'
                  }`}>
                    {mkt.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-2 text-left">
                    {mkt.points.map((pt, idx) => (
                      <li key={idx} className={`flex items-start gap-2.5 text-xs sm:text-sm font-sans ${
                        isDomestic 
                          ? 'text-emerald-900/80 font-medium' 
                          : isExport 
                          ? 'text-amber-900/80 font-medium' 
                          : 'text-neutral-500'
                      }`}>
                        <CheckCircle size={15} className={`mt-0.5 shrink-0 ${isDomestic ? 'text-[#1A7721]' : isExport ? 'text-amber-600' : 'text-[#1A7721]'}`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer geographic focus */}
                <div className={`border-t pt-5 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-left ${
                  isDomestic 
                    ? 'border-emerald-900/10' 
                    : isExport 
                    ? 'border-amber-900/10' 
                    : 'border-neutral-100'
                }`}>
                  <div className="space-y-0.5">
                    <span className={`text-[9px] uppercase font-bold font-mono tracking-wider ${
                      isDomestic 
                        ? 'text-emerald-900/60' 
                        : isExport 
                        ? 'text-amber-900/60' 
                        : 'text-neutral-400'
                    }`}>Active Footprint</span>
                    <p className={`text-xs font-bold font-sans ${
                      isDomestic 
                        ? 'text-emerald-950' 
                        : isExport 
                        ? 'text-amber-950' 
                        : 'text-neutral-800'
                    }`}>{mkt.states}</p>
                  </div>
                  <span className={`text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md font-bold flex items-center gap-1 border ${
                    isDomestic
                      ? 'text-emerald-950 bg-white/40 border-white/40'
                      : isExport
                      ? 'text-amber-950 bg-white/40 border-white/40'
                      : 'text-[#1A7721] bg-emerald-50 border-emerald-100'
                  }`}>
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
