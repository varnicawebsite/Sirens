import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2 } from 'lucide-react';

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
      isScrolled ? 'mystical-card shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-mystic-teal via-cosmic-purple to-divine-pink rounded-full flex items-center justify-center float-mystical mystical-glow">
              <Volume2 className="w-5 h-5 text-pearl-white" />
            </div>
            <span className="text-2xl font-bold siren-gradient">Sirens</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-silver-mist hover:text-mystic-teal transition-colors font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-teal to-cosmic-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('why-sound')}
              className="text-silver-mist hover:text-mystic-teal transition-colors font-medium relative group"
            >
              Why Sound?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-teal to-cosmic-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('sound-demos')}
              className="text-silver-mist hover:text-mystic-teal transition-colors font-medium relative group"
            >
              Demos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-teal to-cosmic-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-silver-mist hover:text-mystic-teal transition-colors font-medium relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-teal to-cosmic-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-silver-mist hover:text-mystic-teal transition-colors font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-teal to-cosmic-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block divine-button text-pearl-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-silver-mist hover:text-mystic-teal transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mystical-card border-t border-silver-mist/20">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-silver-mist hover:text-mystic-teal transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-sound')}
                className="block w-full text-left px-4 py-2 text-silver-mist hover:text-mystic-teal transition-colors font-medium"
              >
                Why Sound?
              </button>
              <button 
                onClick={() => scrollToSection('sound-demos')}
                className="block w-full text-left px-4 py-2 text-silver-mist hover:text-mystic-teal transition-colors font-medium"
              >
                Demos
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left px-4 py-2 text-silver-mist hover:text-mystic-teal transition-colors font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-silver-mist hover:text-mystic-teal transition-colors font-medium"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full divine-button text-pearl-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
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