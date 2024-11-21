module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js}', // Barcha HTML va JS fayllar faqat src ichida
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
