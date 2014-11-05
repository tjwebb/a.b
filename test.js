var assert = require('assert');
var _ = require('lodash');

describe('a.b', function () {
  before(function () {
    _.mixin(require('./'));
  });
  describe('#dot', function () {
    var deepObject = { a: { b: { c: 1 } } };
    it('should correctly search deep path (leaf)', function () {
      assert.equal(_.dot(deepObject, 'a.b.c'), 1);
    });
    it('should correctly search deep path (internal)', function () {
      assert.equal(_.dot(deepObject, 'a.b').c, 1);
    });
    it('should return undefined on un-queryable object', function () {
      assert(_.isUndefined(_.dot(undefined, 'a.b')));
      assert(_.isUndefined(_.dot('hello', 'a.b')));
    });
    it('should return undefined on wrong dotpath', function () {
      assert(_.isUndefined(_.dot(deepObject, 'x.y')));
      assert(_.isUndefined(_.dot(deepObject, new Date())));
    });
  });
});
