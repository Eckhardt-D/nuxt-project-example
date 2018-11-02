const UglifyJS = require('uglify-js');
const fs       = require('fs');
const join     = require('path').join;

module.exports = function(start) {
  const entryPoint = join(__dirname, start);
  let twirlTimer;
  
  /* Parse the directories recursively */
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const getDirectories = source => fs.readdirSync(source).map(name => join(source, name)).filter(isDirectory);
  const getDirectoriesRecursive = source => [source,
    ...getDirectories(source).map(getDirectoriesRecursive).reduce((a, b) => a.concat(b), []) /* fancy stuff */
  ];

  /* async steps to read, edit and write JS files with UglifyJS*/
  (async () => {
    let file_endpoints = [];
    let flat_array = [];

    /* Get all directories recursively */
    const all_directories = getDirectoriesRecursive(entryPoint);

    /* Loop directories to map their path and filter for javascript */
    await all_directories.forEach(currentDir => {
      const allFiles = fs.readdirSync(currentDir).filter(file => file.match(/.js/)).map(item => (currentDir +'/'+item));
      file_endpoints.push(allFiles);
      flat_array = [].concat(...file_endpoints);
    });

    /* Do the read and write process */
    await flat_array.forEach((file, index) => {
      const oldcode = fs.readFileSync(file, 'utf8')
      const newcode = UglifyJS.minify(oldcode);
      
      if (newcode.code) {
        fs.writeFileSync(file, newcode.code, 'utf8');

        /* Print the progress */
        console.log('Compressing JavaScript...'+(((index+1)/flat_array.length)*100).toFixed(0)+'%');
      }
    })
    // Finished
    process.stdout.write('Completed!\n')
  })();
}