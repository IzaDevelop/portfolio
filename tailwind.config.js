/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavanda': {
          '100': '#eaebfe',
          '200': '#d5d8fe',
          '300': '#c0c4fd',
          '400': '#abb0fd',
          '600': '#8257E6',
          '700': '#7014cc'
        },
        'creme': '#fbfaf8',
        'dark': '#02010a'
      },
      fontFamily: {
        'sans': ['"Titillium Web"', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}