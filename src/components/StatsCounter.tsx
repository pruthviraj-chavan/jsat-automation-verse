
import { useEffect, useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = memo(({ 
  value, 
  label, 
  suffix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / (duration / 16);
    let animationFrameId: number;
    
    const animate = () => {
      start += increment;
      if (start > value) {
        setCount(value);
        cancelAnimationFrame(animationFrameId);
      } else {
        setCount(Math.floor(start));
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-bold text-jspurple mb-2">
        <span ref={countRef}>{count}</span>{suffix}
        <span className="text-jsaccent">+</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </motion.div>
  );
});

StatsCounter.displayName = "StatsCounter";

export default StatsCounter;
