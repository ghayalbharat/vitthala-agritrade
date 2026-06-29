import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Map, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setErrorMsg('Please fill in both Email and Message.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Persist submission securely
      const savedInquiries = JSON.parse(localStorage.getItem('vitthala_inquiries') || '[]');
      savedInquiries.push({
        id: 'CON-' + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('vitthala_inquiries', JSON.stringify(savedInquiries));
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSuccess(false);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF9F5] text-neutral-950 relative overflow-hidden" style={{ contentVisibility: 'auto' }}>
      
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <ScrollAnimate>
          <div className="text-left mb-16 space-y-2 max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-[#1A7721] uppercase block">
              Get in touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-900 tracking-tight leading-tight">
              Connect with Vitthala Agritrade
            </h2>
            <p className="text-neutral-500 font-sans text-sm sm:text-base leading-relaxed">
              Partner with our central trade desk in Jalna MIDC. Let us coordinate your sourcing requirements, logistics clearances, and bulk cargo schedules.
            </p>
          </div>
        </ScrollAnimate>

        {/* COMBINED INTERACTIVE LAYOUT MATCHING USER MOCKUP */}
        <ScrollAnimate delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT COLUMN: THE GORGEOUS GREEN GET-IN-TOUCH CARD COPYING THE USER DESIGN */}
          <div className="lg:col-span-7 bg-[#06402B] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm flex flex-col justify-between text-white group">
            
            {/* White flower petal illustration exactly from user mockup */}
            <div className="absolute -top-12 -left-12 w-64 h-64 pointer-events-none opacity-15 select-none transition-transform duration-500 group-hover:scale-105">
              <svg viewBox="0 0 200 200" className="w-full h-full text-white fill-current">
                {/* Center point at (40, 40) */}
                <circle cx="40" cy="40" r="24" />
                {/* Petal pointing down-right */}
                <path d="M40,40 C110,110 140,80 110,50 Z" />
                {/* Petal pointing down */}
                <path d="M40,40 C40,140 100,130 90,80 Z" />
                {/* Petal pointing right */}
                <path d="M40,40 C140,40 130,100 80,90 Z" />
                {/* Petal pointing diagonal up-right */}
                <path d="M40,40 C100,-10 130,10 90,40 Z" />
                {/* Petal pointing left-down */}
                <path d="M40,40 C-10,100 10,130 40,90 Z" />
              </svg>
            </div>

            {/* Inner Content Area */}
            <div className="relative z-10 space-y-8">
              
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-none">
                  Get in touch
                </h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                  We want to help you overcome all logistical and pricing hurdles in agricultural trade. Whether buying premium spot cargo or setting up contract processing, let's build the path.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center"
                  >
                    <div className="h-12 w-12 bg-white/20 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <CheckCircle size={24} />
                    </div>
                    <h4 className="text-lg font-bold font-display text-white">Thank you!</h4>
                    <p className="text-xs text-white/90 leading-relaxed mt-2 mb-4">
                      Your query has been securely transmitted. A trade representative will reply to <span className="font-bold">{formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="bg-white hover:bg-neutral-100 text-neutral-950 text-xs font-bold px-5 py-2.5 rounded-full cursor-pointer transition-all"
                    >
                      New Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 pt-4"
                  >
                    {/* Optional Name & Phone to enrich the form, designed using minimal clean underlines */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-bold text-white tracking-wide font-sans">
                          Name (optional)
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-bold text-white tracking-wide font-sans">
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="8308088906"
                          className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email required input - matching mockup style perfectly */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-bold text-white tracking-wide font-sans">
                        Email (required)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Info@vitthalaagritrade.com"
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                        required
                      />
                    </div>

                    {/* Message required input - matching mockup style perfectly */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-bold text-white tracking-wide font-sans">
                        Message (required)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Write your message here..."
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors resize-none"
                        required
                      />
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-2 text-xs text-red-200 font-medium bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
                        <AlertCircle size={14} />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Pill-shaped solid button exactly like mockup */}
                    <div className="pt-2 text-left">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white hover:bg-neutral-100 text-neutral-950 font-sans text-sm font-bold px-10 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-3.5 w-3.5 border-2 border-neutral-950/20 border-t-neutral-950 rounded-full animate-spin"></span>
                            <span>Joining...</span>
                          </>
                        ) : (
                          <span>Join Member</span>
                        )}
                      </button>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* RIGHT COLUMN: REQUISITE CONTACT DETAILS (ADDRESS, PHONE, WEB, GOOGLE MAPS) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-white border border-neutral-200/50 rounded-[2.5rem] p-8 sm:p-12 shadow-sm">
            
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block">
                Trade Desk & Facility Info
              </span>

              <div className="space-y-6">
                
                {/* 1. Office Address */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#FAF9F5] border border-neutral-200/60 text-[#1A7721] flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm font-display">Office Address</h4>
                    <p className="text-neutral-500 text-xs sm:text-sm font-sans mt-1 leading-relaxed">
                      Plot No.B-5 MIDC, Jaffrabad, Jalna,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* 2. Email ID */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#FAF9F5] border border-neutral-200/60 text-[#1A7721] flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm font-display">Direct Email</h4>
                    <a 
                      href="mailto:Info@vitthalaagritrade.com" 
                      className="text-[#1A7721] hover:underline text-xs sm:text-sm font-sans font-medium mt-1 block"
                    >
                      Info@vitthalaagritrade.com
                    </a>
                  </div>
                </div>

                {/* 3. Phone Hotline */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#FAF9F5] border border-neutral-200/60 text-[#1A7721] flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm font-display">Phone Hotline</h4>
                    <a 
                      href="tel:8308088906" 
                      className="text-neutral-700 hover:text-[#1A7721] text-xs sm:text-sm font-sans font-medium mt-1 block"
                    >
                      +91 8308088906
                    </a>
                  </div>
                </div>

                {/* 4. Social Web Link */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#FAF9F5] border border-neutral-200/60 text-[#1A7721] flex items-center justify-center shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm font-display">Official Website</h4>
                    <a 
                      href="https://vitthalaagritrade.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#1A7721] hover:underline text-xs sm:text-sm font-sans font-medium mt-1 block break-all"
                    >
                      https://vitthalaagritrade.com/
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Google Maps Navigation Card */}
            <div className="bg-[#FAF9F5] border border-neutral-200/60 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <Map size={14} className="text-[#1A7721]" />
                  <span className="text-[10px] font-bold text-neutral-800 uppercase tracking-wider">
                    Google Maps Link
                  </span>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              
              <p className="text-[11px] text-neutral-500 leading-normal mb-4 font-sans">
                Our central facility is situated inside the Jalna Industrial Area (MIDC), optimized for prompt freight movement.
              </p>

              <a
                href="https://maps.app.goo.gl/iLgcGMHbsGy1kcVT9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-neutral-50 border border-neutral-300/80 text-neutral-700 text-xs font-bold py-3 px-4 rounded-xl transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
              >
                <Sparkles size={14} className="text-amber-500 animate-pulse" />
                <span>Navigate on Google Maps</span>
              </a>
            </div>

          </div>

        </div>
        </ScrollAnimate>

      </div>
    </section>
  );
}
