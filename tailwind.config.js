/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Cosmic Ocean Colors
        'cosmic-void': '#0A0A0F',
        'starry-depths': '#1A1B2E',
        'midnight-ocean': '#16213E',
        'deep-current': '#0F3460',
        'ocean-mystery': '#16537E',
        
        // Ethereal Siren Colors
        'moonlit-pearl': '#F8FAFC',
        'silver-shimmer': '#E2E8F0',
        'pearl-mist': '#CBD5E1',
        'ethereal-silver': '#94A3B8',
        
        // Mystical Ocean Tones
        'mystic-turquoise': '#06B6D4',
        'siren-teal': '#0891B2',
        'ocean-jade': '#059669',
        'deep-emerald': '#047857',
        
        // Dreamy Night Ocean
        'violet-depths': '#7C3AED',
        'indigo-mystery': '#4F46E5',
        'cosmic-purple': '#6366F1',
        'aurora-violet': '#8B5CF6',
        
        // Magical Accents
        'moonbeam-gold': '#F59E0B',
        'starlight-pink': '#EC4899',
        'iridescent-blue': '#3B82F6',
      },
      animation: {
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'shimmer-flow': 'shimmer-flow 3s ease-in-out infinite',
        'ripple-expand': 'ripple-expand 4s ease-out infinite',
        'current-drift': 'current-drift 12s linear infinite',
        'pearl-glow': 'pearl-glow 2s ease-in-out infinite alternate',
        'siren-dance': 'siren-dance 8s ease-in-out infinite',
      },
      keyframes: {
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-8px) translateX(4px)' },
          '66%': { transform: 'translateY(-4px) translateX(-4px)' },
        },
        'shimmer-flow': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'ripple-expand': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'current-drift': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'pearl-glow': {
          '0%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)' },
        },
        'siren-dance': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(1deg) scale(1.02)' },
          '50%': { transform: 'rotate(0deg) scale(1.05)' },
          '75%': { transform: 'rotate(-1deg) scale(1.02)' },
        }
      },
      backgroundImage: {
        'cosmic-ocean': 'radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), linear-gradient(135deg, #0A0A0F 0%, #1A1B2E 25%, #16213E 50%, #0F3460 75%, #16537E 100%)',
        'siren-shimmer': 'linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.1), transparent)',
        'moonlit-gradient': 'linear-gradient(135deg, #06B6D4 0%, #7C3AED 50%, #EC4899 100%)',
        'ethereal-glow': 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 100%)',
      }
    },
  },
  plugins: [],
}