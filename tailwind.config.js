/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
    fontFamily:{
      body: ['Playfair Display']
    },
    fontFamily:{
      text: ['Tinos']
    },
    colors:{
      primary:'#ff6363',
      secondary: {
        100: '#e2e2d5',
        200: '#888883',
      },
      intermidate: {
        100: '#7D7878',
        200: '#2A4475',
        300: '#085259',
        400: '#65A5D1',
      },
   

      
    }
  },
  variants: {},
  plugins: [],
}
}
