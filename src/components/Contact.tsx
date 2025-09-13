import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-gradient-to-br from-charcoal to-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-silver mb-6">
            Let's Create Something <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className="text-xl text-silver/80 max-w-3xl mx-auto leading-relaxed">
            Ready to give your brand its signature sound? Get in touch and let's discuss how we can amplify your digital presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="premium-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-silver mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-electric-blue rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-midnight" />
                  </div>
                  <div>
                    <p className="text-silver/70 text-sm">Email us at</p>
                    <p className="text-silver font-medium">hello@sirens.agency</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-electric-blue rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-midnight" />
                  </div>
                  <div>
                    <p className="text-silver/70 text-sm">Call us at</p>
                    <p className="text-silver font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-electric-blue rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-midnight" />
                  </div>
                  <div>
                    <p className="text-silver/70 text-sm">Visit us at</p>
                    <p className="text-silver font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="premium-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-silver/80 text-sm font-medium mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-electric-blue" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-slate-dark border border-silver/30 rounded-lg text-silver placeholder-silver/50 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-silver/80 text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-electric-blue" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-slate-dark border border-silver/30 rounded-lg text-silver placeholder-silver/50 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-silver/80 text-sm font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-electric-blue" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-slate-dark border border-silver/30 rounded-lg text-silver placeholder-silver/50 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full premium-button text-midnight font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;