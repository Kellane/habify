module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      textColor: {
        'primary': '#4953B8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
