/** @type {import('tailwindcss').Config} */
module.exports =
{
  mode: 'jit',
  content: ["./*.{ejs,html,js,css}", "./**/*.{ejs,html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster", "cursive"]
      },
    },
    screens: {
      'sm': {'min': '0px', 'max': '700px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '701px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1500px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1500px', 'max': '2000px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    // screens:
    // {
    //   '2xl': { 'max': '1535px' },
    //   // => @media (max-width: 1535px) { ... }

    //   'xl': { 'max': '1279px' },
    //   // => @media (max-width: 1279px) { ... }

    //   'lg': { 'max': '1023px' },
    //   // => @media (max-width: 1023px) { ... }

    //   'md': { 'max': '767px' },
    //   // => @media (max-width: 767px) { ... }

    //   'sm': { 'max': '639px' },
    //   // => @media (max-width: 639px) { ... }
    // }
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  },],
}
