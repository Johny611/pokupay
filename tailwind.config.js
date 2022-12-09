/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "425px" },
      xm: { max: "500px" },
      sm: { max: "639px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279px" },
      "2xl": { max: "1535px" },
      "min-xs": { min: "425px" },
      "min-sm": { min: "639px" },
      "min-md": { min: "767px" },
      "min-lg": { min: "1023px" },
      "min-xl": { min: "1279px" },
      "min-2xl": { min: "1535px" },
    },
    extend: {},
  },
  plugins: [],
});
