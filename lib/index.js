'use strict';

var reverse = require('./reverse');
var map = require('./map');

module.exports = Parky;

function Parky(data, keyMap, throwOnInvalid) {
  if (!(this instanceof Parky) && arguments.length >= 2) {
    var parky = new Parky({
      keyMap: keyMap,
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

Parky.prototype.map = function (data, keyMap) {
  if (!data) {
    return;
  }

  return map(data, keyMap, {
    keyMap: this.keyMap,
    throwOnInvalid: this.throwOnInvalid,
    reuseObject: this.reuseObject
  });
};

Parky.prototype.reverseMap = function (data, keyMap) {
  debugger;
  var reversedMap = reverse(this.keyMap);

  return map(data, keyMap, {
    keyMap: reversedMap,
    throwOnInvalid: this.throwOnInvalid,
    reuseObject: this.reuseObject
  });
};
