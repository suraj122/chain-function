/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-yellow": "#E29A2D",
        "royal-green": "#4CAF79",
        "royal-blue": "#66A3FF",
        "royal-gray": {
          900: "#252525",
          700: "#A5A5A5",
          600: "#2F384C",
          500: " #D3D3D3",
          300: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
