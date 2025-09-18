import React from 'react';
import { Search, Users, MousePointer, Mail, Palette, Volume2, BarChart3, Target, Camera, User, Compass, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Volume2, 
      title: "Brand Theme Song / Audio Identity",
      description: "Your signature sound that makes your brand instantly recognizable - like Netflix's ta-dum or Apple's ringtone.",
      featured: true,
      color: "from-mystic-teal to-cosmic-purple"
    },
    {
      icon: Users,
      title: "Social Authority Content Creation",
      description: "Strategic content creation and planning that establishes your brand as the authority in your space.",
      featured: false,
      color: "from-cosmic-purple to-golden-accent"
    },
    {
      icon: Camera,
      title: "Cinematic Influence ADS",
      description: "From concept to camera to CGI - cinematic shoots that captivate and convert your audience.",
      featured: false,
      color: "from-golden-accent to-mystic-teal"
    },
    {
      icon: Crown,
      title: "Faces of Influence",
      description: "Professional model providing services to give your brand the perfect face and personality.",
      featured: false,
      color: "from-mystic-teal to-deep-teal"
    },
    {
      icon: Compass,
      title: "The Visibility Engine",
      description: "Advanced SEO & Google My Business optimization that puts your brand where it needs to be found.",
      featured: false,
      color: "from-deep-teal to-cosmic-purple"
    },
    {
      icon: Palette,
      title: "Digital Real Estate Redefined",
      description: "Website design & revamping that transforms your digital presence into a conversion powerhouse.",
      featured: false,
      color: "from-cosmic-purple to-golden-accent"
    },
    {
      icon: BarChart3,
      title: "The Brand Book",
      description: "Complete brand identity system that ensures consistency across every touchpoint and interaction.",
      featured: false,
      color: "from-golden-accent to-mystic-teal"
    }
  ];

  return (
    <section id="services" className="py-20 bg-ocean-gradient relative overflow-hidden">
      {/* Mystical Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Full-Spectrum <span className="siren-text-gradient">Digital Marketing</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From SEO to sound design, we provide comprehensive digital marketing solutions 
            that give your brand a complete competitive advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative siren-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                  service.featured ? 'ring-2 ring-mystic-teal ring-opacity-50 siren-glow' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-mystic-teal to-cosmic-purple text-text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Signature Service
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {service.featured && (
                  <div className="mt-4 flex items-center text-mystic-teal font-medium text-sm">
                    <Volume2 className="w-4 h-4 mr-2" />
                    <span>Our Signature Edge</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="siren-card rounded-xl p-8 text-text-primary">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-midnight-blue to-deep-ocean rounded-full border-2 border-mystic-teal flex items-center justify-center animate-vinyl-spin">
                <img 
                  src="/SirensLogo.jpeg" 
                  alt="Sirens Logo" 
                  className="w-6 h-6 object-cover rounded-full"
                />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to <span className="siren-text-gradient">Sound Different</span>?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss how we can amplify your brand with both digital marketing excellence and signature sound design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="siren-button text-text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
