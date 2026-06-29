import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Star, Info, CheckCircle, ArrowRight, Table, Play, Pause } from 'lucide-react';
import { CommodityProduct } from '../types';
import ScrollAnimate from './ScrollAnimate';

interface ProductsProps {
  onOpenQuote: (productName?: string) => void;
}

export default function Products({ onOpenQuote }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('grains');
  const [selectedSpecProduct, setSelectedSpecProduct] = useState<string | null>(null);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState<boolean>(true);

  const categories = [
    { id: 'grains', label: 'Cereals & Grains', items: 'Maize • Wheat', index: '01' },
    { id: 'pulses', label: 'Premium Pulses', items: 'Bengal Gram • Mexican Dollar • Green Gram • Red Gram', index: '02' },
    { id: 'oilseeds', label: 'Oilseeds Portfolio', items: 'Soybean', index: '03' },
    { id: 'spices', label: 'Natural Spices', items: 'Turmeric • Ginger', index: '04' },
  ];

  useEffect(() => {
    if (!isAutoPlayActive) return;

    const interval = setInterval(() => {
      setSelectedCategory((prev) => {
        const currentIndex = categories.findIndex((c) => c.id === prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].id;
      });
      setSelectedSpecProduct(null);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlayActive]);

  const products: CommodityProduct[] = [
    // Grains
    {
      id: 'maize',
      name: 'Maize (Corn)',
      category: 'grains',
      description: 'Yellow dent maize sourced from prime producing belts, ideal for animal feed manufacturing, starch processing, and food milling.',
      specifications: {
        moisture: '14.0% Max',
        purity: '98.5% Min',
        foreignMatter: '1.5% Max',
        damagedGrains: '2.5% Max',
        admixture: '2.0% Max'
      },
      features: ['Machine cleaned quality', 'Aflatoxin below 20 PPB guaranteed', 'Bulk cargo or container bulk shipping']
    },
    {
      id: 'wheat',
      name: 'Premium Wheat',
      category: 'grains',
      description: 'High gluten, premium milling wheat sourced from carefully monitored Indian agricultural regions. Ideal for bakers and food mills.',
      specifications: {
        moisture: '12.0% Max',
        purity: '99.0% Min',
        foreignMatter: '1.0% Max',
        damagedGrains: '1.5% Max',
        admixture: '1.0% Max'
      },
      features: ['Min 11.5% protein content', 'High wet gluten index', 'Phytosanitary cleared at origin']
    },
    // Pulses
    {
      id: 'bengal_gram',
      name: 'Bengal Gram (Chana)',
      category: 'pulses',
      description: 'Desi chana or Bengal gram sourced directly from certified farmer aggregates, offering excellent purity and moisture control.',
      specifications: {
        moisture: '11.0% Max',
        purity: '99.0% Min',
        foreignMatter: '0.5% Max',
        damagedGrains: '1.0% Max',
        admixture: '0.5% Max'
      },
      features: ['Machine cleaned and sortex quality', 'Even sizing (7mm+ avg)', 'Free from weevil infestations']
    },
    {
      id: 'mexican_dollar_chana',
      name: 'Mexican Dollar Chana',
      category: 'pulses',
      description: 'Kabuli chickpea of the premium Mexican Dollar standard, characterized by exceptionally bold cream-colored seeds and soft skin textures.',
      specifications: {
        moisture: '10.5% Max',
        purity: '99.5% Min',
        foreignMatter: '0.25% Max',
        damagedGrains: '0.5% Max',
        admixture: '0.25% Max'
      },
      features: ['Extra-large bold size (12mm / 42-44 count)', 'Highest level Sortex grading', 'Strict mechanical calibration']
    },
    {
      id: 'green_gram',
      name: 'Green Gram (Moong)',
      category: 'pulses',
      description: 'Organic and conventional whole green moong beans, aggregated from water-efficient, sustainable crop clusters.',
      specifications: {
        moisture: '11.5% Max',
        purity: '99.0% Min',
        foreignMatter: '0.75% Max',
        damagedGrains: '1.0% Max',
        admixture: '0.5% Max'
      },
      features: ['High germination percentage', 'Lustrous deep green seed coats', 'Even cooking characteristics']
    },
    {
      id: 'red_gram',
      name: 'Red Gram (Toor / Arhar)',
      category: 'pulses',
      description: 'Premium whole tur/arhar pulses, carefully selected for rich nutritional composition, high protein metrics, and bulk storage longevity.',
      specifications: {
        moisture: '12.0% Max',
        purity: '99.0% Min',
        foreignMatter: '0.5% Max',
        damagedGrains: '1.0% Max',
        admixture: '0.5% Max'
      },
      features: ['Non-GMO certified aggregate', 'Free from foreign pesticide residues', 'Optimal hulling recovery ratio']
    },
    // Oilseeds
    {
      id: 'soybean',
      name: 'Premium Soybean',
      category: 'oilseeds',
      description: 'High oil-content yellow soybeans ideal for crushers, animal feed cake processing (soy meal), and organic lecithin production.',
      specifications: {
        moisture: '12.0% Max',
        purity: '98.5% Min',
        foreignMatter: '1.5% Max',
        damagedGrains: '2.0% Max',
        admixture: '1.5% Max'
      },
      features: ['Minimum 18.5% oil extraction yield', 'High protein (38.5% avg)', 'Excellent bulk density characteristics']
    },
    // Spices
    {
      id: 'turmeric',
      name: 'Curcumin Turmeric',
      category: 'spices',
      description: 'High-curcumin finger turmeric and double polished bulbs sourced from premium estates, offering intense color and rich bioactive counts.',
      specifications: {
        moisture: '10.0% Max',
        purity: '99.0% Min',
        foreignMatter: '0.5% Max',
        damagedGrains: '1.0% Max',
        admixture: '0.5% Max'
      },
      features: ['Curcumin concentration guaranteed > 3.5%', 'Double polished bulbs & fingers', 'Lead & heavy metals completely cleared']
    },
    {
      id: 'ginger',
      name: 'Fresh & Dried Ginger',
      category: 'spices',
      description: 'Lustrous, plump fresh ginger rhizomes and dried split ginger, thoroughly washed, cleaned, and graded for high oleoresin density.',
      specifications: {
        moisture: '12.0% Max',
        purity: '98.0% Min',
        foreignMatter: '1.0% Max',
        damagedGrains: '1.5% Max',
        admixture: '1.0% Max'
      },
      features: ['Extremely low fibrous content', 'Strong aromatic pungent oil density', 'Zero sulfur or chemical whitening']
    }
  ];

  useEffect(() => {
    const handleSearch = (e: Event) => {
      const customEvent = e as CustomEvent<{ query: string }>;
      const query = customEvent.detail?.query?.toLowerCase();
      if (!query) return;

      const foundProduct = products.find(p => 
        p.name.toLowerCase().includes(query) || 
        p.id.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );

      if (foundProduct) {
        setSelectedCategory(foundProduct.category);
        setSelectedSpecProduct(foundProduct.id);
        
        const el = document.getElementById('products');
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('search-commodity', handleSearch);
    return () => window.removeEventListener('search-commodity', handleSearch);
  }, [products]);

  // Map category to generated image paths
  const categoryImages: Record<string, string> = {
    grains: '/src/assets/images/grains_wheat_maize_1782543916268.jpg',
    pulses: '/src/assets/images/pulses_chana_1782543931892.jpg',
    oilseeds: '/src/assets/images/oilseeds_soybean_1782543942806.jpg',
    spices: '/src/assets/images/spices_turmeric_ginger_1782543954218.jpg',
  };

  const filteredProducts = products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 bg-[#78896A] text-white border-b border-emerald-900/10 select-none overflow-hidden" style={{ contentVisibility: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
        
        {/* UPPER HEADER WITH Pill Badge, White Heading & Right-Aligned Read More Yellow Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase bg-white/10 border border-white/25 px-4 py-1.5 rounded-full shadow-sm">
                FARM SOLUTIONS
              </span>
              <button
                onClick={() => setIsAutoPlayActive(!isAutoPlayActive)}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 active:scale-95 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-white/95 border border-white/10 transition-all cursor-pointer"
                title={isAutoPlayActive ? "Pause auto-rotation" : "Resume auto-rotation"}
                id="autoplay-toggle-btn"
              >
                {isAutoPlayActive ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FCF5C3] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FCF5C3]"></span>
                    </span>
                    <span>AUTO-SCROLL: ACTIVE</span>
                    <Pause size={10} className="stroke-[2.5]" />
                  </>
                ) : (
                  <>
                    <span className="h-2 w-2 rounded-full bg-white/40"></span>
                    <span>AUTO-SCROLL: PAUSED</span>
                    <Play size={10} className="stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-sans font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl">
              What Our Agricultural Company Offers
            </h2>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="bg-[#FCF5C3] hover:bg-[#F8EEAC] active:scale-95 text-neutral-900 text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-1.5 cursor-pointer self-start md:self-end border border-[#FCF5C3]"
          >
            <span>Read More</span>
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 animate-pulse"></span>
          </button>
        </div>

        {/* FOUR CROP CARDS GRID MATCHING THE REFERENCE IMAGE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const imgUrl = categoryImages[cat.id] || '/src/assets/images/grains_wheat_maize_1782543916268.jpg';

            return (
              <div
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedSpecProduct(null);
                  setIsAutoPlayActive(false); // Stop autoplay when user manually chooses a card
                }}
                className={`relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 border ${
                  isSelected 
                    ? 'border-[#FCF5C3] scale-[1.02] shadow-2xl ring-2 ring-[#FCF5C3]/40' 
                    : 'border-white/10 hover:border-white/30 shadow-lg'
                }`}
              >
                {/* Background Image with elegant overlay */}
                <img
                  src={imgUrl}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />

                {/* Counter / Index Number */}
                <div className="absolute top-5 left-5 text-white/50 text-xs font-mono font-bold tracking-wider">
                  {cat.index}
                </div>

                {/* Bottom details block */}
                <div className="absolute bottom-5 left-5 right-5 text-left space-y-1.5">
                  <h4 className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">
                    {cat.label}
                  </h4>
                  <p className="text-[10px] text-white/70 line-clamp-1 font-sans">
                    {cat.items}
                  </p>
                </div>

                {/* Lower-left rounded button matching reference design */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 h-8 w-8 rounded-full bg-[#FCF5C3] text-neutral-950 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight size={14} className="stroke-[2.5]" />
                </div>

                {/* Visual loading progress bar for active category when autoplay is active */}
                {isSelected && isAutoPlayActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
                    <motion.div
                      key={selectedCategory}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                      className="h-full bg-[#FCF5C3]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </ScrollAnimate>

        {/* FIVE MINIMALIST AGRICULTURAL LOGOS IN WHITE OUTLINE AT THE BOTTOM */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap justify-center sm:justify-between items-center gap-6 max-w-5xl mx-auto text-white/40 text-xs uppercase tracking-widest font-bold">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20"></span>
            <span>SmartSeed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20"></span>
            <span>HARVEST</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20"></span>
            <span>simpleleaf</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20"></span>
            <span>THE ORGANIC FARM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20"></span>
            <span>farmburst</span>
          </div>
        </div>

      </div>
    </section>
  );
}
