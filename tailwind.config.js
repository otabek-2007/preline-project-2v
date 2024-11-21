module.exports = {
  darkMode: 'class',
  content: [
    './**/*.{html,js}', // Hamma HTML va JS fayllar
    './src/**/*.{html,js}', // SRC papkasi fayllari
    './dist/**/*.{html,js}', // DIST papkasi fayllari
  ],
  plugins: [require('preline/plugin')],
  theme: {
    extend: {},
  },
};
