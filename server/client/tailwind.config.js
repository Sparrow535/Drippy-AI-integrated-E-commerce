/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans JSX files
  theme: {
    extend: {
      colors: {
        customGreen: "#2B4035", // Your custom green color
      },
    },
  },
  plugins: [],
};
