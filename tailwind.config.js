/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: "#534aec",
        royalblue: "#407bff",
        black: "#000",
        darkslateblue: {
          100: "#3b3a5d",
          200: "rgba(59, 58, 93, 0.6)",
        },
        darkgray: "#a4a4a4",
        midnightblue: "#0a0b3b",
        "paragraph-text": "#555",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      "21xl": "40px",
      "16xl": "35px",
      lg: "18px",
      "46xl": "65px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
