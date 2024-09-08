/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: 'selectors',
  content: ["./src/*.html","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}