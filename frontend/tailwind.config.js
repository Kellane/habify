module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4953B8",
          50: "#EEEFF8",
          100: "#DCDEF1",
          200: "#B7BBE3",
          300: "#9298D5",
          400: "#6E76C6",
          500: "#4953B8",
          600: "#3A4294",
          700: "#2B3270",
          800: "#1D214B",
          900: "#0F1126",
        },
      },
      textColor: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
