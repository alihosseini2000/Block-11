/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // './pages/**/*.{html,js}',
    // './components/**/*.{html,js,jsx}',
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "shabnam-medium" : ["Shabnam-Medium"] ,
      "shabnam-light" : ["Shabnam-Light"],
      "shabnam" : ["Shabnam"] ,
      "shabnam-Bold" : ["Shabnam-Bold"] ,
      "shabnam-Thin" : ["Shabnam-Thin"] ,
    },
    extend: {},
  },
  plugins: [],
}

