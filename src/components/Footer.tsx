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
    <footer className="bg-ocean-depths text-pearl-shimmer relative overflow-hidden">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              left: `${12 + i * 12}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${i * 0.8}s`,
              transform: `rotate(${-15 + Math.random() * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Underwater Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="underwater-particle"
            style={{
              left: `${Math.random() * 100}%`,
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
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-soft-aqua">
                <img 
                  src="/SirensLogo.jpeg" 
                  alt="Sirens Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif-elegant text-2xl font-bold ocean-text-gradient">Sirens</span>
            </div>
            <p className="font-sans-airy text-pearl-shimmer leading-relaxed">
              The only digital marketing agency that creates both your online presence and your brand's signature sound.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gradient-to-br from-soft-aqua to-gentle-teal hover:from-gentle-teal hover:to-golden-ray rounded-lg flex items-center justify-center transition-all duration-300 pearl-glow hover:scale-110">
                <Twitter className="w-4 h-4 text-moonlight-pearl" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-gentle-teal to-golden-ray hover:from-golden-ray hover:to-coral-whisper rounded-lg flex items-center justify-center transition-all duration-300 pearl-glow hover:scale-110">
                <Linkedin className="w-4 h-4 text-moonlight-pearl" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-golden-ray to-coral-whisper hover:from-coral-whisper hover:to-crystal-blue rounded-lg flex items-center justify-center transition-all duration-300 pearl-glow hover:scale-110">
                <Instagram className="w-4 h-4 text-moonlight-pearl" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-coral-whisper to-crystal-blue hover:from-crystal-blue hover:to-soft-aqua rounded-lg flex items-center justify-center transition-all duration-300 pearl-glow hover:scale-110">
                <Youtube className="w-4 h-4 text-moonlight-pearl" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif-elegant text-lg font-semibold mb-4 text-moonlight-pearl flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-soft-aqua" />
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  Sound Branding
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  SEO Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  Cinematic ADS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  Brand Identity
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif-elegant text-lg font-semibold mb-4 text-moonlight-pearl flex items-center">
              <Waves className="w-4 h-4 mr-2 text-gentle-teal" />
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sound-demos')}
                  className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300"
                >
                  Sound Demos
                </button>
              </li>
              <li>
                <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif-elegant text-lg font-semibold mb-4 text-moonlight-pearl flex items-center">
              <Mail className="w-4 h-4 mr-2 text-golden-ray" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-soft-aqua" />
                <span className="font-sans-airy text-pearl-shimmer">hello@sirens.agency</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-soft-aqua" />
                <span className="font-sans-airy text-pearl-shimmer">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-soft-aqua" />
                <span className="font-sans-airy text-pearl-shimmer">San Francisco, CA</span>
              </li>
            </ul>

            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-4 ocean-button text-moonlight-pearl px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pearl-shimmer/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-sans-airy text-pearl-shimmer text-sm">
            © {currentYear} Sirens Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-10"></div>
    </footer>
  );
};

export default Footer;
