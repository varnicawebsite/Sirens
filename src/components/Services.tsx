import React from 'react';
import { Users, Volume2, BarChart3, Camera, User, Compass, Crown, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Volume2, 
      title: "Brand Theme Song / Audio Identity",
      description: "Your signature sound that makes your brand instantly recognizable - like Netflix's ta-dum or Apple's ringtone.",
      featured: true,
      color: "from-soft-aqua to-gentle-teal"
    },
    {
      icon: Users,
      title: "Social Authority Content Creation",
      description: "Strategic content creation and planning that establishes your brand as the authority in your space.",
      featured: false,
      color: "from-gentle-teal to-golden-ray"
    },
    {
      icon: Camera,
      title: "Cinematic Influence ADS",
      description: "From concept to camera to CGI - cinematic shoots that captivate and convert your audience.",
      featured: false,
      color: "from-golden-ray to-coral-whisper"
    },
    {
      icon: Crown,
      title: "Faces of Influence",
      description: "Professional model providing services to give your brand the perfect face and personality.",
      featured: false,
      color: "from-coral-whisper to-crystal-blue"
    },
    {
      icon: Compass,
      title: "The Visibility Engine",
      description: "Advanced SEO & Google My Business optimization that puts your brand where it needs to be found.",
      featured: false,
      color: "from-crystal-blue to-sea-foam"
    },
    {
      icon: Palette,
      title: "Digital Real Estate Redefined",
      description: "Website design & revamping that transforms your digital presence into a conversion powerhouse.",
      featured: false,
      color: "from-sea-foam to-aqua-dream"
    },
    {
      icon: BarChart3,
      title: "The Brand Book",
      description: "Complete brand identity system that ensures consistency across every touchpoint and interaction.",
      featured: false,
      color: "from-aqua-dream to-soft-aqua"
    }
  ];

  return (
    <section id="services" className="py-24 bg-ocean-gradient relative overflow-hidden">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              left: `${15 + i * 15}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${i * 0.8}s`,
              transform: `rotate(${-15 + Math.random() * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Underwater Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="underwater-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif-elegant text-4xl md:text-6xl font-bold text-moonlight-pearl mb-8">
            Full-Spectrum <span className="ocean-text-gradient">Digital Marketing</span>
          </h2>
          <p className="font-sans-airy text-xl text-pearl-shimmer max-w-4xl mx-auto leading-relaxed">
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
                  service.featured ? 'ring-2 ring-soft-aqua ring-opacity-50 pearl-glow' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-6 bg-gradient-to-r from-soft-aqua to-gentle-teal text-moonlight-pearl px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Signature Service
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-moonlight-pearl" />
                </div>

                <h3 className="font-serif-elegant text-xl font-semibold text-moonlight-pearl mb-4">
                  {service.title}
                </h3>

                <p className="font-sans-airy text-pearl-shimmer leading-relaxed">
                  {service.description}
                </p>

                {service.featured && (
                  <div className="mt-6 flex items-center text-soft-aqua font-medium text-sm">
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
          <div className="ocean-card rounded-2xl p-12 text-moonlight-pearl">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-ocean-depths to-deep-current rounded-full border-2 border-soft-aqua flex items-center justify-center animate-gentle-float shadow-lg">
                <img 
                  src="/SirensLogo.jpeg" 
                  alt="Sirens Logo" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
            </div>
            <h3 className="font-serif-elegant text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="ocean-text-gradient">Sound Different</span>?
            </h3>
            <p className="font-sans-airy text-pearl-shimmer mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Let's discuss how we can amplify your brand with both digital marketing excellence and signature sound design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ocean-button text-moonlight-pearl px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ripple-container"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-20"></div>
    </section>
  );
};

export default Services;
