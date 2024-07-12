/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee Outline"],
      },
      keyframes: {
        "slide-to-top": {
          "0%": { transform: "translateY(300px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-to-right": {
          "0%": { transform: "translateX(-200px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-from-right-overlay": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-from-left-overlay": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-from-top-overlay": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-from-bottom-overlay": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-to-right-overlay": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slide-to-left-overlay": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-to-top-overlay": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "slide-to-bottom-overlay": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "slide-to-top-speed-1": "slide-to-top 1s ease-in-out 1",
        "slide-to-top-speed-2": "slide-to-top 1.5s ease-in-out 1",
        "slide-to-top-speed-3": "slide-to-top 2s ease-in-out 1",
        "slide-to-right-speed-1": "slide-to-right 1.2s linear 1",
        "slide-to-right-speed-2": "slide-to-right 1s linear 1",
        "slide-to-right-speed-3": "slide-to-right 1.5s linear 1",
        "slide-from-right-overlay": "slide-from-right-overlay 0.3s linear 1",
        "slide-from-left-overlay": "slide-from-left-overlay 0.3s linear 1",
        "slide-from-top-overlay": "slide-from-top-overlay 0.3s linear 1",
        "slide-from-bottom-overlay": "slide-from-bottom-overlay 0.3s linear 1",
        "slide-to-right-overlay": "slide-to-right-overlay 0.3s linear 1",
        "slide-to-left-overlay": "slide-to-left-overlay 0.3s linear 1",
        "slide-to-top-overlay": "slide-to-top-overlay 0.3s linear 1",
        "slide-to-bottom-overlay": "slide-to-bottom-overlay 0.3s linear 1",
      },
    },
  },
  plugins: [],
};
