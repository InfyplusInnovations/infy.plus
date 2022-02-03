const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        secondary: [
          "'Josefin Sans', sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        primary: ["'Poppins', sans-serif"],
      },
      backgroundImage: {
        footer:
          "url('https://image.freepik.com/free-vector/blue-halftone-memphis-background-with-yellow-lines-circles-shapes_1017-31954.jpg?w=1380')",
      },
      height: {
        "90vh": "90vh",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
