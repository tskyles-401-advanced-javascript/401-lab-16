'use strict';

const readFile = require('./src/file');
const writeFile = require('./src/file');
const event = require('./src/event');

require('./src/file');
require('./src/logger');

let argv = process.argv;
let file = `${__dirname}/src/edit-file/${argv[2]}`;
console.log(file);

readFile(file)
  .then(results => {
    writeFile(results, file);
  })
  .catch(error => event.emit('error', error));
