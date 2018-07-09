const debug = require('debug')('nuxt:amp');

/**
  * @function modifyHTML
  * @description Modifies HTML for use with Acccelarated Mobile Pages (AMP)
 */
const modifyHTML = (html) => {
  // Add amp-custom tag to added CSS
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  // Remove every script tag from generated HTML
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  // Add AMP script before </head>
  const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'
  html = html.replace('</head>', ampScript + '</head>')
  // Add AMP boilerplate
  const ampBoilerplate = `<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
    <noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>`;
  html = html.replace('</head>', ampBoilerplate + '</head>')
  // Make it ⚡
  html = html.replace('<html', '<html ⚡');
  return html
}

module.exports = function amp() {
  // Add hook for build
  this.nuxt.hook('generate:page', page => {
     if (page.path.startsWith('/amp/')) {
       debug('Creating AMP page for '+page.path);
       page.html = modifyHTML(page.html);
     }
  })


  this.nuxt.hook('render:route', (url, page, { req, res }) => {
     if (url.startsWith('/amp/')) {
       debug('Creating AMP route for '+page.path);
       page.html = modifyHTML(page.html)
     }
  })
}
