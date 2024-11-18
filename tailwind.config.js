/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      iphone: "500px",
      // => @media (min-width: 640px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
