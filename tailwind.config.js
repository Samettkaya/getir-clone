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
      fontFamily: theme =>( {
        
      }),
      screens: theme =>({
        's': {'min':'320px'},
        'm': {'min':'375px'},
        'l': {'min':'425px'},
        'tablet': {'min':'768px'},
        'laptop': {'min':'1024px'},
        'laptopl': {'min':'1440px'},
        'xll' : {'max':'1440px'}

      })
      
    },
  },
 
  plugins: [],
}
