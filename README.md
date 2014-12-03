parky [![Build Status][travis-badge]][travis-badge-url]
=====

Re-mapping object keys to new names

[![NPM][npm-badge]][npm-badge-url]

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

### Constructor Usage

```js
var user = { username: 'dragonx', email: 'd@x.com' };
var parky = new Parky({
  keyMap: {
    username: 'user_name'
  },
  reuseObject: true,
  throwOnInvalid: true
});

var result = parky.map(user);
// { user_name: '..', email: '..' }

var alternate = parky.map(user, {
  email: 'user_email'
});
// { user_name: '..', user_email: '..' }
```

## Methods

### `map`

```js
parky.map(data, map)
```

### `reverseMap`

```js
parky.reverseMap(data, reverseMap)
```

The second argument, `reverseMap`, is optional if you have a `keyMap` specified in the constructor.
The reverseMap should be defined in reverse, so key = current property name, value = desired property name,
while the `keyMap` is defined normally, and is reversed for you. These two are merged if they are both defined.

#### Example

```js
var parky = new Parky({
  keyMap: {
    lastModified: 'last_modified'
  }
});
var postRaw = {
  title: 'Hello',
  last_modified: 'today'
};

var normalized = parky.reverseMap(postRaw);

//  value of `normalized`
//  
//  {
//    title: 'Hello',
//    lastModified: 'today'
//  }


var raw = parky.map(normalized);

//  value of `raw`
//
//  {
//    title: 'Hello',
//    last_modified: 'today'
//  }
```

## Test

```js
npm test
```

[travis-badge-url]: https://travis-ci.org/knownasilya/parky
[travis-badge]: https://travis-ci.org/knownasilya/parky.svg?branch=master
[npm-badge-url]: https://nodei.co/npm/parky/
[npm-badge]: https://nodei.co/npm/parky.png?downloads=true&stars=true
