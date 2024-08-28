/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsla(233, 31%, 16%, 1)",
        fadedBlue: "hsla(231, 15%, 47%, 1)",
        lightYellow: "hsla(41, 100%, 60%, 1)",
        lightWhite: "hsla(0, 0%, 96%, 1)",
        blackBlue: "hsla(233, 31%, 16%, 1)",
        faintYellow: "hsla(230, 15%, 47%, 1)",
        linearBackground: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 50.75%, #FFD7A6 102.71%)",
        whiteishGray: "hsla(0, 0%, 100%, 1)",
        whitishBackground: "hsla(212, 87%, 12%, 0.5)",
        bgButton: "hsla(231, 76%, 15%, 1)",
      }
    },
  },
  plugins: [],
}