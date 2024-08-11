/** @type {import('tailwindcss').Config} */
export default {
  // tailwind.config.js
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
     extend: {
       keyframes: {
         'rgb-border': {
           '0%': { borderColor: 'rgb(255, 0, 0)' },
           '33%': { borderColor: 'rgb(0, 255, 0)' },
           '66%': { borderColor: 'rgb(0, 0, 255)' },
           '100%': { borderColor: 'rgb(255, 0, 0)' },
         },
         darkToLight: {
           '0%, 100%': { filter: 'brightness(0.5)' }, // dark
           '50%': { filter: 'brightness(1)' }, // light
         },
       },
       animation: {
         'rgb-border': 'rgb-border 3s linear infinite',
         'darkToLight': 'darkToLight 2s ease-in-out infinite',
       },
     },
   },
   plugins: [],
 };