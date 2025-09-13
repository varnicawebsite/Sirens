import React from 'react';
import { Waves, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stormy-waters text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-deep-teal to-seashell-blush rounded-lg flex items-center justify-center float-animation">
                <Waves className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">Sirens</span>
            </div>
            <p className="text-seashell-blush leading-relaxed">
              The only digital marketing agency that creates both your online presence and your brand's signature sound.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-deep-teal hover:bg-seashell-blush rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-deep-teal hover:bg-seashell-blush rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-deep-teal hover:bg-seashell-blush rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-deep-teal hover:bg-seashell-blush rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-seashell-blush hover:text-white transition-colors"
                >
                  Sound Branding
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-seashell-blush hover:text-white transition-colors"
                >
                  SEO Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-seashell-blush hover:text-white transition-colors"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-seashell-blush hover:text-white transition-colors"
                >
                  Paid Advertising
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-seashell-blush hover:text-white transition-colors"
                >
                  Email Marketing
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-seashell-blush hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sound-demos')}
                  className="text-seashell-blush hover:text-white transition-colors"
                >
                  Sound Demos
                </button>
              </li>
              <li>
                <a href="#" className="text-seashell-blush hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-seashell-blush hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-seashell-blush hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-deep-teal" />
                <span className="text-seashell-blush">hello@sirens.agency</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-deep-teal" />
                <span className="text-seashell-blush">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-deep-teal" />
                <span className="text-seashell-blush">San Francisco, CA</span>
              </li>
            </ul>

            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-4 bg-deep-teal hover:bg-seashell-blush text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tidal-teal mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-seashell-blush text-sm">
            © {currentYear} Sirens Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-seashell-blush hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-seashell-blush hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-seashell-blush hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;