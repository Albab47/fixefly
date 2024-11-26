/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7362FF",
        "accent": "#FF6452",
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

