/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
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