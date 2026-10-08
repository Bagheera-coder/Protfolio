/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070b16',
        primary: '#247bff', // Electric blue
        accent: '#ff354f',  // Crimson
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // We'll add this to index.html
      },
      animation: {
        'grid-spin': 'gridSpin 20s linear infinite',
      },
      keyframes: {
        gridSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
