/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: "#181819",
        goldenrod: "#efb900",
        white: "#fff",
        silver: "#c6c6c6",
        darkslategray: {
          "100": "#4a4a4d",
          "200": "#333",
          "300": "#303030",
          "400": "rgba(74, 74, 77, 0.09)",
        },
        lime: "#32f721",
        lightgray: "#d1d2d5",
        salmon: "#ef6855",
        darkturquoise: "#1de2ef",
        darkgoldenrod: {
          "100": "#bd8500",
          "200": "rgba(189, 133, 0, 0.09)",
        },
        orangered: "#e4250b",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "6xl": "25px",
      },
    },
    fontSize: {
      "3xs": "0.625rem",
      xs: "0.75rem",
      xl: "1.25rem",
      base: "1rem",
      "6xl": "1.563rem",
      sm: "0.875rem",
      "5xs": "0.5rem",
      "2xs": "0.688rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      lgi: "1.188rem",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
