/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "540px",
        laptop: "1024px",
        desktop: "1280px",
        tv: "1980px",
      },
    },
  },
  plugins: [],
};
