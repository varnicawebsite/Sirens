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
            <div className="w-10 h-10 bg-gradient-to-br from-mystic-turquoise via-violet-depths to-starlight-pink rounded-full flex items-center justify-center siren-logo ethereal-glow">
              <img 
                src="/public/WhatsApp Image 2025-09-15 at 7.36.43 PM.jpeg" 
                alt="Sirens Logo" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="text-2xl font-bold siren-gradient flowing-text">Sirens</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium relative group flowing-text"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-turquoise to-violet-depths transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('why-sound')}
              className="text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium relative group flowing-text"
            >
              Why Sound?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-turquoise to-violet-depths transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('sound-demos')}
              className="text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium relative group flowing-text"
            >
              Demos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-turquoise to-violet-depths transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium relative group flowing-text"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-turquoise to-violet-depths transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium relative group flowing-text"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-turquoise to-violet-depths transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block moonlit-button text-moonlit-pearl px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 moonlight-reflection flowing-text"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-silver-shimmer hover:text-mystic-turquoise transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mystical-card border-t border-silver-shimmer/20">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium flowing-text"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-sound')}
                className="block w-full text-left px-4 py-2 text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium flowing-text"
              >
                Why Sound?
              </button>
              <button 
                onClick={() => scrollToSection('sound-demos')}
                className="block w-full text-left px-4 py-2 text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium flowing-text"
              >
                Demos
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left px-4 py-2 text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium flowing-text"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-silver-shimmer hover:text-mystic-turquoise transition-colors font-medium flowing-text"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full moonlit-button text-moonlit-pearl px-6 py-2 rounded-lg font-medium transition-all duration-200 flowing-text"
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