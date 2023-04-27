/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        smallmin: { 'raw': '(min-height: 600px)' },
        smallmax: { 'raw': '(max-height: 650px)' }
      }
    },
  },
  plugins: [],
}


