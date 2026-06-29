import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, ExternalLink, ShieldCheck, Check, Send,
  Twitter, Facebook, Youtube, Linkedin, Instagram, ArrowRight
} from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-neutral-300 font-sans" id="footer-section">
      
      {/* 1. NEWSLETTER TOP BANNER - WITH BLENDED BACKGROUND IMAGE */}
      <div className="relative bg-[#5d5038] overflow-hidden py-10 md:py-14 border-b border-white/5">
        
        {/* Background image with full grayscale / overlay blend to replicate the reference mockup */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-35 filter grayscale scale-105 pointer-events-none transition-all duration-1000"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200')" 
          }}
        />
        
        {/* Modern dark gradient vignette for better legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Headline text */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-white text-base sm:text-lg md:text-xl font-display font-bold tracking-widest uppercase leading-snug">
              SUBSCRIBE TO OUR QUARTERLY NEWSLETTER
            </h4>
            <p className="text-amber-100/70 text-xs tracking-wider">
              Get direct market updates, harvest calendars, and Jalna export pricing insights.
            </p>
          </div>

          {/* Pill-shaped interactive subscription input matching mockup */}
          <div className="w-full max-w-md">
            {newsletterSuccess ? (
              <div className="bg-white/10 backdrop-blur-md rounded-full py-3.5 px-6 border border-white/20 text-white text-xs font-semibold text-center flex items-center justify-center gap-2 animate-bounce">
                <Check size={14} className="text-emerald-300 stroke-[3]" />
                <span>Subscription Confirmed! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="relative flex items-center bg-white rounded-full p-1.5 shadow-md">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-6 pr-28 py-2.5 text-xs text-neutral-900 bg-transparent placeholder-neutral-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#4AA9E9] hover:bg-[#3d9cdb] text-white text-[10px] font-bold uppercase tracking-widest px-6 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                >
                  {isSubmitting ? '...' : 'SUBSCRIBE'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* 2. MAIN FOOTER AREA - COLOR BLENDED WITH A DEEP RUSTIC BRAND TONE */}
      <div className="bg-[#1C1813] py-16 md:py-20 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* COLUMN 1: Brand & Logistics Overview */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="md" />
            
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-sans pt-1">
              Plot No.B-5 MIDC, Jaffrabad, Jalna - 431206,<br />
              Maharashtra, India.
            </p>

            <a 
              href="mailto:Info@vitthalaagritrade.com" 
              className="text-neutral-300 hover:text-white transition-colors text-xs font-mono font-medium block"
            >
              admin@vitthalaagritrade.com
            </a>


          </div>

          {/* COLUMN 2: VITTHALA SITEMAP */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-[11px] uppercase font-bold text-white tracking-widest border-b border-white/[0.06] pb-2">
              VITTHALA
            </h5>
            <ul className="space-y-2.5 text-xs font-sans text-neutral-400">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors text-left cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('careers')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('values')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Values
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-[11px] uppercase font-bold text-white tracking-widest border-b border-white/[0.06] pb-2">
              SERVICES
            </h5>
            <ul className="space-y-2.5 text-xs font-sans text-neutral-400">
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Direct Sourcing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('quality')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Quality Assay
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('markets')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Mandi Logistics
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left cursor-pointer text-[#E87E53] font-medium">
                  Custom Quote
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: HIGHLIGHTS */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-[11px] uppercase font-bold text-white tracking-widest border-b border-white/[0.06] pb-2">
              HIGHLIGHTS
            </h5>
            <ul className="space-y-2.5 text-xs font-sans text-neutral-400">
              <li>
                <span className="text-neutral-500">Global Networks</span>
              </li>
              <li>
                <span className="text-neutral-500">Mandi Pools</span>
              </li>
              <li>
                <span className="text-neutral-500">Agritech Training</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: FOLLOW SOCIAL MEDIA LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-[11px] uppercase font-bold text-white tracking-widest border-b border-white/[0.06] pb-2">
              FOLLOW
            </h5>
            <div className="flex items-center gap-4 text-neutral-400">
              <a 
                href="https://vitthalaagritrade.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors p-1"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a 
                href="https://vitthalaagritrade.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors p-1"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a 
                href="https://vitthalaagritrade.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors p-1"
                aria-label="Youtube"
              >
                <Youtube size={15} />
              </a>
              <a 
                href="https://vitthalaagritrade.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors p-1"
                aria-label="Linkedin"
              >
                <Linkedin size={15} />
              </a>
              <a 
                href="https://vitthalaagritrade.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors p-1"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. UNDER-FOOTER BOTTOM STRIP */}
      <div className="bg-[#14110E] py-8 text-neutral-500 text-[10px] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-widest text-neutral-400">
            <a href="#contact" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
            <a href="#contact" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#contact" className="hover:text-white transition-colors">SITEMAP</a>
          </div>

          {/* Right copyright exactly matching mockup layout */}
          <div className="text-center md:text-right text-neutral-500">
            <span>Copyright © {currentYear} Vitthala Agritrade. Website by Edge of the Web.</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
