'use strict';

var extend = require('extend');

module.exports = function (data, map, options) {
  options = options || {};

  var finalMap = options.keyMap;
  var throwOnInvalid = options.throwOnInvalid;
  var result;

  if (finalMap && map) {
    finalMap = extend({}, finalMap, map);
  }
  else if (map) {
    finalMap = map;
  }

  if (options.reuseObject) {
    result = data;
  }
  else {
    result = extend(true, {}, data);
  }

  if (finalMap && typeof finalMap === 'object') {
    result = Object.keys(finalMap).reduce(function (original, key) {
      var newKey = finalMap[key];

      if (throwOnInvalid && !isValidKey(newKey)) {
        throw new Error('Invalid key mapping specified');
      }

      if (newKey !== key && isValidKey(newKey) && original.hasOwnProperty(key)) {
        original[newKey] = original[key];
        delete original[key];
      }

      return original
    }, result);
  }

  return result;
};

function isValidKey(key) {
  return key && typeof key === 'string' || typeof key === 'number';
}
