import React from 'react';
import { Search, Users, MousePointer, Mail, Palette, Volume2, BarChart3, Target, Camera, User, Compass, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Volume2, 
      title: "Brand Theme Song / Audio Identity",
      description: "Your signature sound that makes your brand instantly recognizable - like Netflix's ta-dum or Apple's ringtone.",
      featured: true,
      color: "from-mystic-turquoise to-violet-depths"
    },
    {
      icon: Users,
      title: "Social Authority Content Creation",
      description: "Strategic content creation and planning that establishes your brand as the authority in your space.",
      featured: false,
      color: "from-violet-depths to-starlight-pink"
    },
    {
      icon: Camera,
      title: "Cinematic Influence ADS",
      description: "From concept to camera to CGI - cinematic shoots that captivate and convert your audience.",
      featured: false,
      color: "from-starlight-pink to-moonbeam-gold"
    },
    {
      icon: Crown,
      title: "Faces of Influence",
      description: "Professional model providing services to give your brand the perfect face and personality.",
      featured: false,
      color: "from-moonbeam-gold to-ocean-jade"
    },
    {
      icon: Compass,
      title: "The Visibility Engine",
      description: "Advanced SEO & Google My Business optimization that puts your brand where it needs to be found.",
      featured: false,
      color: "from-ocean-jade to-mystic-turquoise"
    },
    {
      icon: Palette,
      title: "Digital Real Estate Redefined",
      description: "Website design & revamping that transforms your digital presence into a conversion powerhouse.",
      featured: false,
      color: "from-mystic-turquoise to-violet-depths"
    },
    {
      icon: BarChart3,
      title: "The Brand Book",
      description: "Complete brand identity system that ensures consistency across every touchpoint and interaction.",
      featured: false,
      color: "from-violet-depths to-starlight-pink"
    }
  ];

  return (
    <section id="services" className="py-20 bg-cosmic-ocean relative overflow-hidden">
      {/* Ocean Currents */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="ocean-current"
            style={{
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 3}s`,
              opacity: 0.2
            }}
          />
        ))}
      </div>

      {/* Mystical Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="mystical-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/public/WhatsApp Image 2025-09-15 at 7.36.43 PM.jpeg" 
              alt="Sirens Logo" 
              className="w-16 h-16 object-contain siren-logo ethereal-glow"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-moonlit-pearl mb-6 flowing-text">
            Full-Spectrum <span className="siren-gradient">Digital Marketing</span>
          </h2>
          <p className="text-xl text-silver-shimmer max-w-3xl mx-auto leading-relaxed flowing-text">
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
                className={`group relative mystical-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 moonlight-reflection ${
                  service.featured ? 'ring-2 ring-mystic-turquoise ring-opacity-50 ethereal-glow' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-mystic-turquoise to-violet-depths text-moonlit-pearl px-3 py-1 rounded-full text-sm font-semibold flowing-text">
                    Signature Service
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ethereal-glow`}>
                  <Icon className="w-6 h-6 text-moonlit-pearl" />
                </div>

                <h3 className="text-xl font-semibold text-moonlit-pearl mb-3 flowing-text">
                  {service.title}
                </h3>

                <p className="text-silver-shimmer leading-relaxed flowing-text">
                  {service.description}
                </p>

                {service.featured && (
                  <div className="mt-4 flex items-center text-mystic-turquoise font-medium text-sm flowing-text">
                    <Volume2 className="w-4 h-4 mr-2" />
                    <span>Our Mystical Edge</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="mystical-card rounded-xl p-8 text-moonlit-pearl">
            <div className="flex justify-center mb-4">
              <img 
                src="/public/WhatsApp Image 2025-09-15 at 7.36.43 PM.jpeg" 
                alt="Sirens Logo" 
                className="w-12 h-12 object-contain siren-logo"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flowing-text">
              Ready to <span className="siren-gradient">Sound Different</span>?
            </h3>
            <p className="text-silver-shimmer mb-6 max-w-2xl mx-auto flowing-text">
              Let's discuss how we can amplify your brand with both digital marketing excellence and signature sound design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="moonlit-button text-moonlit-pearl px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 moonlight-reflection flowing-text"
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