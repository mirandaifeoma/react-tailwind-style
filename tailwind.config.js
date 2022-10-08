/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: '320px',
      mobile1: '450px',
      mobilel: '558px',
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
       spacing: {
        '128': '32rem',
        '144': '36rem',
        'left': '46%',
        'left2': '49%',
        'left3': '76%',
        'left4': '10px',
        'left5': '2rem',
        'left6': '-4rem',
        'left61': '-5rem',
        'left62': '-6rem',
        'left63': '-7rem',
        'right63': '-8rem',
        'nav': '50%',
        'top': '30rem',
        'top1': '4.5rem',
        'top2': '8.5rem',
        'height0': '20vh',
        'height': '10vh',
        'height1': '8vh',
        'height2': '6vh',
        'height3': '4vh',
        'width': '100%',
        'width1': '70%',
        'width2': '40%',
        
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        'ff': '2.9rem',
        'f': '3.5rem',
      }
    },
    
  },
  plugins: [],
}
