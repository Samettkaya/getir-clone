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
      }),
      backgroundImage: theme => ({
        'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)'
      }),
    },
  },
  plugins: [],
}
