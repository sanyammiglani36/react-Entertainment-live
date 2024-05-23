/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Zilla Slab"]
      },
      colors:{
        mininav: "#dfdfde",
        navbackground: "#9a1212",
        polltext: "#e0e5ca",
        pollrow: "#6f0101",
        newscap: "#430707"
       
      }
      
    },
  },
  plugins: [],
}