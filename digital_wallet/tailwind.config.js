/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wallet: {
          /** Matches Login / Register navy */
          primary: "#062447",
          navy: "#1a1a40",
          mid: "#0d3a66",
          /** Page backdrop sky — same family as auth screens */
          sky: "#bdefff",
        },
      },
      boxShadow: {
        wallet:
          "0 24px 70px rgba(15, 23, 42, 0.18), 0 8px 24px rgba(6, 36, 71, 0.12)",
      },
    },
  },
  plugins: [],
};
