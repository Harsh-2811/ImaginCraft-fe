/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('/src/assets/Loginbackground.jpg')",
        'authside-bg': "url('/src/assets/authimages.png')",
      },
      colors: {
        'light-orange': 'rgba(241, 110, 34, 0.05)',
        'shadow-color': 'rgba(0, 0, 0, 0.06)',
        'blue-bg': 'rgba(0, 71, 122, 1)',
        'light-sky-bg': 'rgba(0, 174, 184, 0.1)',
      },
    },
  },
  plugins: [],
}
