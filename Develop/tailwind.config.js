/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./test/**/*.html'],
  theme: {
    screens: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      }
    },
  },
  plugins: [],
}
}
