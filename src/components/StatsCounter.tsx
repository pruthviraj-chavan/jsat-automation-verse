
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ 
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
    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
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
};

export default StatsCounter;
