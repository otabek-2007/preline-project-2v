module.exports = {
  darkMode: 'class',
  content: [
    './**/*.{html,js}', // Barcha HTML va JS fayllar
    './src/**/*.{html,js}', // Agar src papkasi bo'lsa
  ],
  plugins: [require('preline/plugin')],
  theme: {
    extend: {
      animation: {
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.2)',
          },
        },
      },
    },
  },
};
