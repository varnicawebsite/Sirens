/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep oceanic base colors
        'deep-ocean': '#0B1426',
        'midnight-blue': '#1A2332',
        'ocean-depth': '#243447',
        
        // Siren brand colors from logo
        'siren-silver': '#C8D5E8',
        'pearl-glow': '#E8F1FF',
        'mystic-teal': '#4FD1C7',
        'deep-teal': '#2DD4BF',
        
        // Accent colors
        'cosmic-purple': '#8B5CF6',
        'golden-accent': '#F59E0B',
        'soft-pink': '#F472B6',
        
        // Text colors
        'text-primary': '#F8FAFC',
        'text-secondary': '#CBD5E1',
        'text-muted': '#94A3B8',
      },
      animation: {
        'vinyl-spin': 'vinyl-spin 8s linear infinite',
        'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'sound-wave': 'sound-wave 2s ease-in-out infinite',
      },
      keyframes: {
        'vinyl-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gentle-pulse': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'sound-wave': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.5)' },
        }
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #0B1426 0%, #1A2332 50%, #243447 100%)',
        'siren-gradient': 'linear-gradient(135deg, #4FD1C7 0%, #8B5CF6 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(36, 52, 71, 0.6) 100%)',
      }
    },
  },
  plugins: [],
}