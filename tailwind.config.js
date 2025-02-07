/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {


        animation: {
          textFade: "textFade 2s ease-in-out infinite",
        },
        keyframes: {
          textFade: {
            "0%, 100%": { color: "black" },
            "50%": { color: "yellow" },
          },
        },    
      },
    },
    plugins: [],
  }