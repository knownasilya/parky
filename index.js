'use strict';

module.exports = function (data, mapping, throwOnInvalid) {
  if (mapping && typeof mapping === 'object') {
    data = Object.keys(mapping).reduce(function (original, key) {
      var newKey = mapping[key];

      if (throwOnInvalid && !isValidKey(newKey)) {
        throw new Error('Invalid key mapping specified');
      }
  
      if (newKey !== key && isValidKey(newKey) && original.hasOwnProperty(key)) {
        original[newKey] = original[key];
        delete original[key];
      }

      return original
    }, data);
  }

  return data;
};

function isValidKey(key) {
  return key && typeof key === 'string' || typeof key === 'number';
}
