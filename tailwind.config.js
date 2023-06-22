/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      screens: {
        sm: '300px',
        md: '600px',
        lg: '1000px',
        xl: '1280px',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        primary: ['40px', '60px'],
        secondary: ['20px', '30px'],
        xs: ['24px', '46px'],
        sm: ['30px', '45px'],
        md: ['18px', '24px'],
        lg: ['16px', '24px'],
        xl: ['14px', '21px'],
        '2xl': ['12px', '24px'],
      },
      colors: {
        primary: {
          darkest: '#073647',
          darker: '#064A63',
          DEFAULT: '#0B5570',
          light: '#0F6989',
          lighter: '#167CA0',
          'extra-light': '#4FA4C2',
          'extra-lighter': '#95D0E5',
          lightest: '#B9EDFF',
        },
        secondary: {
          darkest: '#CE7D00',
          darker: '#ED9001',
          DEFAULT: '#FD9900',
          light: '#FDB23E',
          lighter: '#FEC56E',
          'extra-light': '#FED99F',
          'extra-lighter': '#FFECCF',
          lightest: '#FFF6E7',
        },
        green: '#93DBD5',
        tertiary: '#AE2780',
        grey: '#AE2780',
      },
    },
  },
  plugins: [],
};
