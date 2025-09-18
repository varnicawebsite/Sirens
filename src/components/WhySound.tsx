import React from 'react';
import { Car, Apple, Tv, Droplets, Crown, Sparkles } from 'lucide-react';

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
    <section id="why-sound" className="py-24 bg-gradient-to-b from-ocean-depths to-deep-current relative overflow-hidden">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              left: `${10 + i * 10}%`,
              top: `${Math.random() * 70}%`,
              animationDelay: `${i * 0.6}s`,
              transform: `rotate(${-20 + Math.random() * 40}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Underwater Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="underwater-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif-elegant text-4xl md:text-6xl font-bold text-moonlight-pearl mb-8">
            Why Your Brand Needs a <span className="ocean-text-gradient">Sound</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="font-sans-airy text-xl text-pearl-shimmer leading-relaxed mb-8">
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
              'from-soft-aqua to-gentle-teal',
              'from-gentle-teal to-golden-ray',
              'from-golden-ray to-coral-whisper',
              'from-coral-whisper to-crystal-blue'
            ];
            return (
              <div
                key={index}
                className="ocean-card rounded-2xl p-8 transition-all duration-500 group hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center group-hover:animate-shimmer pearl-glow shadow-lg`}>
                    <Icon className="w-8 h-8 text-moonlight-pearl" />
                  </div>
                </div>
                <h3 className="font-serif-elegant text-xl font-semibold text-moonlight-pearl text-center mb-3">
                  {example.brand}
                </h3>
                <p className="text-soft-aqua text-center font-medium mb-3 text-lg">
                  "{example.sound}"
                </p>
                <p className="font-sans-airy text-pearl-shimmer text-sm text-center leading-relaxed">
                  {example.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Message */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="ocean-card rounded-3xl p-10 md:p-16 pearl-glow">
            <h3 className="font-serif-elegant text-3xl md:text-4xl font-bold text-moonlight-pearl mb-8">
              We Recognize and Remember Through <span className="ocean-text-gradient">Sound</span>
            </h3>
            <p className="font-sans-airy text-xl text-pearl-shimmer leading-relaxed mb-10">
              Now, imagine your business has its own signature sound. Your brand isn't just seen - 
              it's <span className="font-semibold text-soft-aqua">heard even before it's seen</span>. 
              People remember your sound, the feeling it evokes - not just your business, but your personal brand, 
              the signature sound of your wedding, birthday, company, or any event.
            </p>
            
            <div className="text-center mb-10">
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-10 h-10 text-golden-ray mr-4 animate-shimmer" />
                <h4 className="font-serif-elegant text-4xl font-bold ocean-text-gradient">
                  Your Own Theme Song.
                </h4>
                <Crown className="w-10 h-10 text-golden-ray ml-4 animate-shimmer" />
              </div>
            </div>

            <div className="border-t border-soft-aqua/20 pt-10">
              <p className="font-sans-airy text-lg text-pearl-shimmer leading-relaxed mb-8">
                It's the choice between being a company and being a brand, between merely existing and being unforgettable. 
                Think about it - nothing stirs you over a normal phone ring, yet everyone recognizes the instant an Apple ringtone plays.
              </p>
              
              <div className="text-center">
                <p className="font-serif-elegant text-2xl md:text-3xl font-bold text-moonlight-pearl mb-8 flex items-center justify-center flex-wrap">
                  The choice is yours: just exist… or 
                  <span className="ocean-text-gradient ml-2 flex items-center">
                    <Sparkles className="w-7 h-7 mr-2 animate-shimmer" />
                    choose sound
                    <Sparkles className="w-7 h-7 ml-2 animate-shimmer" />
                  </span>
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="ocean-button text-moonlight-pearl px-12 py-5 rounded-full font-semibold text-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ripple-container"
                >
                  Choose Your Sound
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-25"></div>
    </section>
  );
};

export default WhySound;
