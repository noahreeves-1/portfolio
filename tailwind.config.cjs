/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cloud-blue": {
          900: "#001824",
          800: "#003048",
          700: "#00476c",
          600: "#005f90",
          500: "#0077b4",
          400: "#3392c3",
          300: "#66add2",
          200: "#99c9e1",
          100: "#cce4f0",
        },
      },
      maxWidth: {
        "carousel-max-w": "150px",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        marquee2: "marquee2 60s linear infinite",
        slideInLeft: "slideInLeft 0.5s ease-out",
        slideInUp1: "slideInUp 1s ease-out",
        slideInUp2: "slideInUp2 2s ease-out",
        slideInUp3: "slideInUp3 3s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "66%": { opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slideInUp2: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "66%": { opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slideInUp3: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "66%": { opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
