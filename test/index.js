'use strict';

var test = require('tape');
var App = require('../lib');

test('valid inputs make valid output', function (t) {
  var result = App({
    username: 'bob',
    email: 'bob@gmail.com'
  }, {
    username: 'user_name'
  });

  t.ok(result.user_name, 'has property');
  t.equals(result.user_name, 'bob', 'property has same value');
  t.end();
});

test('same mapping as key', function (t) {
  var user = {
    username: 'bob',
    email: 'bob@gmail.com'
  };
  var result = App(user, {
    username: 'username'
  });

  t.same(user, result, 'same result');
  t.equal(user, result, 'same object');
  t.end();
});

test('invalid mappings - empty string', function (t) {
  var user = {
    username: 'bob',
    email: 'bob@gmail.com',
    name: 'Bob'
  };
  var result = App(user, {
    username: '',
    email: [],
    name: undefined
  });

  t.same(user, result, 'same result');
  t.equal(user, result, 'same object');
  t.end();
});

test('invalid mappings throw', function (t) {
  var user = {
    username: 'bob',
    email: 'bob@gmail.com'
  };
  var mapping = {
    username: '',
  };

  t.throws(function () {
    App(user, mapping, true);
  }, /Invalid key mapping/, 'Throws exception if boolean set');
  t.end();
});

test('reverseMap works', function (t) {
  var tester = {
    root_url: 'blah',
    user_email: 'hello@blah'
  };
  var app = new App({
    keyMap: {
      baseUrl: 'root_url',
      email: 'user_email'
    }
  });

  t.same(app.reverseMap(tester),  {
    baseUrl: 'blah',
    email: 'hello@blah'
  }, 'reverse keys/values');
  t.end();
});
