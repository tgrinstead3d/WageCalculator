/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['basic-sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
