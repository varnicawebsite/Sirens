/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0A0A0A',
        'charcoal': '#1A1A1A',
        'slate-dark': '#2D2D2D',
        'silver': '#C0C0C0',
        'gold': '#FFD700',
        'electric-blue': '#00D4FF',
        'neon-green': '#39FF14',
        'deep-purple': '#4A0E4E',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'sound-wave': 'sound-wave 1.5s ease-in-out infinite',
        'float-gentle': 'float-gentle 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)',
            transform: 'scale(1.05)' 
          },
        },
        'sound-wave': {
          '0%, 100%': { height: '20px', opacity: '0.4' },
          '50%': { height: '40px', opacity: '1' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      }
    },
  },
  plugins: [],
}