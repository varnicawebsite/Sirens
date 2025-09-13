import React from 'react';
import { Volume2, Heart, Brain, Zap, Music } from 'lucide-react';

const WhySound = () => {
  const soundExamples = [
    {
      brand: "Ferrari",
      sound: "The Roar",
      icon: Zap,
      description: "Instantly recognizable engine sound"
    },
    {
      brand: "Apple",
      sound: "Classic Ringtone", 
      icon: Volume2,
      description: "Everyone knows that sound"
    },
    {
      brand: "Netflix",
      sound: "Ta-Dum",
      icon: Music,
      description: "Two notes that mean entertainment"
    },
    {
      brand: "Coca-Cola",
      sound: "The Pop",
      icon: Heart,
      description: "The sound of refreshment"
    }
  ];

  return (
    <section id="why-sound" className="py-20 bg-gradient-to-b from-deep-teal to-stormy-waters relative overflow-hidden">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 opacity-20">
        <div className="underwater-rays"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="underwater-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Brain className="w-12 h-12 text-seashell-blush" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Your Brand Needs a Sound
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-seashell-blush leading-relaxed mb-8">
              Think of the roar of a Ferrari, the pop of a soda, or the theme song of your favorite movie - 
              Interstellar, The Godfather. Apple has its classic ringtone. Netflix has its iconic ta-dum. 
              Even the superheroes we grew up with all have their signature sounds.
            </p>
          </div>
        </div>

        {/* Sound Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {soundExamples.map((example, index) => {
            const Icon = example.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-seashell-blush/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-seashell-blush rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-deep-teal" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">
                  {example.brand}
                </h3>
                <p className="text-seashell-blush text-center font-medium mb-2">
                  "{example.sound}"
                </p>
                <p className="text-seashell-blush/80 text-sm text-center">
                  {example.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Message */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-seashell-blush/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              We Recognize and Remember Through Sound
            </h3>
            <p className="text-xl text-seashell-blush leading-relaxed mb-8">
              Now, imagine your business has its own signature sound. Your brand isn't just seen - 
              it's <span className="font-semibold text-white">heard even before it's seen</span>. 
              People remember your sound, the feeling it evokes - not just your business, but your personal brand, 
              the signature sound of your wedding, birthday, company, or any event.
            </p>
            
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold text-seashell-blush mb-4">
                Your Own Theme Song.
              </h4>
            </div>

            <div className="border-t border-seashell-blush/20 pt-8">
              <p className="text-lg text-seashell-blush leading-relaxed mb-6">
                It's the choice between being a company and being a brand, between merely existing and being unforgettable. 
                Think about it - nothing stirs you over a normal phone ring, yet everyone recognizes the instant an Apple ringtone plays.
              </p>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-white mb-6">
                  The choice is yours: just exist… or choose sound
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-seashell-blush hover:bg-white text-deep-teal px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Choose Your Sound
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySound;