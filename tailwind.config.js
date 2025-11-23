/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // USD Primary Colors
        'usd-founders': '#003b70',      // Founders Blue
        'usd-immaculata': '#0074c8',    // Immaculata Blue
        'usd-torero': '#75bee9',        // Torero Blue
        'usd-white': '#ffffff',         // Alcala White
        
        // USD Accent Colors
        'usd-purple': '#5a2b81',        // PMS 7680
        'usd-teal': '#00a499',          // PMS 7711 (Green accent - focus)
        'usd-brown': '#a17a68',         // PMS 4725
        'usd-gray': '#646469',          // PMS Cool Gray 8
        'usd-red': '#92002d',           // PMS 202
        'usd-orange': '#c25219',        // PMS 167
        'usd-yellow': '#eeaa2b',        // PMS 2007
        'usd-green': '#728c1f',         // PMS 2306
        
        // Green accent colors (using USD Teal as primary)
        primary: {
          50: '#e6f7f6',
          100: '#b3ebe8',
          200: '#80dfda',
          300: '#4dd3cc',
          400: '#1ac7be',
          500: '#00a499',  // USD Teal
          600: '#00837a',
          700: '#00625b',
          800: '#00413c',
          900: '#00201d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
