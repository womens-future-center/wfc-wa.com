module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#e6e7ee',
        offwhite: '#f9f9f9',
        bggray: '#d9d9df',
      },
    },
  },
  plugins: [require('daisyui')],
}
