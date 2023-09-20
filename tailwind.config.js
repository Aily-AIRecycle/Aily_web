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
      screens: {
        mq: { raw: "(max-width: 800px)" },
        web: "1400px",
        mobile: { max: "1400px" },
      },
      boxShadow: {
        myBoxShadow:
          "0px 4px 12px 0px rgba(28, 64, 97, 0.06), 0px 12px 36px 0px rgba(51, 82, 100, 0.1)",
      },
    },
  },
  plugins: [],
};
