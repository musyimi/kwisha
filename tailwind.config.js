module.exports = {
  purge: {
    enabled: true,
    content: ['./**/*.html'],
  },
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   body: "andelamo, sans-serif",
      //   src: URL("fonts/andalemo.ttf"),
      //   fontStyle: normal
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
