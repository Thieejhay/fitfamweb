/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    extend: {
      colors: {
      'lightgray': '#D9D9D9',
      'gray': '#9c9c9c',
      'white': '#ffffff',
      'gray': '#9c9c9c',
      'darkGrey': '#464D53',
      'caloryCard': '#656565',
      'appColor':  '#3c3f45',
    },
  },
  },
  variants: { 
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
  },
  plugins: [require('tailwindcss-text-fill-stroke')(), ],
}
