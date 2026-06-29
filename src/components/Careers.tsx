import React from 'react';
import { Sparkles, Mail, Send } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function Careers() {
  return (
    <section id="careers" className="py-24 bg-[#FAF9F5] text-neutral-900 border-b border-neutral-200/50 overflow-hidden" style={{ contentVisibility: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION DESIGN - COPYING THE DESIGN IN THE USER'S PROVIDED IMAGE */}
        <ScrollAnimate>
          <div className="bg-white rounded-[2.5rem] border border-neutral-200/50 p-8 sm:p-12 md:p-16 shadow-sm flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          
          {/* LEFT SIDE: Cutout Style Team Member Image Overlay with Accent Graphic */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2rem] bg-gradient-to-tr from-[#FDF4EE] to-[#FAF5EF] overflow-hidden shadow-inner flex items-end justify-center group">
              
              {/* Abstract soft background curves replicating the pink/orange shapes in the mockup */}
              <div className="absolute top-10 left-10 w-44 h-44 rounded-full bg-[#E87E53]/10 blur-xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[#1A7721]/5 blur-2xl pointer-events-none" />
              
              {/* Custom Branded square logo badge on the upper left, matching the mockup */}
              <div className="absolute top-8 left-8 h-12 w-12 rounded-2xl bg-[#E87E53] flex items-center justify-center text-white shadow-lg shadow-[#E87E53]/30 z-10 transition-transform duration-300 group-hover:scale-110">
                <Sparkles size={22} className="text-white animate-pulse" />
              </div>

              {/* Quality professional smiling cutout-style team member */}
              <img
                src="https://lh3.googleusercontent.com/d/1gMrhznqPuUnUkca9xAPDfqrHJzSk0zNZ"
                alt="Vitthala AgriTrade Team Member"
                className="w-full h-full object-cover rounded-[2rem] z-0 transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Text Layout with Contact Action */}
          <div className="w-full md:w-1/2 text-left space-y-6 relative">
            
            {/* Pill-shaped tagline outline matching mockup */}
            <div className="inline-block">
              <span className="text-xs font-semibold px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-[#E87E53] tracking-wide shadow-sm font-sans">
                Join Our Team
              </span>
            </div>

            {/* Custom high-impact heading copying image typography */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-neutral-900 leading-[1.1]">
              AgriFlow is not an <br />
              <span className="text-[#E87E53] relative">
                Ordinary Choice
              </span>
            </h2>

            {/* Balanced descriptions of culture, benefits & internships */}
            <ul className="space-y-3.5 font-sans text-xs sm:text-sm text-neutral-600 max-w-md">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E87E53]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-semibold text-neutral-700">Deep sourcing networks in major producing regions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E87E53]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-semibold text-neutral-700">On-ground presence & farmer relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E87E53]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-semibold text-neutral-700">Transparent pricing & fair trade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E87E53]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-semibold text-neutral-700">End-to-end logistics & warehousing support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E87E53]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-semibold text-neutral-700">Strong emphasis on quality, testing, certifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E87E53]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-semibold text-neutral-700">Flexibility & client-oriented service</span>
              </li>
            </ul>

            {/* Direct Send Resume Action Section */}
            <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a 
                href="mailto:Info@vitthalaagritrade.com"
                className="bg-[#E87E53] hover:bg-[#d66a3d] text-white font-sans text-sm font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:shadow-[#E87E53]/10 transition-all duration-300 transform active:scale-95 inline-flex items-center gap-2 cursor-pointer"
              >
                <Mail size={16} />
                <span>Submit Your Resume</span>
              </a>
              <div className="text-xs text-neutral-400 font-medium">
                Send your CV directly to <br />
                <span className="text-neutral-800 font-bold">Info@vitthalaagritrade.com</span>
              </div>
            </div>

          </div>
        </div>
        </ScrollAnimate>

      </div>
    </section>
  );
}
