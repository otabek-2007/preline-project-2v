module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js}', // src papkadagi barcha fayllar
    './dist/**/*.{html,js}', // dist papkadagi barcha fayllar (builddan keyin)
  ],
  plugins: [require('preline/plugin')],
  theme: {
    extend: {},
  },
};
