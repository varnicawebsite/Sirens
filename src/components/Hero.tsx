import React from 'react';
import { Shell, Play, Waves } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-underwater relative min-h-screen bg-gradient-to-br from-seashell-blush via-white to-seashell-blush overflow-hidden">
      {/* Floating Bubbles Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
      </div>

      {/* Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="wave-layer wave-layer-1"></div>
        <div className="wave-layer wave-layer-2"></div>
        <div className="wave-layer wave-layer-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Floating Logo with Ripple Effect */}
          <div className="relative inline-block mb-8">
            <div className="floating-logo relative">
              <div className="ripple-effect"></div>
              <div className="bg-deep-teal/20 backdrop-blur-sm rounded-full p-6 border border-deep-teal/30">
                <Shell className="w-16 h-16 text-deep-teal" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-stormy-waters mb-6 leading-tight">
            Every Brand Has a Look.
            <br />
            Only the <span className="text-deep-teal">Great Ones</span> Have a <span className="text-deep-teal">Sound</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-stormy-waters/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            We create signature sounds and comprehensive digital experiences that make your brand 
            <span className="font-semibold text-deep-teal">unforgettable</span> - heard even before it's seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-deep-teal hover:bg-stormy-waters text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Hear Our Sound Demos
              </span>
            </button>
            <button className="group border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Your Free Consultation
            </button>
          </div>

          {/* Sound Wave Visualization */}
          <div className="flex justify-center items-center gap-2 opacity-60">
            <Waves className="w-6 h-6 text-deep-teal animate-pulse" />
            <div className="flex gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-deep-teal rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 30 + 10}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.5s'
                  }}
                />
              ))}
            </div>
            <Waves className="w-6 h-6 text-deep-teal animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;