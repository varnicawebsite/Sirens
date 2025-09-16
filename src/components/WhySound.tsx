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
    <section id="why-sound" className="py-20 bg-cosmic-bg relative overflow-hidden">
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
          <div className="inline-block p-4 siren-card rounded-full mb-6 siren-glow">
            <div className="w-12 h-12 bg-vinyl-gradient rounded-full border-2 border-siren-teal flex items-center justify-center animate-vinyl-spin">
              <img 
                src="/public/SirensLogo.jpeg" 
                alt="Sirens Logo" 
                className="w-6 h-6 object-cover rounded-full"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-pearl-white mb-6">
            Why Your Brand Needs a <span className="siren-text-gradient">Sound</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-silver-pearl leading-relaxed mb-8">
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
              'from-siren-teal to-cosmic-purple',
              'from-cosmic-purple to-divine-pink',
              'from-divine-pink to-celestial-gold',
              'from-celestial-gold to-aurora-green'
            ];
            return (
              <div
                key={index}
                className="siren-card rounded-xl p-6 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center group-hover:animate-siren-glow siren-glow`}>
                    <Icon className="w-6 h-6 text-pearl-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-pearl-white text-center mb-2">
                  {example.brand}
                </h3>
                <p className="text-siren-teal text-center font-medium mb-2">
                  "{example.sound}"
                </p>
                <p className="text-silver-pearl text-sm text-center">
                  {example.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Message */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="siren-card rounded-2xl p-8 md:p-12 siren-glow">
            <div className="flex justify-center mb-6">
              <div className="vinyl-disc siren-glow">
                <div className="siren-logo-container">
                  <img 
                    src="/public/SirensLogo.jpeg" 
                    alt="Sirens Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-pearl-white mb-6">
              We Recognize and Remember Through <span className="siren-text-gradient">Sound</span>
            </h3>
            <p className="text-xl text-silver-pearl leading-relaxed mb-8">
              Now, imagine your business has its own signature sound. Your brand isn't just seen - 
              it's <span className="font-semibold text-siren-teal">heard even before it's seen</span>. 
              People remember your sound, the feeling it evokes - not just your business, but your personal brand, 
              the signature sound of your wedding, birthday, company, or any event.
            </p>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-8 h-8 text-celestial-gold mr-3" />
                <h4 className="text-3xl font-bold siren-text-gradient">
                  Your Own Theme Song.
                </h4>
                <Crown className="w-8 h-8 text-celestial-gold ml-3" />
              </div>
            </div>

            <div className="border-t border-silver-pearl/20 pt-8">
              <p className="text-lg text-silver-pearl leading-relaxed mb-6">
                It's the choice between being a company and being a brand, between merely existing and being unforgettable. 
                Think about it - nothing stirs you over a normal phone ring, yet everyone recognizes the instant an Apple ringtone plays.
              </p>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-pearl-white mb-6 flex items-center justify-center">
                  The choice is yours: just exist… or 
                  <span className="siren-text-gradient ml-2 flex items-center">
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
                  className="siren-button text-pearl-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
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
