/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/aspect-ratio')
    ],
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
        'image-1': "url('/z0mb0t/src/img/backg/1.png')",
        'image-2': "url('/z0mb0t/src/img/backg/2.png')",
        'image-3': "url('/z0mb0t/src/img/backg/3.png')",
        'image-4': "url('/z0mb0t/src/img/backg/4.gif')",
        'image-5': "url('/z0mb0t/src/img/backg/5.png')",
        'image-6': "url('/z0mb0t/src/img/backg/6.png')",
        'image-7': "url('/z0mb0t/src/img/backg/7.png')",
        'image-8': "url('/z0mb0t/src/img/backg/8.png')",
        'image-9': "url('/z0mb0t/src/img/backg/9.png')",
        'image-10': "url('/z0mb0t/src/img/backg/10.png')",
        'image-11': "url('/z0mb0t/src/img/backg/11.png')",
        'image-12': "url('/z0mb0t/src/img/backg/12.png')",
        'image-13': "url('/z0mb0t/src/img/backg/13.png')",
      }),
      // Define animation class
      animation: {
        'ltr-linear-infinite': 'move-bg 10s linear infinite',
      },
      keyframes: {
        'move-bg': {
          '0%':   { 'background-position': '0 0' },
          '100%': { 'background-position': '500px 0'}
        }
    }
  }
}
}
