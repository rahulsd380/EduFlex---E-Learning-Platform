/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs' : '400px',
        '2xs' : '360px'
      }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}