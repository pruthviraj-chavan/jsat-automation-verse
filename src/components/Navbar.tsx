
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
      isScrolled ? "bg-white/90 dark:bg-jsblue/90 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-xl md:text-2xl">
            <span className="gradient-text">JSat</span> Automation
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-jspurple transition-colors">What We Do</a>
          <a href="#" className="text-foreground hover:text-jspurple transition-colors">JSatOne</a>
          <a href="#" className="text-foreground hover:text-jspurple transition-colors">Careers</a>
          <a href="#" className="text-foreground hover:text-jspurple transition-colors">Contact</a>
          <Button variant="default" className="bg-jspurple hover:bg-jspurple/90">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-jsblue shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="py-2 text-foreground hover:text-jspurple transition-colors">What We Do</a>
            <a href="#" className="py-2 text-foreground hover:text-jspurple transition-colors">JSatOne</a>
            <a href="#" className="py-2 text-foreground hover:text-jspurple transition-colors">Careers</a>
            <a href="#" className="py-2 text-foreground hover:text-jspurple transition-colors">Contact</a>
            <Button variant="default" className="bg-jspurple hover:bg-jspurple/90">Get Started</Button>
          </div>
        </div>
      )}

      {/* Contact Bar */}
      <div className="hidden md:block py-1 bg-jsblue text-white text-sm">
        <div className="container mx-auto px-6 flex justify-between">
          <a href="mailto:Sales@JSatAutomation.com" className="hover:text-jsaccent transition-colors">
            Sales@JSatAutomation.com
          </a>
          <a href="tel:+12679031800" className="hover:text-jsaccent transition-colors">
            +1 (267) 903 1800
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
