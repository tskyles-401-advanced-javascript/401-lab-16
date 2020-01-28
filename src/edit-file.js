'use strict';

const util = require('util');
const fs = require('fs');
const event = require('./event');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

/**
 *
 *
 * @param {*} file
 * @returns data as string
 */
function readFile(file){
  return read(file)
    .then(results => {
      event.emit('readFile', `file has been read`);
      return results.toString().toUpperCase();    
    }).catch(error => event.emit('error', error));  
}
/**
 *
 *
 * @param {*} file
 * @param {*} data
 */
function writeFile(file, data){
  return write(file, data)
    .then(results => {
      event.emit('writeFile', 'Process was successful');
    }).catch(error => event.emit('error', error));
}
/** 
 * @module read/writeFile
*/
module.exports = {readFile, writeFile};



