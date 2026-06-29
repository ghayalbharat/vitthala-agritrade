import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Eye, Compass, Heart, Users, Award, ChevronDown, CheckCircle2, DollarSign, Leaf, ArrowRight, Sprout, Sparkles, Facebook, Twitter, Linkedin } from 'lucide-react';
import { TeamMember } from '../types';
import ScrollAnimate from './ScrollAnimate';

export default function AboutUs() {
  const [expandedLeader, setExpandedLeader] = useState<string | null>(null);

  const values = [
    { name: 'Integrity', desc: 'Operating with absolute honesty and compliance in all global contracts.', icon: Shield, color: 'bg-emerald-50 text-emerald-600' },
    { name: 'Quality', desc: 'Rigorous physical and chemical testing standards at every port.', icon: Award, color: 'bg-amber-50 text-amber-600' },
    { name: 'Customer Focus', desc: 'Custom cargo packaging and responsive shipping logistics schedules.', icon: Users, color: 'bg-blue-55 text-blue-600' },
    { name: 'Sustainability', desc: 'Zero waste water strategies and supporting non-chemical agricultural practices.', icon: Leaf, color: 'bg-green-50 text-green-600' },
  ];

  const leadership: TeamMember[] = [
    {
      id: 'chandrabhaga',
      name: 'Chandrabhaga Gawli',
      role: 'Founder & Director – Vitthala AgriTrade',
      initials: 'CG',
      image: '/src/assets/images/chandrabhaga_gawli_1782554125294.jpg',
      bio: 'Chandrabhaga Gawli, a BA graduate from BAMU, Chhatrapati Sambhajinagar, is a passionate entrepreneur with hands-on experience in agriculture and commodity trading. Driven by a commitment to rural empowerment and fair trade, she founded Vitthala AgriTrade to build transparent, quality-focused supply chains connecting farmers, processors, and global buyers.'
    },
    {
      id: 'chaitanya',
      name: 'Chaitanya Chavhan',
      role: 'Co-Founder & Operations Head – Vitthala AgriTrade',
      initials: 'CC',
      image: '/src/assets/images/chaitanya_chavhan_1782554142792.jpg',
      bio: 'Chaitanya Chavhan brings operational expertise and strategic insight to Vitthala AgriTrade. With a strong background in agri-commodity logistics and procurement, he plays a key role in ensuring smooth procurement, quality control, and timely delivery. His hands-on approach and commitment to excellence help drive the company’s growth and client satisfaction.'
    },
    {
      id: 'dnyaneswar',
      name: 'Dnyaneswar Bankar',
      role: 'Head of Finance & Marketing – Vitthala AgriTrade',
      initials: 'DB',
      image: '/src/assets/images/dnyaneswar_bankar_1782554158009.jpg',
      bio: 'Dnyaneswar Bankar holds a BBA and MBA in Finance and brings 5 years of corporate experience. He brings strong expertise in financial management and market strategy to Vitthala AgriTrade. He is responsible for overseeing budgeting, financial planning and analysis, and ensuring financial compliance. On the marketing side, he leads brand positioning, customer outreach, and growth initiatives. His dual focus helps drive sustainable business performance and strengthen the company’s footprint in the agri‑commodity sector.'
    }
  ];

  const strengths = [
    'Deep sourcing networks in major producing regions',
    'On-ground presence & farmer relationships',
    'Transparent pricing & fair trade',
    'End-to-end logistics & warehousing support',
    'Strong emphasis on quality, testing, certifications',
    'Flexibility & client-oriented service',
  ];

  return (
    <section id="about" className="py-24 bg-[#FCFCF9] text-neutral-900 border-b border-neutral-100" style={{ contentVisibility: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HIGH FIDELITY OVERLAPPING PHOTO & STORY LAYOUT (MIRRORING USER REFERENCE UI DESIGN) */}
        <ScrollAnimate>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Overlapping Photos & Floating badge */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Decorative soft green/beige background circle */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-[#EAF2DC]/60 absolute -left-4 sm:-left-12 top-6 pointer-events-none z-0" />
            
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] mr-12 sm:mr-16">
              {/* Main vertical tractor photo matching the reference image */}
              <img
                src="https://lh3.googleusercontent.com/d/1FbadCqrMuqUAeDo7MFGhmV_AU4B6JOvh"
                alt="Leader in Agriculture Sourcing"
                className="w-full h-[24rem] sm:h-[30rem] lg:h-[33rem] rounded-2xl sm:rounded-[2.2rem] object-cover shadow-xl border border-neutral-200/40 relative z-10"
                referrerPolicy="no-referrer"
              />

              {/* Overlapping circular green badge on the left edge */}
              <div 
                className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#9EFF2E] text-neutral-950 flex items-center justify-center shadow-lg border-4 border-[#FCFCF9] z-25 hover:scale-110 transition-transform duration-300"
                title="Sourced with Pride"
              >
                <Leaf size={22} className="stroke-[2.5]" />
              </div>

              {/* Overlapping second portrait farmer photo in bottom-right corner */}
              <div className="absolute -bottom-6 -right-12 sm:-bottom-8 sm:-right-16 w-44 h-32 sm:w-56 sm:h-40 rounded-2xl sm:rounded-[1.8rem] object-cover shadow-2xl border-4 sm:border-8 border-[#FCFCF9] z-20 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/src/assets/images/indian_farmer_harvest_1782552689115.jpg"
                  alt="Our Proud Indian Farmers"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text and detailed feature rows */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#1A7721] uppercase bg-emerald-50 border border-emerald-100/50 px-3 py-1 rounded-full w-fit">
                ABOUT AGRICULTURE
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
                We're Leader in Agriculture Market
              </h2>

              {/* Decorative sprout design markers under heading matching reference image */}
              <div className="flex gap-1 py-1">
                <Sprout size={15} className="text-[#9EFF2E] fill-[#9EFF2E]" />
                <Sprout size={15} className="text-[#9EFF2E] fill-[#9EFF2E]" />
                <Sprout size={15} className="text-[#9EFF2E] fill-[#9EFF2E]" />
              </div>
            </div>

            {/* Exactly the requested user content about story & history */}
            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
              Agriculture has been the backbone of India. Founded in May-2025, Vitthala AgriTrade started with the vision to bridge the gap between farmers and global markets. Over time, we expanded operations in multiple commodities, enhanced infrastructure, and built relationships across supply chains.
            </p>

            {/* Two horizontal sub-features matching reference layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-emerald-50 text-[#1A7721] rounded-2xl border border-emerald-100/50 shrink-0">
                  <Leaf size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 mb-0.5">Growing Crops & Grains</h4>
                  <p className="text-neutral-500 text-xs leading-normal font-sans">
                    Sourcing directly from fields, ensuring fair remuneration for premium local yields.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl border border-amber-100/50 shrink-0">
                  <Award size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 mb-0.5">Grade-A Lab Quality</h4>
                  <p className="text-neutral-500 text-xs leading-normal font-sans">
                    Rigorous analysis for purity, ideal moisture level, and grain size alignment.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle supportive statement */}
            <p className="text-xs text-neutral-400 italic border-l-2 border-[#1A7721] pl-4 py-1 font-sans">
              Currently handling a robust network across sea, rail, and road networks, safeguarding bulk deliveries globally.
            </p>

            {/* Discover More / Get Started Lime Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('products');
                  if (el) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = el.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="bg-[#9EFF2E] hover:bg-[#8CE427] active:scale-95 text-neutral-950 text-xs font-bold tracking-wider uppercase px-8 py-3.5 rounded-full shadow-md transition-all inline-flex items-center gap-2 cursor-pointer border border-[#9EFF2E]"
                id="discover-more-story-btn"
              >
                <span>Discover More</span>
                <ArrowRight size={14} className="stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>
        </ScrollAnimate>

        {/* MISSION & VISION BENTO */}
        <ScrollAnimate delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Mission */}
          <div className="bg-white border border-neutral-200/60 p-8 rounded-3xl shadow-sm flex items-start gap-5">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Compass size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display text-neutral-900 mb-2">Our Mission</h4>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                “To deliver high-quality commodities with reliability, transparency, and sustainability.”
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white border border-neutral-200/60 p-8 rounded-3xl shadow-sm flex items-start gap-5">
            <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
              <Eye size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display text-neutral-900 mb-2">Our Vision</h4>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                “To be a leading agri-commodity trader globally, trusted by producers and buyers alike.”
              </p>
            </div>
          </div>
        </div>
        </ScrollAnimate>

        {/* VALUES SECTION */}
        <ScrollAnimate delay={0.15}>
          <div className="mb-24">
          <h4 className="text-xs uppercase tracking-widest font-black text-neutral-400 text-center mb-8">
            Our Core Values
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white border border-neutral-200/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className={`h-10 w-10 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                    <Icon size={20} />
                  </div>
                  <h5 className="font-bold text-neutral-900 text-base mb-1 font-display">{v.name}</h5>
                  <p className="text-neutral-500 text-xs leading-normal font-sans">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        </ScrollAnimate>

        {/* LEADERSHIP SECTION (MIRRORING USER REFERENCE SQUARE SPLIT-HORIZONTAL UI DESIGN) */}
        <ScrollAnimate delay={0.1}>
          <div className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-neutral-950 tracking-tight">
              Our Team
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-2xl mx-auto font-sans leading-relaxed font-medium">
              Meet the visionary founders and executives leading Vitthala AgriTrade's corporate governance, sustainable procurement networks, and global trade operations. A Team That Doesn't Say Impossible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadership.map((leader) => {
              const isExpanded = expandedLeader === leader.id;
              
              // We'll statically highlight the 1st card (Founder) with our brand's emerald green to match the image highlight design
              const isHighlighted = leader.id === 'chandrabhaga';

              // Assign specific social info matching each leader
              const socialData = leader.id === 'chandrabhaga' 
                ? { platform: 'Facebook/chandrabhaga', icon: Facebook }
                : leader.id === 'chaitanya'
                  ? { platform: 'Twitter/chaitanya_agri', icon: Twitter }
                  : { platform: 'LinkedIn/dnyaneswar_fin', icon: Linkedin };

              const SocialIcon = socialData.icon;

              return (
                <div
                  key={leader.id}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-200/40 shadow-sm flex flex-col hover:shadow-xl transition-all duration-300 group"
                  id={`leader-card-${leader.id}`}
                >
                  {/* Aspect-square image container with grayscale toggle on hover */}
                  <div className="aspect-square w-full relative overflow-hidden bg-neutral-100">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-400 font-bold text-2xl">
                        {leader.initials}
                      </div>
                    )}
                  </div>

                  {/* Horizontal Social Bar sitting directly under the image */}
                  <div className="flex h-10 border-b border-neutral-200/45">
                    {/* Left small dark icon square */}
                    <div className="w-10 h-10 bg-neutral-950 flex items-center justify-center shrink-0">
                      <SocialIcon size={14} className="text-white" />
                    </div>
                    {/* Right text box */}
                    <div className={`flex-1 flex items-center px-3 text-[9px] font-mono tracking-wider uppercase font-bold ${
                      isHighlighted 
                        ? 'bg-[#135A19] text-white/90' 
                        : 'bg-neutral-50 text-neutral-400'
                    }`}>
                      {socialData.platform}
                    </div>
                  </div>

                  {/* Info details block with right-arrow at the bottom */}
                  <div className={`p-5 sm:p-6 flex-1 flex flex-col justify-between text-left relative transition-colors duration-300 ${
                    isHighlighted ? 'bg-[#1A7721] text-white' : 'bg-white text-neutral-900'
                  }`}>
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-display font-extrabold text-base tracking-tight leading-tight">
                          {leader.name}
                        </h4>
                        <p className={`text-[9px] font-mono tracking-widest uppercase mt-1 font-bold ${
                          isHighlighted ? 'text-emerald-100/70' : 'text-neutral-400'
                        }`}>
                          {leader.role.split('–')[0].trim()}
                        </p>
                      </div>

                      {/* Bio starting with custom bullet point */}
                      <div className="relative">
                        <p className={`text-[11px] leading-relaxed font-sans font-medium ${
                          isHighlighted ? 'text-white/80' : 'text-neutral-500'
                        } ${isExpanded ? '' : 'line-clamp-4'}`}>
                          <span className={`${isHighlighted ? 'text-[#BEF264]' : 'text-[#1A7721]'} font-bold mr-1`}>•</span>
                          {leader.bio}
                        </p>
                        
                        <button
                          onClick={() => setExpandedLeader(isExpanded ? null : leader.id)}
                          className={`text-[8px] font-extrabold tracking-widest uppercase mt-2 inline-flex items-center gap-1 cursor-pointer transition-colors ${
                            isHighlighted ? 'text-white hover:text-[#BEF264]' : 'text-neutral-950 hover:text-[#1A7721]'
                          }`}
                        >
                          <span>{isExpanded ? 'Hide Bio' : 'Read Bio'}</span>
                          <ChevronDown size={8} className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom-right action arrow icon matching the mockup */}
                    <div className="flex justify-end pt-4 mt-2">
                      <div className={`h-7 w-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 ${
                        isHighlighted 
                          ? 'bg-white/10 text-white' 
                          : 'bg-neutral-50 text-[#1A7721] border border-neutral-100'
                      }`}>
                        <ArrowRight size={12} className="stroke-[2.5]" />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </ScrollAnimate>

      </div>
    </section>
  );
}
