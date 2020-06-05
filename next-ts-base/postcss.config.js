// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: ['./pages/**/*.tsx', './components/**/*.tsx'],
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
// });

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss'),
    // ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    require('autoprefixer'),
    require('cssnano')
  ]
};
