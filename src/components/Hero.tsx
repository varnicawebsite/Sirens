import React from 'react';
import { Volume2, Play, Waves, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-cosmic-ocean overflow-hidden">
      {/* Ocean Currents */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="ocean-current"
            style={{
              top: `${20 + i * 12}%`,
              animationDelay: `${i * 2}s`,
              opacity: 0.3 + (i * 0.1)
            }}
          />
        ))}
      </div>

      {/* Mystical Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="mystical-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Divine Ripples */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="divine-ripple w-32 h-32"></div>
        <div className="divine-ripple w-48 h-48"></div>
        <div className="divine-ripple w-64 h-64"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Siren Logo */}
          <div className="relative inline-block mb-8">
            <div className="siren-logo relative">
              <div className="ethereal-glow bg-gradient-to-br from-mystic-turquoise via-violet-depths to-starlight-pink rounded-full p-8">
                <img 
                  src="/public/WhatsApp Image 2025-09-15 at 7.36.43 PM.jpeg" 
                  alt="Sirens Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-moonlit-pearl mb-6 leading-tight flowing-text">
            Every Brand Has a Look.
            <br />
            Only the <span className="siren-gradient">Great Ones</span> Have a <span className="siren-gradient">Sound</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-silver-shimmer mb-8 max-w-3xl mx-auto leading-relaxed flowing-text">
            We create signature sounds and comprehensive digital experiences that make your brand 
            <span className="font-semibold text-mystic-turquoise"> unforgettable</span> - heard even before it's seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group moonlit-button text-moonlit-pearl px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg moonlight-reflection">
              <span className="flex items-center gap-2 relative z-10">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Hear Our Sound Demos
              </span>
            </button>
            <button className="group border-2 border-mystic-turquoise text-mystic-turquoise hover:bg-mystic-turquoise hover:text-cosmic-void px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ethereal-glow moonlight-reflection">
              Get Your Free Consultation
            </button>
          </div>

          {/* Siren Sound Wave Visualization */}
          <div className="siren-sound-wave mb-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="sound-bar"></div>
            ))}
          </div>

          <p className="text-silver-shimmer text-sm flex items-center justify-center flowing-text">
            <Sparkles className="w-4 h-4 mr-2 text-moonbeam-gold" />
            Creating mystical audio identities for brands worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;