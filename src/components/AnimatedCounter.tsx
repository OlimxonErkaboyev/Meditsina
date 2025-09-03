import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  label: string;
}

export function AnimatedCounter({ targetValue, duration = 2000, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * targetValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, targetValue, duration]);

  return (
    <div id={`counter-${label}`} className="text-center">
      <div className="text-4xl text-pink-600 mb-2">
        {count.toLocaleString('uz-UZ')}+
      </div>
      <div className="text-pink-800 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}