module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["focus-visible", "first"],
      textColor: ["visited"],
      cursor: ['hover', 'focus'],
    },
  },
  plugins: [],
};
