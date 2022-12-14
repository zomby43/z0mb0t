/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
     fontSize: {
      sm: ['12px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      backgroundImage: theme => ({
        'one': "url('../src/img/backg/1.png')",
        'two': "url('../src/img/backg/2.png')",
        'three': "url('../src/img/backg/3.png')",
      }),
      // Define animation class
      animation: {
        'ltr-linear-infinite': 'move-bg 10s linear infinite',
      },
      keyframes: {
        'move-bg': {
          '0%':   { 'background-position': '0 0' },
          '100%': { 'background-position': '256px 0'}
        }
    }
  }
}
}