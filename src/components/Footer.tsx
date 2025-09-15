import React from 'react';
import { Volume2, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube, Waves, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="ocean-wave cosmic-bg text-silver-mist relative overflow-hidden">
      {/* Ocean Currents */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="ocean-current"
            style={{
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 4}s`,
              opacity: 0.1
            }}
          />
        ))}
      </div>

      {/* Mystical Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="mystical-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-mystic-teal via-cosmic-purple to-divine-pink rounded-full flex items-center justify-center float-mystical mystical-glow">
                <Volume2 className="w-5 h-5 text-pearl-white" />
              </div>
              <span className="text-2xl font-bold siren-gradient">Sirens</span>
            </div>
            <p className="text-silver-mist leading-relaxed">
              The only digital marketing agency that creates both your online presence and your brand's signature sound.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gradient-to-br from-mystic-teal to-cosmic-purple hover:from-cosmic-purple hover:to-divine-pink rounded-lg flex items-center justify-center transition-all duration-300 mystical-glow hover:scale-110">
                <Twitter className="w-4 h-4 text-pearl-white" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-cosmic-purple to-divine-pink hover:from-divine-pink hover:to-celestial-gold rounded-lg flex items-center justify-center transition-all duration-300 mystical-glow hover:scale-110">
                <Linkedin className="w-4 h-4 text-pearl-white" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-divine-pink to-celestial-gold hover:from-celestial-gold hover:to-aurora-green rounded-lg flex items-center justify-center transition-all duration-300 mystical-glow hover:scale-110">
                <Instagram className="w-4 h-4 text-pearl-white" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-celestial-gold to-aurora-green hover:from-aurora-green hover:to-mystic-teal rounded-lg flex items-center justify-center transition-all duration-300 mystical-glow hover:scale-110">
                <Youtube className="w-4 h-4 text-pearl-white" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pearl-white flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-mystic-teal" />
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver-mist hover:text-mystic-teal transition-colors hover:translate-x-1 duration-300"
                >
                  Sound Branding
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver-mist hover:text-mystic-teal transition-colors hover:translate-x-1 duration-300"
                >
                  SEO Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver-mist hover:text-mystic-teal transition-colors hover:translate-x-1 duration-300"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver-mist hover:text-mystic-teal transition-colors hover:translate-x-1 duration-300"
                >
                  Cinematic ADS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver-mist hover:text-mystic-teal transition-colors hover:translate-x-1 duration-300"
                >
                  Brand Identity
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pearl-white flex items-center">
              <Waves className="w-4 h-4 mr-2 text-cosmic-purple" />
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-silver-mist hover:text-cosmic-purple transition-colors hover:translate-x-1 duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sound-demos')}
                  className="text-silver-mist hover:text-cosmic-purple transition-colors hover:translate-x-1 duration-300"
                >
                  Sound Demos
                </button>
              </li>
              <li>
                <a href="#" className="text-silver-mist hover:text-cosmic-purple transition-colors hover:translate-x-1 duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-silver-mist hover:text-cosmic-purple transition-colors hover:translate-x-1 duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-silver-mist hover:text-cosmic-purple transition-colors hover:translate-x-1 duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pearl-white flex items-center">
              <Mail className="w-4 h-4 mr-2 text-divine-pink" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-mystic-teal" />
                <span className="text-silver-mist">hello@sirens.agency</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-mystic-teal" />
                <span className="text-silver-mist">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-mystic-teal" />
                <span className="text-silver-mist">San Francisco, CA</span>
              </li>
            </ul>

            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-4 divine-button text-pearl-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-silver-mist/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver-mist text-sm">
            © {currentYear} Sirens Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-silver-mist hover:text-mystic-teal transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-silver-mist hover:text-mystic-teal transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-silver-mist hover:text-mystic-teal transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;