/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gataticos-darkest-blue": "#1a2130",
        "gataticos-dark-blue": "#1c2436",
        "gataticos-light-blue": "#F0F4F9",
        "gataticos-medium-blue": "#87A4E9",
        "gataticos-light-green": "#92E3A9",
        "gataticos-grey-blue": "#414C64",
        "gataticos-light-red": "#D05D76",
        "gataticos-light-yellow": "#D0B55D",
      },
    },
  },
  plugins: [],
};
