
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Team JSat demonstrated excellent teamwork and co-ordination with our various departments. The complexity handled during our project was impossible without the thorough knowledge and experience of Team JSat. We are proud to be associated with you.",
    author: "Project Manager",
    position: "Vaccine Manufacturer, US"
  },
  {
    quote: "JSat's automation solutions have transformed our manufacturing processes. Their expertise in IT/OT convergence has been invaluable to our digital transformation journey.",
    author: "Operations Director",
    position: "Pharmaceutical Company, EU"
  },
  {
    quote: "The implementation of JSatOne platform has streamlined our operations and significantly improved our data management capabilities. Their support team is responsive and knowledgeable.",
    author: "CTO",
    position: "Medical Device Manufacturer, Asia"
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="section-padding bg-white dark:bg-jsblue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-jspurple mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative overflow-hidden">
          <div 
            className="absolute top-4 left-4 md:left-8 z-10 w-12 h-12 bg-jspurple/10 rounded-full flex items-center justify-center text-jspurple"
            aria-hidden="true"
          >
            <Quote size={24} />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-jsblue/50 rounded-xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-800"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <div className="pt-8 pb-4">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 italic">
                  "{testimonials[current].quote}"
                </p>
              </div>
              
              <div className="mt-4">
                <p className="font-semibold">{testimonials[current].author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[current].position}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${current === index ? 'bg-jspurple' : 'bg-gray-300 dark:bg-gray-700'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-jsblue/80 shadow-lg flex items-center justify-center text-jsblue dark:text-white hover:bg-white dark:hover:bg-jsblue transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-jsblue/80 shadow-lg flex items-center justify-center text-jsblue dark:text-white hover:bg-white dark:hover:bg-jsblue transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12">
          <div className="w-32 h-12 bg-white dark:bg-transparent rounded-lg shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-gray-600 dark:text-gray-300">Client 1</div>
          </div>
          <div className="w-32 h-12 bg-white dark:bg-transparent rounded-lg shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-gray-600 dark:text-gray-300">Client 2</div>
          </div>
          <div className="w-32 h-12 bg-white dark:bg-transparent rounded-lg shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-gray-600 dark:text-gray-300">Client 3</div>
          </div>
          <div className="w-32 h-12 bg-white dark:bg-transparent rounded-lg shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-gray-600 dark:text-gray-300">Client 4</div>
          </div>
          <div className="w-32 h-12 bg-white dark:bg-transparent rounded-lg shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-gray-600 dark:text-gray-300">Client 5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
