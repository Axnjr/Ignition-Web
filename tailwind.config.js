/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{
        'mybg':"#eef459",
        'mybg2':"#111111",
        'col':"black",
        'myborder':'#3E3E3E'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}