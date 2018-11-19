'use strict';

require('dotenv').config();

const queryWind = require('./queryWind.js')

exports.http = (request, response) => {

  response.status(200).send('Hello World!');
};

exports.event = (event, callback) => {
  callback();
};
queryWind()
