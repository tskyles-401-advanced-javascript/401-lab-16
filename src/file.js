'use strict';

const util = require('util');
const fs = require('fs');
const EventEmitter = require('event');
let event = new EventEmitter();


let readFilePromise = util.promisify(fs.readFile);

function readFile(file){
  return readFilePromise(file)
    .then(data => {
      data.toString().trim();
      return data;
    })
    .catch(error => {
      event.emit('catch', error);
    });
}