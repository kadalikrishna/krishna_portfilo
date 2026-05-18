/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0C0C0C",
        panel: "#121212",
        line: "#2A2A2A",
      },
      boxShadow: {
        glow: "0 0 80px rgba(196, 79, 255, 0.22)",
      },
    },
  },
  plugins: [],
};
