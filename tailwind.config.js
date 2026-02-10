/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        greytone: "var(--color-greytone)",
        darkgreytone: "var(--color-darkgreytone)",
        hoverblue: "var(--color-hoverblue)",
      },
    },
  },
  plugins: [],
};
