/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        violet: "hsl(var(--violet)/<alpha-value>)",
        white: "hsl(var(--white)/<alpha-value>)",
        lightblue: "hsl(var(--lightblue)/<alpha-value>)",
        darkblue: "hsl(var(--darkblue)/<alpha-value>)",
      },
      backgroundImage:{
        bg: "url('/public/background.png')",
      }
    },
  },
  plugins: [],
}

