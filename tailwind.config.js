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
        'image-1': "url('./src/img/backg/1.png')",
        'image-2': "url('./src/img/backg/2.png')",
        'image-3': "url('./src/img/backg/3.png')",
        'image-4': "url('./src/img/backg/4.gif')",
        'image-5': "url('./src/img/backg/5.png')",
        'image-6': "url('./src/img/backg/6.gif')",
        'image-7': "url('./src/img/backg/7.png')",
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
