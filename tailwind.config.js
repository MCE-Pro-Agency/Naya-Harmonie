/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sauge: {
          50: '#F1F4ED',
          100: '#E2EAD9',
          300: '#B5C5A2',
          500: '#9CAF88',
          700: '#6B7F5C',
          900: '#3D4A33',
        },
        rose: {
          100: '#F5E2E5',
          300: '#E8B4B8',
          500: '#D69CA1',
          700: '#C99499',
          900: '#8C5A5F',
        },
        ivoire: {
          DEFAULT: '#FAF7F0',
          warm: '#F5F1E8',
          cream: '#EEF1E6',
        },
        encre: {
          DEFAULT: '#2D2D2D',
          soft: '#3A3A3A',
          muted: '#6B6B6B',
        },
        sable: '#E8E2D5',
        bordeaux: '#5A3D44',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
        script: ['Italianno', 'cursive'],
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slide-right': 'slideRight 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'scroll-dot': 'scrollDot 1.8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideRight: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        scrollDot: {
          '0%': { top: '6px', opacity: 1 },
          '100%': { top: '18px', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
