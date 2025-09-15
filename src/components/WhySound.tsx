import React from 'react';
import { Volume2, Heart, Brain, Zap, Music, Car, Apple, Tv, Droplets, Crown, Sparkles } from 'lucide-react';

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
    <section id="why-sound" className="py-20 ocean-wave cosmic-bg relative overflow-hidden">
      {/* Ocean Currents */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="ocean-current"
            style={{
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 2.5}s`,
              opacity: 0.15
            }}
          />
        ))}
      </div>

      {/* Mystical Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 mystical-card rounded-full mb-6 mystical-glow">
            <Brain className="w-12 h-12 text-mystic-teal" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-pearl-white mb-6">
            Why Your Brand Needs a <span className="siren-gradient">Sound</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-silver-mist leading-relaxed mb-8">
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
            const gradients = [
              'from-mystic-teal to-cosmic-purple',
              'from-cosmic-purple to-divine-pink',
              'from-divine-pink to-celestial-gold',
              'from-celestial-gold to-aurora-green'
            ];
            return (
              <div
                key={index}
                className="mystical-card rounded-xl p-6 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center group-hover:animate-pulse-cosmic mystical-glow`}>
                    <Icon className="w-6 h-6 text-pearl-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-pearl-white text-center mb-2">
                  {example.brand}
                </h3>
                <p className="text-mystic-teal text-center font-medium mb-2">
                  "{example.sound}"
                </p>
                <p className="text-silver-mist text-sm text-center">
                  {example.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Message */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="mystical-card rounded-2xl p-8 md:p-12 mystical-glow">
            <h3 className="text-2xl md:text-3xl font-bold text-pearl-white mb-6">
              We Recognize and Remember Through <span className="siren-gradient">Sound</span>
            </h3>
            <p className="text-xl text-silver-mist leading-relaxed mb-8">
              Now, imagine your business has its own signature sound. Your brand isn't just seen - 
              it's <span className="font-semibold text-mystic-teal">heard even before it's seen</span>. 
              People remember your sound, the feeling it evokes - not just your business, but your personal brand, 
              the signature sound of your wedding, birthday, company, or any event.
            </p>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-8 h-8 text-celestial-gold mr-3" />
                <h4 className="text-3xl font-bold siren-gradient">
                  Your Own Theme Song.
                </h4>
                <Crown className="w-8 h-8 text-celestial-gold ml-3" />
              </div>
            </div>

            <div className="border-t border-silver-mist/20 pt-8">
              <p className="text-lg text-silver-mist leading-relaxed mb-6">
                It's the choice between being a company and being a brand, between merely existing and being unforgettable. 
                Think about it - nothing stirs you over a normal phone ring, yet everyone recognizes the instant an Apple ringtone plays.
              </p>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-pearl-white mb-6 flex items-center justify-center">
                  The choice is yours: just exist… or 
                  <span className="siren-gradient ml-2 flex items-center">
                    <Sparkles className="w-6 h-6 mr-2" />
                    choose sound
                    <Sparkles className="w-6 h-6 ml-2" />
                  </span>
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="divine-button text-pearl-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
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