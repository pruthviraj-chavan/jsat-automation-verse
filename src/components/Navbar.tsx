
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 dark:bg-jsblue/80 backdrop-blur-md shadow-md" 
        : "bg-transparent"
    }`}>
      <div className={`${isScrolled ? 'py-3' : 'py-4'} transition-all duration-300 container mx-auto px-4 sm:px-6`}>
        <nav className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-bold text-xl md:text-2xl">
              <span className="gradient-text">JSat</span> <span className="text-gray-700 dark:text-white">Automation</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['What We Do', 'JSatOne', 'Careers', 'Contact'].map((item, index) => (
              <motion.a 
                key={item}
                href="#" 
                className="text-gray-700 dark:text-white hover:text-jspurple dark:hover:text-jspurple transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="default" className="bg-jspurple hover:bg-jspurple/90 shadow-lg shadow-jspurple/20">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Contact info */}
          <div className="hidden md:flex items-center ml-4">
            <motion.a 
              href="tel:+12679031800"
              className="flex items-center text-sm text-gray-700 dark:text-white hover:text-jspurple dark:hover:text-jspurple transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Phone size={16} className="mr-2"/>
              +1 (267) 903 1800
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 dark:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-jsblue shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['What We Do', 'JSatOne', 'Careers', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="py-2 text-gray-700 dark:text-white hover:text-jspurple dark:hover:text-jspurple transition-colors"
              >
                {item}
              </a>
            ))}
            <Button variant="default" className="bg-jspurple hover:bg-jspurple/90 w-full">
              Get Started
            </Button>
            <a href="tel:+12679031800" className="flex items-center text-sm text-gray-700 dark:text-white">
              <Phone size={16} className="mr-2"/>
              +1 (267) 903 1800
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
