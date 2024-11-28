/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.06rem",
        '2xl': '8rem',
      }
    },
    extend: {
      colors: {
        "primary": "#7362FF",
        "accent": "#7362FF0D",
        "dark": "#000000CC",
        "background": "#F4F7FF",
      },
      fontFamily: {
        ppMori: ['PP Mori', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

