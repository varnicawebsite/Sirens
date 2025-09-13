import React from 'react';
import { Volume2, Heart, Brain, Zap, Music, Car, Apple, Tv, Droplets } from 'lucide-react';

const WhySound = () => {
  const soundExamples = [
    {
      brand: "Ferrari",
      sound: "The Roar",
      icon: Car,
      description: "Instantly recognizable engine sound"
    },
    {
      brand: "Apple",
      sound: "Classic Ringtone", 
      icon: Apple,
      description: "Everyone knows that sound"
    },
    {
      brand: "Netflix",
      sound: "Ta-Dum",
      icon: Tv,
      description: "Two notes that mean entertainment"
    },
    {
      brand: "Coca-Cola",
      sound: "The Pop",
      icon: Droplets,
      description: "The sound of refreshment"
    }
  ];

  return (
    <section id="why-sound" className="py-20 bg-gradient-to-b from-slate-dark to-midnight relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
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
          <div className="inline-block p-4 premium-card rounded-full mb-6">
            <Brain className="w-12 h-12 text-electric-blue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-silver mb-6">
            Why Your Brand Needs a <span className="gradient-text">Sound</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-silver/80 leading-relaxed mb-8">
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
                className="premium-card rounded-xl p-6 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-electric-blue rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                    <Icon className="w-6 h-6 text-midnight" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-silver text-center mb-2">
                  {example.brand}
                </h3>
                <p className="text-electric-blue text-center font-medium mb-2">
                  "{example.sound}"
                </p>
                <p className="text-silver/70 text-sm text-center">
                  {example.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Message */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="premium-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-silver mb-6">
              We Recognize and Remember Through <span className="gradient-text">Sound</span>
            </h3>
            <p className="text-xl text-silver/80 leading-relaxed mb-8">
              Now, imagine your business has its own signature sound. Your brand isn't just seen - 
              it's <span className="font-semibold text-electric-blue">heard even before it's seen</span>. 
              People remember your sound, the feeling it evokes - not just your business, but your personal brand, 
              the signature sound of your wedding, birthday, company, or any event.
            </p>
            
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold gradient-text mb-4">
                Your Own Theme Song.
              </h4>
            </div>

            <div className="border-t border-silver/20 pt-8">
              <p className="text-lg text-silver/80 leading-relaxed mb-6">
                It's the choice between being a company and being a brand, between merely existing and being unforgettable. 
                Think about it - nothing stirs you over a normal phone ring, yet everyone recognizes the instant an Apple ringtone plays.
              </p>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-silver mb-6">
                  The choice is yours: just exist… or <span className="gradient-text">choose sound</span>
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="premium-button text-midnight px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
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