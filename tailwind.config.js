/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
