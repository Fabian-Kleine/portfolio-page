/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'techBadge': "0 0 35px -3px rgb(var(--dynamic-shadow-color))"
      },
      backgroundColor: {
        'techBadge': "rgba(var(--dynamic-color), 0.6)"
      },
      borderColor: {
        'techBadge': "rgb(var(--dynamic-color))"
      }
    },
    screens: {
      'xs': "530px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

