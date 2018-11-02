const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
var ncp = require('ncp').ncp;
const fse = require('fs-extra');
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');
const OUTPUT_DIR = join(__dirname, './dist');

module.exports = (inputDir) => {
  return new Promise((resolve, reject) => {
    /**
     * List of input directories
     */
    const INPUT_DIRS = [
      inputDir,
    ];

    /* Parse the directories recursively */
    const isDirectory = source => lstatSync(source).isDirectory();
    const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory);
    const getDirectoriesRecursive = source => [source,
      ...getDirectories(source).map(getDirectoriesRecursive).reduce((a, b) => a.concat(b), []) /* fancy stuff */
    ];

    /*
      Start the compression 
    */
    try {
      console.log('Beginning image compression...');

      (async () => {
        let imageDirs = [];

        INPUT_DIRS.map(
          dirname => (imageDirs = imageDirs.concat(getDirectoriesRecursive(dirname)))
        );

        /**
         * Loop through all subfolders, and recursively run imagemin,
         * outputting to the same subfolders inside OUTPUT_DIR folder
         */
        for (let i in imageDirs) {
          const dir = imageDirs[i];

          await imagemin([`${dir}/*.{jpg,png,svg,gif}`], join(OUTPUT_DIR, dir), {
            plugins: [
              imageminJpegtran(),
              imageminPngquant({
                quality: '65-80'
              }),
            ]
          });

          // print out the progress   
          console.log(`Compressing images...${(((+i + 1) / imageDirs.length) * 100).toFixed(0)}%`);
        }

        // Overwrite the source with new images
        fse.copy(INPUT_DIRS[0], OUTPUT_DIR, err => {
          err ? reject(`ERROR REPLACING WITH COMPRESSED: ${err}`) : resolve('Succesfuly copied');
        })
      })();
      
    } catch (e) {
      return reject(e);
    }
  })
}