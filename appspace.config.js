const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: '/js/jquery-3.3.1.js', defer: true, async: true},
      { src: 'styles/bootstrap4/popper.min.js', body: true },
      { src: 'styles/bootstrap4/bootstrap.min.js', body: true },
      { src: 'plugins/OwlCarousel2-2.2.1/owl.carousel.js', body: true },
    ],
    link: [
      { rel: 'stylesheet', href: 'styles/bootstrap4/bootstrap.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'plugins/font-awesome-4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'plugins/OwlCarousel2-2.2.1/owl.carousel.css' },
      { rel: 'stylesheet', href: 'plugins/OwlCarousel2-2.2.1/owl.theme.default.css' },
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          }
        ),
        config.externals = {
        }
         
      }
    },
    /*
    ** Externalize CSS
    */
  /*
   extractCSS: true,
    analyze: {
      analyzerMode: 'static'
   },
*/
   plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        '_': 'lodash',
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  generate: {
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: false,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: false,
      trimCustomFragments: true,
      useShortDoctype: true
    },
  },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    ['vue-warehouse/nuxt',
      {
        vuex: true,
        plugins: [
          'store/plugins/expire',
          'store/plugins/defaults'
        ],
        storages: [
          'store/storages/localStorage',
          'store/storages/cookieStorage'
        ]
      }
    ],
    'nuxt-fontawesome',
    'nuxt-material-design-icons',
  ],
  fontawesome: {
    imports: [
        {
          set: '@fortawesome/fontawesome-free-solid'
        },
    ],
  },
  plugins: [
    { src: '~/plugins/webfont.js', ssr: false},
  ],
  css: [
    'static/styles/bootstrap4/bootstrap.min.css',
  ],
  builder: {
    optimization: {
      images: {
         paths: [
           'dist/images'
         ],
         processors: {
           png: {optimizationLevel: 3, bitDepthReduction: true, colorTypeReduction: true, paletteReduction: true},
           pngToJpeg: {quality: 75},
           jpeg: {quality: 'medium', min: 40, max: 75, method: 'smallfry'},
           jpegTranscode: {progressive: true},
           gif: {optimizationLevel: 3},
           svg: {},
           webp: {quality: 75, alphaQuality: 100, method: 6},
           apimo: {quality: 85}, 
        }
      },
      css: {
         paths: [
            'dist/styles'
         ],
         processors: {
           cleancss: {level: 2, inline: ['all'], compatibility: '*'},
         }
      },
      js: {
        paths: [
            'dist/js',
            'dist/_nuxt',
        ],
        processors: {
           js: {
	        mangle: true,
	        compress: {
		  sequences: true,
		  dead_code: true,
		  conditionals: true,
		  booleans: true,
		  unused: true,
		  if_return: true,
		  join_vars: true,
		  drop_console: true
	       }
           }
        }
      },
      html: {
        paths: [
           'dist',
        ],
        processors: {
          minify: {
            removeAttributeQuotes: true, 
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            removeComments: true,
         }
       }
     }
    }
  },
  deploy: {
  }
}
