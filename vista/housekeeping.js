const path = require('path');
const fs = require('fs-extra');
const async = require('async');
const debug = require('debug')('nuxt:wetu');


module.exports = function wetu() {
  // Add hook for build
  this.nuxt.hook('generate:done', builder => {
    // Our data from the environment files is available in the
    // builder.nuxt.options object
    var env = builder.nuxt.options.env;
    return new Promise(function(resolve, reject) {
      if (fs.existsSync('static/data/wetu.json')) {
         // Clean data directory
         fs.removeSync('static/data/wetu.json')
           debug('Wetu content file removed');
           return resolve()
      } else {
           return resolve();
      }
    })
  })
}
