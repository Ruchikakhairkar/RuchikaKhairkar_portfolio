/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure your JSX files are included
  ],
  theme: {
    extend: {
      colors: {
        inputtext: "#000000",
        navbarColor: "#ebfaf7",
        darkblue: "#151269",
        darkpurple: "#7e22ce",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)", // Start from the right
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)", // End at original position
          },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideIn: "slideIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
