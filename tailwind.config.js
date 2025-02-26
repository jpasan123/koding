/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          20: 'color-mix(in srgb, var(--primary) 20%, transparent)',
          50: 'color-mix(in srgb, var(--primary) 50%, transparent)',
          80: 'color-mix(in srgb, var(--primary) 80%, transparent)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          20: 'color-mix(in srgb, var(--secondary) 20%, transparent)',
          50: 'color-mix(in srgb, var(--secondary) 50%, transparent)',
          80: 'color-mix(in srgb, var(--secondary) 80%, transparent)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        'xs': '400px',
      },
    },
  },
  plugins: [],
};