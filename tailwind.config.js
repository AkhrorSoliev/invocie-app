/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vibrantPurple: "#7C5DFA",
        softPurple: "#9277FF",
        deepNavy: "#1E2139",
        mutedNavy: "#252945",
        lightPeriwinkle: "#DFE3FA",
        mutedGrayBlue: "#888EB0",
        mediumGrayBlue: "#7E88C3",
        deepBlackBlue: "#0C0E16",
        brightRed: "#EC5757",
        softRed: "#9277FF",
        softGrayBackground: "#F8F8FB",
        darkCharcoal: "#141625",
        midnightBlue: "#373B53",
      },
    },
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    fontSize: {
      h1: ["32px", "36px"],
      h2: ["20px", "22px"],
      h3: ["16px", "24px"],
      h4: ["12px", "15px"],
      body1: ["12px", "15px"],
      body2: ["11px", "18px"],
    },
    fontWeight: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
    letterSpacing: {
      h1: "-1px",
      h2: "-0.63px",
      h3: "-0.8px",
      h4: "-0.25px",
      body1: "-0.25px",
      body2: "-0.23px",
    },
  },
  plugins: [],
};
