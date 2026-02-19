/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf6f1',
          100: '#f0e6d6',
          200: '#e0ccad',
          300: '#cda97a',
          400: '#be8c54',
          500: '#a87640',
          600: '#8b5e34',
          700: '#6e472b',
          800: '#5a3a26',
          900: '#4a3122',
          950: '#2d1a12',
        },
        snow: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#f8f9fa',
          300: '#e9ecef',
          400: '#dee2e6',
        },
        burgundy: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9b8',
          400: '#ec7a93',
          500: '#df4d6f',
          600: '#c62e56',
          700: '#a92347',
          800: '#8d2040',
          900: '#791e3b',
          950: '#430b1d',
        },
        fire: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
