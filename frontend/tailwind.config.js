/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bb-orange': '#FD642A',
      'bb-black': '0D0D0D',
      'bb-grey': '#343434',
      'bb-white': '#F6F6F6',
    }
  },
  plugins: [],
}

