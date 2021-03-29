module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './index.html'
      ],
      defaultExtractors: content => content.match(/[A-Za-z0-9-_:/] + /g) || []
    })
  ]
  // {
    
  //   tailwindcss: {},
  //   autoprefixer: {},
  //   @fullhuman/postcss-purgecss: {},
  // },
}
