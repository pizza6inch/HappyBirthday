/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jpFont: ["KTEGAKI", "sans-serif"],
        enFont: ["Oldenburg", "sans-serif"],
      },
    },
  },
  plugins: [],
}