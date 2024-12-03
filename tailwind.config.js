/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideIn: "slideIn 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
    screens: {
      xs: "420px", // Extra small devices (e.g., small phones)
      sm: "640px", // Default small breakpoint (you can adjust or remove if needed)
      md: "768px", // Medium devices (e.g., tablets)
      lg: "1024px", // Large devices (e.g., laptops)
      xl: "1280px", // Extra-large devices (e.g., desktops)
      "2xl": "1536px", 
    },
  },
  plugins: [],
};

