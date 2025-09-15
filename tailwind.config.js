/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Ocean Colors
        'abyss': '#0B1426',
        'deep-ocean': '#1A2B47',
        'ocean-blue': '#2E4A6B',
        'tidal-blue': '#4A6FA5',
        'sea-foam': '#7FB3D3',
        
        // Mystical Siren Colors
        'pearl-white': '#F8FAFC',
        'silver-mist': '#E2E8F0',
        'moonlight': '#CBD5E1',
        'starlight': '#94A3B8',
        
        // Magical Accents
        'cosmic-purple': '#6366F1',
        'mystic-teal': '#14B8A6',
        'aurora-green': '#10B981',
        'celestial-gold': '#F59E0B',
        'divine-pink': '#EC4899',
      },
      animation: {
        'wave-gentle': 'wave-gentle 6s ease-in-out infinite',
        'float-mystical': 'float-mystical 8s ease-in-out infinite',
        'shimmer-divine': 'shimmer-divine 4s ease-in-out infinite',
        'pulse-cosmic': 'pulse-cosmic 3s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out infinite',
        'current-flow': 'current-flow 10s linear infinite',
      },
      keyframes: {
        'wave-gentle': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        'float-mystical': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(-5px)' },
          '75%': { transform: 'translateY(-15px) translateX(3px)' },
        },
        'shimmer-divine': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-cosmic': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(20, 184, 166, 0.2)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.6), 0 0 80px rgba(20, 184, 166, 0.4)',
            transform: 'scale(1.05)' 
          },
        },
        'ripple': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'current-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        }
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #0B1426 0%, #1A2B47 25%, #2E4A6B 50%, #4A6FA5 75%, #7FB3D3 100%)',
        'mystical-gradient': 'linear-gradient(135deg, #6366F1 0%, #14B8A6 50%, #10B981 100%)',
        'divine-shimmer': 'linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.3), transparent)',
        'cosmic-radial': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}