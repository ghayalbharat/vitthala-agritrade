import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

interface Slide {
  id: number;
  image: string;
  badge: string;
  titlePart1: string;
  titleHighlight: string;
  tagline: string;
  missionTitle: string;
  missionText: string;
  missionLink: string;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Scroll parallax logic with Framer Motion hooks
  const { scrollY } = useScroll();

  // Media query for prefers-reduced-motion to guarantee accessibility compliance
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Spring physics configuration for luxurious, lag-free parallax scrolling response
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 75,
    damping: 24,
    restDelta: 0.001
  });

  // Background slow parallax
  const bgTransformY = useTransform(smoothScrollY, [0, 1000], ['0%', '15%']);
  const yBg = prefersReducedMotion ? '0%' : bgTransformY;

  // Premium multi-layered scroll-linked animations
  // Left side: moves up at 25% of scroll speed, fades out and blurs slightly
  const textParallaxY = useTransform(smoothScrollY, [0, 800], ['0px', '-200px']);
  const textOpacity = useTransform(smoothScrollY, [0, 600], [1, 0]);
  const textBlur = useTransform(smoothScrollY, [0, 600], ['blur(0px)', 'blur(12px)']);

  // Right side: moves up at 15% of scroll speed, fades out slower and blurs slightly less
  const rightParallaxY = useTransform(smoothScrollY, [0, 800], ['0px', '-120px']);
  const rightOpacity = useTransform(smoothScrollY, [0, 600], [1, 0.05]);
  const rightBlur = useTransform(smoothScrollY, [0, 600], ['blur(0px)', 'blur(8px)']);

  const slides: Slide[] = [
    {
      id: 0,
      image: 'https://lh3.googleusercontent.com/d/1WGn1tYlRkkxxna6u6bFaOOyCalpOJST8',
      badge: 'Sustainable Farming Tech',
      titlePart1: 'Bringing Innovation',
      titleHighlight: 'to Your Farming Journey.',
      tagline: 'From precision agriculture to sustainable practices, we help you grow more efficiently and profitably. Join us in transforming the way you farm!',
      missionTitle: 'Our Mission',
      missionText: 'To empower farmers with innovative tools and technology that enhance productivity, sustainability, and efficiency, shaping the future of farming.',
      missionLink: 'Learn More'
    },
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/d/1dzjVQtOfm235p5VqCURk7W8O0-5LEUm5',
      badge: 'Rigid Sourcing Quality',
      titlePart1: 'Sourcing Premium',
      titleHighlight: 'Grade-A Commodities.',
      tagline: 'Rigorous laboratory testing for purity, moisture levels, and absolute grain alignment before bulk logistics dispatch and international export.',
      missionTitle: 'Laboratory Standards',
      missionText: 'Maintaining zero tolerance for grade mismatch, moisture excess, or impurities to ensure every container exceeds client standards.',
      missionLink: 'Verify Quality'
    },
    {
      id: 2,
      image: 'https://lh3.googleusercontent.com/d/1C22j8C_BzsHr7vs4PaTwpGlRpbKvgwSi',
      badge: 'Seamless Supply Chains',
      titlePart1: 'Connecting Fields to',
      titleHighlight: 'International Ports.',
      tagline: 'Safeguarding bulk deliveries across sea, rail, and road networks with meticulous origin-to-destination tracking and compliance management.',
      missionTitle: 'Secure Transport',
      missionText: 'Mitigating trade settlement risks and optimizing transit routes to establish reliable logistics corridors globally.',
      missionLink: 'View Network'
    }
  ];

  // Auto-play controls
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8500); // 8.5s transitions
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handlePrevSlide = () => {
    stopAutoPlay();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoPlay();
  };

  const handleNextSlide = () => {
    stopAutoPlay();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startAutoPlay();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
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
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-[96vh] lg:h-[100vh] w-full overflow-hidden bg-neutral-950 text-white select-none flex flex-col justify-between"
    >
      {/* 1. BACKGROUND SLIDESHOW WITH SMOOTH TRANSITIONS */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute -inset-y-12 inset-x-0 z-0 h-[115%] w-full"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].badge}
              className="w-full h-full object-cover object-center brightness-[0.48] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            {/* Ambient vignette gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/30 to-neutral-950/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-transparent to-neutral-950/30" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* 2. MAIN LAYOUT GRID SITUATED IN LOWER PORTION */}
      <div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-end pt-36 pb-16 lg:pb-24"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Left Column: Badge, Elegant Heading, Tagline, & Get Started arrow-capsule */}
          <motion.div 
            style={{ 
              y: prefersReducedMotion ? '0px' : textParallaxY, 
              opacity: prefersReducedMotion ? 1 : textOpacity,
              filter: prefersReducedMotion ? 'blur(0px)' : textBlur,
              willChange: 'transform, opacity, filter'
            }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Ambient subtle float container */}
            <motion.div
              animate={prefersReducedMotion ? {} : {
                y: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="space-y-6"
            >
              
              {/* Sliding animation for text container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  {/* Sustainable badge pill */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                    <span className="text-white select-none">{slides[currentSlide].badge}</span>
                  </motion.div>

                  {/* Massive elegant typography with pure white staggered words */}
                  <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-sans font-extrabold tracking-tight text-white leading-[1.08] max-w-2xl select-none">
                    <span className="block">
                      {slides[currentSlide].titlePart1.split(' ').map((word, i) => (
                        <motion.span
                          key={`part1-${i}`}
                          initial={{ opacity: 0, y: 15, filter: 'blur(8px)', rotateX: 10 }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', rotateX: 0 }}
                          transition={{ 
                            duration: 0.9, 
                            delay: i * 0.05, 
                            ease: [0.16, 1, 0.3, 1] 
                          }}
                          style={{ transformOrigin: 'top center', perspective: 1000 }}
                          className="inline-block mr-[0.25em]"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                    <span className="text-white block mt-1.5">
                      {slides[currentSlide].titleHighlight.split(' ').map((word, i) => (
                        <motion.span
                          key={`highlight-${i}`}
                          initial={{ opacity: 0, y: 15, filter: 'blur(8px)', rotateX: 10 }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', rotateX: 0 }}
                          transition={{ 
                            duration: 0.9, 
                            delay: (slides[currentSlide].titlePart1.split(' ').length + i) * 0.05, 
                            ease: [0.16, 1, 0.3, 1] 
                          }}
                          style={{ transformOrigin: 'top center', perspective: 1000 }}
                          className="inline-block mr-[0.25em]"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </h1>

                  {/* Tagline remains pure white for maximum legibility */}
                  <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm sm:text-base text-white font-sans leading-relaxed max-w-xl opacity-100 drop-shadow-sm"
                  >
                    {slides[currentSlide].tagline}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Custom Farmora capsule button with black arrow circle */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#9EFF2E] hover:bg-[#8CE427] text-neutral-950 font-bold px-6 py-2.5 rounded-full flex items-center gap-3.5 shadow-lg hover:shadow-xl transition-all group cursor-pointer border border-[#9EFF2E]"
                  id="hero-get-started-btn"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-widest pl-1">
                    Get Started
                  </span>
                  <span className="h-7 w-7 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection('products')}
                  className="text-xs font-bold tracking-widest uppercase text-white hover:text-white/80 transition-colors py-3 px-1"
                >
                  Explore Sourcing
                </button>
              </div>

            </motion.div>
          </motion.div>

          {/* Right Column: Slide navigation triggers & Translucent Mission Card */}
          <motion.div 
            style={{ 
              y: prefersReducedMotion ? '0px' : rightParallaxY, 
              opacity: prefersReducedMotion ? 1 : rightOpacity,
              filter: prefersReducedMotion ? 'blur(0px)' : rightBlur,
              willChange: 'transform, opacity, filter'
            }}
            className="lg:col-span-5 flex flex-col items-stretch lg:items-end w-full max-w-md lg:ml-auto"
          >
            
            {/* Slide Arrows sitting elegantly right above the glassmorphic card */}
            <div className="flex items-center gap-3 mb-4 self-start lg:self-end pr-2">
              <button
                onClick={handlePrevSlide}
                className="h-10 w-10 rounded-full border border-white/10 bg-black/10 text-white hover:bg-[#9EFF2E] hover:text-neutral-950 hover:border-[#9EFF2E] flex items-center justify-center transition-all cursor-pointer shadow-sm"
                title="Previous Slide"
              >
                <ChevronLeft size={16} className="stroke-[2.5]" />
              </button>
              <button
                onClick={handleNextSlide}
                className="h-10 w-10 rounded-full border border-white/10 bg-black/10 text-white hover:bg-[#9EFF2E] hover:text-neutral-950 hover:border-[#9EFF2E] flex items-center justify-center transition-all cursor-pointer shadow-sm"
                title="Next Slide"
              >
                <ChevronRight size={16} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Translucent Glassmorphic Mission Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.45 }}
                className="w-full bg-[#0A0D08]/30 backdrop-blur-xl border border-white/10 rounded-[1.8rem] p-7 shadow-2xl relative overflow-hidden text-left"
              >
                <div className="space-y-4">
                  {/* Card Header with mini light green bullet point */}
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-extrabold text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9EFF2E]"></span>
                    <span>{slides[currentSlide].missionTitle}</span>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans font-medium">
                    {slides[currentSlide].missionText}
                  </p>

                  {/* Card Footer Action Link with sliding underline effect */}
                  <button
                    onClick={onOpenQuote}
                    className="group inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#9EFF2E] transition-colors mt-2"
                  >
                    <span>{slides[currentSlide].missionLink}</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
