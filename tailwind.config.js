/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'resim': "url('/img/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
}