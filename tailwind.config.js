module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'secureblink-blue': '#0056B3',
        'secureblink-dark': '#1A1A1A',
        'secureblink-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
