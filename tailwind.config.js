/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-100': '#dadce0',
        'brand-green-100': '#137333',
        'brand-blue-100': '#1967d2',
        'brand-blue-200': '#4285f4'
      },
      boxShadow: {
        blue: '0 0 3px 3px #4285f4'
      }
    }
  },
  plugins: []
}
