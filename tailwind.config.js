/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E9C46A',
        secondary: '#36BA98',
        tertiary: '#F4A261'
      }
    }
  },
  plugins: []
}
