/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      //  font-family: "Poppins", sans-serif;
      'poppins' : ['Poppins', 'sans-serif'],
      'inter' : ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}