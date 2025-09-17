import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-dark-gradient overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Revolving Vinyl Disc Logo */}
          <div className="relative inline-block mb-8">
            <div className="vinyl-disc gentle-glow">
              <div className="siren-logo-container">
                <img 
                  src="/SirensLogo.jpeg" 
                  alt="Sirens Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-pearl-white mb-6 leading-tight">
            Every Brand Has a Look.
            <br />
            Only the <span className="siren-text-gradient">Great Ones</span> Have a <span className="siren-text-gradient">Sound</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-silver-mist mb-8 max-w-3xl mx-auto leading-relaxed">
            We create signature sounds and comprehensive digital experiences that make your brand 
            <span className="font-semibold text-siren-teal"> unforgettable</span> - heard even before it's seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group siren-button text-pearl-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2 relative z-10">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Hear Our Sound Demos
              </span>
            </button>
            <button className="group border-2 border-siren-teal text-siren-teal hover:bg-siren-teal hover:text-siren-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Your Free Consultation
            </button>
          </div>

          {/* Sound Wave Visualization */}
          <div className="sound-wave mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="sound-bar"></div>
            ))}
          </div>

          <p className="text-silver-mist text-sm flex items-center justify-center">
            <Sparkles className="w-4 h-4 mr-2 text-accent-gold" />
            Creating signature audio identities for brands worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;