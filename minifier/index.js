const minifyImg = require('./src/minifyimg');
const minifyJS  = require('./src/minifyjs');

minifyImg('../dist')
    .then(() => {
        minifyJS('../../dist');
    })
    .catch(e => console.log(e));


