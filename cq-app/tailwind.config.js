/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
       muktah: ["Muktah", "sans-serif"]
     },
     colors: {
       bgray: "#7796CB",
       nblue: "#150578",
       mblue: "#0E0E52",
       snow: "#FFFCFF",
       ablue: "#DBE4EE",
       dark: "#0C0B0B",
     }

    },
  },
  plugins: [],
}
