/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "transparent-gray": "rgba(0, 0, 0, 0.2)",
        "rose": "#E98074",
        "very-light-pink": "#FFF6F3",
        "light-blue": "#E4F0FF",
        "blue": "#739DEF",
        "darker-blue": "#475675"
      },
      backgroundImage: {
        "hero-img": "url('./assets/la-vie-est-belle.jpg')",
      },
      boxShadow: {
        "btn-shadow":
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        "card-shadow":
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      },
      gridTemplateColumns: {
        "cart-grid": "1fr 2fr",
      },
      screens: {
        "mobile": {max: '550px'},
        "sm-mobile": {max: '420px'},
        "tablet": {max: '750px'}
      }
    },
  },
  plugins: [],
};
