/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {screens:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    lg:'1440px'
  },
    extend: {
      colors:{
        primary: '#4617fe',
        secondary: '#f8f8fa'
      }
    },
  },
  plugins: [],
}
