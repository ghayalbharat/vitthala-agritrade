import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

export default function Typewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 2000,
  className = ''
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = texts[currentIndex];

    if (isDeleting) {
      // Deleting text character by character
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      // Typing text character by character
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Handle full string typed
    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), delayBetween);
    } 
    // Handle full string deleted, move to next
    else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={`inline-flex items-center ${className}`} id="typewriter-effect">
      <span>{currentText}</span>
      <span className="w-[3px] h-[1.15em] bg-amber-500 ml-1 animate-pulse" style={{ animationDuration: '0.8s' }}></span>
    </span>
  );
}
