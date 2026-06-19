/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo color (professional marketplace vibe)
        secondary: "#10B981", // Green color for success/earnings
        dark: "#1F2937" // Dark slate for sidebars/text
      }
    },
  },
  plugins: [],
}