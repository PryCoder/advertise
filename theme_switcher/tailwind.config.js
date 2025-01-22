/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode was neccesaay this was static and html for tailwind to understand 
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

