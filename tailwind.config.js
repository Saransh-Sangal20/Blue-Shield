/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ndma-blue': '#1e40af',
        'ndma-dark-blue': '#1e3a8a',
        'alert-yellow': '#fef3c7',
        'alert-orange': '#f97316',
        'success-green': '#10b981',
        'danger-red': '#ef4444',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
