/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'siren-black': '#0A0A0F',
        'vinyl-black': '#1A1A1F',
        'cosmic-void': '#0F0F14',
        
        // Light colors for text
        'pearl-white': '#F8FAFC',
        'silver-mist': '#E2E8F0',
        'soft-gray': '#94A3B8',
        
        // Brand colors
        'siren-teal': '#14B8A6',
        'deep-teal': '#0F766E',
        
        // Minimal accents
        'accent-purple': '#8B5CF6',
        'accent-gold': '#F59E0B',
      },
      animation: {
        'vinyl-spin': 'vinyl-spin 8s linear infinite',
        'gentle-glow': 'gentle-glow 3s ease-in-out infinite alternate',
        'sound-pulse': 'sound-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'vinyl-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gentle-glow': {
          '0%': { boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(20, 184, 166, 0.6)' },
        },
        'sound-pulse': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.5)' },
        }
      },
      backgroundImage: {
        'siren-gradient': 'linear-gradient(135deg, #14B8A6 0%, #8B5CF6 100%)',
        'vinyl-gradient': 'radial-gradient(circle, #1A1A1F 0%, #0A0A0F 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A0A0F 0%, #1A1A1F 100%)',
      }
    },
  },
  plugins: [],
}