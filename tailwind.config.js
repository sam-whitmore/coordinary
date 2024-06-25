/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        text: '#11333d',
        background: '#ecf6ff',
        primary: '#0ad3c2',
        secondary: '#75b8ff',
        accent: '#ffe100',
      },
      spacing: {
        100: '25rem',
        168: '42rem',
      },
    },
    fontFamily: {
      sans: ['Wix Madefor Text', 'sans-serif'],
      display: ['Wix Madefor Display', 'sans-serif'],
      thin: ['DM Sans', 'sans-serif'],
      casual: ['Baloo 2', 'sans-serif'],
      formal: ['Inter Tight', 'sans-serif'],
    },
  },
  plugins: [],
}
