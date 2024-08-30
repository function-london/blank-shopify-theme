const screens = require('./tailwind.config.screens');

module.exports = {
  content: [
    './{layout,sections,snippets,templates}/**/*.liquid',
    './src/js/**/*.js',
    './assets/*.js',
    './assets/*.js.liquid',
    '!./snippets/css-main.min.css.liquid',
  ],
  theme: {
    screens: screens,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  corePlugins: {
    container: false,
  },
};
