/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        vert:"#01CC87",
        rouge:"#EE4433",
        bleu:"#1E37DB",
        gris:"#E8E8E8",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      }
    },
  },
  plugins: [],
};
