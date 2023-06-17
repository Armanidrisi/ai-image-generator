/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './templates/**/*.html',
    './app.py',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
    ],
}

