import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Waves, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-cosmic-bg relative overflow-hidden">
      {/* Mystical Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="mystical-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pearl-white mb-6 flex items-center justify-center">
            <Sparkles className="w-8 h-8 mr-3 text-celestial-gold" />
            Let's Create Something <span className="siren-text-gradient">Amazing</span> Together
            <Sparkles className="w-8 h-8 ml-3 text-celestial-gold" />
          </h2>
          <p className="text-xl text-silver-pearl max-w-3xl mx-auto leading-relaxed">
            Ready to give your brand its signature sound? Get in touch and let's discuss how we can amplify your digital presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="siren-card rounded-2xl p-8 siren-glow">
              <h3 className="text-2xl font-semibold text-pearl-white mb-6 flex items-center">
                <Waves className="w-6 h-6 mr-2 text-siren-teal" />
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-siren-teal to-cosmic-purple rounded-lg flex items-center justify-center siren-glow">
                    <Mail className="w-5 h-5 text-pearl-white" />
                  </div>
                  <div>
                    <p className="text-silver-pearl text-sm">Email us at</p>
                    <p className="text-pearl-white font-medium">hello@sirens.agency</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cosmic-purple to-divine-pink rounded-lg flex items-center justify-center siren-glow">
                    <Phone className="w-5 h-5 text-pearl-white" />
                  </div>
                  <div>
                    <p className="text-silver-pearl text-sm">Call us at</p>
                    <p className="text-pearl-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-divine-pink to-celestial-gold rounded-lg flex items-center justify-center siren-glow">
                    <MapPin className="w-5 h-5 text-pearl-white" />
                  </div>
                  <div>
                    <p className="text-silver-pearl text-sm">Visit us at</p>
                    <p className="text-pearl-white font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="siren-card rounded-2xl p-8 siren-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-silver-pearl text-sm font-medium mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-siren-teal" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-siren-black border border-silver-pearl/30 rounded-lg text-pearl-white placeholder-silver-pearl/50 focus:outline-none focus:ring-2 focus:ring-siren-teal focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-silver-pearl text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-siren-teal" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-siren-black border border-silver-pearl/30 rounded-lg text-pearl-white placeholder-silver-pearl/50 focus:outline-none focus:ring-2 focus:ring-siren-teal focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-silver-pearl text-sm font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-siren-teal" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-siren-black border border-silver-pearl/30 rounded-lg text-pearl-white placeholder-silver-pearl/50 focus:outline-none focus:ring-2 focus:ring-siren-teal focus:border-transparent resize-none transition-all duration-300"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full siren-button text-pearl-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="siren-card rounded-xl p-8 text-pearl-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to <span className="siren-text-gradient">Sound Different</span>?
            </h3>
            <p className="text-silver-pearl mb-6">
              Let's create something extraordinary together. Your brand deserves to be heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="siren-button px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="border border-siren-teal text-siren-teal px-8 py-3 rounded-lg font-semibold hover:bg-siren-teal hover:text-pearl-white transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;