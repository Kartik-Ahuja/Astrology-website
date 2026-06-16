/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF9E7',
          100: '#F9F0C8',
          200: '#F3E19D',
          300: '#E8C962',
          400: '#D4AF37',
          500: '#C9A227',
          600: '#A88B1F',
          700: '#7F6918',
          800: '#614E14',
          900: '#4A3B10',
        },
        cream: {
          50: '#FEFDFB',
          100: '#FCFAF5',
          200: '#F8F4ED',
          300: '#F0EBE0',
          400: '#E5DED0',
        },
        ivory: '#FFFFF0',
        champagne: '#F7E7CE',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        latin: ['Cinzel', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F7E7CE 50%, #D4AF37 100%)',
        'gold-radial': 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
