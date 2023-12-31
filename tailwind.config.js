

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins : [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ]
  // ...
}