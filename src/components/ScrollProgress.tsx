import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Create a buttery-smooth spring animation for the scroll progress width
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      id="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A7721] via-[#4B8C13] to-[#FCB92C] transform-origin-left origin-left z-[100] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
