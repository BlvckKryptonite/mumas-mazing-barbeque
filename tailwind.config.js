/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Bangers"', 'cursive'],
        body: ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        flame: {
          "0%, 100%": {
            boxShadow: "0 0 25px 5px rgba(255,115,0,0.5)",
          },
          "50%": {
            boxShadow: "0 0 35px 10px rgba(255,85,0,0.8)",
          },
        },
      },
      animation: {
        flame: "flame 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
