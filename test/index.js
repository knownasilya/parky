'use strict';

var test = require('tape');
var app = require('../');

test('works', function (t) {
  var result = app({
    username: 'bob',
    email: 'bob@gmail.com'
  }, {
    username: 'user_name'
  });

  t.ok(result.user_name, 'has property');
  t.equals(result.user_name, 'bob', 'property has same value');
});
