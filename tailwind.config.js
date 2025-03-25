/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.neutral,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      green: colors.green,
      teal: colors.teal,
      indigo: colors.indigo,
      purple: colors.purple,
      'primary': "#62BA1B",
      'bgColor': "#080808",
      'bgNav': "#1B1B1B",
      'textColor': "#9C9C9C",
      'error': '#FF0000',
      'hack_22': "#1A1421",
      'hack_24': "#213D1F",
      'mlsa': "#106EBE",
      "postman": "#FF713D"

    },
    fontFamily: {
      'navbarFont': ["IBM Plex Mono", "monospace"],
      'titleFont': ['Raleway', 'sans-serif'],
      'serviceFont': ['Lexend Deca', 'sans-serif'],
    },

    extend: {
      transitionDuration: {
        '2000': '2500ms',
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      backgroundImage: {
        'moventure': "url('./src/assets/moventure.png')",
        'footer-texture': "url('../assets/footer-texture.png')",
      }
    },
  },
  plugins: [
  ],
}