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
        primary: "#1d4ed8",
        dark: "#27272A",
        darker: "#17181C",
        light: "#FAFAFB",
        book: "#fefae0",
        darkgreen: "#283618",
        green: "#606c38",
      },
      fontFamily: {
        baskerville: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [],
};
