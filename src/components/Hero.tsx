import React from 'react';
import { Volume2, Play, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-midnight via-charcoal to-slate-dark overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Sound Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="sound-ring w-32 h-32" style={{ animationDelay: '0s' }}></div>
        <div className="sound-ring w-48 h-48" style={{ animationDelay: '0.5s' }}></div>
        <div className="sound-ring w-64 h-64" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Logo with Glow Effect */}
          <div className="relative inline-block mb-8">
            <div className="float-gentle relative">
              <div className="bg-gradient-to-br from-gold to-electric-blue rounded-full p-6 animate-pulse-glow">
                <Volume2 className="w-16 h-16 text-midnight" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-silver mb-6 leading-tight">
            Every Brand Has a Look.
            <br />
            Only the <span className="gradient-text">Great Ones</span> Have a <span className="gradient-text">Sound</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-silver/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            We create signature sounds and comprehensive digital experiences that make your brand 
            <span className="font-semibold text-electric-blue"> unforgettable</span> - heard even before it's seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group premium-button text-midnight px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2 relative z-10">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Hear Our Sound Demos
              </span>
            </button>
            <button className="group border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 glow-border">
              Get Your Free Consultation
            </button>
          </div>

          {/* Sound Wave Visualization */}
          <div className="sound-visualizer mb-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="sound-bar h-5"></div>
            ))}
          </div>

          <p className="text-silver/60 text-sm">
            <Zap className="w-4 h-4 inline mr-2 text-gold" />
            Creating audio identities for brands worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;