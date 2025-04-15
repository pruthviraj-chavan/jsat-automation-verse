
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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-jspurple mb-2 flex items-center justify-center space-x-1">
        <motion.span 
          ref={countRef}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {count}
        </motion.span>
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {suffix}
        </motion.span>
        <motion.span 
          className="text-jsaccent"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          +
        </motion.span>
      </div>
      <motion.p 
        className="text-gray-600 dark:text-gray-300"
        initial={{ y: 10, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
});

StatsCounter.displayName = "StatsCounter";

export default StatsCounter;
