/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Siren Brand Colors - Inspired by your logo
        'siren-black': '#0A0A0F',
        'vinyl-black': '#1A1A1F',
        'cosmic-void': '#0F0F14',
        'starfield': '#16161C',
        
        // Pearl Siren Tones
        'pearl-white': '#F8FAFC',
        'silver-pearl': '#E2E8F0',
        'moonlit-silver': '#CBD5E1',
        'ethereal-mist': '#94A3B8',
        
        // Signature Siren Blues
        'siren-teal': '#14B8A6',
        'deep-teal': '#0F766E',
        'ocean-blue': '#0EA5E9',
        'mystic-blue': '#0284C7',
        
        // Mystical Accents
        'cosmic-purple': '#8B5CF6',
        'divine-pink': '#EC4899',
        'celestial-gold': '#F59E0B',
        'aurora-green': '#10B981',
      },
      animation: {
        'vinyl-spin': 'vinyl-spin 8s linear infinite',
        'siren-glow': 'siren-glow 3s ease-in-out infinite alternate',
        'float-mystical': 'float-mystical 6s ease-in-out infinite',
        'ripple-sound': 'ripple-sound 4s ease-out infinite',
        'shimmer-pearl': 'shimmer-pearl 3s ease-in-out infinite',
      },
      keyframes: {
        'vinyl-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'siren-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(20, 184, 166, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)' 
          },
        },
        'float-mystical': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-10px) translateX(5px)' },
          '66%': { transform: 'translateY(-5px) translateX(-5px)' },
        },
        'ripple-sound': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
        'shimmer-pearl': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'siren-gradient': 'linear-gradient(135deg, #14B8A6 0%, #8B5CF6 50%, #EC4899 100%)',
        'vinyl-gradient': 'radial-gradient(circle, #1A1A1F 0%, #0A0A0F 100%)',
        'pearl-shimmer': 'linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.1), transparent)',
        'cosmic-bg': 'radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.1) 0%, transparent 50%), linear-gradient(135deg, #0A0A0F 0%, #16161C 50%, #1A1A1F 100%)',
      }
    },
  },
  plugins: [],
}