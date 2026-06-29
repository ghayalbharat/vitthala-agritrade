import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  scaleOffset?: number;
}

export default function ScrollAnimate({ 
  children, 
  className = '', 
  delay = 0, 
  yOffset = 30,
  scaleOffset = 1
}: ScrollAnimateProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
    } else if ((mediaQuery as any).addListener) {
      (mediaQuery as any).addListener(listener);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', listener);
      } else if ((mediaQuery as any).removeListener) {
        (mediaQuery as any).removeListener(listener);
      }
    };
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: scaleOffset }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ 
        duration: 0.85, 
        delay, 
        ease: [0.16, 1, 0.3, 1] // Luxurious, buttery smooth cubic-bezier easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
