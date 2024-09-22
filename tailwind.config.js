/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this to where your source files are
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#32CD32', // You can add more custom colors if needed
        customGray: '#f4f4f4',
      },
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out forwards',
        'fade-out': 'fadeOut 2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
