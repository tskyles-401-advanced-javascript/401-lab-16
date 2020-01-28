'use strict';

module.exports = exports = {};

exports.readFile = async (file, cb) => {
  try{
    if(file.match(/bad/i)){
      cb('Invalid File');
    }
    else{
      cb(undefined, new Buffer('File Contents'));
    }
  }
  catch(error){
    {throw error;}
  }
};

exports.writeFile = async (data, cb) => {
  if(!data){
    cb('no data');
  }
  else{
    cb(undefined, JSON.stringify(data));
  }
};