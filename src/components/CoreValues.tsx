import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Sprout, ShieldCheck, HeartHandshake } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

interface ValueItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function CoreValues() {
  const [activeId, setActiveId] = useState<number>(1);

  const values: ValueItem[] = [
    {
      id: 1,
      title: "Farmer Prosperity",
      subtitle: "TRUSTED FARMING PARTNERSHIPS",
      description: "Our direct-sourcing model empowers local communities with sustainable agricultural guidance, interest-free credit advances, and fair trade pricing. We stand side-by-side with smiling Indian farmers to enrich their families, preserve soil vitality, and guarantee supply stability.",
      icon: Sprout
    },
    {
      id: 2,
      title: "Absolute Quality & Integrity",
      subtitle: "GOLD-STANDARD TESTING CERTIFICATION",
      description: "Every shipment is backed by multi-point moisture analysis, strict laboratory grading, and rigorous phytosanitary inspections. We believe in complete transparency, providing buyers with verifiable batch-level digital traceability reports.",
      icon: ShieldCheck
    },
    {
      id: 3,
      title: "Sourcing Efficiency",
      subtitle: "END-TO-END COLD CHAIN LOGISTICS",
      description: "From initial mandi procurement to final custom clearance, we eliminate middleman inefficiencies. Utilizing modern temperature-controlled warehousing and optimized global freight networks, we reduce overheads and protect shipment freshness.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="values" className="bg-[#0D0C0A] text-white relative overflow-hidden" style={{ contentVisibility: 'auto' }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:min-h-[750px] items-stretch">
        
        {/* LEFT SIDE: Custom background image from Google Drive */}
        <div className="lg:col-span-6 relative overflow-hidden min-h-[350px] lg:min-h-full">
          <img
            src="https://lh3.googleusercontent.com/d/1dzjVQtOfm235p5VqCURk7W8O0-5LEUm5"
            alt="Vitthala AgriTrade Core Values Sourcing Banner"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Warm, golden-hour gradient overlay that fades into the dark values section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0D0C0A] pointer-events-none" />
          
          {/* Floating badge over the photo for additional context */}
          <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-[280px]">
            <p className="text-[10px] uppercase font-bold tracking-widest text-[#1A7721]">Field Integration</p>
            <p className="text-sm font-medium text-neutral-100 mt-1 leading-snug">
              Direct linkages with 12,000+ happy farmers across regional crop clusters.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive UI mimicking the reference mockup */}
        <div className="lg:col-span-6 flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative bg-gradient-to-b from-[#14120F] to-[#0D0C0A] border-t lg:border-t-0 lg:border-l border-white/5">
          
          {/* Faint sunset-background glow effect behind the text */}
          <div className="absolute -right-40 top-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute left-10 bottom-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <ScrollAnimate className="relative z-10 space-y-8 max-w-xl w-full">
            
            {/* Pill Tag */}
            <div className="inline-block">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C2A578] border border-[#C2A578]/40 px-3.5 py-1.5 rounded-full bg-amber-500/5">
                Trusted Farming Solutions
              </span>
            </div>

            {/* Main Display Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.1] text-white">
              From Field to Future
            </h2>

            {/* Accordion / List Elements */}
            <div className="space-y-4 pt-4">
              {values.map((item) => {
                const isActive = activeId === item.id;
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`cursor-pointer transition-all duration-300 border-b border-white/10 pb-6 group ${
                      isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-mono font-bold tracking-widest ${
                          isActive ? "text-[#C2A578]" : "text-neutral-500"
                        }`}>
                          0{item.id}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      
                      {/* Interactive arrow styling like the reference image (up/down) */}
                      <div className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? "border-[#C2A578] bg-[#C2A578] text-[#0D0C0A]" 
                          : "border-white/10 group-hover:border-white/30"
                      }`}>
                        {isActive ? (
                          <ArrowUpRight size={14} className="stroke-[2.5]" />
                        ) : (
                          <ArrowDownRight size={14} className="stroke-[2.2]" />
                        )}
                      </div>
                    </div>

                    {/* Smooth interactive description box */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      isActive ? "max-h-[220px] opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}>
                      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-8 pr-4 font-sans font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </ScrollAnimate>
        </div>

      </div>
    </section>
  );
}
