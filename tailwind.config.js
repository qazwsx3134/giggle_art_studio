/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      night: {
        100: "#cecfcf",
        200: "#9da0a0",
        300: "#6d7070",
        400: "#3c4141",
        500: "#0b1111",
        600: "#090e0e",
        700: "#070a0a",
        800: "#040707",
        900: "#020303"
      },
      secondaryBlue: {
        100: "#cccfd5",
        200: "#9aa0ab",
        300: "#677082",
        400: "#354158",
        500: "#02112e",
        600: "#020e25",
        700: "#010a1c",
        800: "#010712",
        900: "#000309"
      },
      midNightGreen: {
        100: "#ccdce0",
        200: "#99b9c1",
        300: "#6695a2",
        400: "#337283",
        500: "#004f64",
        600: "#003f50",
        700: "#002f3c",
        800: "#002028",
        900: "#001014"
      },
      eggBlue: {
        100: "#ccf4f3",
        200: "#99e9e7",
        300: "#67dddb",
        400: "#34d2cf",
        500: "#01c7c3",
        600: "#019f9c",
        700: "#017775",
        800: "#00504e",
        900: "#002827"
      },
    },
    extend: {
      gridTemplateRows: {
        "8": "repeat(8, minmax(0, 1fr))",
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0B1111",
          "secondary": "#02112E",
          "accent": "#004F64",
          "neutral": "#01C7C3",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};
