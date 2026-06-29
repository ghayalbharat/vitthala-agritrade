import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import CoreValues from './components/CoreValues';
import Products from './components/Products';
import Quality from './components/Quality';
import Markets from './components/Markets';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import InteractiveQuoteModal from './components/InteractiveQuoteModal';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  // Global states
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  // Trigger modal open with specific preselected commodity
  const handleOpenQuote = (productName?: string) => {
    setSelectedProduct(productName || '');
    setIsQuoteOpen(true);
  };

  // Dynamically track current section in view using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'strengths', 'values', 'products', 'quality', 'markets', 'careers', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // focused in center viewport range
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FCFCF9] text-neutral-900 selection:bg-amber-100 selection:text-amber-900" id="application-root-container">
      {/* Premium custom mouse cursor */}
      <CustomCursor />

      {/* Thin, fixed scroll progress indicator at top of the page */}
      <ScrollProgress />

      {/* 1. Glassmorphic Navigation with micro contact bar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} activeSection={activeSection} />

      {/* 2. Page Sections */}
      <main id="main-content-flow">
        {/* Parallax Hero Banner */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Endless scrolling client brand logos strip */}
        <ClientLogos />

        {/* About Company & Leadership */}
        <AboutUs />

        {/* Why Choose Us & Key Differentiators */}
        <WhyChooseUs />

        {/* Core Values Section */}
        <CoreValues />

        {/* Commodities Catalog & Lab Specs */}
        <Products onOpenQuote={(p) => handleOpenQuote(p)} />

        {/* Quality, Standards Compliance & Digital Traceability */}
        <Quality />

        {/* Domestic & Export Markets, Key Client Portfolios */}
        <Markets />

        {/* Careers openings & Application submission desk */}
        <Careers />

        {/* Contact details, locator map and Secure Sourcing Form */}
        <ContactUs />
      </main>

      {/* 3. Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* 4. Global Interactive Quote & Sourcing Modal */}
      <InteractiveQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
