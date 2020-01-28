'use strict';

const event = require('./event');

event.on('readFile', payload => log('readFile', payload));
event.on('writeFile', payload => log('writeFile', payload));

function log(event, payload){
  let time = new Date();
  console.log({event, time, payload});
}