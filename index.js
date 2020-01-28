'use strict';

const {readFile} = require('./src/file');
const {writeFile} = require('./src/file');
const event = require('./src/event');

require('./src/logger');

let argv = process.argv;
let file = `${__dirname}/src/${argv[2]}`;
console.log('path', file);

readFile(file)
  .then(results => {
    console.log(results);
    writeFile(file, results);
  })
  .catch(error => event.emit('error', error));

