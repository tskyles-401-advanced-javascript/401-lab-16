'use strict';

const util = require('util');
const fs = require('fs');
const event = require('./event');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

function readFile(file){
  return read(file)
    .then(results => {
      event.emit('read', `Read file`);
      return results.toString().toUpperCase();    
    }).catch(error => event.emit('error', error));  
}
function writeFile(data, file){
  const buffer = Buffer.from(data);
  console.log(buffer);
  return write(buffer, file)
    .then(results => {
      event.emit('success', 'Process was successful');
    });
}


module.exports = readFile, writeFile;



