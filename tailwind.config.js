/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        '2xs': '320px',
        'xs': '375px',
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1920px',
        '3xl': '2560px',
      },
      extend: {
        fontFamily: {
          sans: ['"Funnel Sans"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }