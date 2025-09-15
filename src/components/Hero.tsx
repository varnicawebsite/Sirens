import React from 'react';
import { Volume2, Play, Waves, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen ocean-wave cosmic-bg overflow-hidden">
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
          {/* Mystical Logo */}
          <div className="relative inline-block mb-8">
            <div className="float-mystical relative">
              <div className="mystical-glow bg-gradient-to-br from-mystic-teal via-cosmic-purple to-divine-pink rounded-full p-8 animate-pulse-cosmic">
                <Volume2 className="w-20 h-20 text-pearl-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-pearl-white mb-6 leading-tight">
            Every Brand Has a Look.
            <br />
            Only the <span className="siren-gradient">Great Ones</span> Have a <span className="siren-gradient">Sound</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-silver-mist mb-8 max-w-3xl mx-auto leading-relaxed">
            We create signature sounds and comprehensive digital experiences that make your brand 
            <span className="font-semibold text-mystic-teal"> unforgettable</span> - heard even before it's seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group divine-button text-pearl-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="flex items-center gap-2 relative z-10">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Hear Our Sound Demos
              </span>
            </button>
            <button className="group border-2 border-mystic-teal text-mystic-teal hover:bg-mystic-teal hover:text-abyss px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 mystical-glow">
              Get Your Free Consultation
            </button>
          </div>

          {/* Siren Sound Wave Visualization */}
          <div className="siren-sound-wave mb-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="sound-bar"></div>
            ))}
          </div>

          <p className="text-silver-mist text-sm flex items-center justify-center">
            <Sparkles className="w-4 h-4 mr-2 text-celestial-gold" />
            Creating mystical audio identities for brands worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;