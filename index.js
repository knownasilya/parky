'use strict';

var extend = require('extend');

module.exports = Parky;

function Parky(data, map, throwOnInvalid) {
  if (!(this instanceof Parky) && arguments.length >= 2) {
    var parky = new Parky({
      keyMap: map,
      throwOnInvalid: throwOnInvalid,
      reuseObject: true
    });
    return parky.map(data);
  }

  var options = data;

  this.keyMap = options.keyMap;
  this.throwOnInvalid = options.throwOnInvalid;
  this.reuseObject = options.reuseObject;
}

Parky.prototype.map = function (data, map) {
  if (!data) {
    return;
  }

  var finalMap = this.keyMap;
  var throwOnInvalid = this.throwOnInvalid;
  var result;

  if (finalMap && map) {
    finalMap = extend({}, finalMap, map);
  }
  else if (map) {
    finalMap = map;
  }

  if (this.reuseObject) {
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
