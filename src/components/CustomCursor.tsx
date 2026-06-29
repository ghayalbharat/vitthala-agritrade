import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState<'none' | 'button' | 'link' | 'card'>('none');
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Position references
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);
  const followerX = useRef(0);
  const followerY = useRef(0);

  // DOM element references
  const dotRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // 1. Accessibility & Responsive checks
    if (typeof window === 'undefined') return;

    const mediaQueryPrefersReduced = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    const mediaQueryPointerFine = window.matchMedia ? window.matchMedia('(pointer: fine)') : null;

    const checkAvailability = () => {
      const prefersReduced = mediaQueryPrefersReduced ? mediaQueryPrefersReduced.matches : false;
      const isFinePointer = mediaQueryPointerFine ? mediaQueryPointerFine.matches : false;
      
      // Custom cursor is enabled ONLY on desktop/devices with fine pointer, and if reduced motion is NOT preferred
      const enabled = isFinePointer && !prefersReduced;
      setIsEnabled(enabled);

      if (enabled) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    checkAvailability();

    // Event listeners for responsive changes with fallback for older browsers
    const handleReducedChange = () => checkAvailability();
    const handlePointerChange = () => checkAvailability();

    if (mediaQueryPrefersReduced) {
      if (mediaQueryPrefersReduced.addEventListener) {
        mediaQueryPrefersReduced.addEventListener('change', handleReducedChange);
      } else if ((mediaQueryPrefersReduced as any).addListener) {
        (mediaQueryPrefersReduced as any).addListener(handleReducedChange);
      }
    }

    if (mediaQueryPointerFine) {
      if (mediaQueryPointerFine.addEventListener) {
        mediaQueryPointerFine.addEventListener('change', handlePointerChange);
      } else if ((mediaQueryPointerFine as any).addListener) {
        (mediaQueryPointerFine as any).addListener(handlePointerChange);
      }
    }

    return () => {
      if (mediaQueryPrefersReduced) {
        if (mediaQueryPrefersReduced.removeEventListener) {
          mediaQueryPrefersReduced.removeEventListener('change', handleReducedChange);
        } else if ((mediaQueryPrefersReduced as any).removeListener) {
          (mediaQueryPrefersReduced as any).removeListener(handleReducedChange);
        }
      }
      if (mediaQueryPointerFine) {
        if (mediaQueryPointerFine.removeEventListener) {
          mediaQueryPointerFine.removeEventListener('change', handlePointerChange);
        } else if ((mediaQueryPointerFine as any).removeListener) {
          (mediaQueryPointerFine as any).removeListener(handlePointerChange);
        }
      }
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        // Sync starting position instantly to prevent cursor jumping from origin
        dotX.current = e.clientX;
        dotY.current = e.clientY;
        followerX.current = e.clientX;
        followerY.current = e.clientY;
      }
    };

    // Keep cursor visible when entering document
    const handleMouseEnter = () => setIsVisible(true);
    // Hide cursor when leaving document
    const handleMouseLeave = () => setIsVisible(false);

    // Dynamic state mapping based on element hovered
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Button detection
      const isButton = target.closest('button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer-btn');
      if (isButton) {
        setHoverState('button');
        return;
      }

      // 2. Link detection
      const isLink = target.closest('a, [role="link"], .cursor-pointer-link');
      if (isLink) {
        setHoverState('link');
        return;
      }

      // 3. Card detection
      const isCard = target.closest('.glass-card, .glass-card-dark, .group, [class*="rounded-[2rem]"], [class*="rounded-3xl"], [class*="rounded-2xl"], [data-hover-card]');
      if (isCard) {
        setHoverState('card');
        return;
      }

      setHoverState('none');
    };

    const handleMouseOut = () => {
      setHoverState('none');
    };

    // Attach document wide listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    // Frame update loop
    const updatePosition = () => {
      // Linear interpolation (lerp) coefficients
      const followerEase = 0.15; // smooth trailing easing
      const dotEase = 0.95;      // highly responsive primary dot positioning

      // Update values
      dotX.current += (mouseX.current - dotX.current) * dotEase;
      dotY.current += (mouseY.current - dotY.current) * dotEase;

      followerX.current += (mouseX.current - followerX.current) * followerEase;
      followerY.current += (mouseY.current - followerY.current) * followerEase;

      // Render styles directly to DOM for 60 FPS performance, bypassing React state overhead
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX.current}px, ${dotY.current}px, 0)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX.current}px, ${followerY.current}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(updatePosition);
    };

    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isEnabled, isVisible]);

  if (!isEnabled) return null;

  // Dynamic Scale Adjustments
  const getDotScale = () => {
    if (hoverState === 'button') return 1.35;
    if (hoverState === 'link') return 1.2;
    if (hoverState === 'card') return 1.1;
    return 1;
  };

  const getFollowerScale = () => {
    if (hoverState === 'button') return 1.39; // Scales standard 36px to ~50px
    if (hoverState === 'link') return 1.17;  // Scales standard 36px to ~42px
    if (hoverState === 'card') return 1.25;  // Scales standard 36px to ~45px
    return 1;
  };

  return (
    <>
      {/* Dynamic Cursor Disabling Styling */}
      <style>{`
        @media (pointer: fine) {
          .custom-cursor-active,
          .custom-cursor-active * {
            cursor: none !important;
          }
        }
        @keyframes cursorPulse {
          0% { transform: translate(-50%, -50%) scale(1.17); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) scale(1.35); opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.17); opacity: 0.8; }
        }
      `}</style>

      {/* Primary Inner Dot Cursor */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] will-change-transform"
        style={{
          transform: 'translate3d(0, 0, 0)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.25s ease-in-out',
        }}
      >
        <div
          className="rounded-full bg-[#1A7721] shadow-[0_0_15px_rgba(26,119,33,0.45)]"
          style={{
            width: '10px',
            height: '10px',
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(-50%, -50%) scale(${getDotScale()})`,
            transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.28s, box-shadow 0.28s',
          }}
        />
      </div>

      {/* Cursor Follower Outer Ring */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
        style={{
          transform: 'translate3d(0, 0, 0)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.35s ease-in-out',
        }}
      >
        <div
          className={`rounded-full border ${
            hoverState === 'button'
              ? 'border-[#1A7721] bg-[#1A7721]/10 shadow-[0_0_25px_rgba(26,119,33,0.5)]'
              : hoverState === 'link'
              ? 'border-[#1A7721]/80 bg-[#1A7721]/5'
              : hoverState === 'card'
              ? 'border-[#1A7721]/70 shadow-[0_0_15px_rgba(26,119,33,0.25)] bg-[#1A7721]/5'
              : 'border-[#1A7721]/40 bg-transparent'
          }`}
          style={{
            width: '36px',
            height: '36px',
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(-50%, -50%) scale(${getFollowerScale()})`,
            animation: hoverState === 'link' ? 'cursorPulse 1.5s infinite ease-in-out' : 'none',
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s, background-color 0.35s, box-shadow 0.35s',
            borderWidth: '1.5px',
          }}
        />
      </div>
    </>
  );
}
