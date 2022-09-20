/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/_components/**/*.{js,ts,jsx,tsx}",
    "./src/_layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    darkTheme: "lofi",
    themes: ["lofi", "black"],
  },
}
