/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono"],
        year: ["Poppins"],
      },
      fontSize: {
        "brand-sm": ".9rem",
        "brand-4xl": ["2.75rem", "2.6rem"],
        "brand-2xs": [".75rem", ".75rem"],
      },
      colors: {
        brand: {
          gray: "#fafcfc",
          orange: "#E89B17",
          green: "#A2C11C",
          teal: "#2C5D63",
          dark: "#283739",
        },
      },
      boxShadow: {
        question: "4px 4px 25px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
