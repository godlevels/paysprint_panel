/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Josefin Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0', 
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1110px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#272343',
        },
        sec: '#AEAEAE',
        blak: '#272343',
        orange: {
          DEFAULT: '#ed5c01',
          hover: '#e45a03',
        }, 
        greenlight: '#479951',
        green: '#00751F',
      },
    },
  },
  plugins: [],
};
