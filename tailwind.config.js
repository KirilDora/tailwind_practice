/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],//files which interect with tailwindcss
  darkMode: 'class', //for using dark mode of website changing attribut class in <html> and in <body>
  theme: {
    extend: {
      colors:{
        mainColor: '#050c2a',
      },
      padding: {
        big: '50px',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

