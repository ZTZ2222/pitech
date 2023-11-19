import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        londrina: ["var(--font-londrina)"],
      },
      colors: {
        primary: "#5E6973",
        accent: "#7CFFC4",
        "dark-blue": "#302F4D",
        badge: "#1C6379",
        "custom-gray": "#5E6973",
        "custom-bg1": "#d53369",
        "custom-bg2": "#daae51",
        flame: "#DE0707",
      },
      boxShadow: {
        custom: "5px 5px 10px 0px rgba(0, 0, 0, 0.10)",
        "custom-left": "-16px 16px 0px 0px rgba(48, 47, 77, 0.25)",
        "custom-right": "16px 16px 0px 0px rgba(48, 47, 77, 0.25)",
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        25: "repeat(25, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        10: "repeat(10, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        25: "repeat(25, minmax(0, 1fr))",
      },
      screens: {
        "2xl": "1536px",
      },
      animation: {
        blob: "blob 7s infinite",
        vanish: "vanish .5s",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "25%": {
            transform: "translate(-30px, 30px) scale(1.1)",
          },
          "50%": {
            transform: "translate(30px, -30px) scale(1)",
          },
          "75%": {
            transform: "translate(-30px, -30px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        vanish: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
