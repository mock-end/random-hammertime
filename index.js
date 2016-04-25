'use strict';

var randomDatetime = require('random-datetime');

module.exports = function (options) {
  return (randomDatetime(options)).getTime();
};
