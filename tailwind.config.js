/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

      backgroundImage: {
        'redrock': "url('./images/redrock.jpeg')"
      },
    },
  },
  plugins: [],
}
