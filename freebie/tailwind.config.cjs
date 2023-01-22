const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
        sriracha: ["Sriracha", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        bo: ["Black Ops One", ...defaultTheme.fontFamily.sans],
        comfortaa: ["Comfortaa", ...defaultTheme.fontFamily.sans],      },
    },
  },
  plugins: [],
};
