parky [![Build Status][travis-badge]][travis-badge-url]
=====

Re-mapping object keys to new names

## Usage

Install with `npm install --save parky`.

```js
var parky = require('parky');
var user = {
  username: 'bob',
  email: 'bob@gmail.com'
};
var result = parky(user, {
  username: 'user_name'
});

console.log(result);
// { user_name: 'bob', email: 'bob@gmail.com' }
```

You can optionally pass a third parameter, a boolean, specifying
if you want it to throw an error if a mapping is invalid. Otherwise, the
default behavior is to ignore invalid key mappings.

```js
parky(user, { contactName: undefined }, true);
// Throws an error
```

## Test

```js
npm test
```

[travis-badge-url]: https://travis-ci.org/knownasilya/parky
[travis-badge]: https://travis-ci.org/knownasilya/parky.svg?branch=master
