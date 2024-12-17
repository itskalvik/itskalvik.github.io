const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "40px",
        lg: "50px",
      },
    },
    extend: {
      colors: {
        primary: "#e58a52",
        secondary: "#78a162",
        dark: "#27272A",
        darker: "#17181C",
        light: "#FAFAFB",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  safelist: [],
};
