const path = require('path');
const fs = require('fs-extra');
const axios = require('axios');
const _ = require('lodash');
const async = require('async');
const debug = require('debug')('nuxt:wetu');


async function downloadImage (url, localFile, env) {

  // Make sure the directory exists
  await fs.ensureDir(path.dirname(localFile));

  // axios image download with response type "stream"
  const response = await axios({
    method: 'GET',
    url: url,
    headers: { 'apikey': env.API_KEY },
    responseType: 'stream'
  })

  // pipe the result stream into a file on disc
  response.data.pipe(fs.createWriteStream(localFile))

  // return a promise and resolve when download finishes
  return new Promise((resolve, reject) => {
    response.data.on('end', () => {
      return resolve()
    })

    response.data.on('error', () => {
      return reject()
    })
  })

}

function fetchWetuJSON(env) {
  return new Promise(function(resolve, reject) {
    // Download JSON
    async.waterfall([
      function(callback) {
          axios.get('https://switch.vista.business/v1/microservice/wetu/property/get?ids='+env.WETU_ID+'&lang='+env.WETU_LANG, { headers: { 'apikey': env.API_KEY }})
            .then(res => {
               return callback(null, res);
            })
            .catch(err => {
               return callback(err);
            });
      },
      function (res, callback) {
          // Download Images
         async.eachLimit(res.data.results[0].content.images, 5, function(image, cb) {
           downloadImage('https://switch.vista.business/v1/image/resize?url='+image.url+'&width=1920&height=1080', 'static/images/'+image.url_fragment, env)
             .then(() => {
                cb(null);
             })
             .catch(err => {
                cb(err);
             });
        }, function(err) {
             if (!err) {
               return callback(null, res);
             } else {
               return callback(err);
             }
        });
      },
      function (res, callback) {
          // Download Room Images
         async.eachLimit(res.data.results[0].rooms, 5, function(room, cb) {
           downloadImage('https://switch.vista.business/v1/image/crop?url='+room.images[0].url+'&width=288&height=288&gravity=centre', 'static/images/'+room.images[0].url_fragment, env)
             .then(() => {
                cb(null);
             })
             .catch(err => {
                cb(err);
             });
        }, function(err) {
             if (!err) {
               return callback(null, res);
             } else {
               return callback(err);
             }
        });
      },
      function (res, callback) {
          // Download Activity Images
         async.eachLimit(res.data.results[0].activities, 5, function(activity, cb) {
           downloadImage('https://switch.vista.business/v1/image/crop?url='+activity.images[0].url+'&height=322&gravity=centre', 'static/images/'+activity.images[0].url_fragment, env)
             .then(() => {
                cb(null);
             })
             .catch(err => {
                cb(err);
             });
        }, function(err) {
             if (!err) {
               return callback(null, res);
             } else {
               return callback(err);
             }
        });
      }
   ], function(err, res) {
      if (!err) {
        return resolve(res.data.results[0]);
      } else {
        return reject(err);
      }
   });
 });
}

module.exports = function wetu() {
  const getData = (path, data) => {
    return new Promise((resolve, reject) => {
      try {
        fs.ensureFileSync(path)
        fs.writeJson(path, data, resolve(`${path} Write Successful`) )
      } catch (e) {
        console.error(`${path} Write Failed. ${e}`)
        reject(`${path} Write Failed. ${e}`)  
      }
    })
  }

  // Add hook for build
  this.nuxt.hook('build:before', builder => {
    // Our data from the environment files is available in the
    // builder.nuxt.options object
    var env = builder.nuxt.options.env;
    return new Promise(function(resolve, reject) {
      if (!fs.existsSync('static/data/wetu.json')) {
         // Clean data directory
         fs.emptyDir('static/data')
           debug('Downloading content');

           var wetu = [];

           fetchWetuJSON(env)
             .then(data => {
                wetu.push(getData('static/data/wetu.json', data))
                // Finish when all of them are done
                debug('Download complete')
                return resolve();
            }).catch(err => {
              console.log(console.error(err))
            })
        } else {
           debug('Previous content download found');
           return resolve();
        }
    })
  })
}
