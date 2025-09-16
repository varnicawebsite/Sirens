import React, { useState } from 'react';
import { Play, Pause, Volume2, Music, Waves, Sparkles } from 'lucide-react';

const SoundDemos = () => {
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);

  const soundDemos = [
    {
      id: 'netflix-style',
      title: 'Netflix-Style Brand Sound',
      description: 'Deep, memorable audio logo for streaming platform',
      duration: '2.3s',
      category: 'Audio Logo'
    },
    {
      id: 'google-pay-chime',
      title: 'Payment Success Chime',
      description: 'Friendly, trustworthy sound for financial transactions',
      duration: '1.8s',
      category: 'UI Sound'
    },
    {
      id: 'startup-jingle',
      title: 'Tech Startup Jingle',
      description: 'Modern, innovative sound for app launches',
      duration: '3.1s',
      category: 'Brand Jingle'
    },
    {
      id: 'notification-tone',
      title: 'Custom Notification',
      description: 'Subtle, non-intrusive alert sound',
      duration: '1.2s',
      category: 'Notification'
    }
  ];

  const handlePlayPause = (demoId: string) => {
    if (playingDemo === demoId) {
      setPlayingDemo(null);
    } else {
      setPlayingDemo(demoId);
      // Simulate audio playback duration
      setTimeout(() => setPlayingDemo(null), 3000);
    }
  };

  return (
    <section id="sound-demos" className="py-20 bg-cosmic-ocean relative overflow-hidden">
      {/* Ocean Currents */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="ocean-current"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 4}s`,
              opacity: 0.2
            }}
          />
        ))}
      </div>

      {/* Mystical Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="mystical-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <img 
                src="/public/WhatsApp Image 2025-09-15 at 7.36.43 PM.jpeg" 
                alt="Sirens Logo" 
                className="w-12 h-12 object-contain siren-logo ethereal-glow"
              />
              <div className="absolute inset-0 animate-ping">
                <Music className="w-12 h-12 text-mystic-turquoise opacity-30" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-moonlit-pearl mb-6 flowing-text">
            Hear the <span className="siren-gradient">Magic</span>
          </h2>
          <p className="text-xl text-silver-shimmer max-w-3xl mx-auto leading-relaxed flowing-text">
            Experience our signature brand sounds that captivate audiences and create lasting emotional connections. 
            Each sound is crafted to embody your brand's unique personality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {soundDemos.map((demo, index) => {
            const gradients = [
              'from-mystic-turquoise to-violet-depths',
              'from-violet-depths to-starlight-pink',
              'from-starlight-pink to-moonbeam-gold',
              'from-moonbeam-gold to-ocean-jade'
            ];
            
            return (
              <div
                key={demo.id}
                className="mystical-card rounded-2xl p-6 transition-all duration-300 group hover:scale-105 ethereal-glow moonlight-reflection"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium text-moonlit-pearl bg-gradient-to-r ${gradients[index]} px-3 py-1 rounded-full flowing-text`}>
                    {demo.category}
                  </span>
                  <span className="text-sm text-silver-shimmer font-mono">
                    {demo.duration}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-moonlit-pearl mb-2 flowing-text">
                  {demo.title}
                </h3>
                <p className="text-silver-shimmer text-sm mb-6 leading-relaxed flowing-text">
                  {demo.description}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handlePlayPause(demo.id)}
                    className={`flex items-center space-x-2 bg-gradient-to-r ${gradients[index]} text-moonlit-pearl px-4 py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg hover:scale-105 moonlight-reflection`}
                  >
                    {playingDemo === demo.id ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium flowing-text">
                      {playingDemo === demo.id ? 'Playing' : 'Play'}
                    </span>
                  </button>

                  <div className="flex items-center space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-gradient-to-t ${gradients[index]} rounded-full transition-all duration-300 ${
                          playingDemo === demo.id
                            ? 'h-6 animate-pulse'
                            : 'h-3'
                        }`}
                        style={{
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {playingDemo === demo.id && (
                  <div className="mt-4 mystical-card rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-mystic-turquoise">
                      <Volume2 className="w-4 h-4 animate-pulse" />
                      <div className="flex-1 bg-midnight-ocean rounded-full h-2 overflow-hidden">
                        <div className={`bg-gradient-to-r ${gradients[index]} h-full rounded-full animate-pulse`} style={{ width: '60%' }} />
                      </div>
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center mb-4">
            <img 
              src="/public/WhatsApp Image 2025-09-15 at 7.36.43 PM.jpeg" 
              alt="Sirens Logo" 
              className="w-10 h-10 object-contain siren-logo"
            />
          </div>
          <p className="text-silver-shimmer mb-6 flex items-center justify-center flowing-text">
            <Waves className="w-5 h-5 mr-2 text-mystic-turquoise" />
            Ready to create your signature sound?
            <Waves className="w-5 h-5 ml-2 text-mystic-turquoise" />
          </p>
          <button className="moonlit-button text-moonlit-pearl px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 moonlight-reflection flowing-text">
            Start Your Sound Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoundDemos;