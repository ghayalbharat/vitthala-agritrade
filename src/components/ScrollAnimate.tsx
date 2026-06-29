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
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
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
