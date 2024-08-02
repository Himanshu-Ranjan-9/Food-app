/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
     extend: {},
      fontFamily: {
     poppins: ["poppins","Sans-serif"],
     Pompiere:["Pompiere", "cursive"]
    },
    width: {
        70: '70%',
      }
  },
  plugins: [],
}

