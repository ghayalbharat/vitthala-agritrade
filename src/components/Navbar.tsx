import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenQuote: () => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'strengths', label: 'Why Us' },
  { id: 'values', label: 'Our Values' },
  { id: 'products', label: 'Products' },
  { id: 'quality', label: 'Quality' },
  { id: 'markets', label: 'Markets' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onOpenQuote, activeSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-2 px-3 md:px-6 lg:px-8' 
          : 'top-4 px-4 md:px-6 lg:px-8'
      }`}
      id="app-header"
    >
      <div 
        className={`w-full max-w-7xl mx-auto rounded-[1.5rem] px-5 py-2 md:py-3 transition-all duration-500 relative ${
          isScrolled 
            ? 'bg-white/80 border border-white/60 shadow-[0_12px_40px_-8px_rgba(26,119,33,0.08)] backdrop-blur-lg scale-[0.99]' 
            : 'bg-white/70 border border-white/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.03)] backdrop-blur-md'
        }`}
      >
        {/* Subtle interior glow for high-end glass feel */}
        <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

        <div className="relative flex items-center justify-between h-12 md:h-14">
          
          {/* Left: Mobile Toggle & Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl transition-all lg:hidden flex items-center justify-center text-neutral-700 hover:bg-neutral-100/80 active:scale-95"
              aria-label="Toggle navigation menu"
              id="navbar-mobile-toggle"
            >
              {isMobileMenuOpen ? <X size={20} className="stroke-[2.5]" /> : <Menu size={20} className="stroke-[2.5]" />}
            </button>

            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              id="brand-logo-link"
            >
              <Logo size="sm" variant="light" />
            </a>
          </div>

          {/* Center: Mixed-case Modern Links with sliding background pill */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 bg-neutral-900/[0.03] rounded-full border border-neutral-900/[0.02]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative text-xs xl:text-[13px] font-semibold tracking-tight transition-colors duration-300 px-3.5 py-1.5 rounded-full font-sans flex items-center justify-center select-none ${
                    isActive
                      ? 'text-[#1A7721] font-bold'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-[#1A7721]/10 rounded-full border border-[#1A7721]/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Direct Phone Support & solid premium CTA */}
          <div className="flex items-center gap-4 xl:gap-5 shrink-0">
            
            {/* Elegant Phone Support Info */}
            <div className="hidden sm:flex flex-col text-right justify-center">
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                Direct Support
              </span>
              <a 
                href="tel:+918308088906" 
                className="text-xs font-bold text-neutral-800 hover:text-[#1A7721] flex items-center justify-end gap-1.5 mt-0.5 transition-colors duration-200"
              >
                <PhoneCall size={12} className="text-[#1A7721] shrink-0" />
                <span className="font-sans font-semibold tracking-tight">+91 83080 88906</span>
              </a>
            </div>

            {/* Solid Pill Sourcing Request CTA with double chevron */}
            <button
              onClick={onOpenQuote}
              className="text-xs font-bold tracking-wide px-5 py-2.5 rounded-full bg-[#1A7721] hover:bg-[#15601a] text-white flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_4px_14px_rgba(26,119,33,0.25)] hover:shadow-[0_6px_20px_rgba(26,119,33,0.35)] hover:scale-[1.02] transition-all duration-300 transform active:scale-95 border border-[#1A7721]"
              id="nav-quote-btn"
            >
              <ShieldCheck size={14} className="stroke-[2.5] shrink-0" />
              <span>Get Quote</span>
              <span className="text-white/90 font-black shrink-0 ml-0.5">»</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Panel with matching frosted glass design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden bg-white/90 border border-white/60 overflow-hidden shadow-2xl rounded-2xl absolute top-full left-4 right-4 mt-2 backdrop-blur-xl"
          >
            {/* Interior top glow line for premium feel */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

            <div className="relative px-5 py-5 space-y-1.5 flex flex-col text-neutral-900">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition-all flex justify-between items-center active:scale-[0.99] ${
                    activeSection === item.id
                      ? 'bg-[#1A7721]/10 text-[#1A7721]'
                      : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <span className="font-semibold">{item.label}</span>
                  {activeSection === item.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1A7721]"></span>
                  )}
                </button>
              ))}
              
              <div className="pt-3.5 mt-2 border-t border-neutral-100/80 flex flex-col gap-3">
                <div className="flex justify-between items-center px-4 text-xs font-semibold text-neutral-500">
                  <span>Inquiries:</span>
                  <a href="mailto:Info@vitthalaagritrade.com" className="text-[#1A7721] font-bold hover:underline">
                    Info@vitthalaagritrade.com
                  </a>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full text-center bg-[#1A7721] hover:bg-[#15601a] text-white py-3.5 rounded-full text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
                >
                  <ShieldCheck size={14} />
                  <span>Request Custom Sourcing</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
