'use strict';

const fsPromise = require('./src/file');
const event = require('events');

let argv = process.argv;
let file = `${__dirname}/edit-file/${argv[2]}`;

