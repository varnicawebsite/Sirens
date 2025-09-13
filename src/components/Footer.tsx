import React from 'react';
import { Volume2, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-midnight text-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-electric-blue rounded-lg flex items-center justify-center float-gentle">
                <Volume2 className="w-4 h-4 text-midnight" />
              </div>
              <span className="text-xl font-bold gradient-text">Sirens</span>
            </div>
            <p className="text-silver/70 leading-relaxed">
              The only digital marketing agency that creates both your online presence and your brand's signature sound.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gradient-to-br from-gold to-electric-blue hover:from-electric-blue hover:to-gold rounded-lg flex items-center justify-center transition-all duration-300">
                <Twitter className="w-4 h-4 text-midnight" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-gold to-electric-blue hover:from-electric-blue hover:to-gold rounded-lg flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-4 h-4 text-midnight" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-gold to-electric-blue hover:from-electric-blue hover:to-gold rounded-lg flex items-center justify-center transition-all duration-300">
                <Instagram className="w-4 h-4 text-midnight" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-gold to-electric-blue hover:from-electric-blue hover:to-gold rounded-lg flex items-center justify-center transition-all duration-300">
                <Youtube className="w-4 h-4 text-midnight" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-silver">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver/70 hover:text-electric-blue transition-colors"
                >
                  Sound Branding
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver/70 hover:text-electric-blue transition-colors"
                >
                  SEO Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver/70 hover:text-electric-blue transition-colors"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver/70 hover:text-electric-blue transition-colors"
                >
                  Cinematic ADS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-silver/70 hover:text-electric-blue transition-colors"
                >
                  Brand Identity
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-silver">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-silver/70 hover:text-electric-blue transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sound-demos')}
                  className="text-silver/70 hover:text-electric-blue transition-colors"
                >
                  Sound Demos
                </button>
              </li>
              <li>
                <a href="#" className="text-silver/70 hover:text-electric-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-silver/70 hover:text-electric-blue transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-silver/70 hover:text-electric-blue transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-silver">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-electric-blue" />
                <span className="text-silver/70">hello@sirens.agency</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-electric-blue" />
                <span className="text-silver/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-electric-blue" />
                <span className="text-silver/70">San Francisco, CA</span>
              </li>
            </ul>

            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-4 premium-button text-midnight px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-silver/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver/70 text-sm">
            © {currentYear} Sirens Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-silver/70 hover:text-electric-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-silver/70 hover:text-electric-blue transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-silver/70 hover:text-electric-blue transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;