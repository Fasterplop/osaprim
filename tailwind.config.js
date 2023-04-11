/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        AlfaFont: ["Alfa Slab One", "cursive"],
      },
    },
  },
  plugins: [],
};
