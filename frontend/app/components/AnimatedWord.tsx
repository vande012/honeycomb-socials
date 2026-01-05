'use client';

import { useEffect, useState } from 'react';

const words = ['MANAGEMENT', 'GROWTH', 'MARKETING', 'ANALYTICS', 'STRATEGY'];
const wordDisplayDuration = 2500; // 2.5 seconds per word visible
const transitionDuration = 500; // 500ms for fade transition

export function AnimatedWord() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current word
      setIsVisible(false);
      
      // After fade out, change word and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        // Small delay before fading in new word
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, transitionDuration);
    }, wordDisplayDuration + transitionDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`inline-block transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2'
      }`}
      style={{ minWidth: 'fit-content' }}
    >
      {words[currentIndex]}
    </span>
  );
}

