/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ff7edb",
          DEFAULT: "#f637ec",
          dark: "#b400a0",
        },
        secondary: {
          light: "#7df9ff",
          DEFAULT: "#00f0ff",
          dark: "#0082b3",
        },
        dark: {
          DEFAULT: "#0f1021",
          lighter: "#1a1b3a",
        },
        light: {
          DEFAULT: "#f8f9fa",
          darker: "#e9ecef",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        glow: {
          "0%": { "text-shadow": "0 0 5px #f637ec, 0 0 10px #f637ec" },
          "100%": {
            "text-shadow":
              "0 0 10px #f637ec, 0 0 20px #f637ec, 0 0 30px #f637ec",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}