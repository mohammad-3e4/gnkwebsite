/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    screens: {
      'xs': '440px',   // New Size: Extra Small
      'sm': '640px',   // Small
      'md': '768px',   // Medium
      'lg': '1024px',  // Large
      'xl': '1280px',  // Extra Large
      '2xl': '1536px', // 2X Extra Large
      // Add more sizes as needed
    },
    extend: {
      colors: {
        // ************************************Red Orange

        // orange: "#C5001A",
        // blue:"#002C54"
        // ************************************3rd

        // orange: "#ff4e31",//orange
        // blue:"#004480"//purple
        

        // ************************************2nd

        // orange: "#ff4e31",//orange
        // blue:"#6155B4"//purple


        // ************************************oringal
        orange: "#ff4e31",
        blue:"#002749"
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        marquee2: 'marquee2 45s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    
  },
  plugins: [require('flowbite/plugin')],
}