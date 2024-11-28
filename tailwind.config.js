/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        blue: {
          100: '#e6f3f9',
          200: '#d7eef8',
          900: '#1e3a8a',
        },
        pink: {
          100: '#fce7f3',
        },
      },
    },
  },
  plugins: [],
};