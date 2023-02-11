/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
	"./src/**/*.{vue,js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'd-background' : '#1C1E32',
      'd-surface' : '#11111F',
      'd-primary' : '#EC265E',
      'd-variant-0' : '#B11954',
      'd-variant-1' : '#4A0A23',
      'd-secondary' : '#26ECB4',
      'd-warning' : '#ECB426',
      'd-soft-white' : '#FEFEFE',
      'd-muted' : '#94A3B8',

      'd-theme-from': '#1C1E31',
      'd-theme-via': '#4A0A23',
      'd-theme-to': '#11111F',

      'l-soft-black' : '#F3F9FF',

      'l-theme-from': '#C2D7EB',
      'l-theme-to': '#BE7D90'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1900px'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',
}
