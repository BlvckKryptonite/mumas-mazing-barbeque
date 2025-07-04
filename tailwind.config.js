/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Bangers"', 'cursive'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
