/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90.5deg, rgba(255,207,139,0.50) 1.1%, rgba(255,207,139,1) 81.3%)",
        "custom-radial-gradient":
          "radial-gradient(circle farthest-corner at 18.7% 37.8%, rgba(250,250,250,1) 0%, rgba(225,234,238,1) 90%)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        itims: ["itim", "sans-serif"],
      },
    },
  },
  plugins: [],
};
