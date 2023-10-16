/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors : {
        "primary": {
          DEFAULT: "#04152d",
          100: "#041226",
          200: "#020c1b",
          300: "#0a2955",
          "lighter": "#1c4b91",
          "light": "#173d77",
          "pink": "#da2f68",
          "orange": "#f89e00"
        }
      }
    },
  },
  plugins: [],
}