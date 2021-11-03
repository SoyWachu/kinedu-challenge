module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      kineduBlue: "#1FADDF",
      kineduRed: "#D43571",
      kineduButton: "#75B753",
      kineduWhite: "#FFFFFF",
      kineduGray: "#a8a8a8",
      kineduDarkGray: "#545454",
      kineduLightGray: "#e2e2e2",
      kineduBlack: "#000000",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
