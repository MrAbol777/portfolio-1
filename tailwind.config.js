/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a3d2c',
        secondary: '#f0f0f0',
        accent: '#d4a373',
      },
    },
  },
  plugins: [],
}