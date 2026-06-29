import React from 'react';
import { Quote } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function CoreValues() {
  return (
    <section id="values" className="bg-[#FCFCF9] py-24 border-t border-neutral-200/40 relative overflow-hidden" style={{ contentVisibility: 'auto' }}>
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <ScrollAnimate>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1A7721] bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full">
              Guiding Principles
            </span>
          </ScrollAnimate>
          <ScrollAnimate delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#112F13] mt-4 mb-6 leading-tight">
              Our Core Values
            </h2>
          </ScrollAnimate>
          <ScrollAnimate delay={0.2}>
            <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-medium">
              We hold ourselves to premium standards. These foundational pillars drive our operations, from our local sourcing hubs directly to our international buyers.
            </p>
          </ScrollAnimate>
        </div>

        {/* Bento Grid layout matching the asymmetric mockup design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Row 1, Column 1: Value 1 (Text Quote Card) */}
          <ScrollAnimate delay={0.1} className="flex h-full">
            <div className="bg-[#FAF9F6] border border-neutral-200/50 p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between w-full min-h-[300px] lg:min-h-[360px]">
              <div className="text-[#C2A578] mb-4 text-left">
                <Quote size={28} fill="currentColor" className="opacity-30" />
              </div>
              <div className="flex-grow flex flex-col justify-center text-left">
                <p className="text-neutral-800 font-serif italic text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
                  “Our direct-sourcing model empowers local agricultural communities with sustainable guidance and fair trade pricing. We stand side-by-side with smiling farmers.”
                </p>
                <div className="w-10 h-[1.5px] bg-[#C2A578]/50 my-6" />
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-neutral-200 shadow-sm shrink-0">
                  <img 
                    src="/src/assets/images/dnyaneswar_bankar_1782554158009.jpg" 
                    alt="Dnyaneswar Bankar" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-neutral-900 text-sm sm:text-base leading-tight">Dnyaneswar Bankar</h4>
                  <p className="text-[11px] text-neutral-500 font-sans mt-0.5 font-bold tracking-wider uppercase">Sourcing Lead</p>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Row 1, Column 2: Image Card (Farmer Harvesting Crop) */}
          <ScrollAnimate delay={0.2} className="flex h-full">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-sm border border-neutral-200/40 group w-full min-h-[220px] sm:min-h-[280px] lg:min-h-full">
              <img 
                src="/src/assets/images/indian_farmer_harvest_1782552689115.jpg" 
                alt="Smiling Indian Farmer" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          </ScrollAnimate>

          {/* Row 1, Column 3: Image Card (Global Sourcing Meeting) */}
          <ScrollAnimate delay={0.3} className="flex h-full">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-sm border border-neutral-200/40 group w-full min-h-[220px] sm:min-h-[280px] lg:min-h-full">
              <img 
                src="/src/assets/images/global_grain_logistics_1782544538340.jpg" 
                alt="Sourcing Team Collaboration" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          </ScrollAnimate>

          {/* Row 2, Column 1: Image Card (Field Sourcing Tractor) */}
          <ScrollAnimate delay={0.15} className="flex h-full">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-sm border border-neutral-200/40 group w-full min-h-[220px] sm:min-h-[280px] lg:min-h-full">
              <img 
                src="/src/assets/images/tractor_in_field_1782544519793.jpg" 
                alt="Agricultural Cultivation" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          </ScrollAnimate>

          {/* Row 2, Column 2: Image Card (Quality Lab Test) */}
          <ScrollAnimate delay={0.25} className="flex h-full">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-sm border border-neutral-200/40 group w-full min-h-[220px] sm:min-h-[280px] lg:min-h-full">
              <img 
                src="/src/assets/images/qc_scientist_lab_1782558166661.jpg" 
                alt="Quality Lab Testing" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          </ScrollAnimate>

          {/* Row 2, Column 3: Value 2 (Text Quote Card) */}
          <ScrollAnimate delay={0.35} className="flex h-full">
            <div className="bg-[#FAF9F6] border border-neutral-200/50 p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between w-full min-h-[300px] lg:min-h-[360px]">
              <div className="text-[#C2A578] mb-4 text-left">
                <Quote size={28} fill="currentColor" className="opacity-30" />
              </div>
              <div className="flex-grow flex flex-col justify-center text-left">
                <p className="text-neutral-800 font-serif italic text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
                  “Every shipment is backed by multi-point moisture analysis, strict laboratory grading, and rigorous phytosanitary inspections. We believe in complete transparency and digital traceability.”
                </p>
                <div className="w-10 h-[1.5px] bg-[#C2A578]/50 my-6" />
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-neutral-200 shadow-sm shrink-0">
                  <img 
                    src="/src/assets/images/chaitanya_chavhan_1782554142792.jpg" 
                    alt="Chaitanya Chavhan" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-neutral-900 text-sm sm:text-base leading-tight">Chaitanya Chavhan</h4>
                  <p className="text-[11px] text-neutral-500 font-sans mt-0.5 font-bold tracking-wider uppercase">QC Specialist</p>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Row 3, Column 1: Value 3 (Text Quote Card) */}
          <ScrollAnimate delay={0.2} className="flex h-full">
            <div className="bg-[#FAF9F6] border border-neutral-200/50 p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between w-full min-h-[300px] lg:min-h-[360px]">
              <div className="text-[#C2A578] mb-4 text-left">
                <Quote size={28} fill="currentColor" className="opacity-30" />
              </div>
              <div className="flex-grow flex flex-col justify-center text-left">
                <p className="text-neutral-800 font-serif italic text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
                  “From initial mandi procurement to final custom clearance, we eliminate inefficiencies. Utilizing modern temperature-controlled warehousing, we protect shipment freshness.”
                </p>
                <div className="w-10 h-[1.5px] bg-[#C2A578]/50 my-6" />
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-neutral-200 shadow-sm shrink-0">
                  <img 
                    src="/src/assets/images/chandrabhaga_gawli_1782554125294.jpg" 
                    alt="Chandrabhaga Gawli" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-neutral-900 text-sm sm:text-base leading-tight">Chandrabhaga Gawli</h4>
                  <p className="text-[11px] text-neutral-500 font-sans mt-0.5 font-bold tracking-wider uppercase">Logistics Lead</p>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Row 3, Column 2: Image Card (Market Logistics Dispatch) */}
          <ScrollAnimate delay={0.3} className="flex h-full">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-sm border border-neutral-200/40 group w-full min-h-[220px] sm:min-h-[280px] lg:min-h-full">
              <img 
                src="/src/assets/images/market_logistics_1782558614656.jpg" 
                alt="Logistics Coordination" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          </ScrollAnimate>

          {/* Row 3, Column 3: Image Card (High-Quality Grain Cargo) */}
          <ScrollAnimate delay={0.4} className="flex h-full">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-sm border border-neutral-200/40 group w-full min-h-[220px] sm:min-h-[280px] lg:min-h-full">
              <img 
                src="/src/assets/images/grains_wheat_maize_1782543916268.jpg" 
                alt="Premium Grains" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          </ScrollAnimate>

        </div>

      </div>
    </section>
  );
}
