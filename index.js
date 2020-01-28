'use strict';

const {readFile} = require('./src/edit-file');
const {writeFile} = require('./src/edit-file');
const event = require('./src/event');

require('./src/logger');

let argv = process.argv;
let file = `${__dirname}/src/${argv[2]}`;
/**
 *  reads and writes files
 *  @function editFile
 */
const editFile = () => {
  readFile(file)
    .then(results => {
      console.log(results);
      writeFile(file, results);
    })
    .catch(error => event.emit('error', error));
};

editFile();

