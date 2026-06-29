import React, { useState } from 'react';
import { Award, FlaskConical, Leaf } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function Quality() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const qualitySteps = [
    {
      title: 'Testing & Quality Control',
      icon: FlaskConical,
      content: 'Every lot passes through lab analysis for moisture, foreign matter, purity, etc. We maintain strict QC protocols at origin and before dispatch.',
      highlight: true
    },
    {
      title: 'Certifications & Standards',
      icon: Award,
      content: 'We comply with premier global and domestic food safety systems. Our networks support accredited certifications: ISO 22000, HACCP, FSSAI, Organic / NPOP, Global G.A.P., and full Phytosanitary clearance.'
    },
    {
      title: 'Sustainability & Traceability',
      icon: Leaf,
      content: 'We believe in responsible sourcing. We trace shipments back to producer, maintain digital traceability, and ensure sustainable practices (water efficiency, no harmful chemicals, etc.).'
    }
  ];

  return (
    <section id="quality" className="py-24 bg-[#FCFCF9] text-neutral-900 border-b border-neutral-100 select-none" style={{ contentVisibility: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER BADGE AND SECTION TITLE */}
        <ScrollAnimate>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-widest text-[#1A7721] uppercase bg-emerald-100/60 border border-emerald-200/50 px-3.5 py-1.5 rounded-full">
              5. Quality & Certifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight mt-4 mb-4 text-neutral-900">
              Sourcing Integrity & Lab Validation
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 font-sans leading-relaxed">
              Every shipment complies with international purity thresholds, validated by accredited third-party laboratories.
            </p>
          </div>
        </ScrollAnimate>

        {/* REPLICATED UI SPLIT GRID LAYOUT */}
        <ScrollAnimate delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: THE PROFESSIONAL IMAGE WITH BADGE AND GRID OVERLAY CARD */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* The main picture with generous rounded corners */}
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-neutral-200/50 bg-neutral-100">
              <img
                src="/src/assets/images/qc_scientist_lab_1782558166661.jpg"
                alt="AgriTrade Laboratory testing"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent" />
            </div>

            {/* A floating vibrant light-green badge with handwritten style element exactly as the mockup */}
            <div className="absolute -top-5 right-4 sm:right-8 bg-[#BEF264] text-neutral-950 text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-[#A7F3D0]/40 flex items-center gap-1.5 animate-bounce-slow">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1A7721] animate-pulse"></span>
              <span>Strict QC Protocols</span>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH FIDELITY REPLICATION OF STEPS TIMELINE */}
          <div className="lg:col-span-6 text-left space-y-1">
            <span className="text-[10px] font-extrabold tracking-widest text-[#1A7721] uppercase block mb-2">HOW WE WORK</span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-neutral-900 tracking-tight mb-8">
              Rigorous Standards From Farm To Port
            </h3>

            {/* Vertical timeline matching the image precisely */}
            <div className="relative pl-2 sm:pl-4 space-y-8">
              {qualitySteps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStep === idx;
                
                // Segmented vertical left border logic
                // The active step gets a strong black bar, while other bars are light neutral.
                return (
                  <div 
                    key={idx}
                    className="flex gap-6 items-start group cursor-pointer"
                    onClick={() => setActiveStep(idx)}
                  >
                    {/* Left vertical border indicator segment */}
                    <div className="flex flex-col items-center h-full pt-1.5">
                      <div className={`w-[3.5px] h-12 rounded-full transition-colors duration-300 ${
                        isActive ? 'bg-[#1A7721]' : 'bg-neutral-200'
                      }`} />
                    </div>

                    {/* Step Icon Container */}
                    <div className={`h-11 w-11 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#BEF264] text-neutral-950 border-[#BEF264]' 
                        : 'bg-white text-neutral-500 border-neutral-200/60 hover:bg-neutral-50'
                    }`}>
                      <StepIcon size={18} strokeWidth={2.5} />
                    </div>

                    {/* Text block */}
                    <div className="space-y-1">
                      <h4 className="font-sans font-extrabold text-sm sm:text-base text-neutral-900 tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                        {step.content}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
        </ScrollAnimate>

      </div>
    </section>
  );
}
