'use strict';

const util = require('util');
const fs = require('fs');
const event = require('./event');

const read = util.promisify(fs.readFile);
// const write = util.promisify(fs.writeFile);

async function readFile(file){
  try{
    let data = read(file);
    let obj = await data.toString();
    event.emit('readFile', obj);
    return obj;
  }
  catch(error){
    event.emit('Error', error);
  }
}

async function writeFile(file, string){
  try{
    const upString = string.toUpperCase();
    fs.writeFile(file, upString.toString(), (error => {
      if(error){event.emit('Error', error);}
      event.emit('writeFile', 'successfully wrote file');
    }));
  }
  catch(error){
    event.emit('Error', error);
  }
}

module.exports = {readFile, writeFile};



