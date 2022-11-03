/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'one': '0.236rem',
        'two': '0.382rem',
        'three': '0.618rem',
        'four': '1rem',
        'five': '1.618rem',
        'six': '2.618rem',
        'seven': '4.236rem',
        'eight': '6.854rem',
        'nine': '11.089rem',
      },
      fontFamily: {
        'Bhaijaan2': "'Baloo Bhaijaan 2', cursive",
        'Inter': "'Inter', san-serif",
        'Montserrat': "'Montserrat', sans-serif",
        'Rubik': "'Rubik', sans-serif",
        'Nunito': "'Nunito',  sans-serif"
        
      },
      colors: {
        'somoBlue': '#212153',
        'stateFairWhite':'#E9E2DB',
        'aprenderPink': '#D45769',
        'aprenderPinkLight': '#e18996',
        'theme':'#FDF5DF',
        'third': '#8CBDB9',
        'secondary': '#E09E50',
        'primary': '#2D3E4E',
        'primaryLight':"#3f576e",
        'aprenderBlue': '#308695',
        'aprenderGray':'#D4CFC9',
        'aprenderGold':'#E69D45',
      },
      keyframes: {
        to: {
          'stroke-dashoffset': '1000'
        },
        wave: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shake: { 
            '0%':{transform: 'rotate(0deg)'},
            '25%':{ transform: 'rotate(5deg)'},
            '50%':{ transform: 'rotate(0eg)'},
            '75%':{ transform: 'rotate(-5deg)'},
            '100%':{ transform: 'rotate(0deg)'},
          },
        waveReverse: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },

        'gradient-y': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
          }
      },
      'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      'gradient-xy': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      }
      },
      animation: {
        'waving-hand': 'wave 1s ease-in forwards',
        'wave-reverse': 'waveReverse 1s ease-out forwards',
        'shake': 'shake 0.15s 0 infinite linear',
        'gradient-x':'gradient-x 1s ease infinite',
        'gradient-y':'gradient-y 1s ease infinite',
        'gradient-xy':'gradient-xy 1s ease infinite',
      },
      
    },
  },
  plugins: [],
}
