const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
 head: {
  title:"FP Du Toit",
  meta: [
    {name: 'Description', content: 'Driven to deliver'}
  ],
  script: [
    { src: './js/jquery-1.11.3.min.js', body: true},
    { src: './styles/bootstrap4/popper.min.js', body: true },
    { src: './styles/bootstrap4/bootstrap.min.js', body: true },
    { src: './plugins/OwlCarousel2-2.2.1/owl.carousel.js', body: true },
    { src: './plugins/js/jquery-ui.min.js', body: true },
    { src: './js/jquery.lazy.min.js', body: true },
    { src: './plugins/js/modernizr.custom.js', body: true },
    { src: './plugins/easypiechart/jquery.easypiechart.min.js', body: true},
    { src: './plugins/js/waypoints.min.js', body: true},
    { src: './plugins/js/jquery.easypiechart.min.js', body: true},
    { src: './plugins/js/classie.js', body: true },
    { type: 'text/javascript', src: './styles/assets/isotope/jquery.isotope.min.js', body: true },
    { src: './plugins/js/jquery.smooth-scroll.js', body: true },
    { src: './plugins/js/wow.min.js', body: true },
    { src: './plugins/js/smoothscroll.min.js', body: true },
    { src: './plugins/js/theme.js', body: true}
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
    { rel: 'stylesheet', href: './plugins/font-awesome-4.7.0/css/font-awesome.min.css' },
    { rel: 'stylesheet', href: './plugins/OwlCarousel2-2.2.1/owl.carousel.css' },
    { rel: 'stylesheet', href: './plugins/OwlCarousel2-2.2.1/owl.theme.css' },
    { rel: 'stylesheet', href: './plugins/OwlCarousel2-2.2.1/owl.theme.default.css' },
    { rel: 'stylesheet', href: './styles/css/master.css' },
    { rel: 'stylesheet', type: 'text/css', href: './styles/assets/switcher/css/color1.css'},
  ],
  __dangerouslyDisableSanitizers: ['script']
},

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '~/static/styles/css/master.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/webfont.js', ssr: false},
    { src: '~/plugins/firebase.js', ssr: false},
    { src: '~/plugins/google-maps.js', ssr: false},
    { src: '~/plugins/VueFacebookPage.js', ssr: false}
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@rainmakerdigital/nuxt-vista-sdk'
  ],
  vista: {
    credentials: {
      vistaId: "5cee1176-348d-4cf3-8417-ed031ea25d4e",
      secretKey: "d1DlWSQwzBGlezTy4rQSL9QpplI47iIU",
      journeyKey: "af64-cf7b-a40b-05db-bff2-2452-4741-e1c4"
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      plugins: [
        new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          'window.jQuery': 'jquery',
        })
      ]
    }
  },
 mode: 'spa',
}
