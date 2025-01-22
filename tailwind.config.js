/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        FiraSans: ['Fira Sans', 'sans-serif'],
        ElectroHolic: ['ElectroHolic', 'cursive'],
        RobotoSerif: ['Roboto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

