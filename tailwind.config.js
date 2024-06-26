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
      "animation": {
        "border-width": "border-width 10s infinite ease-in-out",
        "text-gradient": "text-gradient 8s linear infinite",
        "background-shine": "background-shine 3s linear infinite"
      },
      "keyframes": {
        "border-width": {
          "from": {
            "width": "10px",
            "opacity": "0"
          },
          "to": {
            "width": "150px",
            "opacity": "1"
          }
        },
        "text-gradient": {
          "to": {
            "backgroundPosition": "200% center"
          }
        },
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      colors:{
        // 'mybg':"#393BB2",
        "mybg":"#4d28b6",
        'mybg2':"rgb(70,70,70)",
        'col':"black",
        'myborder':'rgb(38, 38, 38)'
      },
      backgroundImage:{
        "fancy":"radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, #63e 69.27%, #fff 100%);",
        "fancyflip":"radial-gradient(131.82% 109.9% at 50% 100%, transparent 37.41%, #63e 69.27%, #fff 100%)",
        "fancyflipdark":"radial-gradient(131.82% 109.9% at 50% 100%, transparent 47.41%,rgb(102, 51, 238, 0.7) 95%, #000 100%)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}