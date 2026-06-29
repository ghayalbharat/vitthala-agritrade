import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Milestone, Handshake, Truck, Award, Headphones } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

interface Differentiator {
  id: number;
  title: string;
  description: string;
  category: string;
  tagline: string;
  image: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export default function WhyChooseUs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const differentiators: Differentiator[] = [
    {
      id: 1,
      title: "Deep Sourcing Networks",
      description: "We operate deep within major agricultural belts, securing premium commodities directly at the source to ensure absolute supply reliability and top-grade purity.",
      category: "Global Footprint",
      tagline: "Direct Origin",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600",
      icon: ShieldCheck
    },
    {
      id: 2,
      title: "Direct Farmer Integration",
      description: "Our local on-ground teams maintain strong, transparent relationships with growers, supporting agricultural sustainability and securing consistent supply.",
      category: "Sustainable Alliances",
      tagline: "Ground Roots",
      image: "https://images.unsplash.com/photo-1592997572594-34be01bc36c7?auto=format&fit=crop&q=80&w=600",
      icon: Milestone
    },
    {
      id: 3,
      title: "Transparent Fair Trade",
      description: "We eliminate unnecessary intermediaries. By leveraging direct-market digital pricing, we pass maximum value to growers and offer premium rates to buyers.",
      category: "Ethical Commerce",
      tagline: "Zero Intermediaries",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
      icon: Handshake
    },
    {
      id: 4,
      title: "Seamless Cold-Chain & Logistics",
      description: "Equipped with state-of-the-art warehouses and integrated customs networks, we manage sea-freight and dry-bulk cargo door-to-door with absolute safety.",
      category: "Supply Chain",
      tagline: "End-to-End Warehousing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
      icon: Truck
    },
    {
      id: 5,
      title: "Rigorous Quality Assurance",
      description: "Every shipment undergoes strict laboratory grading, multi-point moisture analysis, and global phytosanitary inspections to meet international food safety standards.",
      category: "Zero-Defect Quality",
      tagline: "Certified Standards",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      icon: Award
    },
    {
      id: 6,
      title: "Tailored Client Solutions",
      description: "From bespoke packing options to flexible trade financing and delivery schedules, we adapt our operations to support your specific factory throughput.",
      category: "Client Priority",
      tagline: "Dynamic Adjustability",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      icon: Headphones
    }
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        const cardWidth = window.innerWidth < 640 ? 324 : 524; // dynamically account for item width + gap

        if (scrollLeft >= maxScrollLeft - 20) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          scrollContainerRef.current.scrollTo({
            left: scrollLeft + cardWidth,
            behavior: 'smooth'
          });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
      const cardWidth = window.innerWidth < 640 ? 324 : 524;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (direction === 'left') {
        if (scrollLeft <= 10) {
          scrollContainerRef.current.scrollTo({
            left: maxScrollLeft,
            behavior: 'smooth'
          });
        } else {
          scrollContainerRef.current.scrollTo({
            left: scrollLeft - cardWidth,
            behavior: 'smooth'
          });
        }
      } else {
        if (scrollLeft >= maxScrollLeft - 10) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          scrollContainerRef.current.scrollTo({
            left: scrollLeft + cardWidth,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <section 
      id="strengths" 
      className="py-24 bg-[#FAF9F5] border-t border-neutral-200/40 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container styled EXACTLY like the user's reference image */}
        <ScrollAnimate>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#1A7721] uppercase block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-900 tracking-tight leading-tight">
                Our Strengths & Differentiators
              </h2>
            </div>

            {/* Slider Navigation buttons mirroring the image mockup exactly */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                onClick={() => handleScroll('left')}
                className="h-12 px-6 rounded-full border border-neutral-300/60 bg-white hover:bg-neutral-50 text-neutral-700 font-sans text-sm font-semibold inline-flex items-center gap-2 transition-all duration-200 hover:border-neutral-400"
                aria-label="Previous strength"
              >
                <ArrowLeft size={16} className="text-neutral-500" />
                <span>Previous</span>
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="h-12 px-6 rounded-full border border-[#1A7721] bg-white hover:bg-[#1A7721]/5 text-[#1A7721] font-sans text-sm font-semibold inline-flex items-center gap-2 transition-all duration-200"
                aria-label="Next strength"
              >
                <span>Next</span>
                <ArrowRight size={16} className="text-[#1A7721]" />
              </button>
            </div>
          </div>
        </ScrollAnimate>

        {/* Horizontal Slider/Scroll area */}
        <ScrollAnimate delay={0.15}>
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {differentiators.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="w-[300px] sm:w-[500px] shrink-0 bg-white rounded-[2rem] overflow-hidden border border-neutral-200/40 shadow-sm flex flex-col sm:flex-row snap-start hover:shadow-md transition-all duration-300 group"
                >
                  {/* Text section / Left half of card matching mockup */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      <div className="h-10 w-10 rounded-xl bg-neutral-50 flex items-center justify-center text-[#1A7721]">
                        <IconComponent size={20} className="stroke-[2.2]" />
                      </div>
                      <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-sans font-medium">
                        "{item.description}"
                      </p>
                    </div>

                    <div className="pt-6 sm:pt-10 border-t border-neutral-100 mt-4">
                      <h4 className="font-display font-extrabold text-sm sm:text-base text-neutral-900 tracking-tight leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-neutral-400 mt-1 font-bold">
                        {item.category} • {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Styled Image section on the right, mimicking the rounded-corners inside the card from the mockup */}
                  <div className="w-full sm:w-[220px] aspect-square sm:aspect-auto sm:h-full relative overflow-hidden bg-neutral-100 flex-shrink-0 p-4 sm:p-5 sm:pl-0">
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative shadow-inner">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Soft gradient overlay matching reference aesthetics */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 via-transparent to-transparent pointer-events-none" />
                    </div>
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
