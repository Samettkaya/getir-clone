module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme =>({
        'brand-color':'#4c33398',
        'primary-brand-color':'#5d3ebc',
        'second-brand-color':'#7849f7',
      })
    },
  },
  plugins: [],
}
