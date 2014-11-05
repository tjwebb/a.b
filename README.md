# a.b

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]

## Install
```sh
$ npm install a.b --save
```

## Usage

```js
var _ = require('lodash');
_.mixin(require('a.b'));

var obj = {
  foo: {
    bar: {
      x: {
        3.14
      }
    }
  }
};

var x = _(obj).dot('foo.bar.x');  // x = 3.14
var y = _(obj).dot('foo.bar.y');  // y = undefined
var z = _(obj).dot('a.b.c.z');    // z = undefined
```

[npm-image]: https://img.shields.io/npm/v/sails-auth.svg?style=flat
[npm-url]: https://npmjs.org/package/sails-auth
[travis-image]: https://img.shields.io/travis/tjwebb/sails-auth.svg?style=flat
[travis-url]: https://travis-ci.org/tjwebb/sails-auth
