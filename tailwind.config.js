/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('/src/assets/Loginbackground.jpg')",
        'authside-bg': "url('/src/assets/authimages.png')",
      },
    },
  },
  plugins: [],
}
