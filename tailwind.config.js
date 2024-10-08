// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      'sans': ['Montserrat'],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#fff",
            foreground: "#000000",
          },
          secondary: {
            DEFAULT: "#5271ff",
          },
          default: { 
            DEFAULT: "#333",
          },
          focus: "#BEF264",
        },
      },
    },
  })],
}

