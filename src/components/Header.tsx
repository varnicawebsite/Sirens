import React, { useState, useEffect } from 'react';
import { Menu, X, Waves } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-seashell-blush/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-deep-teal to-stormy-waters rounded-lg flex items-center justify-center float-animation">
              <Waves className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-stormy-waters">Sirens</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-stormy-waters hover:text-deep-teal transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('sound-demos')}
              className="text-stormy-waters hover:text-deep-teal transition-colors font-medium"
            >
              Why Sound?
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-stormy-waters hover:text-deep-teal transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-stormy-waters hover:text-deep-teal transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-deep-teal hover:bg-stormy-waters text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-stormy-waters hover:text-deep-teal transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-seashell-blush/95 backdrop-blur-md border-t border-seashell-blush">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-stormy-waters hover:text-deep-teal transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-sound')}
                className="block w-full text-left px-4 py-2 text-stormy-waters hover:text-deep-teal transition-colors font-medium"
              >
                Why Sound?
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left px-4 py-2 text-stormy-waters hover:text-deep-teal transition-colors font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-stormy-waters hover:text-deep-teal transition-colors font-medium"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-deep-teal hover:bg-stormy-waters text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  Get Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;