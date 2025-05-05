/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
      "./node_modules/primeng/**/*.{html,ts}"
    ],
    important: true, // Enables !important utility
    theme: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      preflight: false, // Disable default styles to avoid conflicts with PrimeNG
    }
  }