'use strict';

module.exports = function (map) {
  var result = {};

  Object.keys(map).forEach(function (key) {
    result[map[key]] = key;
  });

  return result;
};
