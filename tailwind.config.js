/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#FFFFFC',
      secondary: '#072AC8',
      action: '#C9184A',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    }
  },

  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
