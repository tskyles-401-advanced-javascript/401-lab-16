'use strict';

const event = require('./event');

// still need event.on

function log(event, payload){
  let time = new Date();
  console.log({event, time, payload});
}