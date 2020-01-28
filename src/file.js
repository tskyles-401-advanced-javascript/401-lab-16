'use strict';

const util = require('util');
const fs = require('fs');
const event = require('./event');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

let file = `${__dirname}/edit-file/file.json`;

function readFile(file){
  return read(file)
    .then(results => {
      results.toString('utf8').trim();
      event.emit('readFile', results);
    })
    .catch(error => event.emit('handleError', error));
}

function writeFile(file, text){
  let contents = Buffer.from(typeof text === 'object'? JSON.stringify(text): text);
  return write(file, contents)
    .then(success => {
      event.emit('writeFile', success);
    })
    .catch(error => event.emit('handleError', error));
//   return readFile(file)
//     .then(data => {
//       let object = JSON.parse(data);
//       object['name'] = 'Bob Bobson';
//       object['age'] = 59;
//       return writeFilePromise(file, JSON.stringify(object, null))
//         .then(results => {
//           console.log(results);
//         })
//         .catch(error => event.emit('catch', error));
//     })
//     .catch(error => event.emit('catch', error));
}

modules.exports = {readFile, writeFile};

