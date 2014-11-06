parky
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

## Test

```js
npm test
```
