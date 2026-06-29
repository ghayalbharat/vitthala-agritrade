import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  className = '',
  showText = true,
  variant = 'light',
  size = 'md'
}: LogoProps) {
  // Height based on size
  const heightClasses = {
    sm: 'h-10 md:h-12',
    md: 'h-14 md:h-16',
    lg: 'h-24 md:h-28'
  }[size];

  // If the footer or some place requests "white" variant, we can apply a grayscale / invert filter
  // to make the colored logo look cleanly white/monochrome, matching the footer's layout.
  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3 ${className}`} id="vitthala-logo">
      <img
        src="https://lh3.googleusercontent.com/d/1FdQ1sOfSfFPlAzFTYy-SlIc6MJG-2V-_"
        alt="Vitthala Agritrade Logo"
        className={`${heightClasses} w-auto object-contain shrink-0 transition-transform duration-300 hover:scale-105`}
        style={{
          filter: isWhite ? 'brightness(0) invert(1)' : 'none'
        }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
