// tailwind.config.js
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#964d0a",
        secondary: "#fafbea",
      }
    },
  },
  plugins: [],
}
