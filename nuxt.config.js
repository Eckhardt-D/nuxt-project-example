const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
 head: {
  title:"FP du Toit | Transport | Distribution | Logistic | Courier | Namibia",
  meta: [
    {name: 'description', content: 'FP du Toit in Namibia and South Africa provides you with a full range of Transport, Distribution, Courier and Logistics Services with 50 years of experience in domestic, regional and international forwarding. Contact our specialists now.'},
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@publisher_handle" },
    { name: "twitter:title", content: "FP du Toit | Transport | Distribution | Logistic | Courier | Namibia" },
    { name: "twitter:description", content: "FP du Toit in Namibia and South Africa provides you with a full range of Transport, Distribution, Courier and Logistics Services with 50 years of experience in domestic, regional and international forwarding. Contact our specialists now." },
    { name: "twitter:image", content: "https://fpdt.na/media/main-slider/5.jpg" },
    { property: "og:title", content: "FP du Toit | Transport | Distribution | Logistic | Courier | Namibia" },
    { property: "og:type", content: "article" },
    { property: "og:url", content: "https://fpdt.na/" },
    { property: "og:image", content: "https://fpdt.na/media/main-slider/5.jpg" },
    { property: "og:description", content: "FP du Toit in Namibia and South Africa provides you with a full range of Transport, Distribution, Courier and Logistics Services with 50 years of experience in domestic, regional and international forwarding. Contact our specialists now."  },
    { property: "og:site_name", content: "FP du Toit Transport" }
  ],
  script: [
    { src: '/js/jquery-1.11.3.min.js', body: true},
    { src: '/styles/bootstrap4/popper.min.js', body: true },
    { src: '/styles/bootstrap4/bootstrap.min.js', body: true },
    { src: '/plugins/OwlCarousel2-2.2.1/owl.carousel.js', body: true },
    { src: '/plugins/js/jquery-ui.min.js', body: true },
    { src: '/js/jquery.lazy.min.js', body: true },
    { src: '/plugins/js/modernizr.custom.js', body: true },
    { src: '/plugins/js/waypoints.min.js', body: true},
    { src: '/plugins/js/jquery.easypiechart.min.js', body: true},
    { src: '/plugins/js/classie.js', body: true },
    { type: 'text/javascript', src: '/styles/assets/isotope/jquery.isotope.min.js', body: true },
    { src: '/plugins/js/theme.js', body: true}
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: '/plugins/font-awesome-4.7.0/css/font-awesome.min.css' },
    { rel: 'stylesheet', href: '/plugins/OwlCarousel2-2.2.1/owl.carousel.css' },
    { rel: 'stylesheet', href: '/plugins/OwlCarousel2-2.2.1/owl.theme.css' },
    { rel: 'stylesheet', href: '/plugins/OwlCarousel2-2.2.1/owl.theme.default.css' },
    { rel: 'stylesheet', href: '/styles/css/master.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/styles/assets/switcher/css/color1.css'},
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
  ],
  vista: {
    credentials: {
      vistaId: 'xxxxxxxxxxxxxx',
      secretKey: 'xxxxxxxxxxxxx',
      journeyKey: 'xxxxxxxxxxxxxx'
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
      config.plugins.concat
        (new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          'window.jQuery': 'jquery',
        })
      )
    },
    html: { 
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  },
  generate: {
    fallback: true
  }
}
