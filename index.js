'use strict';

module.exports = function (data, mapping) {
  if (mapping && typeof mapping === 'object') {
    data = Object.keys(mapping).reduce(function (original, key) {
      var newKey;

      if (original.hasOwnProperty(key)) {
        newKey = mapping[key];

        original[newKey] = original[key];
        delete original[key];
      }

      return original
    }, data);
  }

  return data;
};
