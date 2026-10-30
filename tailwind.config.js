/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  pink: {
    50:  '#F7EFE8',
    100: '#F0E2D6',
    200: '#E8D0BE',
    300: '#D8A48F',
    400: '#BB8588',
    500: '#A06A6E',
    600: '#8A4A50',
    700: '#76383D',
    800: '#632024',
    900: '#4A181B',
  },
},
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}