/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#177e84",
        primaryDark: "#0a5a5e",
        primaryLight: "#249fa6",
        secondary: "#fdea43",
        tertiary: "#592a17",
        quaternary: "#a4a4a3",
        dark: "#2f2d2e",
        light: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
