module.exports = {
  darkMode: 'class',
  content: [
    './**/*.{html,js}', // Barcha HTML va JS fayllar
    './src/**/*.{html,js}', // Agar src papkasi bo'lsa
  ],
  plugins: [require('preline/plugin')],
  theme: {
    extend: {},
  },
};
