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
    colors: {
      white: '#FFFFFF',

      // 'background-light': '#F8F5FF',
      // 'foreground-light': '#121212',
      // card: {
      //   fill: '#121721',
      //   stroke: '#252526',
      // },

      'body-text' : '#646464',
      dark : {
        5: '#e5eaf1',    //border-color
        10: '#98A2B3',
      },
      primary: {
        4 : '#F5F5F4',
        5 : '#EAFFF9',
        10: '#20B486',
        15 : '#1A906B',
        20 : '#3FC89E',
        25 : '#24BB8C'
      },
      secondary : {
        5 : '#E0EAFF',
      },
      neutral: {
        5 : '#101828',
        10: '',
      },

    },
  },
  plugins: [],
}