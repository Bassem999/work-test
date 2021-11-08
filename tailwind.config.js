const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.vue', './components/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        sky: colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
