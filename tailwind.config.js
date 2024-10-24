/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        Light_Cyan: "hsl(193, 38%, 86%)",
        Neon_Green: "hsl(150, 100%, 66%)",
        Grayish_Blue: "hsl(217, 19%, 38%)",
        Dark_Grayish_Blue: "hsl(217, 19%, 24%)",
        Dark_Blue: "hsl(218, 23%, 16%)",
      },
      fontFamily: { body: ["Manrope", "sans-serif"] },
    },
  },
  plugins: [],
};
