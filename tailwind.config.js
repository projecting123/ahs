/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.jsx"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat'],
      'heading': ['Josefin Sans']
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        first: {
          '50%': { backgroundColor: '#4dd0e1' }
        },
        sec: {
          '50%': { backgroundColor: '#1565c0' }
        },
        third: {
          '50%': { backgroundColor: '#4dd0e1' }
        },
        fourth: {
          '50%': { backgroundColor: '#1565c0' }
        },
        fifth: {
          '50%': { backgroundColor: '#4dd0e1' }
        },
        sixth: {
          '50%': { backgroundColor: '#1565c0' }
        },
        seventh: {
          '50%': { backgroundColor: '#4dd0e1' }
        },
        eight: {
          '50%': { backgroundColor: '#1565c0' }
        },
        ninth: {
          '50%': { backgroundColor: '#4dd0e1' }
        },
        text:{
          '50%': {opacity: '0.3'}
        },
        logo: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(0.8)', opacity: 0.5 },
        }
      },

      animation: {
        first: "first 1s linear infinite",
        sec: "sec 1s linear infinite",
        third: "third 1s linear infinite",
        fourth: "fourth 1s linear infinite",
        fifth: "fifth 1s linear infinite",
        sixth: "sixth 1s linear infinite",
        seventh: "seventh 1s linear infinite",
        eight: "eight 1s linear infinite",
        ninth: "ninth 1s linear infinite",
        text: 'text 1s linear infinite',
        logo: 'logo 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}

