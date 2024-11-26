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
        DEFAULT: "1rem",
        '2xl': '10rem',
      }
    },
    extend: {
      colors: {
        "primary": "#7362FF",
        "accent": "#7362ff",
        // "accent": "#FF6452",
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

