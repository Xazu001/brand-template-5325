import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xs": "0px",
      xs: "320px",
      sm: "490px",
      md: "768px",
      lg: "1024px",
      xl: "1210px",
      "2xl": "1440px",
      "3xl": "1610px",
      "4xl": "1860px",
    },
    container: {
      center: true,
      screens: ["920px"],
    },
    fontFamily: {
      main: ["Roboto", "Arial", "system-ui"],
    },
    colors: {
      // Main
      bg: "#ffffff",
      light: "#f8f8f8",
      dark: "#000",

      // Main Others
      "item-1": "",
      "accent-1": "",
      "alt-1": "",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
