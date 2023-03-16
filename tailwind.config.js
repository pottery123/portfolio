/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'margin': 'margin'
    },
      backgroundImage: {
        'hero': "url('../public/images/background-hero.svg')",
      },
      sreens: {
        sm: "640px",
        md: "768px",
        lg: "104px",
        xl: "1280",
      },
      width: {
        twoHundred: '200px'
      },
      fontSize: {
        one: "0.236rem",
        two: "0.382rem",
        three: "0.618rem",
        four: "1rem",
        five: "1.618rem",
        six: "2.618rem",
        seven: "4.236rem",
        eight: "6.854rem",
        nine: "11.089rem",
      },
      fontFamily: {
        Bhaijaan2: "'Baloo Bhaijaan 2', cursive",
        Inter: "'Inter', san-serif",
        Montserrat: "'Montserrat', sans-serif",
        Rubik: "'Rubik', sans-serif",
        Nunito: "'Nunito',  sans-serif",
        Dosis: "'Dosis', sans-serif",
        Quicksand: "'Quicksand', sans-serif",
        Poppins: "'Poppins', sans-serif;",
      },
      colors: {
        somoBlue: "#212153",
        stateFairWhite: "#E9E2DB",
        aprenderPink: "#D45769",
        aprenderPinkLight: "#e18996",
        theme: "#FDF5DF",
        third: "#8CBDB9",
        secondary: "#E09E50",
        primary: "#2D3E4E",
        primaryLight: "#3f576e",
        aprenderBlue: "#308695",
        aprenderGray: "#D4CFC9",
        aprenderGold: "#E69D45",
        stateFairRed: "#D9042B",
        stateFairRedDark: "#BB000D",
        stateFairBlue: "#03658C",
        stateFairBlueDark: "#024762",
        stateFairOrange: "#F27B50",
        stateFairOrangeDark: "#D45D32",
        stateFairBurgandy: "#730220",
        stateFairBurgandyDark: "#550002",
        stateFairYellow: "#F29F05",
        stateFairYellowDark: "#D48100",
        heroPink: "#D45769",
        heroPurple: "#6D597A",
        heroBlue: '#355070',
      },
      keyframes: {
          'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        grow: {
            "0%":{height: "0%"},
            "25%":{height: "50%"},
            "75%":{height: "70%"},
            "100%":{height: "100%"}

         
        },
        to: {
          "stroke-dashoffset": "1000",
        },
        wave: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(0eg)" },
          "75%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        waveReverse: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },

        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "wave1": "wave 1s",
        "wave2": "wave 1.5s",
        "wave3": "wave 2s",
        "wave4": "wave 2.5s",
        "wave5": "wave 3s",
        "wave6": "wave 3.5s",
        "waveReverse": "waveReverse 1s ease-out forwards",
        "gradient-x": "gradient-x 1s ease infinite",
        "gradient-y": "gradient-y 1s ease infinite",
        "gradient-xy": "gradient-xy 1s ease infinite",
        "grow": "grow 100s linear ease-out ",
        'fade-in-down': 'fade-in-down 0.5s ease-out'

      },
    },
  },
  plugins: [],
};
